import {  useContext, createContext } from 'react'

// import { useWeb3, BN, multiCallArr, utils, ZERO_ADDRESS } from '../../web3'

const INIT = {}

export const Context = createContext(INIT)

function useUserInfo() {
    return INIT
}

function UserProvider({ children }) {
    const data = useUserInfo()
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider

export const useUser = () => useContext(Context)