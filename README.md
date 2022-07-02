# rpc-omnilite

A [TypeScript](https://www.typescriptlang.org) library to make RPC and HTTP REST requests to [OmniLite](https://omnilite.org/).

## Installation

```bash
npm install rpc-omnilite
```

## [RPC](https://github.com/OmniLite/OmniLite/blob/0.18.1/src/omnicore/doc/rpc-api.md)

```javascript
const { RPCOmnilite } = require("rpc-omnilite");
const url = "http://192.168.0.10";
const user = "rpcuser";
const pass = "rpcpassword";
const port = 9332;
const timeout = 10000;
const client = new RPCOmnilite({ url, port, timeout, user, pass });
```

- batch

```javascript
const response = await client.batch([
  { method: "getbestblockhash", id: 1 },
  { method: "help", params: { command: "help" }, id: "custom-id" },
  { method: "getzmqnotifications", params: {}, id: 2 },
]);
```

### OmniLite

- [`getbestblockhash`](https://bitcoin.org/en/developer-reference#getbestblockhash)

```javascript
const hex = await client.getbestblockhash();
```
