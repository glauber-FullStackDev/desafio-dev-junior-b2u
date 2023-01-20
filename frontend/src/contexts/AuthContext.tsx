import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from '../../services/api'

type SignInData = {
  username: string
  password: string
}

type User = {
  id: string
  name: string
  email: string
}

type AuthContextTypes = {
  isAuthenticated: boolean
  signIn: (data: SignInData) => void
  user: User | null
  accessToken: string
}

type AuthContextProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextTypes)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState('')
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'usestore-token' : token } = parseCookies()
    const { 'usestore-userdata' : user } = parseCookies()
    if(token) {
      console.log('user',user)
      setUser(JSON.parse(user))
      setAccessToken(token)
    }
  },[])

  async function signIn({ username, password }: SignInData){
    const res = await api.post('login', {
      username, 
      password
    })

    console.log('resdata',res)
    const { accessToken :token, user} = res.data

    setAccessToken(token)


    setCookie(undefined, 'ng-cash-token', token, {
      maxAge: 60 * 60 * 24 // 1 day 
    })

    setCookie(undefined, 'ng-cash-userdata', JSON.stringify(user), {
      maxAge: 60 * 60 * 24 // 1 day 
    })

    setUser(user)
    Router.push('/Landing')
    
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user, accessToken}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}