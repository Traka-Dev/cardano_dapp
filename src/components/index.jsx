import React, { useState } from "react";
import * as WASM_lib from "@emurgo/cardano-serialization-lib-browser";
import { variables } from "../vars";
import CardanoWalletsApi, { findWallet } from "../utils/cardano-wallets-api";
import "./index.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  //const POOL_ID = "pool1adur9jcn0dkjpm3v8ayf94yn3fe5xfk2rqfz7rfpuh6cw6evd7w";
  const POOL_ID = "pool15w7lejtrpk4868drc8h65cgmm504qlnzhh52e2yndgrs5a9w232"
  const handleCustomAPI = async (walletName) => {     
      try {
        setIsLoading(true);
        const wallet_obj = window.cardano;
        if (wallet_obj) {
          const compatible = await findWallet(walletName, wallet_obj);
          const wallet = await CardanoWalletsApi(
            compatible,
            variables.blockfrost_testnet,
            WASM_lib
          );         
          const resp = await wallet.delegate({
            poolId: POOL_ID,
            metadata: "tr4k4",
            metadataLabel: "721",
          });
          // tx hash
          console.dir(resp);
          //Exito
        } else {
          console.log("no wallet detected");
          // NO WALLET          
        }
      } catch (error) {
        // ERROR
       console.log(error) 
      }
      setIsLoading(false);        
  };

  return (
    <div>
      <h1>Traka Was Here!</h1>
      <button type="button" onClick={(e) => handleCustomAPI("nami")}>
        NAMI Delegation
      </button>
      <button type="button" onClick={(e) => handleCustomAPI("eternl")}>
        ETERNL D2elegation
      </button>
      {isLoading ? (
        <div className="pos-center" id="loader_dapp">
          <div className="loader" />
          <h3 style={{text_align:"center"}}> Building Transaction </h3>
        </div>
      ) : null}
    </div>
  );
};

export default App;
