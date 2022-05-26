
import { useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'

import copy from 'copy-to-clipboard'
// import Identicon from 'identicon.js'

import {
    Button,
    TextSM,
    Icon,
    // WingBlank
} from '../../components'


import useToast from '../../hook/useToast'

import { useConnectWallet } from '../ConnectWallet'

import { useWeb3, utils } from '../../web3'
const { shortAddress } = utils


function Address() {
    const { t } = useTranslation();
    const { open } = useToast()
    const { open: openNet } = useConnectWallet()
    const { account, unlock } = useWeb3()
    const short = useMemo(() => unlock ? shortAddress(account, 4) : t('no address'), [unlock, account, t])
    // const hash = useMemo(()=> 'data:image/png;base64,'+ new Identicon(account).toString(),[account])
    const copyAddress = useCallback(() => {
        if (unlock) {
            copy(account)
            open(t('copied'))
        }
    }, [account, unlock, t])
    return (
        !unlock ?
            <AddressButton
                size='0'
                status='3'
                onClick={openNet}
            >
                <TextSM color='0'>{t("Connect Wallet")}</TextSM>
            </AddressButton>
            :
            <AddressButton
                size='3'
                onClick={copyAddress}
            >
                {/* <AddressImg src={hash}/> */}
                {/* <WingBlank /> */}
                <TextSM color='0'>
                    {short} <Icon size='12' type='icon-icon-fuzhidao' />
                </TextSM>
            </AddressButton>
    )
}

export default Address

// const AddressImg = styled.img`
//     display: block;
//     border: 2px solid  #fff;
//     border-radius: 100px;
//     width: 24px;
// `

const AddressButton = styled(Button)`
    padding: 1rem 1.4rem !important;
    border-radius: 100px !important;
    background: none;
    border: 1px solid #ff9a32;
    &.MuiButton-root:hover {
        background: none;
    }
    /* color: #ff9a32; */
`