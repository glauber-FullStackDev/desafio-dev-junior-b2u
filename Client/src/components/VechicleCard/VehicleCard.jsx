import React from "react";
import styles from "./vehicleCard.module.css";
import Swal from "sweetalert2";
import useCRUD from "../../hooks/useCrud";
import { useNavigate } from "react-router-dom";

const VehicleCard = ({ item, onRemove }) => {
  const { remove } = useCRUD({ endpoint: "vehicles" });
  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não será capaz de reverter!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, desejo deletar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deletado!", "Seu arquivo foi deletado com sucesso.", "sucesso");
        remove(item.id);
        onRemove(item.id);
      }
    });
  };
  const handleEdit = () => {
    navigate(`edit/${item.id}`);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img
          src={item.url}
          alt="Vehicle image"
        ></img>
      </div>
      <div className={styles.carInfoContainer}>
        <div className={styles.carInfoDiv}>
          <p>{item.brand} {item.name} {item.manufacturingYear}</p>
          <p>{item.description}</p>
          <p>Proprietário: {item.ownerName}</p>
        </div>
        <span>{item.price}</span>
        <div className={styles.ownerInfo}></div>
      </div>
      <div className={styles.buttonsDiv}>
        <button onClick={handleEdit} className={styles.editButton}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
            alt="Pencil icon for edition"
          />
        </button>
        <button onClick={handleDelete} className={styles.deleteButton}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7491/7491835.png"
            alt="Trash icon for delete"
          />
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
