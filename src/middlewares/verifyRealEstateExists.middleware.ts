import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstatesRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id = Number(req.body.realEstateId);

  const realEstate: RealEstate | null = await realEstatesRepository.findOneBy({
    id,
  });

  if (!realEstate) throw new AppError("RealEstate not found", 404);

  return next();
};
