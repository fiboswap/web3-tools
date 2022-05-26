import {useContext, useEffect, createContext, useState} from 'react';

import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import {
    // HashRouter as Router,
    Route,
    Link,
    useHistory
} from "react-router-dom";

// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import {
    Accordion,
    Icon,
    // TextMD,
    TextM,
    Container,
    HrDotted,
    WhiteSpace
} from '../components'

// import useDrawer from '../hook/useDrawer'

import Home from './Home'
// import { useState } from 'react';
// import Account from './Account'
// import Relation from './Relation'

// import Energy from './Energy'

export const Done = [
    {
        title: 'Home',
        path: '/',
        exact: true,
        component: Home
    },
    // {
    //     title: 'Claim',
    //     path: '/claim',
    //     component: Claim
    // },
    // {
    //     title: 'Withdraw',
    //     path: '/withdraw',
    //     component: Withdraw
    // }
]

export const Dev = []

const RouterFlat = (() => {
    const flat = [];
    [...Done, ...Dev].map(v => {
        const {child, ...other} = v
        flat.push(other)
        if ( child ) {
            child.map(v => flat.push(v))
        }
        return v
    })
    return flat
})();

/////// router list ///////
function RouterList() {
    const history = useHistory()
    const [paths, setPath] = useState(() => history.location.pathname)
    useEffect(() => {
        history.listen(({ pathname }) => {
            setPath(pathname)
        })
    }, [])

    return Done.map((val) => (
        <>
            <WhiteSpace />
            <Items path={paths} route={val} key={val.title} />
            <WhiteSpace />
            <HrDotted />
        </>
    ))
}


/////// router dome ///////
function OpenRouter() {
    const {open} = useRouterDrawer()
    return (
        <RBlock onClick={open} src="./gameUI/router.png" />
    )
}

function CloseRouter() {
    const {close} = useRouterDrawer()
    return (
        <CloseBlock onClick={close} src="./gameUI/close.png" />
    )
}

const RBlock = styled.img`
    padding: 0;
    display: block;
    margin-left: 8px;
    width: 36px;
`

const CloseBlock = styled.img`
    padding: 0;
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
    margin-left: calc(100% - 52px);
    width: 36px;
`



/////// style ///////
const useStyles = makeStyles({
    paper: {
    //   borderRadius: 24,
        background: 'none',
        maxWidth: '1080px',
        margin: 'auto'
      // width: 'calc(100% - 32px) !important'
    },
    paperFullWidth : {
        maxWidth: "calc(100% - 24px) !important",
        width: "calc(100% - 24px)",
        margin: "6px !important",
        boxShadow: "0px 0px 20px rgba(0,0,0,.9)"
    }
});

const contextInit = {
    opened: false,
    close: () => {},
    open: () => {}
}
export const Context = createContext(contextInit)

function RouterDrawerProvider({children}) {
    const classes = useStyles()
    const [opened,setOpen] = useState(false)
    const close =  () => setOpen(false)
    return (
        <Context.Provider
            value={{
                opened,
                close,
                open: () => setOpen(true)
            }}
        >
            <FilterBlock opened={opened}>
                {children}
            </FilterBlock>
            <Drawer
                classes={classes}
                anchor='right'
                onClose={close}
                open={opened}
            >
                <RouterListBlock>
                    <CloseRouter />
                    <HrDotted />
                    <RouterList />
                </RouterListBlock>
            </Drawer>
        </Context.Provider>
    )
}

function useRouterDrawer() {
    return useContext(Context)
}


export {
    OpenRouter,
    RouterDrawerProvider,
    useRouterDrawer
}

const FilterBlock = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100vh;
    filter: ${p => p.opened?'blur(5px)':'none'};
    &:after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(./gameUI/back.png);
        background-size: 100% 100%;
        z-index: -1;
    };
`

const RouterListBlock = styled.div`
    background: rgba(0,0,0,.6);
    position: relative;
    width: 240px;
    height: inherit;
`

//////// router list ////////

export const ComingSoonPage = () => {
    return Dev.map((val) => (
        <>
            <WhiteSpace />
            <Items path={'/coming'} route={val} key={val.title} />
            <WhiteSpace />
            <HrDotted />
        </>
    ))
}

export const RouterPage = ({head, footer}) => {
    return (
        <Container align='left'>
            {head}
            {
                RouterFlat.map(v => <Route key={v.title} {...v}/>)
            }
            {footer}
        </Container>
    )
}


function Items({ route, path, style }) {
    const [open, setOpen] = useState(false)
    const Item = ({ val, style }) => (
        <ListItem button key={val.title} style={style}>
            <ListItemIcon>
                <Icon size='22' style={{color:'#fff',opacity: (path === val.path ? 1 : 0.68 )}} type={val.icon} />
            </ListItemIcon>
            <ListItemText primary={
                <TextM
                    color={0}
                    style={{opacity: (path === val.path ? 1 : 0.6 )}}
                >{val.title}</TextM>
            } />

            {val.open !== undefined ? <Icon size='14' type={open ? 'icon-changyong_shangshou' : 'icon-changyong_xiala'} /> : null}
        </ListItem>
    );
    if (route.child) {
        return (
            <Accordion
                square
                expanded={open}
                onChange={(_, n) => {
                    // console.log(n,'n')
                    setOpen(n)
                }}
                // style={style}
                title={<Item val={{ ...route, open }} />}
                list={route.child.map((v, i) => <Items style={{marginLeft:'8px'}}  path={path} route={v} key={i} />)}
            />
        )
    } else if (route.href) {
        return <a
            style={{
            width: '100%',
            pointerEvents:  route.disabled ? 'none' :  'all'
        }} rel="noreferrer" href={route.href} target="_blank"><Item val={route} /></a>
    } else {
        return (
            <LinkStyled
                to={route.path}
                active={path === route.path}
                key={route.title}
                style={{
                    width: '100%',
                    pointerEvents:  route.disabled ? 'none' :  'all'
                }}
            >
                <Item val={route} />
            </LinkStyled>
        )
    }
}

const LinkStyled = styled(Link)`
    display: block;
    color: ${props => props.active ? props.theme.active : 'unset'};
`