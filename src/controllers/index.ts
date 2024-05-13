import {
  createCategoryController,
  readCategoriesController,
  readRealEstateByCategoryController,
} from "./categories.controller";
import { loginController } from "./login.controller";
import {
  createRealEstateController,
  readRealEstatesController,
} from "./realEstates.controller";
import {
  createScheduleController,
  readScheduleByRealEstateController,
} from "./schedules.controller";
import {
  createUserController,
  deleteUserController,
  readUsersController,
  updateUserController,
} from "./users.controller";

export {
  createCategoryController,
  readCategoriesController,
  readRealEstateByCategoryController,
};
export { loginController };
export { createRealEstateController, readRealEstatesController };
export { createScheduleController, readScheduleByRealEstateController };
export {
  createUserController,
  deleteUserController,
  readUsersController,
  updateUserController,
};
