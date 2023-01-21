import api from "./Http";

export const getCarros = async () => {
  try {
    const { data } = await api.get("carros");

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCarro = async (id: number) => {
  try {
    const { data } = await api.delete(`carro/${id}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postCarro = async (car: ICarro) => {
  try {
    const { data } = await api.post("carros", car);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const putCarro = async (id: number, car: ICarro) => {
  try {
    const { data } = await api.put(`carro/${id}`, car);
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export interface ICarro {
  nome: string;
  marca: string;
  anoDeFabricacao: number;
  desc: string;
  imagem: string;
  proprietario: {
    nome: string;
    email: string;
    telefone: string;
  };
}
