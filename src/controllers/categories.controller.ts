import { Request, Response } from "express";
import {
  createCategoryService,
  readCategoriesService,
  readRealEstateByCategoryService,
} from "../services";
import { Category } from "../entities";
import { TCategoryArrayReturn } from "../interfaces";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newCategory: Category = await createCategoryService(req.body);

  return res.status(201).json(newCategory);
};

export const readCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: TCategoryArrayReturn = await readCategoriesService();

  return res.status(200).json(categories);
};

export const readRealEstateByCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = Number(req.params.id);
  const category = await readRealEstateByCategoryService(id);

  return res.status(200).json(category);
};
