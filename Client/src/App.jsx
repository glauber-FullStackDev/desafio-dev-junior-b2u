import Context from "./context/Context";
import "./App.css";
import RoutesComp from "./routes";
import useCRUD from "./hooks/useCrud";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const CRUD = useCRUD({ endpoint: "vehicles" });

  return (
    <div className="App">
      <Navbar />
      <Context.Provider value={CRUD}>
        <RoutesComp />
      </Context.Provider>
    </div>
  );
}

export default App;
