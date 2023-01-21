import api from '../api'

export async function EditDescService(description, id, token)  {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const body = {
        description: description
      }
    await api.put(`/editDesc/${id}`, body, config);
}