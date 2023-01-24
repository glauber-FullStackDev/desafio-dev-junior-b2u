export enum Status {
  Error = "Error",
  Ok = "Ok"
}

export interface DataResponse<T> {
  status: Status
  message: string
  code?: number
  token?: string
  data?: T
}
