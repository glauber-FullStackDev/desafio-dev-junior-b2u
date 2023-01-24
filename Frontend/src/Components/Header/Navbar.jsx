import React, { useState } from "react";
import ModalAddCar from "../modal/CadastroModal";

import { Button, Menu } from "./Styled";

function Navbar() {
  const [modalAdd, setModalAdd] = useState(false);

  const openModal = async () => {
    setModalAdd(true);
  };

  return (
    <>
      <Menu>
        <ul>
          <li>
            <Button onClick={() => openModal()}>Cadastrar</Button>
          </li>
        </ul>
      </Menu>

      <ModalAddCar
        isOpen={modalAdd}
        setModalAdd={() => setModalAdd(!modalAdd)}
      ></ModalAddCar>
    </>
  );
}

export default Navbar;
