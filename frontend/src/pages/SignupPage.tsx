import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { login, signup } from "../common/auth";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState(<p></p>);
  const [disabledCreateCustomer, setDisabledCreateCustomer] = useState(true);
  const [disabledButton, setDisabledButton] = useState("button-secondary");

  function handleSignup(e: React.SyntheticEvent) {
    e.preventDefault();
    signup(email, password, fullname, phone);
    login(email, password);
    window.location.replace("/customer/list");
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function handleconfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }
  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handleFullName(e: React.ChangeEvent<HTMLInputElement>) {
    setFullName(e.target.value);
  }
  function handlePhone(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(e.target.value);
  }

  useEffect(() => {
    if (password === confirmPassword) {
      setPasswordMessage(<p></p>);
    } else if (password === "") {
      setPasswordMessage(<p></p>);
    } else {
      setPasswordMessage(
        <p className="warning-message">As senhas não coicidem</p>
      );
    }
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== "" &&
      fullname !== "" &&
      phone !== "" &&
      email !== ""
    ) {
      setDisabledButton("button-primary");
      setDisabledCreateCustomer(false);
    } else {
      setDisabledButton("button-secondary");
      setDisabledCreateCustomer(true);
    }
  }, [password, confirmPassword, email, fullname, phone]);

  return (
    <div id="login-page" className="page">
      <section className="signup-page">
        <h1>Registre-se</h1>
        <p>Insira o seu e-mail e sua senha para se cadastrar no sistema</p>
        <form action="" method="post" className="">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Nome
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              onChange={handleFullName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Telefone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="form-input"
              onChange={handlePhone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-input"
              onChange={handleEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-input"
              onChange={handlePassword}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password" className="form-label">
              Confirme a senha
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="form-input"
              onChange={handleconfirmPassword}
            />
          </div>
          <div className="form-group password-message">{passwordMessage}</div>
          <div className="buttons">
            <button
              type="submit"
              className={disabledButton}
              disabled={disabledCreateCustomer}
              onClick={handleSignup}
            >
              Ok
            </button>
            <button type="reset" className="button-secondary">
              Limpar
            </button>
          </div>
        </form>

        <p>
          <Link to={"/login"}>Voltar para o login</Link>
        </p>
        <p>
          <Link to={"/"}>Voltar para a pagina inicial</Link>
        </p>
      </section>
    </div>
  );
};

export default SignupPage;
