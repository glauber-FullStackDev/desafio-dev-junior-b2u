import { ICar } from "./ICar"
export interface IUser{
    name:string,
    email:string,
    tel:string,
    id?:string,
    carros?:ICar[]
}




