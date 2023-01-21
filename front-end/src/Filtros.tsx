import { ICarro } from "./Service/Api";

const Filtros = ({ listaCarros, filtrarMarca }: any) => {
  const marcas = listaCarros?.map((carro: ICarro) => carro.marca);

  const setMarcas = new Set(marcas) as Set<string>;

  return (
    <div className="filtros">
      <div className="marca">
        <label htmlFor="">Marca: </label>
        <select onChange={(e) => filtrarMarca(e.target.value)} name="" id="">
          <option selected value="Todas">
            Todas
          </option>
          {!![...setMarcas] &&
            [...setMarcas].map((marca: string) => (
              <option value={marca}>{marca}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Filtros;
