import Config from "../../config";

export async function getIndexData(page: number, rows: number){
  const request = new Request(`${Config.backend}/vehicles`, {
    method: 'GET',
    mode: 'cors',
  });
  return await fetch(request);
}