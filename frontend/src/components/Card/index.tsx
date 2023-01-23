import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { CarContext } from "../../context/CarContext";
import { ICarContext } from "../../context/types.car";

interface ICard {
  name: string | undefined;
  brand: string | undefined;
  year: number | undefined;
  ownerName: string | undefined;
  ownerEmail: string | undefined;
  ownerTel: string | undefined;
  carId: string | undefined;
}

const Card: React.FC<ICard> = ({
  name,
  brand,
  year,
  ownerName,
  ownerEmail,
  ownerTel,
  carId,
}) => {
  const navigate = useNavigate();
  const { removeCar } = useContext(CarContext) as ICarContext;

  return (
    <div className="bg-gray-300 p-5 flex items-center justify-between mt-6">
      <div>
        <h3 className="font-bold font-display text-lg text-gray-700">{name}</h3>
        <div className="flex flex-col">
          <span className="font-normal font-display text-gray-600">
            Marca: {brand}
          </span>
          <span className="font-normal font-display text-gray-600">
            Ano: {year}
          </span>
        </div>
        <h3 className="font-bold font-sans text-lg text-gray-700">Dono:</h3>
        <div className="flex flex-col">
          <span className="font-normal font-display text-gray-600">
            {ownerName}
          </span>
          <span className="font-normal font-display text-gray-600">
            Email: {ownerEmail}
          </span>
          <span className="font-normal font-display text-gray-600">
            Telefone: {ownerTel}
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={() => navigate(`edit/${carId}`)}>
          <AiOutlineEdit size={20} />
        </button>
        <button>
          <BsTrash onClick={() => removeCar(carId)}size={20} />
        </button>
      </div>
    </div>
  );
};

export default Card;
