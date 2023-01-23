import React, { useCallback, useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import { CarContext } from "../../context/CarContext";
import { ICar, ICarContext } from "../../context/types.car";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";

const EditCar: React.FC = () => {
  const { updateCar, getCar, car } = useContext(CarContext) as ICarContext;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCar(id);
    console.log(JSON.stringify(id));
    console.log(car)
  }, []);

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
      name: car?.name !== undefined ? car?.name : "",
      brand: car?.brand !== undefined ? car?.brand : "",
      year: car?.year !== undefined ? car?.year : 0,
      owner: {
        name: car?.owner?.name !== undefined ? car?.owner.name : "",
        email: car?.owner?.email !== undefined ? car?.owner.email : "",
        tel: car?.owner?.tel !== undefined ? car?.owner.tel : "",
      },
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values: ICar) => {
      updateCar(id?.toString(), values);
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
        <Button onClick={formik.handleSubmit}>Voltar</Button>
        {formik.isSubmitting ? (
          <Button type="submit" onClick={formik.handleSubmit}>
            Salvando
          </Button>
        ) : (
          <Button type="submit" onClick={formik.handleSubmit}>
            Salvar
          </Button>
        )}
      </div>
    </div>
  );
};

export default EditCar;
