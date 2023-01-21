import { FaSave, FaBan } from 'react-icons/fa';
import styles from '../Pages/Catalogo.module.css';

function EditForm({ data, onSave, onCancel, setEditingData }) {
    return(
        <form>
            <div className={styles.box}>
                <div className={styles.cardEdit}>
                    <h1>Editar dados</h1>
                    <label>
                        Carro:
                        <input className={styles.input} type="text" defaultValue={data.carro} onChange={(e) => setEditingData({...data, carro: e.target.value})} />
                    </label>
                    <label>
                        Marca:
                        <input className={styles.input} type="text" defaultValue={data.marca} onChange={(e) => setEditingData({...data, marca: e.target.value})} />
                    </label>
                    <label>
                        Ano: 
                        <input className={styles.input} type="text" defaultValue={data.fabricacao} onChange={(e) => setEditingData({...data, fabricacao: e.target.value})} />
                    </label>
                    <label>
                        Descrição:
                        <input className={styles.input} type="text" defaultValue={data.descricao} onChange={(e) => setEditingData({...data, descricao: e.target.value})} />
                    </label>
                    <label>
                        Dono:
                        <input className={styles.input} type="text" defaultValue={data.dono} onChange={(e) => setEditingData({...data, dono: e.target.value})} />
                    </label>
                    <label>
                        Email:
                        <input className={styles.input} type="text" defaultValue={data.email} onChange={(e) => setEditingData({...data, email: e.target.value})} />
                    </label>
                    <label>
                        Telefone:
                        <input className={styles.input} type="text" defaultValue={data.telefone} onChange={(e) => setEditingData({...data, telefone: e.target.value})} />
                    </label>
                    <section>
                        <button className={styles.btn_edit} onClick={() => onSave(data)}><FaSave/> Salvar</button>
                        <button className={styles.btn_remove} onClick={onCancel}><FaBan/> Cancelar</button>
                    </section>
                </div>
            </div>
        </form>
    )
}

export default EditForm;