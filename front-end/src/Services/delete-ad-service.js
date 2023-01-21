import api from './api';

  export async function DeleteAd(token, id) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const result = await api.delete(`/delete/${id}`, config)

    return result.data
  }