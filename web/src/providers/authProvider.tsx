import React, {
    useState, createContext, useMemo, ReactNode,
  } from 'react';
  
  interface AuthProps {
    children: ReactNode
  }
  
  interface AuthContextType {
    auth: any;
    setAuth: React.Dispatch<React.SetStateAction<any>>;
  }
  
  export const AuthContext = createContext<AuthContextType>({
    auth: undefined,
    setAuth: () => {},
  });
  
  export default function AuthProvider({ children }: AuthProps) {
    const [auth, setAuth] = useState();
    const value = useMemo(() => ({
      auth, setAuth,
    }), [auth]);
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }
  