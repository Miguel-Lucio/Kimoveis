import { Router } from "express";
import {
  validateBody,
  verifyAddress,
  verifyPermissions,
  verifyToken,
} from "../middlewares";
import { realEstateCreateSchema } from "../schemas";
import {
  createRealEstateController,
  readRealEstatesController,
} from "../controllers";

export const realEstatesRoutes: Router = Router();

realEstatesRoutes.post(
  "/",
  verifyToken,
  verifyPermissions,
  validateBody(realEstateCreateSchema),
  verifyAddress,
  createRealEstateController
);

realEstatesRoutes.get("/", readRealEstatesController);
