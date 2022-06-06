// 添加资产
// 切换网络
export function checkoutNetWork({
    chainId,
    chainName,
    name,
    symbol,
    decimals,
    blockExplorerUrls = [],
    rpc
}) {
    const ethereum = window.ethereum;
    if ( !ethereum ) return
    if ( ethereum.chainId*1 === chainId*1 ) return
    const data = [{
        chainId: '0x'+chainId.toString(16),
        chainName,
        nativeCurrency: {
            name,
            symbol,
            decimals,
        },
        rpcUrls: [rpc],
        blockExplorerUrls: blockExplorerUrls,
    }]

    console.log(data)
    /* eslint-disable */
    ethereum.request({method: 'wallet_addEthereumChain', params:data}).catch()
}