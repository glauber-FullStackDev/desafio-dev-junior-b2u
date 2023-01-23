import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import '../styles/global-pages.css'
import './styles.css'

const url = import.meta.env.VITE_URL

export function Anunciar() {
    const [donos, setDonos] = useState([])
    const [nome, setNome] = useState('')
    const [marca, setMarca] = useState('')
    const [anoFabricacao, setAnoFabricacao] = useState(0)
    const [descricao, setDescricao] = useState('')
    const [donoCarro, setDonoCarro] = useState('')
    const [fotoCarro, setFotoCarro] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        const  donosURL = `${url}/donos`;

        async function getDonos(url) {
            const response = await fetch(url);
            const data = await response.json();

            setDonos(data);
            setDonoCarro(data[0].nome)
        }
        
        getDonos(donosURL);
        
    }, [])

    // transformar em base64
    const getBase64 = async (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file); 
            reader.onloadend = () => {
                const base64data = reader.result;   
                resolve(base64data);
            }
        });
    }

    function submit(e) {
        e.preventDefault();
      
        if(donoCarro === '') {
            alert('Registre-se antes como Dono pra poder criar um anúncio');
            return;
        }
        
        if(nome === '' || marca === '' || donoCarro === '' || descricao === '' || fotoCarro === null) {
            alert('preencha todos os campos corretamente');
            return;
        }

        let render = fotoCarro ? getBase64(fotoCarro) : null

        axios.post(`${url}/donos/busca`, {
            nome: donoCarro
        })
        .then(response => {
            render.then(renderResponse => {
                axios.post(`${url}/carros`, {
                    nome: nome,
                    marca: marca,
                    ano_fabricacao: anoFabricacao,
                    descricao: descricao,
                    dono_carro_id: response.data[0].id,
                    foto_carro: renderResponse ? renderResponse.split(",")[1] : null
                })
                .then(() => {
                    alert("Anunciado com sucesso");
                    navigate("/");
                })
                .catch(error => console.log(error))

            }).catch(error => {
                console.log(error);
            });

        })
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h2 className="title">Anuncie o seu Carro</h2>
            <div className="form-container">
                <form onSubmit={submit}>
                    <label>
                        <p>Nome:</p>
                        <input 
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                            required
                        />
                    </label>
                    <label>
                        <p>Marca:</p>
                        <input 
                            type="text"
                            placeholder="Digite a marca"
                            onChange={(e) => setMarca(e.target.value)}
                            value={marca}
                            required
                        />  
                    </label>
                    <label>
                        <p>Ano de fabricação</p>
                        <input 
                            type="number"
                            min={1}
                            placeholder="Digite o ano de fabricação"
                            onChange={(e) => setAnoFabricacao(e.target.value)}
                            value={anoFabricacao}
                            required
                        />  
                    </label>
                    <label>
                        <p>Dono do carro:</p>
                        {donos.length > 0 ? null : <Link className="link" to={'/dono-registro'}>Registre-se como um dono antes de criar um anúncio</Link>}
                        <select onChange={(e) => setDonoCarro(e.target.value)}>
                            {donos.length > 0 && donos.map((item) => <option>{item.nome}</option>)}
                        </select>
                    </label>
                    <label>
                        <p>Descrição:</p>
                        <textarea 
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder="Digite a descrição"
                        ></textarea>  
                    </label>
                    <label>
                        <p>Foto do carro:</p>
                        <input type="file" onChange={(e) => setFotoCarro(e.target.files[0])} />
                    </label>
                    <button type="submit">Anunciar</button>
                </form>
            </div>
        </div>
    )
}