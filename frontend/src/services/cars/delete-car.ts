import apiCars from './api';

export const deleteCarService = async (id: string) => {
    return await apiCars
        .delete(`/cars/${id}`)
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};

export default deleteCarService;