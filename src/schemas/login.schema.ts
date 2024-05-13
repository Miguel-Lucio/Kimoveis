import { userSchema } from "./users.schema";

export const loginBodySchema = userSchema.pick({ email: true, password: true });
