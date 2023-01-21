import React from "react";
import Header from "../Styles/Header-style";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillCar, AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { IoMdCreate } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { LogOutService } from "../Services/auth-service";

export default function HeaderComponent() {
  const getting = localStorage.getItem("infoToken");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);
  const Navigate = useNavigate();

  function Logout() {
    const promise = LogOutService(token);
    console.log(token);
    promise.then(() => alert("Até mais!"));
    promise.catch((err) => console.log(err));
    Navigate("/");
    localStorage.removeItem("infoToken");
    setTimeout(() => {
      window.location.reload(true);
    }, 100);
  }

  return (
    <>
      <Header>
        <img src="https://uploaddeimagens.com.br/images/004/306/151/full/Web_%281%29.png?1674232212" />
        <span></span>
        <span></span>
        <span></span>
        <div>
          <AiOutlineHome onClick={() => Navigate("/")} />
          <AiFillCar onClick={() => Navigate("/Meus-Anuncios")} />
          <IoMdCreate
            style={token === null ? { display: "none" } : { display: "block" }}
            onClick={() => Navigate("/Postar")}
          />
          {token === null ? (
            <BsPersonCircle onClick={() => Navigate("/Login")} />
          ) : (
            <BiLogOut onClick={() => Logout()} />
          )}
        </div>
      </Header>
    </>
  );
}
