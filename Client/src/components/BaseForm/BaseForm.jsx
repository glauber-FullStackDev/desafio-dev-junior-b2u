import React from "react";
import { Form, Formik } from "formik";
import MyTextInput from "../TextInput/MyTextInput";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const BaseForm = ({
  initialValues,
  schema,
  handleSubmit,
  children,
  enableReinitialize,
  isCreate,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className={styles.baseForm}>
      <Formik
        initialValues={initialValues}
        validateOnMount
        validationSchema={schema}
        enableReinitialize
      >
        {(props) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(props.values);
            }}
          >
            <div className={styles.baseFormDiv}>
              <div
                className={
                  isCreate
                    ? `${styles.baseFormStandard} ${styles.createTrue}`
                    : `${styles.baseFormStandard} ${styles.createFalse}`
                }
              >
                <p>Informações do veículo</p>
                <MyTextInput
                  label="Modelo"
                  name="name"
                  type="text"
                  placeholder="Modelo do veículo"
                />
                <MyTextInput
                  label="Marca"
                  name="brand"
                  type="text"
                  placeholder="Fabricante do veículo"
                />
                <MyTextInput
                  label="Ano de Fabricação"
                  name="manufacturingYear"
                  type="text"
                  placeholder="Ano de fabricação"
                />
                <MyTextInput
                  label="Preço"
                  name="price"
                  as="text"
                  placeholder="Preço do veículo"
                />
                <MyTextInput
                  label="Descrição"
                  name="description"
                  as="textarea"
                  placeholder="Características do veículo"
                />
              </div>

              {isCreate && (
                <div className={styles.baseFormCreate}>
                  <p>Informações do proprietário</p>
                  <MyTextInput
                    label="Nome proprietário"
                    name="ownerName"
                    as="text"
                    placeholder="Insira seu nome"
                  />
                  <MyTextInput
                    label="Email proprietário"
                    name="email"
                    as="text"
                    placeholder="Insira seu email"
                  />
                  <MyTextInput
                    label="Telefone"
                    name="phone"
                    as="text"
                    placeholder="Insira seu número de celular"
                  />
                </div>
              )}
            </div>

            <button
              disabled={!props.isValid}
              type="submit"
              onClick={handleClick}
            >
              {children}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BaseForm;
