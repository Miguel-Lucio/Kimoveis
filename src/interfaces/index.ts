import { TAddressRepo } from "./addresses.interface";
import {
  TCategory,
  TCategoryCreate,
  TCategoryArrayReturn,
  TCategoryRepo,
} from "./categories.interface";
import { TLoginBody, TLoginReturn } from "./login.interface";
import {
  TRealEstateCreate,
  TRealEstateRepo,
  TRealEstatesArrayReturn,
} from "./realEstates.interface";
import { TScheduleCreate, TScheduleRepo } from "./schedules.interface";
import {
  TUserCreate,
  TUserAdminOmit,
  TUserUpdate,
  TUserReturn,
  TUserArrayReturn,
  TUserRepo,
} from "./users.interface";

export { TAddressRepo };
export { TCategory, TCategoryCreate, TCategoryArrayReturn, TCategoryRepo };
export { TLoginBody, TLoginReturn };
export { TRealEstateCreate, TRealEstateRepo, TRealEstatesArrayReturn };
export { TScheduleCreate, TScheduleRepo };
export {
  TUserCreate,
  TUserAdminOmit,
  TUserUpdate,
  TUserReturn,
  TUserArrayReturn,
  TUserRepo,
};
