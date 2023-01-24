const deleteFetch = async (data, rota) => {
  const url = 'http://localhost:3001';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(`${url}${rota}`, requestOptions);
    return response.json();
  } catch (error) {
    return error.message;
  }
}

export default deleteFetch;