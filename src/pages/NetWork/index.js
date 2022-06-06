

import {
    Card,
    WhiteSpace,
    TextMD,
    Container
} from '../../components'

import {useWeb3} from '../../web3'

import {checkoutNetWork} from '../../utils/tool'

function checkBNBFork() {
    return checkoutNetWork({
        chainId: 1111,
        chainName: "BNB Fork",
        name: 'BNB',
        symbol: "BNB",
        decimals: 18,
        rpc: 'https://47.242.255.132:8545',
        blockExplorerUrls: ['https://bscscan.com']
    })
}

function NetWork() {
    const web3 = useWeb3()
    
    return (
        web3.unlock ?
        <Container>
            <WhiteSpace />
            <TextMD> Add NetWork </TextMD>
            <WhiteSpace />
            <Card
                b='1'
                onClick={checkBNBFork}
            >
                BNB Fork
            </Card>
        </Container>:
        <Container>
            <WhiteSpace />
            <TextMD> Please Connect Wallet </TextMD>
        </Container>
    )
}

export default NetWork