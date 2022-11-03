import { JsonValue } from "../../generated/Main";

let api: null | unknown = null;

const endpoint = "https://staging.cambiatus.io";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
const rpc = new eosjs_jsonrpc.JsonRpc(endpoint);

const getPrivateKey = (): string | null => {
  return localStorage.getItem("privateKey");
};

const login = (privateKey: string) => {
  // We shouldn't use the default JsSignatureProvider in production!!
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const signatureProvider = new eosjs_jssig.JsSignatureProvider([privateKey]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  api = new eosjs_api.Api({ rpc, signatureProvider });

  // We shouldn't do this in production!!
  localStorage.setItem("privateKey", privateKey);
};

const logout = () => {
  api = null;

  localStorage.removeItem("privateKey");
};

const transact = (
  { actions }: { actions: JsonValue },
  options: {
    blocksBehind: number;
    expireSeconds: number;
  }
): Promise<void> => {
  if (api === null) {
    throw new Error("Api not initialized. Use `login` first");
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return api.transact({ actions }, options);
};

export const eos = {
  login,
  logout,
  getPrivateKey,
  transact,
};
