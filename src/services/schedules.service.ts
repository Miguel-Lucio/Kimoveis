import { AppError } from "../errors";
import { TScheduleCreate } from "../interfaces";
import {
  realEstatesRepository,
  schedulesRepository,
  usersRepository,
} from "../repositories";

export const createScheduleService = async (
  data: TScheduleCreate,
  userId: number
): Promise<void> => {
  const realEstate = await realEstatesRepository.findOneBy({
    id: data.realEstateId,
  });

  const user = await usersRepository.findOneBy({ id: userId });

  await schedulesRepository.save({
    ...data,
    realEstate: realEstate!,
    user: user!,
  });
};

export const readScheduleByRealEstateService = async (id: number) => {
  const realEstate = await realEstatesRepository.findOne({
    where: { id },
    relations: {
      schedules: { user: true },
      address: true,
      category: true,
    },
  });

  if (!realEstate) throw new AppError("RealEstate not found", 404);

  return realEstate;
};
