import updateCarsRepository from "../../repositories/cars/update-car-repository";

const updateCarsService = async (id: string, params: any) => {
  try {
    await updateCarsRepository(id, params);
    return {
      statusCode: 200,
      body: "Car successfully updated!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error updating car" };
  }
};

export default updateCarsService;
