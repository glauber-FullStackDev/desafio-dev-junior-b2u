import CarProvider from "./context/CarContext";
import { Route, Routes } from "react-router-dom";
import AddCar from "./pages/AddCar";
import Home from "./pages/Home";

function App() {
  return (
    <CarProvider>
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700 font-display">
          Gerenciamento de Carros
        </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddCar />} />
        </Routes>
      </div>
    </CarProvider>
  );
}

export default App;
