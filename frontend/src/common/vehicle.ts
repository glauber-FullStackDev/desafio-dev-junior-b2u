import Config from "../../config";
import User from "./user";

interface Vehicle {
  id?: string;
  name?: string;
  brand?: string;
  price?: number;
  year?: number;
  description?: string;
  owner?: string;
  phone?: string;
  email?: string;
  cardId?: string;
  User?: User;
}

async function addVehicle(name: string, brand: string, price: number, year: number, description: string){
  const token = sessionStorage.getItem("session-token");
  const request = new Request(`${Config.backend}/vehicles`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer '+ token
    },
    body: JSON.stringify({ name, brand, price, year, description })
  });

  try {
    const response = await fetch(request);
    const result = await response.json();
  } catch (error) {
    console.log(error);
    
  }
}

async function editVehicle(id: string, name: string, brand: string, price: number, year: number, description: string){
  const token = sessionStorage.getItem("session-token");
  const request = new Request(`${Config.backend}/vehicles`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer '+ token
    },
    body: JSON.stringify({ id, name, brand, price, year, description })
  });

  try {
    const response = await fetch(request);
    const result = await response.json();
  } catch (error) {
    console.log(error);
    
  }
}

// async function deleteVehicle(id: string, name: string, brand: string, price: number, year: number, description: string){
async function deleteVehicle(id: string){
  const token = sessionStorage.getItem("session-token");
  const request = new Request(`${Config.backend}/vehicles`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer '+ token
    },
    body: JSON.stringify({ id })
  });

  try {
    const response = await fetch(request);
    const result = await response.json();
  } catch (error) {
    console.log(error);
    
  }
}

export {addVehicle, editVehicle, deleteVehicle};
export default Vehicle;