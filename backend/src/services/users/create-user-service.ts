import createUserRepository from "../../repositories/users/create-user-repository";

const createUserService = async (params: any) => {
  try {
    await createUserRepository(params);
    return {
      statusCode: 201,
      body: "User Registration successfully Completed!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error Fetching user" };
  }
};

export default createUserService;
