import allUsersRepository from "../../repositories/users/all-users-repository";

const allUsersService = async () => {
    try {
      const userData = await allUsersRepository()
      return {
        statusCode: 201,
        body: userData,
      };
    } catch (error) {
      return { statusCode: 400, body: "Error Fetching user" };
    }
  };
  
  export default allUsersService;