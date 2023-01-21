import React from "react";
import BaseForm from "../BaseForm/BaseForm";
import schema from "./schema";

const initialValues = {
  name: "",
  brand: "",
  manufacturingYear: "",
  description: "",
};

const EditForm = () => {
  //Get id from url params
  // let { id } = useParams();
  // const data = useContext(Context);
  // const owner = data.find((item) => item.id === id);
  // const initialValues = {owner};

  console.log(initialValues);
  return (
    <div>
      <BaseForm initialValues={initialValues} schema={schema}>
        Atualizar veículo
      </BaseForm>
    </div>
  );
};

export default EditForm;
