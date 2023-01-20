import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const CarEdit = () => {

    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [ano, setAno] = useState("");
    const [descricao, setDescricao] = useState("");
    const [donoNome, setDonoNome] = useState("");
    const [donoEmail, setDonoEmail] = useState("");
    const [donoTelefone, setDonoTelefone] = useState("");
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getCarById();
    }, []);

    const getCarById = async () => {
        const response = await axios.get(`http://localhost:4000/${id}`);
        setNome(response.data.nome);
        setMarca(response.data.marca);
        setAno(response.data.ano);
        setDescricao(response.data.descricao);
        setDonoNome(response.data.donoNome);
        setDonoEmail(response.data.donoEmail);
        setDonoTelefone(response.data.donoTelefone);
    };

    const updateClient = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:4000/${id}`, {
                nome,marca, ano, descricao, donoNome, donoEmail, donoTelefone
            });
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Navbar /> 
            <div className="container w-50">
                <form onSubmit={updateClient} className="form-control mt-5 ">
                <div className="form-outline mb-2">
                    <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <label className="form-label">Nome</label>
                </div>

                <div className="form-outline mb-2">
                    <input type="text" className="form-control" value={marca} onChange={(e) => setMarca(e.target.value)} />
                    <label className="form-label">Marca</label>
                </div>

                <div className="form-outline mb-2">
                    <input type="text" className="form-control" value={ano} onChange={(e) => setAno(e.target.value)} />
                    <label className="form-label">ano</label>
                </div>

                <div className="form-outline mb-2">
                    <input type="text" className="form-control" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    <label className="form-label">Descrição</label>
                </div>

                <h3 className='text-center'>Dono: </h3>

                <div className="form-outline mb-2">
                    <input type="text" className="form-control" value={donoNome} onChange={(e) => setDonoNome(e.target.value)} />
                    <label className="form-label">Nome do dono</label>
                </div>

                <div className="form-outline mb-2">
                    <input type="text" className="form-control" value={donoEmail} onChange={(e) => setDonoEmail(e.target.value)} />
                    <label className="form-label">Email do dono</label>
                </div>

                <div className="form-outline mb-2">
                    <input type="text" className="form-control" value={donoTelefone} onChange={(e) => setDonoTelefone(e.target.value)} />
                    <label className="form-label">Telefone do dono</label>
                </div>

                <button className="button btn btn-danger mb-3 w-100">Editar</button>
            </form>
            </div>
        </div >
  )
}

export default CarEdit
