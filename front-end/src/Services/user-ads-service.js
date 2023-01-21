import api from './api';

  export async function UserAds(token) {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    const result = await api.get('/myAds', config)

    return result.data
  }