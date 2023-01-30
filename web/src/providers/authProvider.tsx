import React, {
    useState, createContext, useMemo, ReactNode,
  } from 'react';
  
  interface AuthProps {
    children: ReactNode
  }
  
  export interface Auth {
    token: string,
    id: string,
    imageUrl: string,
    password: string,
    phoneNumber: string,
    email: string
  }

  interface AuthContextType {
    auth: Auth
    setAuth: React.Dispatch<React.SetStateAction<any>>;
  }
  
  export const AuthContext = createContext<AuthContextType>({
    auth: {} as Auth,
    setAuth: () => {},
  });
  
  export default function AuthProvider({ children }: AuthProps) {
    const [auth, setAuth] = useState({} as AuthContextType['auth']);
    const value = useMemo(() => ({
      auth, setAuth,
    }), [auth]);
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }
  