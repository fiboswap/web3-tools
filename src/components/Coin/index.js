/*
 * @Author: sam
 * @Date: 2021-06-25 15:16:53
 * @LastEditTime: 2021-07-30 00:26:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bagels.2/src/components/Coin/index.js
 */

import styled from 'styled-components'

import IconFont from '../IconFont'

const coinType = {
    usdt: 'z-celvexiaotubiao-03',
    usdc: 'z-celvexiaotubiao-05',
    husd: 'z-celvexiaotubiao-01',
    busd: 'z-a-image2vector5',
    dai: 'z-a-image2vector4',
    eth: 'z-celvexiaotubiao-04',
    mdx: 'z-celvexiaotubiao-12',
    btc: 'z-celvexiaotubiao-07',
    fil: 'z-celvexiaotubiao-08',
    bnb: 'z-a-image2vector5',
    ht: 'z-celvexiaotubiao-14',
    dot: 'z-celvexiaotubiao-15',
}

function Coin({type = '', className, size=26, style}) {
    return <IconFont style={style} size={size} type={coinType[type.toLocaleLowerCase()]} className={className} />
}

const NAME_WALLET = {
    imtoken: 'icon-imtoken',
    metamask: 'icon-metamask',
    walletconnect: 'icon-WalletConnect'
}
export const WalletIcon = ({name, ...other}) => <IconFont type={NAME_WALLET[(name || '').toLocaleLowerCase()] || 'icon-qianbao'} {...other}/>

export function NoData(props) {
    return <div style={{
        margin: 'auto',
        width:'fit-content',
        padding: '2rem 0 1.4rem',
        textAlign: 'center'
    }}>
        <IconFont type='icon-meiyoushuju' size='60' {...props}/>
        {
            props.children?<p style={{color:'#888'}}>{props.children}</p>:null
        } 
    </div>
}

export default Coin

export function Coins({className , types=[], size}) {
    return (
        <CoinsBlock className={className}>
            {
                types.map( v => (
                    <Coin key={v} type={v} size={size}/>
                ))
            }
        </CoinsBlock>
    )
}

const CoinsBlock = styled.div`
    display: ${p => p.block?'block':'inline-block'};
    ${IconFont} {
        margin-right: -10%;
    }
    ${IconFont}:last-of-type{
        margin-right: 0%;
    }
`