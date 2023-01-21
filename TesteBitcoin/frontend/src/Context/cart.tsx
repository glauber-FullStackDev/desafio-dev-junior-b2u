import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


interface userProps{
    email: string;
    password: string;
}


export const CartContext = createContext({});

export default function CartProvider({children}:any){

    
    const [user, setUser] = useState<userProps>();

    useEffect(() => {
      const userToken = localStorage.getItem("user_token");
      const usersStorage = localStorage.getItem("users_bd");
  
      if (userToken && usersStorage) {
        const hasUser = JSON.parse(usersStorage)?.filter(
          (user:any) => user.email === JSON.parse(userToken).email
        );
  
        if (hasUser) setUser(hasUser[0]);
      }
    }, []);
  
    function login(email:string, password:string){

      const usersStorage = JSON.parse(localStorage.getItem("users_bd")!);
  
      const hasUser = usersStorage?.filter((user:any) => user.email === email);
  
      if (hasUser?.length) {
        if (hasUser[0].email === email && hasUser[0].password === password) {
          const token = Math.random().toString(36).substring(2);
          localStorage.setItem("user_token", JSON.stringify({ email, token }));
          setUser({ email, password });
          return;
        } else {
          alert("E-mail ou senha incorretos")
        }
      } else {
        alert("Usuário não cadastrado")
      }
    };
  
    function AddUser(email: string, password:string){
      const usersStorage = JSON.parse(localStorage.getItem("users_bd")!);
  
      const hasUser = usersStorage?.filter((user:any) => user.email === email);
  
      if (hasUser?.length) {
        alert("Já tem uma conta com esse E-mail")
      }
  
      let newUser;
  
      if (usersStorage) {
        newUser = [...usersStorage, { email, password }];
      } else {
        newUser = [{ email, password }];
      }
  
      localStorage.setItem("users_bd", JSON.stringify(newUser));
      alert("Usuario Cadastrado")
      return;
    };
  
    function Logout(){
      setUser(undefined);
      localStorage.removeItem("user_token");
    };
  

    return(
        <CartContext.Provider value={{authenticated: !!user, user, login, Logout, AddUser}}>
            {children}
        </CartContext.Provider>
    )
}