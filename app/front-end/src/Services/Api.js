import axios from 'axios';

export const getCars = async () => {
  const cars = await axios.get('http://localhost:3003/cars');
  return cars.data;
}

export const getCarById = async (id) => {
  const response = await axios.get(`http://localhost:3003/cars/${ id }`);
  return response.data;
}

export const getUserCars = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get('http://localhost:3003/userCars', {
      headers: {
        'Authorization': token,
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data.message;
  };
};

export const login = async (userInfo) => {
  const response = await axios.post('http://localhost:3003/login', userInfo);
  localStorage.setItem('token', response.data.token);
};

export const register = async (userInfo) => {
  await axios.post('http://localhost:3003/register', userInfo);
};

export const getCarsBySearch = async (search) => {
  const response = await axios.get(`http://localhost:3003/searchcars/${ search }`);
  console.log(response);
  return response.data;
}

export const deleteCar = async (id) => {
  const token = localStorage.getItem('token');
  await axios.delete(`http://localhost:3003/cars/${ id }`, {
    headers: {
      'Authorization': token,
    },
  });
}

export const insertCar = async (newCar) => {
  const token = localStorage.getItem('token');
  await axios.post('http://localhost:3003/cars', newCar, {
    headers: {
      'Authorization': token,
    },
  });
}

export const updateCar = async (id, newCar) => {
  const token = localStorage.getItem('token');
  await axios.put(`http://localhost:3003/cars/${ id }`, newCar, {
    headers: {
      'Authorization': token,
    },
  });
}
