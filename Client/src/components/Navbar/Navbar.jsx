import React from "react";
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          B2U
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#conteudoNavbarSuportado"
          aria-controls="conteudoNavbarSuportado"
          aria-expanded="false"
          aria-label="Alterna navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create">
                Adicionar novo veículo
              </a>
            </li>
          </ul>
          
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Pesquisar"
              aria-label="Pesquisar"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Pesquisar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
