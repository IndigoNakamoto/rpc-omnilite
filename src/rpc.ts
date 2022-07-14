import { RPCClient } from "rpc-bitcoin";
import { RPCOptions } from "rpc-request";

export type FromAddress = { fromaddress: string };
export type ToAddress = { toaddress: string };
export type PropertyId = { propertyid: number };
export type Address = { address?: string };
export type Addresses = { addresses: object };
export type TxId = { txid: string };
export type SendParams = {
  fromaddress: string;
  toaddress: string;
  propertyid: number;
  amount: string;
  redeemaddress?: string;
  referenceamount?: string;
};
export type GetBalanceParams = { address: string; propertyid: string };
export type ListTransactionsParams = {
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

export type options = { user: string; pass: string };
export type RESTIniOptions = RPCOptions & {
  url?: string;
  user?: string;
  password?: string;
};
export type RPCParams = {
  url: string;
  user: string;
  password: string;
  port: number;
  timeout: number;
};

export default class RPCOmnilite extends RPCClient {
  /**
   * @param {object} [params]
   * @param {string} [params.url='http://localhost']
   * @param {number} [params.port=9332]
   * @param {number} [params.timeout=30000]
   * @param {...*} [params.options]
   */
  constructor({ url, user, password, port, timeout } : RPCParams) {
    super({ url, user, password, port, timeout });
  }

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
  omni_getbalance(params: GetBalanceParams) {
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
  omni_listtransactions(params: ListTransactionsParams) {
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
