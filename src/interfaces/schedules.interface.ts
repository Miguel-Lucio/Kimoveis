import { z } from "zod";
import { scheduleCreateSchema } from "../schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

export type TScheduleCreate = z.infer<typeof scheduleCreateSchema>;

export type TScheduleRepo = Repository<Schedule>;
