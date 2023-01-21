import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Header";
import {
  deleteCarro,
  getCarros,
  ICarro,
  postCarro,
  putCarro,
} from "./Service/Api";
import Card from "./Card";
import styled from "styled-components";
import AppStyles from "./AppStyles";
import NewCarModal from "./NewCarModal";
import CarDetailsModal from "./CarDetailsModal";
import EditCarModal from "./EditCarModal";
import Filtros from "./Filtros";

const ListaCarros = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto;
  justify-items: center;
  /* grid-auto-columns: 25%; */
  gap: 5.1rem;
  padding-inline: 5rem;
  padding-block: 3rem;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
`;

function App() {
  const [listaCarros, setListaCarros] = useState() as any[];
  const [listaCarrosFilter, setListaCarrosFilter] = useState() as any[];
  const [showNewCar, setShowNewCar] = useState(false);
  const [showCarDetails, setShowCarDetails] = useState(false);
  const [showCarEdition, setShowCarEdition] = useState(false);
  const [carro, setCarro] = useState();

  const listarCarros = async () => {
    const carros = await getCarros();
    setListaCarros(carros);
  };

  const deletarCarro = async (id: number) => {
    const carro = await deleteCarro(id);
    listarCarros();
  };

  const inserirCarro = async (car: ICarro) => {
    const carro = await postCarro(car);
    listarCarros();
  };

  const exibirCarroDetalhes = (car: ICarro) => {
    setCarro(car);
    if (!!car) {
      setShowCarDetails(true);
    }
  };

  const editarCarro = async (id: number, newCar: ICarro) => {
    const car = putCarro(id, newCar);
    console.log({ id });

    listarCarros();
  };

  const filtrarMarca = (marca: string) => {
    if (marca === "Todas") {
      listarCarros();
      setListaCarrosFilter(listaCarros);
      return;
    }
    const filteredByMarca = listaCarros.filter(
      (carro: ICarro) => carro.marca === marca
    );
    setListaCarrosFilter(filteredByMarca);
  };

  useEffect(() => {
    listarCarros();
  }, []);

  useEffect(() => {
    setListaCarrosFilter(listaCarros);
  }, [listaCarros]);

  return (
    <>
      <AppStyles>
        <Header />
        <Filtros listaCarros={listaCarros} filtrarMarca={filtrarMarca} />
        <ListaCarros>
          {!!listaCarrosFilter &&
            listaCarrosFilter.map((carro: any) => (
              <Card
                key={carro.id}
                exibirCarroDetalhes={exibirCarroDetalhes}
                setShowCarEdition={setShowCarEdition}
                deletarCarro={deletarCarro}
                carro={carro}
                setCarro={setCarro}
              />
            ))}
        </ListaCarros>

        <div onClick={() => setShowNewCar(true)} className="add-car">
          <div className="add-car__btn">+</div>
          <p>Cadastrar novo veículo</p>
        </div>
        {showNewCar && (
          <NewCarModal
            setShowNewCar={setShowNewCar}
            inserirCarro={inserirCarro}
          />
        )}
        {showCarDetails && (
          <CarDetailsModal
            carro={carro}
            setShowCarDetails={setShowCarDetails}
          />
        )}
        {showCarEdition && (
          <EditCarModal
            setShowCarEdition={setShowCarEdition}
            carro={carro}
            editarCarro={editarCarro}
          />
        )}
      </AppStyles>
    </>
  );
}

export default App;
