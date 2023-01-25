// hooks
import { createContext, useEffect, useState } from 'react'
// interfaces
import { User } from "../../interfaces/User";
import { ErrorRequest } from "../../interfaces/ErrorRequest";
// api
import { api } from "../../hooks/api";

interface Props {
    children: React.ReactNode
}

interface UserStorage {
    id: string
    name?: string
    email: string
    password: string
    contact_phone?: string
    token?: string
}

interface ContentAuthContext {
    user: UserStorage | null
    login: (user: User) => void
    register: (user: User) => void
    logout: () => void
    loading: boolean
    error: ErrorRequest | false
    success: string
}

export const AuthContext = createContext<ContentAuthContext | null>(null)

export function AuthContextProvider ({ children }: Props){

    const [user, setUser] = useState<UserStorage | null>(null)
    const [error, setError] = useState<ErrorRequest | false>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<string>('')
    
    useEffect(() => {
        const userStorage = JSON.parse(localStorage.getItem('user') || '{}')
        
        if(userStorage.id) {
            setUser(userStorage)
            return
        }
    }, [])
    

    const restartStates = () => {
        setError(false)
        setLoading(false)
        setSuccess('')
    }

    const login = async (userLogin: User) => {
        restartStates()
        setLoading(true)
        try {
            const data = await api.post('users/login', userLogin)
                .then(res => { return res.data })
                .catch(err => { return err.response.data })

            if(data.error) {
                setError(data.error)
                return
            }

            setUser(data.user)
            setSuccess(data.message)
            localStorage.setItem('user', JSON.stringify(data.user))
            api.defaults.headers.authorization = `Bearer ${data.user.token}`
            return

        } catch (error: any) {
            console.log(`Error: ${error}`)
        } finally {  
            setLoading(false)
        }
    }

    const register = async(userRegister: User) => {
        restartStates()
        setLoading(true)
        try {
            const data = await api.post('users', userRegister)
                .then(res => { return res.data })
                .catch(err => { return err.response.data })

            if(data.error) {
                setError(data.error)
                return
            }

            setSuccess(data.message)
            return

        } catch (error: any) {
            console.log(`Error: ${error}`)
        } finally {  
            setLoading(false)
        }
        return 
    }

    const logout = () => {
        restartStates()
        api.defaults.headers.authorization = ``
        localStorage.removeItem('user')
        setUser(null)
    }

    const contentAuth: ContentAuthContext = {
        login,
        user,
        loading,
        logout,
        error,
        success,
        register
    }

    return (
        <AuthContext.Provider value={ contentAuth }>
            { children }
        </AuthContext.Provider>
    )
}