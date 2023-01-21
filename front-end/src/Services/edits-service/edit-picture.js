import api from '../api'

export async function EditPicService(picture, id, token)  {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const body = {
        picture: picture
      }
    await api.put(`/editPic/${id}`, body, config);
}