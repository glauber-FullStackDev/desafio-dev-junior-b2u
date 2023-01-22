import deleteBrandRepository from "../../repositories/brands/delete-brand-repository";

const deleteBrandService = async (id: string) => {
  try {
    await deleteBrandRepository(id);
    return {
      statusCode: 200,
      body: "Brand successfully deleted!!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error deleting brand" };
  }
};

export default deleteBrandService;
