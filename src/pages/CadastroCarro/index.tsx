import { useState } from "react";
import BotaoCadastro from "../../components/BotaoCadastro";
import Campo from "../../components/Campo";
import Titulo from "../../components/Titulo";
import { Container, Formulario } from "./styles";
import http from '../../http';

const CadastroCarro = () => {

    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState('');
    const [descricao, setDescricao] = useState('');

    const [proprietarioNome, setProprietarioNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        http.post('carros', {
            nome,
            marca,
            ano,
            descricao,
            proprietario: {
                nome: proprietarioNome,
                email,
                telefone
            }
        }).then(() => {
            alert('Anuncio cadastrado');
        })
        
        setNome('');
        setMarca('');
        setAno('');
        setDescricao('');
        setProprietarioNome('');
        setEmail('');
        setTelefone('');
        
        
    }


    return(
        <Container>
            <Formulario onSubmit={aoSubmeter}>
                <Titulo texto='Cadastro'/>
                <Campo
                 estado={nome}
                 setEstado={setNome}
                 tipo='text'
                 rotulo="Digite o nome do carro"
                />

                <Campo
                 estado={marca}
                 setEstado={setMarca}
                 tipo='text'
                 rotulo="Digite a marca do carro"
                />

                <Campo
                 estado={ano}
                 setEstado={setAno}
                 tipo='number'
                 rotulo="Digite o ano do carro"
                />

                <Campo
                 estado={descricao}
                 setEstado={setDescricao}
                 tipo='text'
                 rotulo="Obeservações sobre o carro"
                />

                <Campo
                 estado={proprietarioNome}
                 setEstado={setProprietarioNome}
                 tipo='text'
                 rotulo="nome do proprietário"
                />          

                <Campo
                 estado={email}
                 setEstado={setEmail}
                 tipo='email'
                 rotulo="Email do proprietário"
                />  

                <Campo
                 estado={telefone}
                 setEstado={setTelefone}
                 tipo='phonenumber'
                 rotulo="Telefone do proprietário"
                /> 

                <BotaoCadastro/>

            </Formulario>
        </Container>
    )
}

export default CadastroCarro;



