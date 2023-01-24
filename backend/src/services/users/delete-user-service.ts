import deleteUserRepository from "../../repositories/users/delete-user-repository";

const deleteUserService = async (id: string) => {
  try {
    await deleteUserRepository(id);
    return {
      statusCode: 200,
      body: "User successfully deleted!!",
    };
  } catch (error) {
    return { statusCode: 400, body: "Error deleting user" };
  }
};

export default deleteUserService;
