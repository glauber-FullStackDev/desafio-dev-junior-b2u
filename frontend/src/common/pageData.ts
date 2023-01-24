import Config from "../../config";

async function getData(page: number, rows: number): Promise<Response>;
async function getData(page: number, rows: number, id: string): Promise<Response>;

async function getData(page?: unknown, rows?: unknown, id?: unknown): Promise<unknown> {
  
  if(id){
    const request = new Request(`${Config.backend}/users/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': 'Bearer '+ sessionStorage.getItem("session-token")
      }
    });
    return await fetch(request);
  }
  const request = new Request(`${Config.backend}/vehicles`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': 'Bearer '+ sessionStorage.getItem("session-token")
    }
  });
  return await fetch(request);

}

async function getVehicleData(page?: number, rows?: number, id?: string): Promise<Response> {
  
  const request = new Request(`${Config.backend}/vehicles/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': 'Bearer '+ sessionStorage.getItem("session-token")
    }
  });
  return await fetch(request);

}

export {getData, getVehicleData}