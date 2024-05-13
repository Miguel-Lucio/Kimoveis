import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readUsersController,
  updateUserController,
} from "../controllers";
import {
  validateBody,
  verifyEmail,
  verifyId,
  verifyPermissions,
  verifyToken,
} from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "/",
  validateBody(userCreateSchema),
  verifyEmail,
  createUserController
);
usersRoutes.get("/", verifyToken, verifyPermissions, readUsersController);

usersRoutes.use("/:id", verifyId, verifyToken, verifyPermissions);
usersRoutes.patch("/:id", validateBody(userUpdateSchema), updateUserController);
usersRoutes.delete("/:id", deleteUserController);
