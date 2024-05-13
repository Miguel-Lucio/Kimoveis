import { z } from "zod";
import { addressCreateSchema, addressSchema } from "./addresses.schema";

export const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number().positive()).default(0),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressSchema,
  categoryId: z.number().int().positive(),
});

export const realEstateCreateSchema = realEstateSchema
  .omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
    address: true,
  })
  .extend({ address: addressCreateSchema });
