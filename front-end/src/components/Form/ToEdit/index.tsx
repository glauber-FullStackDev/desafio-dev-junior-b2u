import * as S from "./styles";
import { useState } from "react";
import { update } from "../../../services/axios";

interface Data {
  id_car?: string;
  name_car?: string;
  brand?: string;
  year_of_manufacture?: number;
  description?: string;
  name?: string;
  email?: string;
  phone?: string;
  created_at?: Date;
  updated?: Date;
}
interface IdCardProps {
  state: { idState: string };
  setState: React.Dispatch<React.SetStateAction<{ idState: string }>>;
}

export const Update = ({ state, setState }: IdCardProps) => {
  const [dados, setDados] = useState<Data[]>([]);
  const [name_car, setName_car] = useState("");
  const [brand, setBrand] = useState("");
  const [year_of_manufacture, setYear_of_manufacture] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const idCarState = state.idState;

  const resetForm = () => {
    setName_car("");
    setBrand("");
    setYear_of_manufacture("");
    setDescription("");
    setName("");
    setEmail("");
    setPhone("");
  };
  const handleSubmit = async (e: React.SyntheticEvent, idCarState: string) => {
    e.preventDefault();
    const data: Data = {
      name_car: name_car,
      brand: brand,
      year_of_manufacture: parseInt(year_of_manufacture),
      description: description,
      name: name,
      email: email,
      phone: phone,
    };

    const res = await update(state.idState, data);
    if (res === true) {
      setTimeout(() => {
        setSuccess(true);
      }, 200);

      resetForm();

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <S.ContainerForm>
      <S.ContainerTitle>
        <S.Title>Atualizar informações Veículo </S.Title>
      </S.ContainerTitle>

      <S.ContainerBox>
        <S.Input
          type="text"
          placeholder="Nome do Carro"
          value={name_car}
          onChange={(e) => {
            setName_car(e.target.value);
          }}
        />
        <S.Input
          type="text"
          placeholder="Marca"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />
        <S.Input
          type="number"
          placeholder="Ano de fabricação"
          value={year_of_manufacture}
          onChange={(e) => {
            setYear_of_manufacture(e.target.value);
          }}
        />
        <S.Input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <S.Input
          type="text"
          placeholder="Nome do dono"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <S.Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <S.Input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </S.ContainerBox>
      <S.ContainerButton>
        <button
          type="submit"
          onClick={(event) => {
            handleSubmit(event, idCarState);
          }}
        >
          Confirmar
        </button>
      </S.ContainerButton>
      {success && <S.Success>Dados enviados com sucesso!</S.Success>}
      {error && <S.Error>Preencha todos os campos!</S.Error>}
    </S.ContainerForm>
  );
};
