import { StateUnsubscribeFn, Wallet } from "eos-transit/lib";

const connectWallet = async (wallet: Wallet): Promise<boolean> => {
  try {
    await wallet.connect();
    await wallet.login();
  } catch (err) {
    return false;
  }

  return true;
};

const disconnectWallet = async (
  wallet: Wallet,
  unsubscribeFn: StateUnsubscribeFn | null
) => {
  await wallet.disconnect();
  await wallet.logout();

  if (unsubscribeFn !== null) {
    unsubscribeFn();
  }
};

export const eos = {
  wallet: {
    connect: connectWallet,
    disconnect: disconnectWallet,
  },
};
