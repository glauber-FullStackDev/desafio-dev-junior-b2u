import { isAuthenticated, logout } from "../common/auth";
import { Link } from "react-router-dom";
import { deleteVehicle } from "../common/vehicle";

type Props = {
  title?: string;
  subtitle?: string;
  location?: string;
  id?: string;
};

const TitleBar = (props: Props) => {

  function handleLogout(){
    logout();
    window.location.replace("/");
  }
  
  function handleDelete(){
    deleteVehicle(props.id!);
    window.location.replace("/customer/list");
  }


  function handleNavigate() {
    window.location.replace("/customer/list")
  }

  let bar;

  if (props.location === "index-list") {
    bar = (
      <menu className="menu-items">
        <h1>{props.title}</h1>
        <Link to={"/login"} className="button-primary">Entrar</Link>
        <Link to={"/signup"} className="button-primary">Registrar-se</Link>
      </menu>
    );
  } else if(props.location === "index-logged"){
    bar = (
      <menu className="menu-items">
        <h1>{props.title}</h1>
        <Link to={"/customer/list"} className="button-primary">Meus anúncios</Link>
        <Link to={"/"} className="button-primary" onClick={handleLogout}>Sair</Link>
      </menu>
    )
  } else if(props.location === "customer-list"){
    bar = (
      <menu className="menu-items">
        <h1>{props.title}</h1>
        {/* <Link to={"/"} className="button-primary">Início</Link>
        <Link to={"/customer/add"} className="button-primary">Criar anúncio</Link>
        <Link to={"/"} className="button-primary" onClick={handleLogout}>Sair</Link> */}
        <Link to={"/"} className="button-primary">Início</Link>
        <Link to={"/customer/add"} className="button-primary">Criar anúncio</Link>
        <Link to={"/"} className="button-primary" onClick={handleLogout}>Sair</Link>
      </menu>
    )
  } else if(props.location === "customer-detail"){
    bar = (
      <menu className="menu-items">
        <h1>{props.title}</h1>
        <Link to={"/customer/edit/" + props.id} className="button-primary">Editar anúncio</Link>
        <Link to={"/"} className="button-primary" onClick={handleDelete}>Excluir anúncio</Link>
        <Link to={"/"} className="button-primary" onClick={handleNavigate}>Voltar</Link>
      </menu>
    )
  } else if(props.location === "view-detail"){
    bar = (
      <menu className="menu-items">
        <h1>{props.title}</h1>
        <Link to={"/"} className="button-primary" onClick={handleNavigate}>Voltar</Link>
      </menu>
    )
  }else if(props.location === "customer-edit"){
    bar = (
      <menu className="menu-items">
        <h1>{props.title}</h1>
        <Link to={"/customer/list"} className="button-primary" onClick={handleNavigate}>Voltar</Link>
      </menu>
    )
  } else {
    bar = (
      <menu className="menu-items">
        <h1>{props.title}</h1>
      </menu>
    )
  }
  

  return (<>
    {bar}
    <h2>{props.subtitle}</h2>
    <div className="container">

    </div>
  </>);
};

export default TitleBar;
