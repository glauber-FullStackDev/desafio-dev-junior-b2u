const getFetch = async (id) => {
  const url = 'http://localhost:3001';
  try {
    const response = await fetch(`${url}/carros`);
    return response;
  } catch (error) {
    return error.message;
  }
}

export default getFetch;