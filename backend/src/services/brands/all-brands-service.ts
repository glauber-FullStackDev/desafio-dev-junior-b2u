import allBrandsRepositories from "../../repositories/brands/all-brands-repository";

const allBrandsServices = async () => {
  try {
    const brandData = await allBrandsRepositories();
    return {
      statusCode: 201,
      body: brandData,
    };
  } catch (error) {
    return { statusCode: 400, body: "Error Fetching brands" };
  }
};

export default allBrandsServices;
