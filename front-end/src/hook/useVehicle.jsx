import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/BASE_URL";
import { VehicleContext } from "../context/vehicleContext";
import { goToHome } from "../router/coordinator";
import Swal from "sweetalert2";

const useVehicle = () => {
  const navigate = useNavigate();
  const { setVehicles, setVehiclesDetails, setErrorMessage } =
    useContext(VehicleContext);

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const getVehicles = () => {
    axios
      .get(`${BASE_URL}/vehicles`)
      .then((res) => {
        setVehicles(res.data.response);
        setVehiclesDetails();
      })
      .catch((error) => setVehicles(error.response.data.message));
  };

  const createVehicle = (body, clean) => {
    axios
      .post(`${BASE_URL}/vehicles/create`, body)
      .then((res) => {
        Toast.fire({ icon: "success", title: res.data.response });
        setErrorMessage();
        clean();
      })
      .catch((error) => setErrorMessage(error.response.data.message));
  };

  const updateVehicle = (body, clean) => {
    axios
      .put(`${BASE_URL}/vehicles/update`, body)
      .then((res) => {
        Toast.fire({ icon: "success", title: res.data.response });
        setVehiclesDetails();
        goToHome(navigate);
      })
      .catch((error) => setErrorMessage(error.response.data.message));
  };

  const deleteVehicle = (id) => {
    axios
      .delete(`${BASE_URL}/vehicles/delete/${id}`)
      .then((res) => {
        Toast.fire({ icon: "success", title: res.data.response });
        setVehiclesDetails();
        getVehicles();
      })
      .catch((error) =>
        Toast.fire({ icon: "error", title: error.response.data.message })
      );
  };
  return { createVehicle, getVehicles, deleteVehicle, updateVehicle };
};

export default useVehicle;
