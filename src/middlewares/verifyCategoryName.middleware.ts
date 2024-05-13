import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoriesRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyCategoryName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.params;

  const category: Category | null = await categoriesRepository.findOneBy({
    name,
  });

  if (category) throw new AppError("Category already exists", 409);

  return next();
};
