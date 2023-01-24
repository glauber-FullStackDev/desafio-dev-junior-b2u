import allCarsRepository from "../../repositories/cars/all-cars-repository";

const allCarsServices = async () => {
  try {
    const carData = await allCarsRepository();
    return {
      statusCode: 200,
      body: carData,
    };
  } catch (error) {
    return { statusCode: 400, body: "Error Fetching cars" };
  }
};

export default allCarsServices;
