import allCarsRepository from "../../repositories/cars/all-cars-repository";

const allCarsService = async () => {
  try {
    const carData = await allCarsRepository();
    return {
      statusCode: 201,
      body: carData,
    };
  } catch (error) {
    return { statusCode: 400, body: "Error Fetching cars" };
  }
};

export default allCarsService;
