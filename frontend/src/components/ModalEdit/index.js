import CloseIcon from '../../assets/close.svg';
import api from '../../services/api';
import { notifyError, notifySucess } from '../../utils/notifications';

function ModalEdit({ openEdit, setOpenEdit, setOpen, form, setForm, defaultForm, handleChanceForm, setCars, currentID }) {

    async function handleSubmit(e) {
        e.preventDefault();


        try {
            const response = await api.put(`/carros/${currentID}`,
                {
                    nome: form.nome,
                    marca: form.marca,
                    ano_fabricacao: form.ano_fabricacao,
                    descricao: form.descricao,
                    nome_dono: form.nome_dono,
                    email_dono: form.email_dono,
                    telefone_dono: form.telefone_dono
                });

            if (response.status > 204) {
                return notifyError(response.data.mensagem);
            }

            notifySucess(response.data.mensagem);

            const { data } = await api.get(`/carros`);

            setCars([...data]);

            setOpenEdit(false);
            setOpen(false);
            setForm({...defaultForm});

        } catch (error) {
            notifyError(error.response.data.mensagem);
        }


    }
    return (
        <>
            {openEdit &&
                <div className='modal-detail'>
                    <form
                        className='container-form'
                        onSubmit={handleSubmit}
                    >
                        <img
                            src={CloseIcon}
                            alt="Close"
                            onClick={() => {
                                setOpenEdit(false)
                                setOpen(false)
                            }}
                        />
                        <h3 className='form-title'>Edite o anúncio</h3>
                        <div className='container-inputs'>
                            <div className='inputs'>
                                <label htmlFor='nome'>Modelo</label>
                                <input
                                    type="text"
                                    name='nome'
                                    value={form.nome}
                                    onChange={handleChanceForm}
                                />
                            </div>
                            <div className='inputs'>
                                <label htmlFor='marca'>Marca</label>
                                <input
                                    type="text"
                                    name='marca'
                                    value={form.marca}
                                    onChange={handleChanceForm}
                                />
                            </div>
                            <div className='inputs'>
                                <label htmlFor='ano_fabricacao'>Ano de Fabricação</label>
                                <input
                                    type="number"
                                    name='ano_fabricacao'
                                    value={form.ano_fabricacao}
                                    onChange={handleChanceForm}
                                />
                            </div>
                            <div className='inputs'>
                                <label htmlFor='descricao'>Descrição</label>
                                <input
                                    type="text"
                                    name='descricao'
                                    value={form.descricao}
                                    onChange={handleChanceForm}
                                />
                            </div>
                            <div className='inputs'>
                                <label htmlFor='nome_dono'>Nome do Dono</label>
                                <input
                                    type="text"
                                    name='nome_dono'
                                    value={form.nome_dono}
                                    onChange={handleChanceForm}
                                />
                            </div>
                            <div className='inputs'>
                                <label htmlFor='email_dono'>E-mail do Dono</label>
                                <input
                                    type="text"
                                    name='email_dono'
                                    value={form.email_dono}
                                    onChange={handleChanceForm}
                                />
                            </div>
                            <div className='inputs'>
                                <label htmlFor='telefone_dono'>Telefone do Dono</label>
                                <input
                                    type="text"
                                    name='telefone_dono'
                                    value={form.telefone_dono}
                                    onChange={handleChanceForm}
                                />
                            </div>
                        </div>
                        <button>Atualizar</button>
                    </form>
                </div>
            }
        </>
    );
}

export default ModalEdit;