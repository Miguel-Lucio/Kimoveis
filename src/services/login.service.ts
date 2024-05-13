import { compare } from "bcryptjs";
import { User } from "../entities";
import { AppError } from "../errors";
import { TLoginBody, TLoginReturn } from "../interfaces";
import { usersRepository } from "../repositories";
import { sign } from "jsonwebtoken";

export const loginService = async (data: TLoginBody): Promise<TLoginReturn> => {
  const user: User | null = await usersRepository.findOneBy({
    email: data.email,
  });

  if (!user) throw new AppError("Invalid credentials", 401);

  const comparePass = await compare(data.password, user.password);

  if (!comparePass) throw new AppError("Invalid credentials", 401);

  const token: string = sign({ adimn: user.admin }, process.env.SECRET_KEY!, {
    subject: user.id.toString(),
    expiresIn: process.env.EXPIRES_IN!,
  });

  return { token };
};
