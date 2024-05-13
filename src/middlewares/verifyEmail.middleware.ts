import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { usersRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  if (!email) return next();

  const user: User | null = await usersRepository.findOneBy({ email });

  if (user) throw new AppError("Email already exists", 409);

  return next();
};
