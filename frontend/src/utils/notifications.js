import { toast } from 'react-toastify';

export const notifySucess = (message) => {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
        theme: 'colored',
        closeOnClick: true,
        pauseOnHover: false
    })
}

export const notifyError = (message) => {
    toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
        theme: 'colored',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    })
}