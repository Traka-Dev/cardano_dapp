import CardanoWalletsApi, {findWallet}  from './utils/cardano-wallets-api'
import { keys } from './vars'
console.log("Init Dapp")

declare const window: any;

window.onload = async () => {      
    const cardano_provider:any = window.cardano    
    console.log('CCVAULT INICIA')
    const isCcvault = await findWallet('ccvault', cardano_provider)
    const ccvault =  await CardanoWalletsApi(isCcvault, keys.blockfrost_api_testnet) 
    console.dir(await ccvault.getAddress())
    console.dir(await ccvault.getRewardAddress())
    
    console.log('NAMI INICIA')            
    const isNami = await findWallet('nami', cardano_provider)       
    const nami = await CardanoWalletsApi(isNami, keys.blockfrost_api_testnet)
    console.dir(nami)
    console.dir(await nami.getAddress())
    console.dir(await nami.getRewardAddress())
    
}
