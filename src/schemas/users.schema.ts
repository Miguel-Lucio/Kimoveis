import { z } from "zod";

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45).min(2),
  email: z.string().max(45).email(),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

export const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const userAdminOmitSchema = userCreateSchema.omit({ admin: true });
export const userUpdateSchema = userAdminOmitSchema.partial();

export const userReturnSchema = userSchema.omit({ password: true });
export const userArrayReturnSchema = userReturnSchema.array();
