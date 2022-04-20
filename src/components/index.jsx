import React from "react";
import * as WASM_lib from "@emurgo/cardano-serialization-lib-browser";
import { variables } from "../variables";
import CardanoWalletsApi, { findWallet } from "../utils/cardano-wallets-api";

const App = () => {
  const POOL_ID = "pool1adur9jcn0dkjpm3v8ayf94yn3fe5xfk2rqfz7rfpuh6cw6evd7w";

  const handleCustomAPI = async () => {
    const wallet_obj = window.cardano;
    if (wallet_obj) {
      const compatible = await findWallet("nami", wallet_obj);
      const wallet = await CardanoWalletsApi(
        compatible,
        variables.blockfrost_testnet,
        WASM_lib
      );
      const resp = await wallet.delegate({
        poolId: POOL_ID,
        metadata: null,
        metadataLabel: "721",
      });
      console.dir(resp);
    }else{
        console.log('no wallet detected')
    }
  };

  return (
    <div>
      <h1>Traka Was Here!</h1>
      <button type="button" onClick={handleCustomAPI}>
        Custom API Wallet Delegation
      </button>
    </div>
  );
};

export default App;
