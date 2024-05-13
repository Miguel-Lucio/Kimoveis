import { Request, Response } from "express";
import { TUserArrayReturn, TUserReturn } from "../interfaces";
import {
  createUserService,
  deleteUserService,
  readUsersService,
  updateUserService,
} from "../services";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser: TUserReturn = await createUserService(req.body);

  return res.status(201).json(newUser);
};

export const readUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: TUserArrayReturn = await readUsersService();

  return res.status(200).json(users);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await updateUserService(res.locals.user, req.body);

  return res.status(200).json(user);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteUserService(res.locals.user);

  return res.status(204).json();
};
