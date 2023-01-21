import api from './api';

  export async function AdsDetailsService(token, id) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const result = await api.get(`/ads/${id}`, config)

    return result.data
  }