import { createContext, useState } from "react";

export const carsContext = createContext([]);

export const CarsProvider = ({ children }) => {
  const [carsState, setCarsState] = useState([]);
  return (
    <carsContext.Provider value={{ carsState, setCarsState }}>
      {children}
    </carsContext.Provider>
  );
};
