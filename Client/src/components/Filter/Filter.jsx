import React from "react";
import styles from "./filter.module.css";

const Filter = ({ handleFilter }) => {
  return (
    <div className={styles.filterDiv}>
      <label htmlFor="filter">Filtrar por nome ou marca</label>
      <input id="filter" onChange={handleFilter} />
    </div>
  );
};

export default Filter;
