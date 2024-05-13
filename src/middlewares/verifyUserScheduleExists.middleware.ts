import { NextFunction, Request, Response } from "express";
import { schedulesRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyUserScheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = Number(res.locals.decoded.sub);
  const { date, hour } = req.body;

  const userSchedule = await schedulesRepository.findOne({
    where: { date, hour, user: { id } },
  });

  if (userSchedule)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};
