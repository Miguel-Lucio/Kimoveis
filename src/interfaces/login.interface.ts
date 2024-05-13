import { z } from "zod";
import { loginBodySchema } from "../schemas";

export type TLoginBody = z.infer<typeof loginBodySchema>;
export type TLoginReturn = { token: string };
