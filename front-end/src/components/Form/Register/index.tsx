import * as S from "./styles";
import { useState } from "react";
import { api, save } from "../../../services/axios";

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

export const Register = ({ state, setState }: IdCardProps) => {
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

  const resetForm = () => {
    setName_car("");
    setBrand("");
    setYear_of_manufacture("");
    setDescription("");
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleSubmit = async (e: any) => {
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

    if (
      name_car &&
      brand &&
      year_of_manufacture &&
      description &&
      name &&
      phone != ""
    ) {
      api.get("fetchAll").then((response) => setDados(response.data));

      save(data);

      setSuccess(true);

      resetForm();

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
    <S.ContainerForm action="">
      <S.ContainerTitle>
        <S.Title>Cadastrar Veículo </S.Title>
      </S.ContainerTitle>

      <S.ContainerBox>
        <S.Input
          type="text"
          placeholder="Nome do Carro"
          value={name_car}
          onChange={(e) => {
            setName_car(e.target.value);
          }}
          required
        />
        <S.Input
          type="text"
          placeholder="Marca"
          required
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
        />
        <S.Input
          type="number"
          placeholder="Ano de fabricação"
          required
          value={year_of_manufacture}
          onChange={(e) => {
            setYear_of_manufacture(e.target.value);
          }}
        />
        <S.Input
          type="text"
          placeholder="Descrição"
          required
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <S.Input
          type="text"
          placeholder="Nome do dono"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <S.Input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <S.Input
          type="text"
          placeholder="Telefone"
          required
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </S.ContainerBox>
      <S.ContainerButton>
        <button type="submit" onClick={handleSubmit}>
          Confirmar
        </button>
      </S.ContainerButton>
      {success && <S.Success>Dados enviados com sucesso!</S.Success>}
      {error && <S.Error>Preencha todos os campos!</S.Error>}
    </S.ContainerForm>
  );
};
