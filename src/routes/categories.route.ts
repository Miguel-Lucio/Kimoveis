import { Router } from "express";
import {
  validateBody,
  verifyCategoryName,
  verifyPermissions,
  verifyToken,
} from "../middlewares";
import { categoryCreateSchema } from "../schemas";
import {
  createCategoryController,
  readCategoriesController,
  readRealEstateByCategoryController,
} from "../controllers";

export const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "/",
  verifyToken,
  verifyPermissions,
  validateBody(categoryCreateSchema),
  verifyCategoryName,
  createCategoryController
);
categoriesRoutes.get("/", readCategoriesController);

categoriesRoutes.get(
  "/:id/realEstate",
  readRealEstateByCategoryController
);
