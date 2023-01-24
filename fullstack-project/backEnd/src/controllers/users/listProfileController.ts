import { Request, Response } from "express";
import listProfileService from "../../services/users/listProfileService";

const listProfileController = async (request: Request, response: Response) => {
  const id = request.user.id;
  try {
    const profile = await listProfileService(id);
    return response.status(200).json(profile);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
};
export default listProfileController;
