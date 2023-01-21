import api from "./api";

export async function CreateService(picture, name, price, mark, year, description, token) {

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    const body = {
        picture,
        name,
        price,
        mark,
        year,
        description
    }
    await api.post('/creatAd', body, config);
}