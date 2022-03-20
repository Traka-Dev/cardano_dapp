console.log("Init Dapp")

window.onload = async () => {

    const cardano_provider = window.cardano
    let wallet =  await ConnectWallet(cardano_provider, 'ccvault')
    const balance = await getBalance(wallet);
    console.dir(balance)
}

const ConnectWallet = async (cardano_provider, nameWallet) => {
    if(cardano_provider !== undefined){
        let wallet = search_wallet(cardano_provider, nameWallet)       
        if(wallet !== undefined){
           wallet = await enableWallet(wallet)
           // check network
           if(await wallet.getNetworkId() === 0) return wallet;
           console.log('Wrong Network')                   
        }
    }
    console.log('Error no Wallet')
    return undefined
}

const enableWallet = async (wallet) => {
    // Check if wallet is enabled otherwaise ask to enable it        
    if(wallet.isEnable == false){
        try {
           return await wallet.enable()                      
        } catch (error) {
            console.log(error.message)
        }                        
    }else{
        return await wallet.enable()
    }
}
const search_wallet = (cardano_provider, wallet) => {
    const wallets_compatible = ['nami', 'ccvault']
    const found_wallet = wallets_compatible.find(e => e === wallet && cardano_provider.hasOwnProperty(wallet))
    if(found_wallet === undefined) console.log('wallet compatible not found')    
    return cardano_provider[wallet]
}

const hexToArrayBuffer = (hexString) => new Uint8Array(hexString.match(/[\da-f]{2}/gi).map((h) => parseInt(h, 16))).buffer

const getBalance = async wallet => {    
    let balance = await wallet.getBalance()
    var decoded_balance = CBOR.decode(hexToArrayBuffer(balance))
    Array.isArray(decoded_balance) ? 
    CBOR.decode(hexToArrayBuffer(balance))[0] :
    CBOR.decode(hexToArrayBuffer(balance))
    return decoded_balance / 1000000
}