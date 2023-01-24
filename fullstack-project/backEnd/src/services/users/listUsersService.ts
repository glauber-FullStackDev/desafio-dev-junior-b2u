import { prisma } from "../../app";

const listUsersService = async () => {
  const listUsers = await prisma.user.findMany();
  return listUsers.map((item) => {
    const { password, ...response } = item;
    return response;
  });
};
export default listUsersService;
