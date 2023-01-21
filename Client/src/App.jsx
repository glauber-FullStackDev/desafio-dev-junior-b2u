import { useState } from "react";
import { carInfo } from "./mock/cars";
import Context from "./context/Context";
import "./App.css";
import VechicleList from "./components/VechicleCard/VehicleList";
import CreateForm from "./components/CreateForm/CreateForm";
import EditForm from "./components/EditForm/EditForm";
import RoutesComp from "./routes";

function App() {
  const [data, setData] = useState(carInfo);

  return (
    <div className="App">
      <header></header>
      <Context.Provider value={data}>
        <RoutesComp />
      </Context.Provider>
    </div>
  );
}

export default App;
