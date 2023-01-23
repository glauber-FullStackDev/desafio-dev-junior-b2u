import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import { CarContext } from "../../context/CarContext";
import { ICar, ICarContext } from "../../context/types.car";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const AddCar: React.FC = () => {
  const { addCar } = useContext(CarContext) as ICarContext;
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
    //@ts-ignore
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
      addCar(values);
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
      {(formik.errors.name && formik.touched.name) && (
        <p className="text-red-500">{formik.errors.name}</p>
      )}
      <Input
        label="Marca"
        onChange={formik.handleChange}
        value={formik.values.brand}
        type="text"
        name="brand"
      />
      {(formik.errors.brand && formik.touched.brand) && (
        <p className="text-red-500">{formik.errors.brand}</p>
      )}
      <Input
        label="Ano"
        onChange={formik.handleChange}
        value={formik.values.year}
        type="number"
        name="year"
      />
      {(formik.errors.year && formik.touched.year) && (
        <p className="text-red-500">{formik.errors.year}</p>
      )}
      <Input
        label="Dono"
        onChange={formik.handleChange}
        value={formik.values.owner.name}
        type="text"
        name="owner.name"
      />
      {(formik.errors.owner?.name && formik.touched.owner?.name) && (
        <p className="text-red-500">{formik.errors.owner?.name}</p>
      )}
      <Input
        label="Email"
        onChange={formik.handleChange}
        value={formik.values.owner.email}
        type="text"
        name="owner.email"
      />
      {(formik.errors.owner?.email && formik.touched.owner?.email) && (
        <p className="text-red-500">{formik.errors.owner?.email}</p>
      )}
      <Input
        label="Telefone"
        onChange={formik.handleChange}
        value={formik.values.owner.tel}
        type="text"
        name="owner.tel"
      />
      {(formik.errors.owner?.tel && formik.touched.owner?.tel) && (
        <p className="text-red-500">{formik.errors.owner?.tel}</p>
      )}
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

export default AddCar;
