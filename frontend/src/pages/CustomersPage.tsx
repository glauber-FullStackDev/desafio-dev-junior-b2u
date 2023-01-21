import React, { useState } from "react";
import { logout } from "../common/auth";

const CustomersPage = () => {
  const handleLogout = () => {
    logout();
    window.location.replace("/");
  };

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

  if (!!window.sessionStorage.getItem("session-token"))
    console.log(window.sessionStorage.getItem("session-token"));

  return (
    <div className="container">
      <div className="content-page">
        <h1>Cotação do Dólar</h1>
        <h2>Cotações</h2>
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
        <a href="" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default CustomersPage;
