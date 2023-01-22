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
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
          src="https://www.autoo.com.br/fotos/2016/1/1280_960/chevrolet_astra-sedan_2011_1_1412016_492_1280_960.jpg"
          alt="alt descricao"
        ></img>
      </div>
      <div className={styles.carInfoContainer}>
        <div className={styles.carInfoDiv}>
          <p>{item.brand} {item.name} {item.manufacturingYear}</p>
          <p></p>
          <p></p>
          <p>{item.description}</p>
        </div>
        <span>{item.price}</span>
        <div className={styles.ownerInfo}></div>
      </div>
      <div className={styles.buttonsDiv}>
        <button onClick={handleEdit} className={styles.editButton}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
            alt=""
          />
        </button>
        <button onClick={handleDelete} className={styles.deleteButton}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7491/7491835.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
