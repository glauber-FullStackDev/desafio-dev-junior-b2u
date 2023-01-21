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
                        <span>{`Nome do dono: ${car.dono.nome}`}</span>
                        <span>{`E-mail de contato: ${car.dono.email}`}</span>
                        <span>{`Telefone de contato: ${car.dono.telefone}`}</span>
                    </div>
                </div>
            }
        </>
    );
}

export default ModalDetail;