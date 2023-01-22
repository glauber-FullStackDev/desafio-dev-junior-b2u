// hooks
import { useContext, useEffect, useState } from 'react'
// context
import { AuthContext } from '../context/auth/AuthContext'
// api
import { api } from './api'

export function useCheckAuth() {
    const { user } = useContext(AuthContext)!
    const [auth, setAuth] = useState<boolean>(false)

    useEffect(() => {
        if(user) {
            setAuth(true)
            api.defaults.headers.authorization = `Bearer ${user.token}`
        }else {
            setAuth(false)
        }
    }, [user])

    return { auth }
}