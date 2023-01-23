import React, { useState } from "react";
import useCRUD from "../../hooks/useCrud";
import BaseForm from "../../components/BaseForm/BaseForm";
import schema from "./schema";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import Context from "../../context/Context";

const initialValues = {
  name: "",
  brand: "",
  manufacturingYear: "",
  price: "",
  description: "",
  url: "",
};

const EditForm = () => {
  //Get id from url params
  let { id } = useParams();
  const { findById, update } = useContext(Context);

  const [owner, setOwner] = useState(initialValues);

  useEffect(() => {
    const getOwner = async () => {
      setOwner(await findById(id));
    };

    getOwner();
  }, []);

  const handleSubmit = (values) => {
    update(id, values);
    //return redirect page
  };

  return (
    <div>
      <BaseForm
        initialValues={owner}
        schema={schema}
        handleSubmit={handleSubmit}
        isCreate={false}
      >
        Atualizar veículo
      </BaseForm>
    </div>
  );
};

export default EditForm;
