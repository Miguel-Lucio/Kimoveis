import { User } from "../entities";
import {
  TUserArrayReturn,
  TUserCreate,
  TUserReturn,
  TUserUpdate,
} from "../interfaces";
import { usersRepository } from "../repositories";
import { userArrayReturnSchema, userReturnSchema } from "../schemas";

export const createUserService = async (
  data: TUserCreate
): Promise<TUserReturn> => {
  const newUser: User = usersRepository.create(data);
  await usersRepository.save(newUser);

  return userReturnSchema.parse(newUser);
};

export const readUsersService = async (): Promise<TUserArrayReturn> => {
  const users: Array<User> = await usersRepository.find();

  return userArrayReturnSchema.parse(users);
};

export const updateUserService = async (
  user: User,
  body: TUserUpdate
): Promise<TUserReturn> => {
  const updateUser: User = usersRepository.create({ ...user, ...body });
  await usersRepository.save(updateUser);

  return userReturnSchema.parse(updateUser);
};

export const deleteUserService = async (user: User): Promise<void> => {
  await usersRepository.softRemove(user);
};
