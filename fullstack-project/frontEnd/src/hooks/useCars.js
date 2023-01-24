import { useEffect } from "react";
import apiBitCars from "../service";
import { useContext } from "react";
import { carsContext } from "../providers";

const useCars = ({ token }) => {
  const { carsState, setCarsState } = useContext(carsContext);

  const listCars = async () => {
    await apiBitCars
      .get(`/cars/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setCarsState(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listCars();
  }, []);

  return carsState;
};
export default useCars;
