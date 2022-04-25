import React from "react";
import { variables } from "../vars";
import { DelegateButton } from "./delegateButton";
import { ToastContainer } from 'react-toastify';
/*
NOTES 
Edit .htaccess to support wasm mime type
*/
const App = () => {
  //const POOL_ID = "pool1adur9jcn0dkjpm3v8ayf94yn3fe5xfk2rqfz7rfpuh6cw6evd7w";
  const POOL_ID = "pool15w7lejtrpk4868drc8h65cgmm504qlnzhh52e2yndgrs5a9w232";

  const styleBtn = {
    "display": "inline-block",
    "backgroundColor": "#424242",
    "borderRadius": "10px",
    "border": "4px double #cccccc",
    "color": "#eeeeee",
    "textAlign": "center",
    "fontSize": "15px",
    "padding": "15px",
    "width": "250px",
    "transition": "all 0.5s",
    "cursor": "pointer",
    "margin": "5px",
    "boxShadow": "2px 2px 10px 2px rgba(0,0,0,0.72)"
  }  

  return (
    <div style={{"display": "flex", "justifyContent": "center"}}>
      <DelegateButton
        styleBtn={styleBtn}
        btnText={"DELEGAR ETERNL WALLET"}
        poolId={POOL_ID}
        tagTx={"Tr4k4"}
        blockfrostKey={variables.blockfrost_testnet}
        walletName={"eternl"}
      />
      <DelegateButton
        styleBtn={styleBtn}
        btnText={"DELEGAR NAMI WALLET"}
        poolId={POOL_ID}
        tagTx={"Tr4k4"}
        blockfrostKey={variables.blockfrost_testnet}
        walletName={"nami"}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
