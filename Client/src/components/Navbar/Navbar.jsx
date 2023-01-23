import React from "react";
import styles from "./navbar.module.css";

const Navbar = ({}) => {
  return (
    <div className={styles.navContainer}>
      <nav style={{backgroundColor: "#fcfcfc", boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.2)"}} className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          <img style={{width: "150px"}} src="https://cdn.discordapp.com/attachments/723634067857473606/1067056422396895292/logoAzul-removebg-preview.png" alt="Bitcoin to You logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse w-100" id="navbarNavDropdown">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home<span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Sobre a aplicação
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create">
                Adicionar novo veículo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;
