import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import CreateForm from "../components/CreateForm/CreateForm";
import EditForm from "../components/EditForm/EditForm";
import VehicleList from "../components/VechicleCard/VehicleList";

const RoutesComp = ({ data }) => {
  return (
    <>
      <BrowserRouter>
        <header />
        <Routes>
          <Route exact path="/" element={<VehicleList />}></Route>
          <Route path="/create" element={<CreateForm />}></Route>
          <Route path="/edit/:id" element={<EditForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesComp;
