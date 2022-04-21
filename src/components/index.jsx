import React from "react";
import { variables } from "../vars";
import { DelegateButton } from "./delegateButton";
import "./index.css";
/*
NOTES 
Edit .htaccess to support wasm mime type
*/
const App = () => {
  const POOL_ID = "pool1adur9jcn0dkjpm3v8ayf94yn3fe5xfk2rqfz7rfpuh6cw6evd7w";
  //const POOL_ID = "pool15w7lejtrpk4868drc8h65cgmm504qlnzhh52e2yndgrs5a9w232";

  return (
    <div>
      <DelegateButton
        btnText={"Delegar ccvault"}
        poolId={POOL_ID}
        tagTx={"Tr4k4"}
        blockfrostKey={variables.blockfrost_testnet}
        walletName={"eternl"}
      />
    </div>
  );
};

export default App;
