const deleteFetch = async (data) => {
  const url = 'http://localhost:3001';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${url}/carros`, requestOptions);
    return response;
  } catch (error) {
    return error.message;
  }
}

export default deleteFetch;