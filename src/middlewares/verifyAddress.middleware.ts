import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { addressesRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { address } = req.body;

  const foundAdress: Address | null = await addressesRepository.findOneBy({
    street: address.street,
    zipCode: address.zipCode,
    number: address.number,
    city: address.city,
    state: address.state,
  });

  if (foundAdress) throw new AppError("Address already exists", 409);

  return next();
};
