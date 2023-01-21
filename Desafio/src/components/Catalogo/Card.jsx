import styles from '../Pages/Catalogo.module.css';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

function Card({ data, onDelete, onEdit }) {

    return(
            <div key={data._id} className={styles.card}>
                <div className={styles.image}>
                    <h1>
                        Dados do anúncio
                    </h1>
                </div>

                <div className={styles.info}>
                    <p><span>Carro:</span> {data.carro}</p>
                    <p><span>Marca</span>: {data.marca}</p>
                    <p><span>Ano:</span> {data.fabricacao}</p>
                    <p><span>Descrição:</span> {data.descricao}</p>

                    <div className={styles.dono}>
                        <p><span>Proprietario:</span> {data.dono}</p>
                        <p><span>Email:</span> {data.email}</p>
                        <p><span>Telefone:</span> {data.telefone}</p>
                    </div>

                </div>

                <div className={styles.botoes}>
                    <button className={styles.btn_remove} onClick={() => onDelete(data._id)}><FaRegTrashAlt/> Excluir</button>
                    <button className={styles.btn_edit} onClick={() => onEdit(data)}><FaEdit/> Editar</button>
                </div>
            </div>
            )
        }

export default Card;