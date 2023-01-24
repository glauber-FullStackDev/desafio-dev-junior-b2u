import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Config from "../../config";
import { getVehicleData } from "../common/pageData";
import Vehicle, { editVehicle } from "../common/vehicle";
import TitleBar from "../components/TitleBar";

const AddVehiclePage = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState(0);

  const [disabledAddVehicle, setDisabledAddVehicle] = useState(true);
  const [disabledButton, setDisabledButton] = useState("button-secondary");


  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await getVehicleData(1, 1, id)).json();
      if (data) {
        const vehicle: Vehicle = {...data.data};
        setName(vehicle.name!);
        setBrand(vehicle.brand!);
        setYear(vehicle.year!);
        setPrice(vehicle.price!);
        setDescription(vehicle.description!);
      }
    };
    fetchData();
  }, []);

  function handleEditVehicle(e: React.SyntheticEvent) {
    e.preventDefault();
    editVehicle(id!, name, brand, price, year, description);
    window.location.replace("/customer/list");
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
      <TitleBar title="Editar anúncio" location="customer-edit" />
        <p>Atualize os dados do seu veículo abaixo.</p>
        <form action="" method="post" className="">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Veículo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
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
              value={brand}
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
              value={year}
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
              value={price}
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
              value={description}
              className="form-input"
              onChange={handleDescription}
            />
          </div>
          <div className="buttons">
            <button
              type="submit"
              className={disabledButton}
              disabled={disabledAddVehicle}
              onClick={handleEditVehicle}
            >
              Ok
            </button>
            {/* <button type="reset" className="button-secondary">
              Limpar
            </button> */}
          </div>
        </form>

      </section>
    </div>
  );
};

export default AddVehiclePage;
