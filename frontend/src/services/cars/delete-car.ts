import apiCars from './api';
import { Types } from 'mongoose';

export const deleteCarService = async (id: Types.ObjectId) => {
    return await apiCars
        .delete(`/cars/${id}`)
        .then((response) => response.data)
        .catch(() => {
            error: true;
        });
};

export default deleteCarService;