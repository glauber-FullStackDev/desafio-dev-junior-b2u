import api from '../api'

export async function EditNameService(name, id, token)  {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const body = {
        name: name
      }
    await api.put(`/editName/${id}`, body, config);
}