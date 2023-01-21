export interface HttpRequest {
  body?: any
  params?: any
  files?: any
  headers?: any
  accountId?: string
}

export interface HttpResponse {
  statusCode: number
  body: any
}
