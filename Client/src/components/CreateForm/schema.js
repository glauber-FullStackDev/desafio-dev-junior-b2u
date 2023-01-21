import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('*'),
  brand: Yup.string().required('*'),
  manufacturingYear: Yup.string().required('*'),
  description: Yup.string().required('*'),
});