const deleteFetch = async (id) => {
  const url = 'http://localhost:3001';
  const requestOptions = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(`${url}/carros/${id}`, requestOptions);
    return response;
  } catch (error) {
    return error.message;
  }
}

export default deleteFetch;