import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { login, isAuthenticated } from "../common/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>("");
  const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     window.location.replace("/customer/list");
  //   }
  // }, [authenticated]);

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleLogin(e: React.MouseEvent) {
    e.preventDefault();
    login(email, password);
    // setAuthenticated(true);
    
    // if (window.sessionStorage.getItem("session-token")) {
      // setToken(window.sessionStorage.getItem("session-token"));
    // }
    if(isAuthenticated()){
      window.location.replace("/customer/list");
    }
    // isAuthenticated();
    // window.location.replace("/customer/list");
  }

  return (
    <div id="login-page" className="page">
      <section className="login-page">
        <h1>Bem-vindo</h1>
        <p>Insira o seu e-mail e sua senha para entrar no sistema</p>
        <form action="login" method="get" className="">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="text"
              name="email"
              id="input-email"
              className="form-input"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Senha
            </label>
            <input
              type="password"
              name="password"
              id="input-password"
              className="form-input"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="buttons">
            <button
              type="submit"
              className="button-primary"
              onClick={handleLogin}
            >
              Ok
            </button>
            <button type="submit" className="button-secondary">
              Limpar
            </button>
          </div>
        </form>
        <p>
          Ainda não está registrado? <Link to={"/signup"}>Registre-se</Link>
        </p>
        <p>
          Esqueceu a senha? <Link to={"/forgot"}>Recuperar a senha</Link>
        </p>
        <p>
          <Link to={"/"}>Voltar para a pagina inicial</Link>
        </p>
      </section>
    </div>
  );
};

export default LoginPage;
