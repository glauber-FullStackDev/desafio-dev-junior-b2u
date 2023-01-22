import allBrandsRepositories from "../../repositories/brands/all-brands-repository";

const allBrandsServices = async () => {
  try {
    const carData = await allBrandsRepositories();
    return {
      statusCode: 201,
      body: carData,
    };
  } catch (error) {
    return { statusCode: 400, body: "Error Fetching brands" };
  }
};

export default allBrandsServices;
