import Config from "../../config";

async function getData(page: number, rows: number): Promise<Response>;
async function getData(page: number, rows: number, id: string): Promise<Response>;

async function getData(page?: unknown, rows?: unknown, id?: unknown): Promise<unknown> {
  
  if(id){
    const request = new Request(`${Config.backend}/users/${id}`, {
      method: 'GET',
      mode: 'cors',
    });
    return await fetch(request);
  }
  const request = new Request(`${Config.backend}/vehicles`, {
    method: 'GET',
    mode: 'cors',
  });
  return await fetch(request);

}

export default getData