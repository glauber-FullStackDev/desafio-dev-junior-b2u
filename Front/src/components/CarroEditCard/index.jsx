import { useState, useEffect } from "react"

import './styles.css'

export function CarroEditCard({ carro }) {
    const [donos, setDonos] = useState([])
    const [nome, setNome] = useState('')
    const [marca, setMarca] = useState('')
    const [anoFabricacao, setAnoFabricacao] = useState(0)
    const [donoCarro, setDonoCarro] = useState('')
    const [descricao, setDescricao] = useState('')
    const [fotoCarro, setFotoCarro] = useState(null); 

    const url = import.meta.env.VITE_URL

    useEffect(() => {
        const  donosURL = `${url}/donos`;

        async function getDonos(url) {
            const response = await fetch(url);
            const data = await response.json();

            setDonos(data);
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

        let render = fotoCarro ? getBase64(fotoCarro) : null

        axios.post(`${url}/donos/busca`, {
            nome: donoCarro
        })
        .then(response => {
            render.then(renderResponse => {
                axios.put(`${url}/carros/${carro.id}`, {
                    nome,
                    marca,
                    ano_fabricacao: anoFabricacao,
                    descricao,
                    dono_carro_id: response.data[0].id,
                    foto_carro: renderResponse ? renderResponse.split(",")[1] : null
                })
                .then(() => alert("Campos editados com sucesso"))
                .catch(error => console.log(error))

            })
            .catch(error => console.log(error))
            
        })
        .catch(error => console.log(error))
    }

    function onDelete() {
        axios.delete(`${url}/carros/${carro.id}`)
        .then(() => alert("Registro deletado com sucesso"))
        .catch(error => console.log(error));
    }

    return (
        <div className="edit-card">
            <div className="edit-card-container">
                <h1>Editar</h1>
                <form onSubmit={submit}>
                    <label>
                        Nome:
                        <input
                            type="text"
                            placeholder={carro.nome}
                            onChange={(e) => setNome(e.target.value)}
                            value={carro.nome}
                        />
                    </label>
                    <label>
                        Marca:
                        <input
                            type="text"
                            placeholder={carro.marca}
                            onChange={(e) => setMarca(e.target.value)}
                            value={carro.marca}
                        />
                    </label>
                    <label>
                        Ano de fabricação:
                        <input
                            type="text"
                            placeholder={carro.ano_fabricacao}
                            onChange={(e) => setAnoFabricacao(e.target.value)}
                            value={carro.ano_fabricacao}
                        />
                    </label>
                    <label>
                        Descrição:
                        <textarea 
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder={carro.descricao}
                            value={carro.descricao}
                        ></textarea> 
                    </label>
                    <label>
                        <p>Dono do Carro:</p>
                        <select value={carro.dono_carro.nome} onChange={(e) => setDonoCarro(e.target.value)}>
                            {donos.length > 0 && donos.map((dono) => <option>{dono.nome}</option>)}
                        </select>
                    </label>
                    <label>
                        <p className="file-p">Foto do Carro:</p>
                        <input type="file" onChange={(e) => setFotoCarro(e.target.files[0])} />
                    </label>
                    <button type="submit">Editar</button>
                </form>
                <button className="btn-excluir" onClick={onDelete}>Excluir Registro</button>
                
            </div>
        </div>

    )
}