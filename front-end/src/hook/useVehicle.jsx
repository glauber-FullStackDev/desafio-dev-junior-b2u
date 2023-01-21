import axios from "axios";
import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../constants/BASE_URL'
import { VehicleContext } from "../context/vehicleContext";
import { goToHome } from "../router/coordinator";
import Swal from "sweetalert2";


const useVehicle = () => {
    const navigate = useNavigate()
    const { setVehicles, setVehiclesDetails } = useContext(VehicleContext)
    const [errorMessage, setErrorMessage] = useState()

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
            .then(res =>{
                setVehicles(res.data.response)
                setVehiclesDetails()})
            .catch(error => setVehicles(error.response.data.message))
    }

    const changeVehicle = (url, body, clean) => {
        axios
            .post(`${BASE_URL}${url}`, body)
            .then(res => {
                Toast.fire({icon:'success',title:res.data.response})
                setErrorMessage()
                clean()
            })
            .catch(error => setErrorMessage(error.response.data.message))
    }

    const updateVehicle = (url, body, clean) => {
        axios
            .put(`${BASE_URL}${url}`, body)
            .then(res => {
                Toast.fire({icon:'success',title:res.data.response})
                setVehiclesDetails()
                goToHome(navigate)
            })
            .catch(error => setErrorMessage(error.response.data.message))
    }

    const deleteVehicle = (url) => {
        console.log(`${BASE_URL}${url}`)
        axios
            .delete(`${BASE_URL}${url}`)
            .then(res => {
                Toast.fire({icon:'success',title:res.data.response})
                setVehiclesDetails()
                getVehicles()
            })
            .catch(error => Toast.fire({icon:'error',title:error.response.data.message}))
    }
    return { changeVehicle, getVehicles, errorMessage, deleteVehicle, updateVehicle }

}

export default useVehicle