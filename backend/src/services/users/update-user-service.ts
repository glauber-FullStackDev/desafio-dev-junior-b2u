import updateUserRepository from "../../repositories/users/update-user-repository";

const updateUserService = async (id: string, params: any) => {
  try {
    await updateUserRepository(id, params);
    return {
      statusCode: 200,
      body: "User successfully updated!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error updating user" };
  }
};

export default updateUserService;
