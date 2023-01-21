import api from './api';

  export async function Ads(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const result = await api.get('/ads', config)

    return result.data
  }