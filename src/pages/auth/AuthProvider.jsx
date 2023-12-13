import { useContext, createContext, useState, useEffect } from "react"

import React from 'react'

const AuthContext = createContext({
    isAuth: false,

})

function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false)

    return (
        <AuthContext.Provider value={{ isAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)