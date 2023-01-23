import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p>
        <Link to={"/"}>Voltar para a pagina inicial</Link>
      </p>
    </div>
  );
};

export default Footer;
