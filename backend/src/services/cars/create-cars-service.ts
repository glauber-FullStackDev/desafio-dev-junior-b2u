import allCarsRepository from "../../repositories/cars/all-cars-repository";
import createCarsRepository from "../../repositories/cars/create-car-repository";

const createCarsService = async (params: any) => {
  try {
    await createCarsRepository(params);
    return {
      statusCode: 201,
      body: "Car Registration successfully Completed!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error Fetching cars" };
  }
};

export default createCarsService;
