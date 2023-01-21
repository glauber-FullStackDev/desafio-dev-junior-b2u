import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string(),
  brand: Yup.string(),
  manufacturingYear: Yup.string(),
  description: Yup.string(),
});