import React from 'react';
import { NamiWalletApi } from 'nami-wallet-api'
import * as WASM_lib from '@emurgo/cardano-serialization-lib-browser'
import { variables } from '../variables';


const App = () => {

    const handleClick = async () => {

        const nami = await NamiWalletApi(
            window.cardano, //nami wallet object
            variables.blockfrost_testnet,
            WASM_lib
        )
        console.log("nami")
        console.dir(nami)
        if (!nami.isEnabled) {
            await nami.enable()
        }
        const assets = await nami.getAssets()

        console.dir(assets)
    }

    return (
        <div>
            <h1>Traka Was Here!</h1>
            <button type='button' onClick={handleClick}>Sync Wallet</button>
        </div>)
}


export default App