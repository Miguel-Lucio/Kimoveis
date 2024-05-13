import { z } from "zod";
import {
  userAdminOmitSchema,
  userArrayReturnSchema,
  userCreateSchema,
  userReturnSchema,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

export type TUserCreate = z.infer<typeof userCreateSchema>;
export type TUserAdminOmit = z.infer<typeof userAdminOmitSchema>;
export type TUserUpdate = DeepPartial<TUserAdminOmit>;
export type TUserReturn = z.infer<typeof userReturnSchema>;
export type TUserArrayReturn = z.infer<typeof userArrayReturnSchema>;

export type TUserRepo = Repository<User>;
