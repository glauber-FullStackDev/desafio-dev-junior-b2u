import updateBrandRepository from "../../repositories/brands/update-brand-repository";

const updateBrandService = async (id: string, params: any) => {
  try {
    await updateBrandRepository(id, params);
    return {
      statusCode: 200,
      body: "Brand successfully updated!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error updating brand" };
  }
};

export default updateBrandService;
