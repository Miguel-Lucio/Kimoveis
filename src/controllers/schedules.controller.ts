import { Request, Response } from "express";
import {
  createScheduleService,
  readScheduleByRealEstateService,
} from "../services";

export const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = res.locals.decoded.sub;

  await createScheduleService(req.body, id);

  return res.status(201).json({ message: "Schedule created" });
};

export const readScheduleByRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = Number(req.params.id);

  const realEstate = await readScheduleByRealEstateService(id);

  return res.status(200).json(realEstate);
};
