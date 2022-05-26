import React, { memo, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// import { useTranslation } from 'react-i18next';
// import styled from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import MuiAppBar from '@material-ui/core/AppBar'

// import ChooseLanguage from '../components/ChooseLanguage';

import Address from '../pageComponents/Address'

// import useScrollTrigger from '@material-ui/core/useScrollTrigger'

// import Slide from '@material-ui/core/Slide';
// import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';

// import {
//     // // HashRouter as Router,
//     // BrowserRouter as Router,
//     // // Switch,
//     // Route,
//     // Link,
//     useHistory
// } from "react-router-dom";

import {
    Logo,
    // ConnectWallet,
    // ConnectNet
} from '../pageComponents'
import {OpenRouter} from './router'

import {
    Container,
    FlexBlock,
    // Text,
    // TextM,
    // WhiteSpace,
    // TextMD,
    // TextGL,
    // Link
} from '../components'

// import { Done } from './router'

// import {inPc} from '../theme'

// const ChooseLanguageButton = styled(ChooseLanguage)`
//     position:'relative';
//     margin-right: 1rem !important;
// `

const useStyles = makeStyles({
    colorPrimaryNone: {
        background: 'transparent',
        boxShadow: 'none',
        transition: 'all .3s',
        borderBottom: '0px solid #f2f2f2'
    },
    colorPrimary: {
        background: 'rgba(0,0,0,0.3)',
        boxShadow: 'none',
        transition: 'all .3s',
        borderBottom: '0px solid #f2f2f2'
    }
});

// const useAppBar = makeStyles({
//     colorPrimary: {
//         background: 'transparent',
//         // boxShadow: '0px 0px 4px rgba(0,0,0,0.2)',
//         boxShadow: 'none',
//         top: 'auto',
//         bottom: 0,
//         borderRadius: '6px',
//         padding: '0px'
//     }
// });
// colorPrimary

// import styled from 'styled-components'

// function useRouter() {
//     const history = useHistory()
//     const [paths, setPath] = useState(history.location.pathname)
//     useEffect(() => {
//         history.listen(({ pathname }) => {
//             setPath(pathname)
//         })
//     }, [])
//     return paths
// }

function HideOnScroll() {
    // const { children } = props;
    // const trigger = useScrollTrigger({
    //     disableHysteresis: true,
    //     threshold: 55
    // });
    const classes = useStyles()
    return (
        <MuiAppBar classes={{
            colorPrimary: classes.colorPrimary
        }}>
            <Toolbar>
                <Container style={{ padding: 0, margin: 0 }} flex>
                    <FlexBlock flex justify='start'>
                        <Logo size='2' />
                    </FlexBlock>
                    {/* {
                        inPc?<MenuBarMemo />:null
                    } */}
                    <FlexBlock justify='flex-end' flex>
                        {/* <ChooseLanguageButton /> */}
                        {/* <ConnectWallet /> */}
                        <Address />
                        <OpenRouter />
                        {/* <OpenRouter />s */}
                    </FlexBlock>
                </Container>
            </Toolbar>
        </MuiAppBar>
    );
}

// const M_STYLE = {
//     borderRadius: '1rem',
//     width: '100%',
//     margin: 'auto',
//     background: '#fff',
//     padding: '8px 12px',
//     border: '1px solid #f2f2f2'
//     // boxShadow: '0px 0px 14px rgba(0,0,0,0.1)'

// }
// function MobileBar() {
//     const classes = useAppBar()
//     return (
//         <MuiAppBar
//             position="fixed"
//             classes={classes}
//         >
//             <Toolbar>
//                 <MenuBarMemo style={M_STYLE} />
//             </Toolbar>
//             <WhiteSpace size='gl' />
//         </MuiAppBar>
//     )
// }

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};


// function MenuBar({ style }) {
//     const paths = useRouter()
//     const { t } = useTranslation();
//     return (
//         <FlexBlock style={style} w={33} flex>
//             {
//                 Done.map(key => {
//                     const { path, href, title } = key
//                     const link = { key: title }
//                     if (href) {
//                         link.href = href
//                         link.target = '_blank'
//                     } else {
//                         link.to = path
//                     }
//                     return (
//                         React.createElement(
//                             href ? 'a' : Link, link,
//                             <TextMD weight={600} active={path === paths}>{t(title)}</TextMD>
//                         )
//                     )
//                 })
//             }
//         </FlexBlock>
//     )
// }

// const MenuBarMemo = memo(MenuBar)

function AppBar(props) {
    return (
        <>
            <CssBaseline />
            <HideOnScroll {...props} />
            <Toolbar />
            {props.children}
            {/* {
                inPc?null:
                <>
                    <WhiteSpace size='gl'/>
                    <MobileBar/>
                    <Toolbar />
                    <WhiteSpace size='gl'/>
                </>
            } */}
        </>
    )
}

export default memo(AppBar)