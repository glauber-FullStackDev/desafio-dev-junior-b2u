import { useEffect, useState } from "react";
import { getIndexData } from "../common/pageData";
import Card from "../components/Card";
import User from "../common/user";
import Vehicle from "../common/vehicle";

const IndexPage = () => {
  const navigate = (inc: number) => {
    if (page > 1 || inc === 1) {
      setPage(page + inc);
    }
  };

  const date = new Date();
  const today = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const [dateTime, setDateTime] = useState(today);
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(1);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await getIndexData(1, 1)).json();
      setVehicles(data.data);
    };
    fetchData();
  }, []);

  let vehiclesList;

  vehiclesList = vehicles.map((vehicle: Vehicle, index) => (
    <Card
      name={vehicle.name}
      brand={vehicle.brand}
      price={vehicle.price}
      year={vehicle.year}
      description={vehicle.description}
      owner={vehicle.User!.fullname}
      phone={vehicle.User!.phone}
      email={vehicle.User!.email}
      cardId={index.toString()}
      key={index}
    />
  ))

  return (
    <div className="container">
      <div className="content-page">
        <h1>Veículos</h1>
        <h2>Anúncios</h2>
        <div>
            { vehiclesList }
        </div>
        <div className="align">
          <label>Data</label>
          <input
            type="date"
            name="date"
            placeholder="DD/MM/YYYY"
            id=""
            onChange={(e) => setDateTime(e.target.value)}
          />
          <label>Resultados por página</label>
          <select name="rows" id="">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <span className="navigator">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage(1);
              }}
            >
              &lt;&lt;
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              &lt;
            </a>
            <span>Página {page}</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(1);
              }}
            >
              &gt;
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage(5);
              }}
            >
              &gt;&gt;
            </a>
          </span>
        </div>
        <div className="quotes-table">
          <span className="navigator">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage(1);
              }}
            >
              &lt;&lt;
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage(page - 1);
              }}
            >
              &lt;
            </a>
            <span>Página {page}</span>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              &gt;
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage(1);
              }}
            >
              &gt;&gt;
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
