import api from '../api'

export async function EditYearService(year, id, token)  {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const body = {
        year: year
      }
    await api.put(`/editYear/${id}`, body, config);
}