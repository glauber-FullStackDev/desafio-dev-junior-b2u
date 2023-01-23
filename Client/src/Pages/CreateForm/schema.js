import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("*"),
  brand: Yup.string().required("*"),
  manufacturingYear: Yup.string().required("*"),
  price: Yup.string().required("*"),
  description: Yup.string().required("*"),
  ownerName: Yup.string().required("*"),
  email: Yup.string().required("*"),
  phone: Yup.string().required("*"),
});
