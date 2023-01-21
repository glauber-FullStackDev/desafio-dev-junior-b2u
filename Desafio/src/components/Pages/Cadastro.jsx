import Input from '../Input/Input';
import styles from './Cadastro.module.css';
import api from '../Services/Api';
import { useState } from 'react';

function Cadastro() {
    const [carro, setCarro] = useState('');
    const [marca, setMarca] = useState('');
    const [fabricacao, setFabricacao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dono, setDono] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    /*
      Uma função que faz a validação dos dados obrigatorios,
      caso os campos estejam vazios, retorna um alert, senão,
      faz o envio dos dados para a api
    */
    const validacaoCadastrarCarro = () => {
        if (!carro || !marca || !fabricacao || !dono || !telefone) {
            alert("Por favor preencha todos os campos obrigatórios! ( * )");
            return false;
        }
        return true;
    }

    /* 
      Uma função assincrona que realiza o envio dos dados para criar
      um novo anúncio de carro
    */
    async function handleSubmit(e) {
        e.preventDefault();

        if(!validacaoCadastrarCarro()) {
            return;
        }
         
        try {
            await api.post('/', {
              carro,
              marca,
              fabricacao,
              descricao,
              dono, 
              email, 
              telefone
            });
    
            setCarro('')
            setMarca('')
            setFabricacao('')
            setDescricao('')
            setDono('')
            setEmail('')
            setTelefone('')
        } catch(error) {
            console.log(error);
        }
      }

    // HTML
    return(
        <div className={styles.image}>
            <section className={styles.box}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.car}>
                        <h1>Registro do Carro</h1>

                        <Input type="text" value={carro} placeholder="*Insira o nome do carro" onChange={(e => setCarro(e.target.value))}/>
                        <Input type="text" value={marca} placeholder="*Insira a marca do carro" onChange={(e => setMarca(e.target.value))}/>
                        <Input type="text" value={fabricacao} placeholder="*Insira o ano de fabricação" onChange={(e => setFabricacao(e.target.value))}/>
                        <Input type="text" value={descricao} placeholder="Insira uma breve descrição" onChange={(e => setDescricao(e.target.value))}/>
                    </div>

                    <div className={styles.owner}>
                        <h1>Registro do Propietario</h1>

                        <Input type="text" value={dono} placeholder="*Nome do proprietario" onChange={(e => setDono(e.target.value))}/>
                        <Input type="text" value={email} placeholder="E-mail" onChange={(e => setEmail(e.target.value))}/>
                        <Input type="tel" value={telefone} placeholder="*Telefone" onChange={(e => setTelefone(e.target.value))}/>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Cadastro;