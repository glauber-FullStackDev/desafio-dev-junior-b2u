export interface ICar{
    donoId?:string,
    name:string,
    marca:string,
    ano_fabri:string,
    descricao:string,
    id?:string,
    dono?:{
        name:string,
        email:string,
        tel:string
    }
}

export interface ICarCreated{
    donoId:string,
    name:string,
    marca:string,
    ano_fabri:string,
    descricao:string,
    id?:string,
}