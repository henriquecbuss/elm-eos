import { StateUnsubscribeFn, Wallet } from 'eos-transit/lib'
import { JsonValue } from 'generated/Main'
import { Buffer } from 'buffer'

window.Buffer = Buffer

const performTransaction = async (
  wallet: Wallet,
  action: JsonValue
): Promise<{ success: boolean; actionName: string }> => {
  const { auth } = wallet
  if (auth === undefined) {
    throw new Error('Wallet is not connected or authorized')
  }

  if (typeof action !== 'object' || action === null || Array.isArray(action)) {
    throw new Error('Action is not an object')
  }

  if (
    'account' in action === false ||
    'name' in action === false ||
    typeof action.name !== 'string' ||
    'data' in action === false
  ) {
    throw new Error('Action is missing account or name')
  }

  const authorizedAction = {
    authorization: [
      {
        actor: auth.accountName,
        permission: auth.permission,
      },
    ],
    account: action.account,
    name: action.name,
    data: action.data,
  }

  try {
    await wallet.eosApi.transact(
      {
        actions: [authorizedAction],
      },
      {
        sign: true,
        broadcast: true,
        expireSeconds: 60,
        blocksBehind: 3,
      }
    )

    return { success: true, actionName: action.name }
  } catch {
    return { success: false, actionName: action.name }
  }
}

const connectWallet = async (wallet: Wallet): Promise<boolean> => {
  try {
    await wallet.connect()
    await wallet.login()
  } catch (err) {
    return false
  }

  return true
}

const disconnectWallet = async (
  wallet: Wallet,
  unsubscribeFn: StateUnsubscribeFn | null
) => {
  await wallet.disconnect()
  await wallet.logout()

  if (unsubscribeFn !== null) {
    unsubscribeFn()
  }
}

export const eos = {
  wallet: {
    connect: connectWallet,
    disconnect: disconnectWallet,
  },
  transaction: {
    perform: performTransaction,
  },
}
