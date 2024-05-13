import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import {
  TCategoryRepo,
  TUserRepo,
  TRealEstateRepo,
  TAddressRepo,
  TScheduleRepo,
} from "./interfaces";

export const usersRepository: TUserRepo = AppDataSource.getRepository(User);

export const categoriesRepository: TCategoryRepo =
  AppDataSource.getRepository(Category);

export const realEstatesRepository: TRealEstateRepo =
  AppDataSource.getRepository(RealEstate);

export const addressesRepository: TAddressRepo =
  AppDataSource.getRepository(Address);

export const schedulesRepository: TScheduleRepo =
  AppDataSource.getRepository(Schedule);
