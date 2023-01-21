import { Link, useNavigate } from "react-router-dom";
import { Center, Top, Logo } from "../../Styles/Authentication-style";
import HeaderComponent from "../Header";
import { useState } from "react";
import { signUpService } from "../../Services/auth-service";

export default function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();

  const navigate = useNavigate();

  function EnviarCadastro(e) {
    e.preventDefault();

    const promise = signUpService(name, email, number, password);
    promise.then((res) => {
      navigate("/Login");
      alert("Usuário Cadastrado com sucesso");
    });
    promise.catch((err) => {
      alert("Falha ao fazer o cadastro.");
    });
  }

  return (
    <Center>
      <HeaderComponent />

      <Logo>
        <img
          src="https://uploaddeimagens.com.br/images/004/306/151/full/Web_%281%29.png?1674232212"
          alt="Logo do Web Cars"
        />
      </Logo>
      <form onSubmit={EnviarCadastro}>
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type="text"
          placeholder="Número de telefone"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          maxLength={11}
        />
        <button type="submit">Cadastrar-se</button>
      </form>
      <Link to="/Login">
        <h2>Já está cadastrado, faça login agora!</h2>
      </Link>
    </Center>
  );
}
