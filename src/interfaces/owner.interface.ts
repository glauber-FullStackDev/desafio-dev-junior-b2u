export interface IOwnerCreate {
  name: string;
  email: string;
  cellphone: string;
}

export interface IOwnerCreateResponse extends IOwnerCreate{
  id:string
}


export interface IOwnerUpdate {
  id?:string ;
  name?: string;
  email?: string;
  cellphone?: string;
}

