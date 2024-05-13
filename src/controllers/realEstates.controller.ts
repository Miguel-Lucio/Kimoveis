import { Request, Response } from "express";
import { createRealEstateService, readRealEstatesService } from "../services";
import { RealEstate } from "../entities";
import { TRealEstatesArrayReturn } from "../interfaces";

export const createRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: RealEstate = await createRealEstateService(req.body);

  return res.status(201).json(realEstate);
};

export const readRealEstatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstates: TRealEstatesArrayReturn = await readRealEstatesService();

  return res.status(200).json(realEstates);
};
