import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import { CarContext } from "../../context/CarContext";
import { ICar, ICarContext } from "../../context/types.car";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";

const EditCar: React.FC = () => {
  const { updateCar, getCar } = useContext(CarContext) as ICarContext;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Nome é obrigatório"),
    brand: Yup.string().required("Marca é obrigatório"),
    year: Yup.number().required("Ano é obrigatório"),
    owner: Yup.object().shape({
      name: Yup.string().required("Nome é obrigatório"),
      email: Yup.string().required("Email é obrigatório"),
      tel: Yup.string().required("Telefone é obrigatório"),
    }),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      brand: "",
      year: 0,
      owner: {
        name: "",
        email: "",
        tel: "",
      },
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values: ICar) => {
      updateCar(id, values);
      navigate("/");
    },
  });
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <Input
        label="Nome"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        type="text"
        name="name"
      />
      <Input
        label="Marca"
        onChange={formik.handleChange}
        value={formik.values.brand}
        type="text"
        name="brand"
      />
      <Input
        label="Ano"
        onChange={formik.handleChange}
        value={formik.values.year}
        type="number"
        name="year"
      />
      <Input
        label="Dono"
        onChange={formik.handleChange}
        value={formik.values.owner.name}
        type="text"
        name="owner.name"
      />
      <Input
        label="Email"
        onChange={formik.handleChange}
        value={formik.values.owner.email}
        type="text"
        name="owner.email"
      />
      <Input
        label="Telefone"
        onChange={formik.handleChange}
        value={formik.values.owner.tel}
        type="text"
        name="owner.tel"
      />
      <div className="flex justify-between gap-4 pt-4">
        <Button onClick={() => navigate("/")}>Voltar</Button>
        {formik.isSubmitting ? (
          <Button type="submit" onClick={formik.handleSubmit}>
            Cadastrando
          </Button>
        ) : (
          <Button type="submit" onClick={formik.handleSubmit}>
            Cadastrar
          </Button>
        )}
      </div>
    </div>
  );
};

export default EditCar;
