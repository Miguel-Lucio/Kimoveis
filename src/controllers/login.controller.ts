import { Request, Response } from "express";
import { loginService } from "../services";
import { TLoginReturn } from "../interfaces";

export const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: TLoginReturn = await loginService(req.body);

  return res.status(200).json(token);
};
