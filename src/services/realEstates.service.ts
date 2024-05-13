import { RealEstate } from "../entities";
import { TRealEstateCreate, TRealEstatesArrayReturn } from "../interfaces";
import {
  addressesRepository,
  categoriesRepository,
  realEstatesRepository,
} from "../repositories";

export const createRealEstateService = async (
  data: TRealEstateCreate
): Promise<RealEstate> => {
  const category = await categoriesRepository.findOneBy({
    id: data.categoryId,
  });

  const newAddress = await addressesRepository.save(data.address);

  const { id } = await realEstatesRepository.save({
    ...data,
    address: newAddress,
    category: category!,
  });

  const realEstate = await realEstatesRepository.findOne({
    where: { id },
    relations: { category: true, address: true },
  });

  return realEstate!;
};

export const readRealEstatesService =
  async (): Promise<TRealEstatesArrayReturn> => {
    const realEstates: TRealEstatesArrayReturn =
      await realEstatesRepository.find({ relations: { address: true } });

    return realEstates;
  };
