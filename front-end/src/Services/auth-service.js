import api from "./api";

export async function signInService(email, password) {
  const response = await api.post("/signIn", { email, password });
  return response.data;
}

export async function signUpService(name, email, number, password) {
  const response = await api.post("/signUp", { name, email, number, password });
  return response.data;
}
//

export async function LogOutService(token) {
  const config = {headers: {Authorization:`Bearer ${token}`}};
  const body = {headers: {Authorization:`Bearer ${token}`}}
   await api.post("/logOut", body, config);
}
