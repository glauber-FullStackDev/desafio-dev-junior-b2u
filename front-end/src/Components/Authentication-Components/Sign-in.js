import { Link, useNavigate } from "react-router-dom";
import { Center, Top, Logo } from "../../Styles/Authentication-style";
import HeaderComponent from "../Header";
import { useState } from "react";
import { signInService } from "../../Services/auth-service";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function Logar(e) {
    e.preventDefault();
    const promise = signInService(email, password);
    promise.then((res) => {
      localStorage.setItem("infoToken", res.token);
      console.log(res.token);
      alert("Bem-vindo");
      navigate("/");
    });
    promise.catch((err) => {
      alert("Falha ao fazer o Login.");
    });
  }

  return (
    <Center>
      <HeaderComponent />

      <Logo>
        <img
          src="https://uploaddeimagens.com.br/images/004/306/151/full/Web_%281%29.png?1674232212"
          alt="Logo Web cars"
        />
      </Logo>
      <form onSubmit={Logar}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/Cadastro">
        <h2>Primeira vez? Cadastre-se!</h2>
      </Link>
    </Center>
  );
}
