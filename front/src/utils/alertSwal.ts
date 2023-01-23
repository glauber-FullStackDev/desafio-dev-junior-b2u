import Swal, { SweetAlertOptions } from 'sweetalert2';

const alertSwal = async (swal: SweetAlertOptions) => await Swal.fire(swal);

export { alertSwal };
