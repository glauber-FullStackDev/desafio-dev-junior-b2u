import './styles.css';
import CloseIcon from '../../assets/close.svg';

function ModalDetail({ open, setOpen, car }) {

  

    return (
        <>
            {open &&
                <div className="modal-detail">
                    <div className="content-card" key={car.id}>
                        <img
                            src={CloseIcon}
                            alt="Close"
                            onClick={() => setOpen(false)}
                        />
                        <h2>{car.nome}</h2>
                        <strong>{car.marca}</strong>
                        <strong>{car.ano_fabricacao}</strong>
                        <span>{car.descricao}</span>
                        <span>{`Nome do dono: ${car.nome_dono}`}</span>
                        <span>{`E-mail de contato: ${car.email_dono}`}</span>
                        <span>{`Telefone de contato: ${car.telefone_dono}`}</span>
                    </div>
                </div>
            }
        </>
    );
}

export default ModalDetail;