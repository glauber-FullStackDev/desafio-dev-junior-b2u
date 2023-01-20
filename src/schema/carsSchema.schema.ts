import * as yup from "yup";
import { SchemaOf } from "yup";

import { ICarCreate } from "../interfaces/car.interface";

export const carCreateSchema: SchemaOf<ICarCreate> = yup.object().shape({
  name: yup.string().required("<name> is a required field"),
  brand: yup
    .string()
    .required("<brand> is a required field")
    .max(15, "<brand> must have up to 15 characters"),
  price: yup
    .number()
    .required("<price> is a required field")
    .min(0, "Must be positive"),
  year: yup
    .number()
    .required("<year> is a required field")
    .min(0, "Must be positive"),
  description: yup
    .string()
    .max(150, "<description> must have up to 150 characters"),
  owner: yup
    .object({
      email: yup
        .string()
        .email("<owner{email}> needs to be valid")
        .required("<owner{email> is a required field"),
      name: yup.string().required("<owner{name}> is a required field"),
      cellphone: yup
        .string()
        .required("<owner{cellphone}> is a required field"),
    })
    .required(),
});
