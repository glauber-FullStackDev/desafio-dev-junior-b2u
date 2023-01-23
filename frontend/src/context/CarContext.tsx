import React, { createContext, useState } from "react";
import { Api } from "../services/api";
import { ICar, ICarContext } from "./types.car";

interface ICarProvider {
  children: React.ReactNode;
}

export const CarContext = createContext<ICarContext | null>(null);

const CarProvider: React.FC<ICarProvider> = ({ children }) => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [car, setCar] = useState<ICar>({} as ICar);

  const getCars = async () => {
    try {
      const response = await Api.get("");
      setCars(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getCar = async (id: any) => {
    try {
      const response = await Api.get(`/${id}`);
      setCar(() => response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const addCar = async (car: ICar) => {
    try {
      await Api.post("", car);
    } catch (error: any) {
      console.log(error);
    }
  };

  const removeCar = async (id: any) => {
    try {
      await Api.delete(`/${id}`);
      window.location.reload();
    } catch (error: any) {
      console.log(error);
    }
  };

  const updateCar = async (id: any, car: ICar) => {
    try {
      await Api.put(`/update/${id}`, car);
    } catch (error: any) {
      console.log(error);
    }
  };

  const value: ICarContext = {
    car,
    cars,
    getCars,
    getCar,
    addCar,
    removeCar,
    updateCar,
  };

  return (
    <CarContext.Provider value={value}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
