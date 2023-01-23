import axios from "axios";

const useCRUD = ({ endpoint }) => {
  const baseURL = `http://localhost:3333/${endpoint}`;

  const create = async (data) => {
    const res = await axios.post(baseURL, data);

    return res;
  };
  const findAll = async () => {
    const res = await axios.get(baseURL);

    return res.data;
  };

  const findById = async (id) => {
    const res = await axios.get(`${baseURL}/${id}`);

    return res.data;
  };
  const update = async (id, data) => {
    const res = await axios.patch(`${baseURL}/${id}`, data);

    return res;
  };
  const remove = async (id) => {
    const res = await axios.delete(`${baseURL}/${id}`);

    return res;
  };

  return {
    create,
    findAll,
    findById,
    update,
    remove,
  };
};

export default useCRUD;
