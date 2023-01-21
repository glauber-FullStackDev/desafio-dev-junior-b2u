import api from '../api'

export async function EditPriceService(price, id, token)  {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const body = {
        price: price
      }
    await api.put(`/editPrice/${id}`, body, config);
}