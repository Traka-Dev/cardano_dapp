import React from "react";
import * as WASM_lib from "@emurgo/cardano-serialization-lib-browser";
import CardanoWalletsApi, { findWallet } from "../utils/cardano-wallets-api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DelegateButton = ({
  btnText,
  poolId,
  styleBtn,
  tagTx,
  blockfrostKey,
  walletName,
}) => {
  const handleCustomAPI = async () => {
    try {
      const wallet_obj = window.cardano;
      if (wallet_obj) {        
        const response = await toast.promise(
          Delegate(walletName, wallet_obj, blockfrostKey, WASM_lib),
          {
            pending: "Construyendo la transacción!",
            success:  {
              render({data}){
                if(data == "You already delegated to this pool!"){
                  return "Hola, ya estas delegando con Sarga  👌"
                }else{
                  return `Haz delegado con Sarga 👌`
                }                
              },
              // other options
              icon: "🟢",
            },
            error:  {
              render({data}){
                console.log(data.info)
                switch(data.info){
                  case "user declined to sign tx", "User declined to sign the transaction.":                    
                    return "Has cancelado la transacción"
                  case "The request was refused due to lack of access - e.g. wallet disconnects.":                    
                    return "Se desconecto la cartera, vuelve a intentarlo"
                  default:
                    return data.info   
                }                
              }
            }
          }
        );
        console.dir(response);
      } else {
        console.log("no wallet detected");
        // NO WALLET
      }
    } catch (error) {
      // ERROR
      console.log(error);
    }
  };

  const Delegate = async (walletName, wallet_obj, blockfrostKey, WASM_lib) => {
    const compatible = await findWallet(walletName, wallet_obj);
    const wallet = await CardanoWalletsApi(
      compatible,
      blockfrostKey,
      WASM_lib
    );
    const resp = await wallet.delegate({
      poolId: poolId,
      metadata: tagTx,
      metadataLabel: "721",
    });
    return resp
  }

  return (
    <>
      <button style={styleBtn} type="button" onClick={handleCustomAPI}>
        {btnText}
      </button>      
    </>
  );
};