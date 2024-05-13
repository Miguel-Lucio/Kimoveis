import { z } from "zod";
import { realEstateCreateSchema } from "../schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

export type TRealEstateCreate = z.infer<typeof realEstateCreateSchema>;
export type TRealEstatesArrayReturn = Array<RealEstate>;

export type TRealEstateRepo = Repository<RealEstate>;
