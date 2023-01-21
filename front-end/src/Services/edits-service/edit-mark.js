import api from '../api'

export async function EditMarkService(mark, id, token)  {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const body = {
        mark: mark
      }
    await api.put(`/editMark/${id}`, body, config);
}