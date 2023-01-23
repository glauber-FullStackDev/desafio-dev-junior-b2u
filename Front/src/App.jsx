import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer"

export function App() {
    return (
        <div className="App">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}


/*
    Para criar uma tag HTML rapidamente e criar um id ou uma class, para id 'div#nomeid' e para class 'div.nomeclass'

    <Outlet />:
    Deve ser usado em elementos de rota pai para renderizar seus elementos de rota filho. é colocado aqui no App e o <Route> do App engloba todas as outras rotas para o outlet renderizar as outras rotas a partir dele.

    ele faz uma concatenação de componentes, o App so tem o navbar e já que é o componente pai das outras 3 rotas dentro dele, o navbar que foi feito aqui dentro vai sempre se manter em tela independente das rotas que forem chamadas. o App meio que vira um componente constante, Sempre estará lá, por isso que ele é o componente de rota pai que engloba todas as outras rotas

*/