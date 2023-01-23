import createBrandRepository from "../../repositories/brands/create-brand-repository";

const createBrandService = async (params: any) => {
  try {
    await createBrandRepository(params);
    return {
      statusCode: 201,
      body: "Brand Registration successfully Completed!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error Fetching brand" };
  }
};

export default createBrandService;
