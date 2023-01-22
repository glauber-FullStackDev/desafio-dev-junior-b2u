import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Config from "../../config";

const AddVehiclePage = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState(0);

  const [disabledAddVehicle, setDisabledAddVehicle] = useState(true);
  const [disabledButton, setDisabledButton] = useState("button-secondary");

  function handleAddVehicle(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleBrand(e: React.ChangeEvent<HTMLInputElement>) {
    setBrand(e.target.value);
  }
  function handleDescription(e: React.ChangeEvent<HTMLInputElement>) {
    setDescription(e.target.value);
  }
  function handlePrice(e: React.ChangeEvent<HTMLInputElement>) {
    setPrice(Number.parseFloat(e.target.value));
  }
  function handleYear(e: React.ChangeEvent<HTMLInputElement>) {
    setYear(Number.parseFloat(e.target.value));
  }

  useEffect(() => {
    if (
      name !== "" &&
      brand !== "" &&
      description !== "" &&
      year > 0 &&
      price > 0
    ) {
      setDisabledButton("button-primary");
      setDisabledAddVehicle(false);
    } else {
      setDisabledButton("button-secondary");
      setDisabledAddVehicle(true);
    }
  }, [name, brand, description, year, price]);

  return (
    <div id="add-page" className="page">
      <section className="content-page">
        <h1>Adicione um anúncio</h1>
        <p>Insira os dados do seu veículo abaixo.</p>
        <form action="/vehicle" method="put" className="">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Veículo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              onChange={handleName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="brand" className="form-label">
              Marca
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              className="form-input"
              onChange={handleBrand}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year" className="form-label">
              Ano
            </label>
            <input
              type="number"
              name="year"
              id="year"
              className="form-input"
              onChange={handleYear}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Preço
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="form-input"
              onChange={handlePrice}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Descrição
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-input"
              onChange={handleDescription}
            />
          </div>
          <div className="buttons">
            <button
              type="submit"
              className={disabledButton}
              disabled={disabledAddVehicle}
              onClick={handleAddVehicle}
            >
              Ok
            </button>
            <button type="reset" className="button-secondary">
              Limpar
            </button>
          </div>
        </form>

        <p>
          <Link to={"/customer/list"}>Voltar para seus anúncios</Link>
        </p>
      </section>
    </div>
  );
};

export default AddVehiclePage;
