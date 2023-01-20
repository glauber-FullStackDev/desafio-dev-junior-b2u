import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const CarAdd = () => {

    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [ano, setAno] = useState("");
    const [descricao, setDescricao] = useState("");
    const [donoNome, setDonoNome] = useState("");
    const [donoEmail, setDonoEmail] = useState("");
    const [donoTelefone, setDonoTelefone] = useState("");
    const navigate = useNavigate()

    const saveCar = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000', {
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
                <form onSubmit={saveCar} className="form-control mt-5 ">
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

                <button className="button btn btn-danger mb-3 w-100">Salvar</button>
            </form>
            </div>
        </div >
  )
}

export default CarAdd
