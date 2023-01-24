import deleteCarRepository from "../../repositories/cars/delete-car-repository";

const deleteCarService = async (id: string) => {
  try {
    await deleteCarRepository(id);
    return {
      statusCode: 200,
      body: "Car successfully deleted!!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error deleting car" };
  }
};

export default deleteCarService;
