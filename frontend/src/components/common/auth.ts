import Config from '../../../config';
import {parseJwt} from './tools'

async function login(email: string, password: string) {
  const request = new Request(`${Config.backend}/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  });

  try {
    const response = await fetch(request);
    const result = await response.json();
    if(result["token"])
      window.sessionStorage.setItem("session-token", result["token"])
    console.log(result);
  } catch (error) {
  }
}

function logout() {
  window.sessionStorage.removeItem("session-token");
}

function isAuthenticated(): boolean {
  if (!!window.sessionStorage.getItem("session-token")) {
    return true;
  }
  return false;
}

function getRole(token: string): string | undefined {
  if(!null){
    const payload = parseJwt(token);
    return payload['role'];
  }

}

export { login, logout, isAuthenticated, getRole };
