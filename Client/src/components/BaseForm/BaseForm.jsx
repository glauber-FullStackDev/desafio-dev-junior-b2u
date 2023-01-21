import React from "react";
import { Form, Formik } from "formik";
import MyTextInput from "../TextInput/MyTextInput";

import styles from './styles.module.css'

const BaseForm = ({
  initialValues,
  schema,
  handleSubmit,
  children,
  ...props
}) => {
  return (
    <div className={styles.baseForm}>
      <Formik initialValues={initialValues} validationSchema={schema}>
        {(props) => (
          <Form>
            <MyTextInput
              label="Modelo"
              name="name"
              type="text"
              placeholder="Insira o modelo do carro"
            />
            <MyTextInput
              label="Marca"
              name="brand"
              type="text"
              placeholder="Insira o fabricante do carro"
            />
            <MyTextInput
              label="Ano de Fabricação"
              name="manufacturingYear"
              type="text"
              placeholder="Insira o ano de fabricação do carro"
            />
            <MyTextInput
              label="Descrição"
              name="description"
              as="textarea"
              placeholder="Descreva as características do carro"
            />
            <button type="submit">{children}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BaseForm;
