import { Router } from "express";
import {
  validateBody,
  verifyAdimn,
  verifyPermissions,
  verifyPossibleSchedule,
  verifyRealEstateExists,
  verifyToken,
  verifyUserScheduleExists,
} from "../middlewares";
import { scheduleCreateSchema } from "../schemas";
import {
  createScheduleController,
  readScheduleByRealEstateController,
} from "../controllers";

export const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "/",
  verifyToken,
  validateBody(scheduleCreateSchema),
  verifyRealEstateExists,
  verifyPossibleSchedule,
  verifyUserScheduleExists,
  createScheduleController
);

schedulesRoutes.get(
  "/realEstate/:id",
  verifyToken,
  verifyAdimn,
  readScheduleByRealEstateController
);
