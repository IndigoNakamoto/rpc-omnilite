import { RESTClient, RESTIniOptions } from "./rest";

export type FromAddress = { fromaddress: string };
export type ToAddress = { toaddress: string };
export type PropertyId = { propertyid: number };
export type Address = { address?: string };
export type Addresses = { addresses: object };
export type SendParams = {
  fromaddress: string;
  toaddress: string;
  propertyid: number;
  amount: string;
  redeemaddress?: string;
  referenceamount?: string;
};
export type OmniGetBalanceParams = { address: string; propertyid: string };
export type OmniListTransactionsParams = {
  txid?: string;
  count?: number;
  skip?: number;
  startblock?: number;
  endblock?: number;
};
export type ListBlockTransactionsParams = { index: number };
export type ListBlocksTransactionsParams = {
  firstblock: number;
  lastblock: number;
};
export type ListPendingTransactionsParams = { address?: string };
export type SendDexSellParams = {
  fromaddress: string;
  propertyidforsale: number;
  amountforsale: string;
  amountdesired: string;
  paymentwindow: number;
  minacceptfee: string;
  action: number;
};
export type SendNewDexOrderParams = {
  fromaddress: string;
  propertyidforsale: number;
  amountforsale: string;
  amountdesired: string;
  paymentwindow: number;
  minacceptfee: string;
};
export type SendUpdateDexOrderParams = {
  fromaddress: string;
  propertyidforsale: number;
  amountforsale: string;
  amountdesired: string;
  paymentwindow: number;
  minacceptfee: string;
};
export type SendCancelDexOrderParams = {
  fromaddress: string;
  propertidforsale: number;
};
export type SendDexAcceptParams = {
  fromaddress: string;
  toaddress: string;
  propertyid: number;
  amount: string;
  override: boolean;
};
export type SendDexPayParams = {
  fromaddress: string;
  toaddress: string;
  propertyid: number;
  amount: string;
};
export type SendIssuanceCrowdSaleParams = {
  fromaddress: string;
  ecosystem: number;
  type: number;
  previousid: number;
  category: string;
  subcategory: string;
  name: string;
  url: string;
  data: string;
  propertyiddesired: number;
  tokensperunit: string;
  deadline: number;
  earlybonus: number;
  issuerpercentage: number;
};
export type SendIssuanceFixedParams = {
  fromaddress: string;
  ecosystem: number;
  type: number;
  previousid: number;
  category: string;
  subcategory: string;
  name: string;
  url: string;
  data: string;
  amount: string;
};
export type SendIssuanceManagedParams = {
  fromaddress: string;
  ecosystem: number;
  type: number;
  previousid: number;
  category: string;
  subcategory: string;
  name: string;
  url: string;
  data: string;
};
export type SendStoParams = {
  fromaddress: string;
  propertyid: number;
  amount: string;
  redeemaddress: string;
  distributionproperty: number;
};
export type SendGrantParams = {
  fromaddress: string;
  toaddress: string;
  propertyid: number;
  amount: string;
  grantdata?: string;
};
export type SendRevokeParams = {
  fromaddress: string;
  propertyid: number;
  amount: string;
  memeo?: string;
};
export type SendCloseCrowdSaleParams = {
  fromaddress: string;
  propertyid: number;
};
export type SendChangeIssuerParams = {
  fromaddress: string;
  toaddress: string;
  propertyid: number;
};
export type SendAllParams = {
  fromaddress: string;
  toaddress: string;
  ecosystem: number;
  redeemaddrss?: string;
  referenceamount?: string;
};
export type SendEnableFreezingParams = {
  fromaddress: string;
  propertyid: number;
};
export type SendDisableFreezingParams = {
  fromaddress: string;
  propertyid: number;
};
export type SendFreezeParams = {
  fromaddrss: string;
  toaddress: string;
  propertyid: number;
  amount: string;
};
export type SendUnfreezeParams = {
  fromaddress: string;
  toaddress: string;
  propertyid: number;
  amount: string;
};
export type SendAnyDataParams = {
  fromaddress: string;
  data: string;
  toaddress: string;
};
export type SendRawTxParams = {
  fromaddress: string;
  rawtransaction: string;
  referenceaddress?: string;
  redeemaddress?: string;
  referenceamount?: string;
};
export type FundedSendParams = {
  fromaddress: string;
  toaddress: string;
  propertyid: number;
  amount: string;
  feeaddress: string;
};
export type FundedSendAllParams = {
  fromaddress: string;
  toaddress: string;
  ecosystem: number;
  feeaddress: string;
};
export type SendNonFungibleParams = {
  address: string;
  toaddress: string;
  propertyid: number;
  tokenstart: number;
  tokenend: number;
  redeemaddress?: string;
  referenceamount?: string;
};
export type SetNonFungibleData = {
  propertyid: number;
  tokenstart: number;
  tokenend: number;
  issuer: boolean;
  data: string;
};
export type SendNonFungibleDataParams = {
  propertyid: number;
  tokenstart: number;
  tokenend: number;
  issuer: boolean;
  data: string;
};
export type GetWalletAddressBalancesParam = { includewatchonly?: boolean };
export type GetActiveDexSellsParams = { address?: string };
export type GetCrowdSaleParams = { propertyid: number; verbose?: boolean };
export type GetStoParams = { txid: string; recipientfilter?: string };
export type GetPayload = { txid: string };
export type GetNonFungibleTokensParams = {
  address: string;
  propertyid?: number;
};
export type GetNonFungibleTokenDataParams = {
  propertyid: number;
  tokenidstart: number;
  tokenidend: number;
};
export type GetNonFungibleTokenRanges = { propertyid: number };
export type GetBlockHashes = { high: number; low: number; options?: object };
export type GetSpentInfoParams = { data: object }; //TODO PR
export type DecodeTransactionParams = {
  rawtx: string;
  prevtxs?: string;
  height?: string;
};
export type CreateRawTxOpReturnParams = { rawtx: string; payload: string };
// export type CreateRawTxMultisigParams = {rawtx:string, payload:string, seed: string, payload: string} //TODO Issue PR for duplicate arguments
export type CreateRawTxInputParams = { rawtx: string; txid: string; n: number };
export type CreateRawTxReferenceParams = {
  rawtx: string;
  destination: string;
  referenceamount?: number;
};
export type CreateRawTxChangeParams = {
  rawtx: string;
  prevtxs: string;
  destination: string;
  fee: number;
  position?: number;
};
export type CreatePayloadSimpleSendParams = {
  propertyid: number;
  amount: string;
};
export type CreatePayloadSendAllParams = { ecosystem: number };
export type CreatePayloadDexSellParams = {
  propertyidforsale: number;
  amountforsale: string;
  amountdesired: string;
  paymentwindow: number;
  minacceptfee: string;
  action: number;
};
export type CreatePayloadDexAcceptParams = {
  propertyid: number;
  amount: string;
};
export type CreatePayloadStoParams = {
  propertyid: number;
  amount: string;
  distributionproperty?: number;
};
export type CreatePayloadIssuanceFixedParams = {
  ecosystem: number;
  type: number;
  previousid: number;
  category: string;
  name: string;
  url: string;
  data: string;
  amount: string;
};
export type CreatePayloadIssuanceCrowdSaleParams = {
  ecosystem: number;
  type: number;
  previousid: number;
  category: string;
  subcategory: string;
  name: string;
  url: string;
  data: string;
  propertyiddesired: number;
  tokensperunit: string;
  deadline: number;
  earlybonus: number;
  issuerpercentage: number;
};
export type CreatePayloadIssuanceManagedParams = {
  ecosystem: number;
  type: number;
  previousid: number;
  category: string;
  subcategory: string;
  name: string;
  url: string;
  data: string;
};
export type CreatePayloadCloseCrowdSaleParams = { propertyid: number };
export type CreatePayloadGrantParams = {
  propertyid: number;
  amount: string;
  grantdata?: string;
};
export type CreatePayloadRevokeParams = {
  propertyid: number;
  amount: string;
  memo?: string;
};
export type CreatePayloadChangeIssuerParams = { propertyid: number };
export type CreatePayloadEnableFreezingParams = { propertyid: number };
export type CreatePayloadDisableFreezingParams = { propertyid: number };
export type CreatePayloadFreezeParams = {
  toaddress: string;
  propertyid: number;
  amount: string;
};
export type CreatePayloadUnfreezeParams = {
  toaddrss: string;
  propertyid: number;
  amount: string;
};
export type CreatePayloadAnyDataParams = { data: string };
export type CreatePayloadSendNonFungibleParams = {
  propertyid: number;
  tokenstart: number;
  tokenend: number;
};
export type CreatePayloadSetNonFungibleDataParams = {
  propertyid: number;
  tokenstart: number;
  tokenend: number;
  issuer: boolean;
  data: string;
};
export type GetFeeCacheParams = { propertyid?: number };
export type GetFeeTriggerParams = { propertyid?: number };
export type GetFeeShareParams = { address?: string; ecosystem?: number };
export type GetFeeDistributionParams = { distributionid: number };
export type GetFeeDistributionsParams = { propertyid: number };
export type SetAutoCommitParams = { flag: boolean };

export type RPCIniOptions = RESTIniOptions & {
  user?: string;
  pass: string;
  wallet?: string;
  fullResponse?: boolean;
};

export type JSONRPC = {
  jsonrpc?: string | number;
  id?: string | number;
  method: string;
  params?: object;
};

export type Verbosity = { verbosity?: 0 | 1 | 2 };

export type Verbose = { verbose?: boolean };

export type Height = { height: number };

export type Blockhash = { blockhash: string };

export type TxId = { txid: string };

export type GetBlockParams = Verbosity & Blockhash;

export type GetBlockFilterParams = Blockhash & { filtertype?: string };

export type GetBlockHeaderParams = Blockhash & Verbose;

export type GetBlockStatsParams = {
  hash_or_height: string | number;
  stats?: string[];
};

export type GetChainTxStatsParams = { nblocks?: number; blockhash?: string };

export type GetMemPoolParams = TxId & Verbose;

export type GetTxOutParams = TxId & { n: number; include_mempool?: boolean };

export type GetTxOutProofParams = { txids: string[]; blockhash?: string };

export type Descriptor =
  | string
  | { desc: string; range: number | [number, number] };

export type ScanTxOutSetParams = {
  action: "start" | "abort" | "status";
  scanobjects: Descriptor[];
};

export type HelpParams = { command?: string };

export type LoggingParams = {
  include?: string[] | "all" | "none" | 0 | 1;
  exclude?: string[] | "all" | "none" | 0 | 1;
};

export type GenerateParams = { nblocks: number; maxtries?: number };

export type GenerateToAddressParams = GenerateParams & { address: string };

export type GetBlockTemplateParams = {
  template_request: {
    mode?: "template" | "proposal";
    capabilities?: string[];
    rules: string[];
  };
};

export type PrioritiseTransactionParams = TxId & { fee_delta: number };

export type HexData = { hexdata: string };

export type AddNodeParams = {
  node: string;
  command: "add" | "remove" | "onetry";
};

export type DisconnectNodeParams = { address: string } | { nodeid: number };

export type SetBanParams = {
  subnet: string;
  command: "add" | "remove";
  bantime?: number;
  absolute?: boolean;
};

export type AddressType = "legacy" | "p2sh-segwit" | "bech32";

export type CreateMultiSigParams = {
  nrequired: number;
  keys: string[];
  address_type?: AddressType;
};

export type DeriveAddressesParams = {
  descriptor: string;
  range?: number | [number, number];
};

export type EstimateMode = {
  estimate_mode?: "UNSET" | "ECONOMICAL" | "CONSERVATIVE";
};

export type EstimateSmartFeeParams = EstimateMode & { conf_target: number };

export type SignMessageWithPrivKeyParams = { privkey: string; message: string };

export type VerifyMessageParams = {
  address: string;
  signature: string;
  message: string;
};

export type HexString = { hexstring: string };

export type ConvertToPsbtParams = HexString & {
  permitsigdata?: boolean;
  iswitness?: boolean;
};

export type BaseTransactionInput = { txid: string; vout: number };

export type TransactionInput = BaseTransactionInput & { sequence?: number };

export type TransactionOutput =
  | { [address: string]: string | number }
  | { data: string };

export type BaseCreateTransaction = {
  inputs: TransactionInput[];
  outputs: TransactionOutput[];
  locktime?: number;
};

export type CreateTransactionParams = BaseCreateTransaction & {
  replaceable?: boolean;
};

export type DecodeRawTransactionParams = HexString & { iswitness?: boolean };

export type FinalizePsbtParams = { psbt: string; extract?: boolean };

export type BaseFundOptions = {
  options?: EstimateMode & {
    changeAddress?: string;
    changePosition?: number;
    change_type?: string;
    includeWatching?: boolean;
    lockUnspents?: boolean;
    feeRate?: number | string;
    subtractFeeFromOutputs?: number[];
    replaceable?: boolean;
    conf_target?: number;
  };
};

export type FundRawTransactionParams = HexString & {
  options?: BaseFundOptions;
  iswitness?: boolean;
};

export type GetRawTransactionParams = TxId & Verbose & { blockhash?: string };

export type SendRawTransactionParams = HexString & {
  maxfeerate?: number | string;
};

export type PrevTx = {
  txid: string;
  vout: number;
  scriptPubKey: string;
  redeemScript?: string;
  witnessScript?: string;
  amount: number | string;
};

export type SigHashType =
  | "ALL"
  | "NONE"
  | "SINGLE"
  | "ALL|ANYONECANPAY"
  | "NONE|ANYONECANPAY"
  | "SINGLE|ANYONECANPAY";

export type SignRawTransactionWithWalletParams = HexString & {
  prevtxs?: PrevTx[];
  sighashtype?: SigHashType;
};

export type SignRawTransactionWithKeyParams = {
  privkeys: string[];
} & SignRawTransactionWithWalletParams;

export type TestmemPoolAcceptParams = {
  rawtxs: string[];
  maxfeerate?: string | number;
};

export type UtxoUpdatePsbtParams = {
  psbt: string;
  descriptors?: (
    | string
    | { desc: string; range?: number | [number, number] }
  )[];
};

export type Label = { label?: string };

export type AddMultiSigAddressParams = CreateMultiSigParams & Label;

export type BumpFeeParams = {
  txid: string;
  options?: EstimateMode & { replaceable?: boolean } & (
      | { confTarget?: number }
      | { totalFee?: number }
    );
};

export type CreateWalletParams = {
  passphrase?: string;
  avoid_reuse?: boolean;
  wallet_name: string;
  disable_private_keys?: boolean;
  blank?: boolean;
};

export type GetBalanceParams = {
  avoid_reuse?: boolean;
  minconf?: number;
  include_watchonly?: boolean;
};

export type GetNewAddressParams = { address_type?: AddressType } & Label;

export type GetReceivedByAddressParams = { address: string; minconf?: number };

export type GetReceivedByLabelParams = {
  label: string;
  minconf?: number;
};

export type GetTransactionParams = TxId & {
  include_watchonly?: boolean;
  verbose?: boolean;
};

export type ImportAddressParams = {
  address: string;
  label?: string;
  rescan?: boolean;
  p2sh?: boolean;
};

export type ImportMultiRequest = {
  timestamp: number | "now";
  internal?: boolean;
  watchonly?: boolean;
  label?: string;
  keypool?: boolean;
} & (
  | { desc: string; range?: number | [number, number] }
  | {
      scriptPubKey: { address: string } | string;
      redeemscript?: string;
      witnessscript?: string;
      pubkeys?: string[];
      keys?: string[];
    }
);

export type ImportMultiParams = {
  requests: ImportMultiRequest[];
  options?: { rescan?: boolean };
};

export type ImportPrivKeyParams = {
  privkey: string;
  label?: string;
  rescan?: boolean;
};

export type ImportPrunedFundsParams = {
  rawtransaction: string;
  txoutproof: string;
};

export type ImportPubKeyParams = {
  pubkey: string;
  label?: string;
  rescan?: boolean;
};

export type ListLabelsParams = { purpose: "receive" | "send" };

export type ListReceivedByAddressParams = ListReceivedByLabelParams & {
  address_filter?: string;
};

export type ListReceivedByLabelParams = {
  minconf?: number;
  include_empty?: boolean;
  include_watchonly?: boolean;
};

export type ListSinceBlockParams = {
  blockhash?: string;
  target_confirmations?: number;
  include_watchonly?: boolean;
  include_removed?: boolean;
};

export type ListTransactionsParams = {
  label?: string;
  count?: number;
  skip?: number;
  include_watchonly?: boolean;
};

export type ListUnspentParams = {
  minconf?: number;
  maxconf?: number;
  addresses?: string[];
  include_unsafe?: boolean;
  query_options?: {
    minimumAmount?: number | string;
    maximumAmount?: number | string;
    maximumCount?: number;
    minimumSumAmount?: number | string;
  };
};

export type LockUnspentParams = {
  unlock: boolean;
  transactions?: BaseTransactionInput[];
};

export type RescanBlockchainParams = {
  start_height?: number;
  stop_height?: number;
};

export type BaseSendParams = EstimateMode & {
  comment?: string;
  replaceable?: boolean;
  conf_target?: number;
};

export type SendManyParams = BaseSendParams & {
  amounts: { [address: string]: number | string };
  subtractfeefrom?: string[];
};

export type SendToAddressParams = BaseSendParams & {
  avoid_reuse?: boolean;
  address: string;
  amount: string | number;
  comment_to?: string;
  subtractfeefromamount?: boolean;
};

export type SetHDSeedParams = { newkeypool?: boolean; seed?: string };

export type SetLabelParams = { address: string; label: string };

export type SetWalletFlagParams = { flag: string; value?: boolean };

export type SignMessageParams = { address: string; message: string };

export type WalletCreateFundedPsbtParams = BaseCreateTransaction &
  BaseFundOptions & { bip32derivs?: boolean };

export type WalletPassphraseParams = { passphrase: string; timeout: number };

export type WalletPassphraseChangeParams = {
  oldpassphrase: string;
  newpassphrase: string;
};

export type WalletProcessPsbtParams = {
  psbt: string;
  sign?: boolean;
  sighashtype?: SigHashType;
  bip32derivs?: boolean;
};

export class RPCClient extends RESTClient {
  wallet?: string;
  fullResponse?: boolean;

  constructor({
    user = "",
    pass,
    wallet,
    fullResponse,
    ...options
  }: RPCIniOptions) {
    super({ ...options, auth: { user, pass }, uri: "/" });
    this.fullResponse = fullResponse ? true : false;
    this.wallet = typeof wallet === "string" ? wallet : undefined;
  }

  batch(body: JSONRPC | JSONRPC[], uri = "/") {
    return super.post({ body, uri });
  }

  async rpc(method: string, params = {}, wallet?: string) {
    const uri = typeof wallet === "undefined" ? "/" : "wallet/" + wallet;
    const body = { method, params, jsonrpc: 1.0, id: "rpc-omnilite" };
    try {
      const response = await this.batch(body, uri);
      return this.fullResponse ? response : response.result;
    } catch (error) {
      if (error.error && error.error.error && error.error.result === null) {
        throw this.fullResponse ? error.error : error.error.error;
      }
      throw error;
    }
  }

  /**
   * @description Returns the hash of the best (tip) block in the longest blockchain.
   */
  getbestblockhash() {
    return this.rpc("getbestblockhash").catch((error) => error);
  }

  /**
   * @description If verbosity is 0, returns a string that is serialized, hex-encoded data for block 'hash'. If verbosity is 1, returns an Object with information about block <hash>. If verbosity is 2, returns an Object with information about block <hash> and information about each transaction.
   */
  getblock({ blockhash, verbosity = 1 }: GetBlockParams) {
    return this.rpc("getblock", { blockhash, verbosity });
  }

  /**
   * @description Returns an object containing various state info regarding blockchain processing.
   */
  getblockchaininfo() {
    return this.rpc("getblockchaininfo");
  }

  /**
   * @description Returns the number of blocks in the longest blockchain.
   */
  getblockcount() {
    return this.rpc("getblockcount");
  }

  /**
   * @description Retrieve a BIP 157 content filter for a particular block.
   */
  getblockfilter(options: GetBlockFilterParams) {
    return this.rpc("getblockfilter", options);
  }

  /**
   * @description Returns hash of block in best-block-chain at height provided.
   */
  getblockhash({ height }: Height) {
    return this.rpc("getblockhash", { height });
  }

  /**
   * @description If verbose is `false`, returns a string that is serialized, hex-encoded data for blockheader 'hash'. If verbose is `true`, returns an Object with information about blockheader <hash>.
   */
  getblockheader({ blockhash, verbose = true }: GetBlockHeaderParams) {
    return this.rpc("getblockheader", { blockhash, verbose });
  }

  /**
   * @description Compute per block statistics for a given window.
   */
  getblockstats({ hash_or_height, stats = [] }: GetBlockStatsParams) {
    return this.rpc("getblockstats", { hash_or_height, stats });
  }

  /**
   * @description Return information about all known tips in the block tree, including the main chain as well as orphaned branches.
   */
  getchaintips() {
    return this.rpc("getchaintips");
  }

  /**
   * @description Compute statistics about the total number and rate of transactions in the chain.
   */
  getchaintxstats({ nblocks, blockhash }: GetChainTxStatsParams) {
    return this.rpc("getchaintxstats", { nblocks, blockhash });
  }

  /**
   * @description Returns the proof-of-work difficulty as a multiple of the minimum difficulty.
   */
  getdifficulty() {
    return this.rpc("getdifficulty");
  }

  /**
   * @description If txid is in the mempool, returns all in-mempool ancestors.
   */
  getmempoolancestors({ txid, verbose = false }: GetMemPoolParams) {
    return this.rpc("getmempoolancestors", { txid, verbose });
  }

  /**
   * @description If txid is in the mempool, returns all in-mempool descendants.
   */
  getmempooldescendants({ txid, verbose = false }: GetMemPoolParams) {
    return this.rpc("getmempooldescendants", { txid, verbose });
  }

  /**
   * @description Returns mempool data for given transaction
   */
  getmempoolentry({ txid }: TxId) {
    return this.rpc("getmempoolentry", { txid });
  }

  /**
   * @description Returns details on the active state of the TX memory pool.
   */
  getmempoolinfo() {
    return this.rpc("getmempoolinfo");
  }

  /**
   * @description Returns all transaction ids in memory pool as a json array of string transaction ids.
   */
  getrawmempool({ verbose = false }: Verbose = {}) {
    return this.rpc("getrawmempool", { verbose });
  }

  /**
   * @description Returns details about an unspent transaction output.
   */
  gettxout({ txid, n, include_mempool = true }: GetTxOutParams) {
    return this.rpc("gettxout", { txid, n, include_mempool });
  }

  /**
   * @description Returns a hex-encoded proof that "txid" was included in a block.
   */
  gettxoutproof({ txids, blockhash }: GetTxOutProofParams) {
    return this.rpc("gettxoutproof", { txids, blockhash });
  }

  /**
   * @description Returns statistics about the unspent transaction output set.
   */
  gettxoutsetinfo() {
    return this.rpc("gettxoutsetinfo");
  }

  /**
   * @description Treats a block as if it were received before others with the same work.
   */
  preciousblock({ blockhash }: Blockhash) {
    return this.rpc("preciousblock", { blockhash });
  }

  /**
   * @description Prune the blockchain.
   */
  pruneblockchain({ height }: Height) {
    return this.rpc("pruneblockchain", { height });
  }

  /**
   * @description Dumps the mempool to disk. It will fail until the previous dump is fully loaded.
   */
  savemempool() {
    return this.rpc("savemempool");
  }

  /**
   * @description Scans the unspent transaction output set for entries that match certain output descriptors.
   */
  scantxoutset({ action, scanobjects }: ScanTxOutSetParams) {
    return this.rpc("scantxoutset", { action, scanobjects });
  }

  /**
   * @description Verifies blockchain database.
   */
  verifychain({ checklevel = 3, nblocks = 6 } = {}) {
    return this.rpc("verifychain", { checklevel, nblocks });
  }

  /**
   * @description Verifies that a proof points to a transaction in a block, returning the transaction it commits to and throwing an RPC error if the block is not in our best chain.
   */
  verifytxoutproof({ proof }: { proof: string }) {
    return this.rpc("verifytxoutproof", { proof });
  }

  /**
   * @description Returns an object containing information about memory usage.
   */
  getmemoryinfo({ mode = "stats" } = {}) {
    return this.rpc("getmemoryinfo", { mode });
  }

  /**
   * @description Returns details of the RPC server.
   */
  getrpcinfo() {
    return this.rpc("getrpcinfo");
  }

  /**
   * @description List all commands, or get help for a specified command.
   */
  help({ command }: HelpParams = {}) {
    return this.rpc("help", { command });
  }

  /**
   * @description Gets and sets the logging configuration.
   */
  logging({ include, exclude }: LoggingParams = {}) {
    return this.rpc("logging", { include, exclude });
  }

  /**
   * @description Stop Bitcoin server.
   */
  stop() {
    return this.rpc("stop");
  }

  /**
   * @description Returns the total uptime of the server.
   */
  uptime() {
    return this.rpc("uptime");
  }

  /**
   * @description Mine blocks immediately to a specified address (before the RPC call returns)
   */
  generatetoaddress(options: GenerateToAddressParams, wallet?: string) {
    return this.rpc("generatetoaddress", options, wallet || this.wallet);
  }

  /**
   * @description It returns data needed to construct a block to work on.
   */
  getblocktemplate(options: GetBlockTemplateParams) {
    return this.rpc("getblocktemplate", options);
  }

  /**
   * @description Returns a json object containing mining-related information.
   */
  getmininginfo() {
    return this.rpc("getmininginfo");
  }

  /**
   * @description Returns the estimated network hashes per second based on the last `n` blocks.
   */
  getnetworkhashps(options = {}) {
    return this.rpc("getnetworkhashps", options);
  }

  /**
   * @description Accepts the transaction into mined blocks at a higher (or lower) priority
   */
  prioritisetransaction(options: PrioritiseTransactionParams) {
    return this.rpc("prioritisetransaction", options);
  }

  /**
   * @description Attempts to submit new block to network.
   */
  submitblock(options: HexData) {
    return this.rpc("submitblock", options);
  }

  /**
   * @description Decode the given hexdata as a header and submit it as a candidate chain tip if valid.
   */
  submitheader(options: HexData) {
    return this.rpc("submitheader", options);
  }

  /**
   * @description Attempts to add or remove a node from the addnode list.
   */
  addnode(options: AddNodeParams) {
    return this.rpc("addnode", options);
  }

  /**
   * @description Clear all banned IPs.
   */
  clearbanned() {
    return this.rpc("clearbanned");
  }

  /**
   * @description Immediately disconnects from the specified peer node.
   */
  disconnectnode(params: DisconnectNodeParams) {
    if ("address" in params) {
      return this.rpc("disconnectnode", { address: params.address });
    }
    return this.rpc("disconnectnode", { nodeid: params.nodeid });
  }

  /**
   * @description Returns information about the given added node, or all added nodes
   */
  getaddednodeinfo(options: { node?: string } = {}) {
    return this.rpc("getaddednodeinfo", options);
  }

  /**
   * @description Returns the number of connections to other nodes.
   */
  getconnectioncount() {
    return this.rpc("getconnectioncount");
  }

  /**
   * @description Returns information about network traffic, including bytes in, bytes out, and current time.
   */
  getnettotals() {
    return this.rpc("getnettotals");
  }

  /**
   * @description Returns an object containing various state info regarding P2P networking.
   */
  getnetworkinfo() {
    return this.rpc("getnetworkinfo");
  }

  /**
   * @description Return known addresses which can potentially be used to find new nodes in the network
   */
  getnodeaddresses(options = {}) {
    return this.rpc("getnodeaddresses", options);
  }

  /**
   * @description Returns data about each connected network node as a json array of objects.
   */
  getpeerinfo() {
    return this.rpc("getpeerinfo");
  }

  /**
   * @description List all banned IPs/Subnets.
   */
  listbanned() {
    return this.rpc("listbanned");
  }

  /**
   * @description Requests that a ping be sent to all other nodes, to measure ping time.
   */
  ping() {
    return this.rpc("ping");
  }

  /**
   * @description Attempts to add or remove an IP/Subnet from the banned list
   */
  setban(options: SetBanParams) {
    return this.rpc("setban", options);
  }

  /**
   * @description Disable/enable all p2p network activity.
   */
  setnetworkactive(options: { state: boolean }) {
    return this.rpc("setnetworkactive", options);
  }

  /**
   * @description Analyzes and provides information about the current status of a PSBT and its inputs
   */
  analyzepsbt(options: { psbt: string }) {
    return this.rpc("analyzepsbt", options);
  }

  /**
   * @description Combine multiple partially signed Bitcoin transactions into one transaction.
   */
  combinepsbt(options: { txs: string[] }) {
    return this.rpc("combinepsbt", options);
  }

  /**
   * @description Combine multiple partially signed transactions into one transaction.
   */
  combinerawtransaction(options: { txs: string[] }) {
    return this.rpc("combinerawtransaction", options);
  }

  /**
   * @description Converts a network serialized transaction to a PSBT.
   */
  converttopsbt(options: ConvertToPsbtParams) {
    return this.rpc("converttopsbt", options);
  }

  /**
   * @description Creates a transaction in the Partially Signed Transaction format.
   */
  createpsbt(options: CreateTransactionParams) {
    return this.rpc("createpsbt", options);
  }

  /**
   * @description Create a transaction spending the given inputs and creating new outputs.
   */
  createrawtransaction(options: CreateTransactionParams) {
    return this.rpc("createrawtransaction", options);
  }

  /**
   * @description Return a JSON object representing the serialized, base64-encoded partially signed Bitcoin transaction.
   */
  decodepsbt(options: { psbt: string }) {
    return this.rpc("decodepsbt", options);
  }

  /**
   * @description Return a JSON object representing the serialized, hex-encoded transaction.
   */
  decoderawtransaction(options: DecodeRawTransactionParams) {
    return this.rpc("decoderawtransaction", options);
  }

  /**
   * @description Decode a hex-encoded script.
   */
  decodescript(options: HexString) {
    return this.rpc("decodescript", options);
  }

  /**
   * @description Finalize the inputs of a PSBT.
   */
  finalizepsbt(options: FinalizePsbtParams) {
    return this.rpc("finalizepsbt", options);
  }

  /**
   * @description Add inputs to a transaction until it has enough in value to meet its out value.
   */
  fundrawtransaction(options: FundRawTransactionParams, wallet?: string) {
    return this.rpc("fundrawtransaction", options, wallet || this.wallet);
  }

  /**
   * @description Return the raw transaction data.
   */
  getrawtransaction(options: GetRawTransactionParams) {
    return this.rpc("getrawtransaction", options);
  }

  /**
   * @description Joins multiple distinct PSBTs with different inputs and outputs into one PSBT with inputs and outputs from all of the PSBTs.
   */
  joinpsbts(options: { txs: string[] }) {
    return this.rpc("joinpsbts", options);
  }

  /**
   * @description Submits raw transaction (serialized, hex-encoded) to local node and network.
   */
  sendrawtransaction(options: SendRawTransactionParams) {
    return this.rpc("sendrawtransaction", options);
  }

  /**
   * @description Sign inputs for raw transaction
   */
  signrawtransactionwithkey(options: SignRawTransactionWithKeyParams) {
    return this.rpc("signrawtransactionwithkey", options);
  }

  /**
   * @description Returns result of mempool acceptance tests indicating if raw transaction (serialized, hex-encoded) would be accepted by mempool.
   */
  testmempoolaccept(options: TestmemPoolAcceptParams) {
    return this.rpc("testmempoolaccept", options);
  }

  /**
   * @description Updates a PSBT with witness UTXOs retrieved from the UTXO set or the mempool.
   */
  utxoupdatepsbt(options: UtxoUpdatePsbtParams) {
    return this.rpc("utxoupdatepsbt", options);
  }

  /**
   * @description Creates a multi-signature address with n signature of m keys required.
   */
  createmultisig(options: CreateMultiSigParams) {
    return this.rpc("createmultisig", options);
  }

  /**
   * @description Derives one or more addresses corresponding to an output descriptor.
   */
  deriveaddresses({ descriptor, range }: DeriveAddressesParams) {
    return this.rpc("deriveaddresses", { descriptor, range });
  }

  /**
   * @description Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within `conf_target` blocks if possible and return the number of blocks for which the estimate is valid.
   */
  estimatesmartfee(options: EstimateSmartFeeParams) {
    return this.rpc("estimatesmartfee", options);
  }

  /**
   * @description Analyses a descriptor.
   */
  getdescriptorinfo(options: { descriptor: string }) {
    return this.rpc("getdescriptorinfo", options);
  }

  /**
   * @description Sign a message with the private key of an address.
   */
  signmessagewithprivkey(options: SignMessageWithPrivKeyParams) {
    return this.rpc("signmessagewithprivkey", options);
  }

  /**
   * @description Return information about the given bitcoin address.
   */
  validateaddress(options: { address: string }) {
    return this.rpc("validateaddress", options);
  }

  /**
   * @description Verify a signed message
   */
  verifymessage(options: VerifyMessageParams) {
    return this.rpc("verifymessage", options);
  }

  /**
   * @description Mark in-wallet transaction `txid` as abandoned
   */
  abandontransaction(options: TxId, wallet?: string) {
    return this.rpc("abandontransaction", options, wallet || this.wallet);
  }

  /**
   * @description Stops current wallet rescan triggered by an RPC call
   */
  abortrescan(wallet?: string) {
    return this.rpc("abortrescan", undefined, wallet || this.wallet);
  }

  /**
   * @description Add a nrequired-to-sign multisignature address to the wallet.
   */
  addmultisigaddress(options: AddMultiSigAddressParams, wallet?: string) {
    return this.rpc("addmultisigaddress", options, wallet || this.wallet);
  }

  /**
   * @description Safely copies current wallet file to destination.
   */
  backupwallet(options: { destination: string }, wallet?: string) {
    return this.rpc("backupwallet", options, wallet || this.wallet);
  }

  /**
   * @description Bumps the fee of an opt-in-RBF transaction T, replacing it with a new transaction B.
   */
  bumpfee(options: BumpFeeParams, wallet?: string) {
    return this.rpc("bumpfee", options, wallet || this.wallet);
  }

  /**
   * @description Creates and loads a new wallet.
   */
  createwallet(options: CreateWalletParams) {
    return this.rpc("createwallet", options);
  }

  /**
   * @description Reveals the private key corresponding to 'address'.
   */
  dumpprivkey(options: { address: string }, wallet?: string) {
    return this.rpc("dumpprivkey", options, wallet || this.wallet);
  }

  /**
   * @description Dumps all wallet keys in a human-readable format to a server-side file.
   */
  dumpwallet(options: { filename: string }, wallet?: string) {
    return this.rpc("dumpwallet", options, wallet || this.wallet);
  }

  /**
   * @description Encrypts the wallet with 'passphrase'.
   */
  encryptwallet(options: { passphrase: string }, wallet?: string) {
    return this.rpc("encryptwallet", options, wallet || this.wallet);
  }

  /**
   * @description Returns the list of addresses assigned the specified label.
   */
  getaddressesbylabel(options: { label: string }, wallet?: string) {
    return this.rpc("getaddressesbylabel", options, wallet || this.wallet);
  }

  /**
   * @description Return information about the given bitcoin address.
   */
  getaddressinfo(options: { address: string }, wallet?: string) {
    return this.rpc("getaddressinfo", options, wallet || this.wallet);
  }

  /**
   * @description Returns the total available balance.
   */
  getbalance(options: GetBalanceParams, wallet?: string) {
    return this.rpc("getbalance", options, wallet || this.wallet);
  }

  /**
   * @description Returns all balances in BTC.
   */
  getbalances(wallet?: string) {
    return this.rpc("getbalances", undefined, wallet || this.wallet);
  }

  /**
   * @description Returns a new Bitcoin address for receiving payments.
   */
  getnewaddress(options: GetNewAddressParams, wallet?: string) {
    return this.rpc("getnewaddress", options, wallet || this.wallet);
  }

  /**
   * @description Returns a new Bitcoin address, for receiving change.
   */
  getrawchangeaddress(
    options: { address_type?: AddressType },
    wallet?: string
  ) {
    return this.rpc("getrawchangeaddress", options, wallet || this.wallet);
  }

  /**
   * @description Returns the total amount received by the given address in transactions with at least minconf confirmations.
   */
  getreceivedbyaddress(options: GetReceivedByAddressParams, wallet?: string) {
    return this.rpc("getreceivedbyaddress", options, wallet || this.wallet);
  }

  /**
   * @description Returns the total amount received by addresses with `label` in transactions with at least `minconf` confirmations.
   */
  getreceivedbylabel(options: GetReceivedByLabelParams, wallet?: string) {
    return this.rpc("getreceivedbylabel", options, wallet || this.wallet);
  }

  /**
   * @description Get detailed information about in-wallet transaction `txid`
   */
  gettransaction(options: GetTransactionParams, wallet?: string) {
    return this.rpc("gettransaction", options, wallet || this.wallet);
  }

  /**
   * @description Returns the server's total unconfirmed balance
   */
  getunconfirmedbalance(wallet?: string) {
    return this.rpc("getunconfirmedbalance", undefined, wallet || this.wallet);
  }

  /**
   * @description Returns an object containing various wallet state info.
   */
  getwalletinfo(wallet?: string) {
    return this.rpc("getwalletinfo", undefined, wallet || this.wallet);
  }

  /**
   * @description Adds an address or script (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
   */
  importaddress(options: ImportAddressParams, wallet?: string) {
    return this.rpc("importaddress", options, wallet || this.wallet);
  }

  /**
   * @description Import addresses/scripts (with private or public keys, redeem script (P2SH)), optionally rescanning the blockchain from the earliest creation time of the imported scripts.
   */
  importmulti(options: ImportMultiParams, wallet?: string) {
    return this.rpc("importmulti", options, wallet || this.wallet);
  }

  /**
   * @description Adds a private key (as returned by `dumpprivkey`) to your wallet.
   */
  importprivkey(options: ImportPrivKeyParams, wallet?: string) {
    return this.rpc("importprivkey", options, wallet || this.wallet);
  }

  /**
   * @description Imports funds without rescan. Corresponding address or script must previously be included in wallet.
   */
  importprunedfunds(options: ImportPrunedFundsParams, wallet?: string) {
    return this.rpc("importprunedfunds", options, wallet || this.wallet);
  }

  /**
   * @description Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend.
   */
  importpubkey(options: ImportPubKeyParams, wallet?: string) {
    return this.rpc("importpubkey", options, wallet || this.wallet);
  }

  /**
   * @description Imports keys from a wallet dump file (see `dumpwallet`).
   */
  importwallet(options: { filename: string }, wallet?: string) {
    return this.rpc("importwallet", options, wallet || this.wallet);
  }

  /**
   * @description Fills the keypool.
   */
  keypoolrefill(options: { newsize?: number }, wallet?: string) {
    return this.rpc("keypoolrefill", options, wallet || this.wallet);
  }

  /**
   * @description Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions
   */
  listaddressgroupings(wallet?: string) {
    return this.rpc("listaddressgroupings", undefined, wallet || this.wallet);
  }

  /**
   * @description Returns the list of all labels, or labels that are assigned to addresses with a specific purpose.
   */
  listlabels(options: ListLabelsParams, wallet?: string) {
    return this.rpc("listlabels", options, wallet || this.wallet);
  }

  /**
   * @description Returns list of temporarily unspendable outputs.
   */
  listlockunspent(wallet?: string) {
    return this.rpc("listlockunspent", undefined, wallet || this.wallet);
  }

  /**
   * @description List balances by receiving address.
   */
  listreceivedbyaddress(options: ListReceivedByAddressParams, wallet?: string) {
    return this.rpc("listreceivedbyaddress", options, wallet || this.wallet);
  }

  /**
   * @description List received transactions by label.
   */
  listreceivedbylabel(options: ListReceivedByLabelParams, wallet?: string) {
    return this.rpc("listreceivedbylabel", options, wallet || this.wallet);
  }

  /**
   * @description Get all transactions in blocks since block `blockhash`, or all transactions if omitted.
   */
  listsinceblock(options: ListSinceBlockParams, wallet?: string) {
    return this.rpc("listsinceblock", options, wallet || this.wallet);
  }

  /**
   * @description Returns up to `count` most recent transactions skipping the first `skip` transactions.
   */
  listtransactions(options: ListTransactionsParams, wallet?: string) {
    return this.rpc("listtransactions", options, wallet || this.wallet);
  }

  /**
   * @description Returns array of unspent transaction outputs with between `minconf` and `maxconf` (inclusive) confirmations.
   */
  listunspent(options: ListUnspentParams, wallet?: string) {
    return this.rpc("listunspent", options, wallet || this.wallet);
  }

  /**
   * @description Returns a list of wallets in the wallet directory.
   */
  listwalletdir() {
    return this.rpc("listwalletdir");
  }

  /**
   * @description Returns a list of currently loaded wallets.
   */
  listwallets() {
    return this.rpc("listwallets");
  }

  /**
   * @description Loads a wallet from a wallet file or directory.
   */
  loadwallet({ filename }: { filename: string }) {
    return this.rpc("loadwallet", { filename });
  }

  /**
   * @description Updates list of temporarily unspendable outputs.
   */
  lockunspent(options: LockUnspentParams, wallet?: string) {
    return this.rpc("lockunspent", options, wallet || this.wallet);
  }

  /**
   * @description Deletes the specified transaction from the wallet.
   */
  removeprunedfunds(options: TxId, wallet?: string) {
    return this.rpc("removeprunedfunds", options, wallet || this.wallet);
  }

  /**
   * @description Rescan the local blockchain for wallet related transactions.
   */
  rescanblockchain(options: RescanBlockchainParams, wallet?: string) {
    return this.rpc("rescanblockchain", options, wallet || this.wallet);
  }

  /**
   * @description Send multiple times.
   */
  sendmany(options: SendManyParams, wallet?: string) {
    return this.rpc("sendmany", options, wallet || this.wallet);
  }

  /**
   * @description Send an amount to a given address.
   */
  sendtoaddress(options: SendToAddressParams, wallet?: string) {
    return this.rpc("sendtoaddress", options, wallet || this.wallet);
  }

  /**
   * @description Set or generate a new HD wallet seed.
   */
  sethdseed(options: SetHDSeedParams, wallet?: string) {
    return this.rpc("sethdseed", options, wallet || this.wallet);
  }

  /**
   * @description Sets the label associated with the given address.
   */
  setlabel(options: SetLabelParams, wallet?: string) {
    return this.rpc("setlabel", options, wallet || this.wallet);
  }

  /**
   * @description Set the transaction fee per kB for this wallet.
   */
  settxfee(options: { amount: number | string }, wallet?: string) {
    return this.rpc("settxfee", options, wallet || this.wallet);
  }

  /**
   * @description Change the state of the given wallet flag for a wallet.
   */
  setwalletflag(options: SetWalletFlagParams, wallet?: string) {
    return this.rpc("setwalletflag", options, wallet || this.wallet);
  }

  /**
   * @description Sign a message with the private key of an address
   */
  signmessage(options: SignMessageParams, wallet?: string) {
    return this.rpc("signmessage", options, wallet || this.wallet);
  }

  /**
   * @description Sign inputs for raw transaction
   */
  signrawtransactionwithwallet(
    options: SignRawTransactionWithWalletParams,
    wallet?: string
  ) {
    return this.rpc(
      "signrawtransactionwithwallet",
      options,
      wallet || this.wallet
    );
  }

  /**
   * @description Unloads the wallet.
   */
  unloadwallet({ wallet_name }: { wallet_name?: string } = {}) {
    if (typeof wallet_name !== "undefined") {
      return this.rpc("unloadwallet", { wallet_name });
    }
    return this.rpc("unloadwallet", undefined, this.wallet);
  }

  /**
   * @description Creates and funds a transaction in the Partially Signed Transaction format.
   */
  walletcreatefundedpsbt(
    options: WalletCreateFundedPsbtParams,
    wallet?: string
  ) {
    return this.rpc("walletcreatefundedpsbt", options, wallet || this.wallet);
  }

  /**
   * @description Removes the wallet encryption key from memory, locking the wallet.
   */
  walletlock(wallet?: string) {
    return this.rpc("walletlock", undefined, wallet || this.wallet);
  }

  /**
   * @description Stores the wallet decryption key in memory for `timeout` seconds.
   */
  walletpassphrase(options: WalletPassphraseParams, wallet?: string) {
    return this.rpc("walletpassphrase", options, wallet || this.wallet);
  }

  /**
   * @description Changes the wallet passphrase from `oldpassphrase` to `newpassphrase`.
   */
  walletpassphrasechange(
    options: WalletPassphraseChangeParams,
    wallet?: string
  ) {
    return this.rpc("walletpassphrasechange", options, wallet || this.wallet);
  }

  /**
   * @description Update a PSBT with input information from our wallet and then sign inputs that we can sign for.
   */
  walletprocesspsbt(options: WalletProcessPsbtParams, wallet?: string) {
    return this.rpc("walletprocesspsbt", options, wallet || this.wallet);
  }

  /**
   * @description Returns information about the active ZeroMQ notifications.
   */
  getzmqnotifications() {
    return this.rpc("getzmqnotifications");
  }

  /*####################### OMNI ######################### */

  /*************** Transaction Creation ***************/

  /**
   * @description Create and broadcast a simple send transaction.
   */
  omni_send(params: SendParams) {
    return this.rpc("omni_send", params);
  }

  /**
   * @description Creates a new sell offer on the distributed token/LTC exchange.
   */
  omni_sendnewdexorder(params: SendNewDexOrderParams) {
    return this.rpc("omni_sendnewdexorder", params);
  }

  /**
   * @description Updates an existing sell offer on the distributed token/LTC exchange.
   */
  omni_sendupdatedexorder(params: SendUpdateDexOrderParams) {
    return this.rpc("omni_sendupdatedexorder", params);
  }

  /**
   * @description Cancels existing sell offer on the distributed token/LTC exchange.
   */
  omni_sendcanceldexorder(params: SendCancelDexOrderParams) {
    return this.rpc("omni_sendcanceldexorder", params);
  }

  /**
   * @description Create and broadcast an accept offer for the specified token and amount.
   */
  omni_senddexaccept(params: SendDexAcceptParams) {
    return this.rpc("omni_senddexaccept", params);
  }

  /**
   * @description Create and broadcast payment for an accept offer.
   */
  omni_senddexpay(params: SendDexPayParams) {
    return this.rpc("omni_senddexpay", params);
  }

  /**
   * @description Create new tokens as crowdsale.
   */
  omni_sendissuancecrowdsale(params: SendIssuanceCrowdSaleParams) {
    return this.rpc("omni_sendissuancecrowdsale", params);
  }

  /**
   * @description Create new tokens with fixed supply.
   */
  omni_sendissuancefixed(params: SendIssuanceFixedParams) {
    return this.rpc("omni_sendissuancefixed", params);
  }

  /**
   * @description Create new tokens with manageable supply.
   */
  omni_sendissuancemanaged(params: SendIssuanceManagedParams) {
    return this.rpc("omni_sendissuancemanaged", params);
  }

  /**
   * @description Create and broadcast a send-to-owners transaction.
   */
  omni_sendsto(params: SendStoParams) {
    return this.rpc("omni_sendsto", params);
  }

  /**
   * @description Issue or grant new units of managed tokens.
   */
  omni_sendgrant(params: SendGrantParams) {
    return this.rpc("omni_sendgrant", params);
  }

  /**
   * @description Revoke units of managed tokens.
   */
  omni_sendrevoke(params: SendRevokeParams) {
    return this.rpc("omni_sendrevoke", params);
  }

  /**
   * @description Manually close a crowdsale.
   */
  omni_sendclosecrowdsale(params: SendCloseCrowdSaleParams) {
    return this.rpc("omni_sendclosecrowdsale", params);
  }

  /**
   * @description Change the issuer on record of the given tokens.
   */
  omni_sendchangeissuer(params: SendChangeIssuerParams) {
    return this.rpc("omni_sendchangeissuer", params);
  }

  /**
   * @description Transfers all available tokens in the given ecosystem to the recipient.
   */
  omni_sendall(params: SendAllParams) {
    return this.rpc("omni_sendall", params);
  }

  /**
   * @description Enables address freezing for a centrally managed property.
   */
  omni_sendenablefreezing(params: SendEnableFreezingParams) {
    return this.rpc("omni_sendenablefreezing", params);
  }

  /**
   * @description Disables address freezing for a centrally managed property.
   */
  omni_senddisablefreezing(params: SendDisableFreezingParams) {
    return this.rpc("omni_senddisablefreezing", params);
  }

  /**
   * @description Freeze an address for a centrally managed token.
   */
  omni_sendfreeze(params: SendFreezeParams) {
    return this.rpc("omni_sendfreeze", params);
  }

  /**
   * @description Unfreeze an address for a centrally managed token.
   */
  omni_sendunfreeze(params: SendUnfreezeParams) {
    return this.rpc("omni_sendunfreeze", params);
  }

  /**
   * @description Create and broadcast a transaction with an arbitrary payload.
   */
  omni_sendanydata(params: SendAnyDataParams) {
    return this.rpc("omni_sendanydata", params);
  }

  /**
   * @description Broadcasts a raw Omni Layer transaction.
   */
  omni_sendrawtx(params: SendRawTxParams) {
    return this.rpc("omni_sendrawtx", params);
  }

  /**
   * @description Creates and sends a funded simple send transaction.
   */
  omni_funded_send(params: FundedSendParams) {
    return this.rpc("omni_funded_send", params);
  }

  /**
   * @description Creates and sends a transaction that transfers all available tokens in the given ecosystem to the recipient.
   */
  omni_funded_sendall(params: FundedSendAllParams) {
    return this.rpc("omni_funded_sendall", params);
  }

  /**
   * @description Create and broadcast a non-fungible send transaction.
   */
  omni_sendnonfungible(params: SendNonFungibleParams) {
    return this.rpc("omni_sendanydata", params);
  }

  /**
   * @description Sets either the issuer or holder data field in a non-fungible token.
   * Holder data can only be updated by the token owner and issuer data can only be
   * updated by address that created the tokens
   */
  omni_setnonfungibledata(params: SetNonFungibleData) {
    return this.rpc("omni_sendanydata", params);
  }

  /*************** Data Retrieval ***************/

  /**
   * @description Returns various state information of the client and protocol.
   */
  omni_getinfo() {
    return this.rpc("omni_getinfo");
  }

  /**
   * @description Returns the token balance for a given address and property.
   */
  omni_getbalance(params: OmniGetBalanceParams) {
    return this.rpc("omni_getbalance", params);
  }

  /**
   * @description Returns a list of token balances for a given currency or property identifier.
   */
  omni_getallbalancesforid(params: PropertyId) {
    return this.rpc("omni_getallbalancesforid", params);
  }

  /**
   * @description Returns a list of all token balances for a given address.
   */
  omni_getallbalancesforaddress(params: Address) {
    return this.rpc("omni_getallbalancesforaddress", params);
  }

  /**
   * @description Returns a list of the total token balances of the whole wallet.
   */
  omni_getwalletbalances(params: GetWalletAddressBalancesParam) {
    return this.rpc("omni_getwalletbalances", params);
  }

  /**
   * @description Returns a list of all token balances for every wallet address.
   */
  omni_getwalletaddressbalances() {
    return this.rpc("omni_getwalletaddressbalances");
  }

  /**
   * @description Get detailed information about an Omni transaction.
   */
  omni_gettransaction(params: TxId) {
    return this.rpc("omni_gettransaction", params);
  }

  /**
   * @description Get detailed information about an Omni transaction.
   */
  omni_listtransactions(params: OmniListTransactionsParams) {
    return this.rpc("omni_listtransactions", params);
  }

  /**
   * @description Lists all Omni transactions in a block.
   */
  omni_listblocktransactions(params: ListBlockTransactionsParams) {
    return this.rpc("omni_listblocktransactions", params);
  }

  /**
   * @description Lists all Omni transactions in a given range of blocks.
   */
  omni_listblockstransactions(params: ListBlocksTransactionsParams) {
    return this.rpc("omni_listblockstransactions", params);
  }

  /**
   * @description Returns a list of unconfirmed Omni transactions, pending in the memory pool.
   */
  omni_listpendingtransactions(params: Address) {
    return this.rpc("omni_listpendingtransactions", params);
  }

  /**
   * @description Returns currently active offers on the distributed exchange.
   */
  omni_getactivedexsell() {
    return this.rpc("omni_getactivedexsells");
  }

  /**
   * @description Lists all tokens or smart properties.
   */
  omni_listproperties() {
    return this.rpc("omni_listproperties");
  }

  /**
   * @description Returns details for about the tokens or smart property to lookup.
   */
  omni_getproperty(params: PropertyId) {
    return this.rpc("omni_getproperty", params);
  }

  /**
   * @description Returns details for about the tokens or smart property to lookup.
   */
  omni_getactivecrowdsales() {
    return this.rpc("omni_getactivecrowdsales");
  }

  /**
   * @description Returns information about a crowdsale.
   */
  omni_getcrowdsale(params: GetCrowdSaleParams) {
    return this.rpc("omni_getcrowdsale", params);
  }

  /**
   * @description Returns information about granted and revoked units of managed tokens.
   */
  omni_getgrants() {
    return this.rpc("omni_getgrants");
  }

  /**
   * @description Get information and recipients of a send-to-owners transaction.
   */
  omni_getsto(params: GetStoParams) {
    return this.rpc("omni_getsto", params);
  }

  /**
   * @description Returns pending and completed feature activations.
   */
  omni_getactivations() {
    return this.rpc("omni_getactivations");
  }

  /**
   * @description Get the payload for an Omni transaction.
   */
  omni_getpayload(params: TxId) {
    return this.rpc("omni_getpayload", params);
  }

  /**
   * @description Returns the consensus hash covering the state of the current block.
   */
  omni_getcurrentconsensushash() {
    return this.rpc("omni_getcurrentconsensushash");
  }

  /**
   * @description Returns the non-fungible tokens for a given address. Optional property ID filter.
   */
  omni_getnonfungibletokens(params: GetNonFungibleTokensParams) {
    return this.rpc("omni_getnonfungibletokens", params);
  }

  /**
   * @description Returns owner and all data set in a non-fungible token. If looking up a single token on tokenidstart can be specified only..
   */
  omni_getnonfungibletokendata(params: GetNonFungibleTokenDataParams) {
    return this.rpc("omni_getnonfungibletokendata", params);
  }

  /**
   * @description Returns the ranges and their addresses for a non-fungible token property.
   */
  omni_getnonfungibletokenranges(params: PropertyId) {
    return this.rpc("omni_getnonfungibletokenranges", params);
  }

  /*************** Data retrieval (address index) ***************/

  /**
   * @description Returns the txids for one or more addresses (requires addressindex to be enabled)..
   */
  getaddresstxids(params: Addresses) {
    return this.rpc("getaddresstxids", params);
  }

  /**
   * @description Returns all changes for an address (requires addressindex to be enabled).
   */
  getaddressdeltas(params: Addresses) {
    return this.rpc("getaddressdeltas", params);
  }

  /**
   * @description Returns the balance for one or more addresses (requires addressindex to be enabled).
   */
  getaddressbalance(params: Addresses) {
    return this.rpc("getaddressbalance", params);
  }

  /**
   * @description Returns all unspent outputs for an address (requires addressindex to be enabled).
   */
  getaddressutxos(params: Addresses) {
    return this.rpc("getaddressutxos", params);
  }

  /**
   * @description Returns all mempool deltas for an address (requires addressindex to be enabled).
   */
  getaddressmempool(params: Addresses) {
    return this.rpc("getaddressmempool", params);
  }

  /**
   * @description Returns array of hashes of blocks within the timestamp range provided.
   */
  getblockhashes(params: GetBlockHashes) {
    return this.rpc("getblockhashes", params);
  }

  /**
   * @description Returns the txid and index where an output is spent.
   */
  getspentinfo(params: GetSpentInfoParams) {
    return this.rpc("getspentinfo", params);
  }

  /*************** Raw transactions ***************/

  /**
   * @description Decodes an Omni transaction.
   */
  omni_decodetransaction(params: DecodeTransactionParams) {
    return this.rpc("omni_decodetransaction", params);
  }

  /**
   * @description Adds a payload with class C (op-return) encoding to the transaction.
   */
  omni_createrawtx_opreturn(params: CreateRawTxChangeParams) {
    return this.rpc("omni_createrawtx_opreturn", params);
  }

  /**
   * @description Adds a payload with class B (bare-multisig) encoding to the transaction.
   * TODO: issue with duplicate payload arguments
   */
  //   omni_createrawtx_multisig(params) {
  //     return this.rpc("omni_createrawtx_multisig", params);
  //   }

  /**
   * @description Adds a transaction input to the transaction.
   */
  omni_createrawtx_input(params: CreateRawTxInputParams) {
    return this.rpc("omni_createrawtx_input", params);
  }

  /**
   * @description Adds a reference output to the transaction.
   */
  omni_createrawtx_reference(params: CreateRawTxReferenceParams) {
    return this.rpc("omni_createrawtx_reference", params);
  }

  /**
   * @description Adds a change output to the transaction.
   */
  omni_createrawtx_change(params: CreateRawTxChangeParams) {
    return this.rpc("omni_createrawtx_change", params);
  }

  /**
   * @description Create the payload for a simple send transaction.
   */
  omni_createpayload_simplesend(params: CreatePayloadSimpleSendParams) {
    return this.rpc("omni_createpayload_simplesend", params);
  }

  /**
   * @description Create the payload for a send all transaction.
   */
  omni_createpayload_sendall(params: CreatePayloadSendAllParams) {
    return this.rpc("omni_createpayload_sendall", params);
  }

  /**
   * @description Create a payload to place, update or cancel a sell offer on the distributed exchange.
   */
  omni_createpayload_dexsell(params: CreatePayloadDexSellParams) {
    return this.rpc("omni_createpayload_dexsell", params);
  }

  /**
   * @description Create the payload for an accept offer for the specified token and amount.
   */
  omni_createpayload_dexaccept(params: CreatePayloadDexAcceptParams) {
    return this.rpc("omni_createpayload_dexaccept", params);
  }

  /**
   * @description Creates the payload for a send-to-owners transaction.
   */
  omni_createpayload_sto(params: CreatePayloadStoParams) {
    return this.rpc("omni_createpayload_sto", params);
  }

  /**
   * @description Creates the payload for a new tokens issuance with fixed supply.
   */
  omni_createpayload_issuancefixed(params: CreatePayloadIssuanceFixedParams) {
    return this.rpc("omni_createpayload_issuancefixed", params);
  }

  /**
   * @description Creates the payload for a new tokens issuance with crowdsale.
   */
  omni_createpayload_issuancecrowdsale(
    params: CreatePayloadIssuanceCrowdSaleParams
  ) {
    return this.rpc("omni_createpayload_issuancecrowdsale", params);
  }

  /**
   * @description Creates the payload for a new tokens issuance with manageable supply.
   */
  omni_createpayload_issuancemanaged(
    params: CreatePayloadIssuanceManagedParams
  ) {
    return this.rpc("omni_createpayload_issuancemanaged", params);
  }

  /**
   * @description Creates the payload to manually close a crowdsale.
   */
  omni_createpayload_closecrowdsale(params: CreatePayloadCloseCrowdSaleParams) {
    return this.rpc("omni_createpayload_closecrowdsale", params);
  }

  /**
   * @description Creates the payload to issue or grant new units of managed tokens.
   */
  omni_createpayload_grant(params: CreatePayloadGrantParams) {
    return this.rpc("omni_createpayload_grant", params);
  }

  /**
   * @description Creates the payload to revoke units of managed tokens.
   */
  omni_createpayload_revoke(params: CreatePayloadRevokeParams) {
    return this.rpc("omni_createpayload_revoke", params);
  }

  /**
   * @description Creates the payload to change the issuer on record of the given tokens.
   */
  omni_createpayload_changeissuer(params: CreatePayloadChangeIssuerParams) {
    return this.rpc("omni_createpayload_changeissuer", params);
  }

  /**
   * @description Creates the payload to enable address freezing for a centrally managed property.
   */
  omni_createpayload_enablefreezing(params: CreatePayloadEnableFreezingParams) {
    return this.rpc("omni_createpayload_enablefreezing", params);
  }

  /**
   * @description Creates the payload to disable address freezing for a centrally managed property.
   */
  omni_createpayload_disablefreezing(
    params: CreatePayloadDisableFreezingParams
  ) {
    return this.rpc("omni_createpayload_disablefreezing", params);
  }

  /**
   * @description Creates the payload to freeze an address for a centrally managed token.
   */
  omni_createpayload_freeze(params: CreatePayloadFreezeParams) {
    return this.rpc("omni_createpayload_freeze", params);
  }

  /**
   * @description Creates the payload to unfreeze an address for a centrally managed token.
   */
  omni_createpayload_unfreeze(params: CreatePayloadUnfreezeParams) {
    return this.rpc("omni_createpayload_unfreeze", params);
  }

  /**
   * @description Creates the payload to embed arbitrary data.
   */
  omni_createpayload_anydata(params: CreatePayloadAnyDataParams) {
    return this.rpc("omni_createpayload_anydata", params);
  }

  /**
   * @description Create the payload for a non-fungible send transaction.
   */
  omni_createpayload_sendnonfungible(
    params: CreatePayloadSendNonFungibleParams
  ) {
    return this.rpc("omni_createpayload_sendnonfungible", params);
  }

  /**
   * @description Create the payload for a non-fungible token set data transaction.
   */
  omni_createpayload_setnonfungibledata(
    params: CreatePayloadSetNonFungibleDataParams
  ) {
    return this.rpc("omni_createpayload_setnonfungibledata", params);
  }

  /*************** Fee System ***************/

  /**
   * @description The RPCs for the fee system can be used to obtain data about the fee system and fee distributions.
   */
  omni_getfeecache(params: GetFeeCacheParams) {
    return this.rpc("omni_getfeecache", params);
  }

  /**
   * @description Obtains the amount at which cached fees will be distributed.
   */
  omni_getfeetrigger(params: GetFeeTriggerParams) {
    return this.rpc("omni_getfeetrigger", params);
  }

  /**
   * @description Obtains the current percentage share of fees addresses would receive if a distribution were to occur.
   */
  omni_getfeeshare(params: GetFeeShareParams) {
    return this.rpc("omni_getfeeshare", params);
  }

  /**
   * @description Obtains data for a past distribution of fees.
   */
  omni_getfeedistribution(params: GetFeeDistributionParams) {
    return this.rpc("omni_getfeedistribution", params);
  }

  /**
   * @description Obtains data for past distributions of fees for a property.
   */
  omni_getfeedistributions(params: GetFeeDistributionsParams) {
    return this.rpc("omni_getfeedistributions", params);
  }

  /*************** Configuration ***************/

  /**
   * @description Sets the global flag that determines whether transactions are automatically committed and broadcasted.
   */
  omni_setautocommit(params: SetAutoCommitParams) {
    return this.rpc("omni_setautocommit", params);
  }
}
