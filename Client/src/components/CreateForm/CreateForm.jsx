import React from "react";
import BaseForm from "../BaseForm/BaseForm";
import schema from "./schema";

const initialValues = {
  name: "",
  brand: "",
  manufacturingYear: "",
  description: "",
};

const CreateForm = () => {
  return (
    <div>
      <BaseForm
        initialValues={initialValues}
        schema={schema}
      >
        Adicionar novo veículo a venda
      </BaseForm>
    </div>
  );
};

export default CreateForm;
