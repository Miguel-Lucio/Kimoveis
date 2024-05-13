import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { schedulesRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyPossibleSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { date, hour, realEstateId } = req.body;

  const day = new Date(date).getDay();
  const time = Number(hour.split(":")[0]);

  if (day === 0 || day === 6)
    throw new AppError("Invalid date, work days are monday to friday", 400);
  if (time < 8 || time > 18)
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

  const existSchedules: Schedule | null = await schedulesRepository.findOne({
    where: {
      realEstate: { id: Number(realEstateId) },
      hour,
      date,
    },
  });

  if (existSchedules)
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};
