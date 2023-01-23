import React from "react";
import BaseForm from "../../components/BaseForm/BaseForm";
import schema from "./schema";
import { useContext } from "react";
import Context from "../../context/Context";

const initialValues = {
  name: "",
  brand: "",
  manufacturingYear: "",
  price: "",
  description: "",
  url: "",
  ownerName: "",
  email: "",
  phone: ""
};

const CreateForm = () => {
  const { create } = useContext(Context);

  const handleCreate = async (values) => {
    const res = await create(values);

    return res;
  };

  return (
    <div>
      <BaseForm
        initialValues={initialValues}
        schema={schema}
        handleSubmit={handleCreate}
        isCreate={true}
      >
        Adicionar novo veículo a venda
      </BaseForm>
    </div>
  );
};

export default CreateForm;
