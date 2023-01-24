const putFetch = async (data, id) => {
  const url = 'http://localhost:3001';
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(`${url}/carros/${id}`, requestOptions);
    return response;
  } catch (error) {
    return error.message;
  }
}

export default putFetch;
