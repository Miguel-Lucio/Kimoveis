import { z } from "zod";
import {
  categoryArrayReturnSchema,
  categoryCreateSchema,
  categorySchema,
} from "../schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

export type TCategory = z.infer<typeof categorySchema>;
export type TCategoryCreate = z.infer<typeof categoryCreateSchema>;
export type TCategoryArrayReturn = z.infer<typeof categoryArrayReturnSchema>;

export type TCategoryRepo = Repository<Category>;
