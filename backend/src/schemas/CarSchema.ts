import * as yup from "yup";

export const GetSchema = yup.object().shape({
	nameCar: yup.string().required("Name is required."),
	brandCar: yup.string().required("Car Brand is required."),
	year: yup.string().required("Year is required."),
	description: yup.string().required("Description is required."),
  owner: yup.string().required("Owner is required."),
  email: yup.string().email("Please, type e-mail valid").required("E-mail is required."),
  phone: yup.string().required("Phone is required.")

});
