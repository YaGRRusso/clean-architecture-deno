import {
  CreateUserInput,
  CreateUserOutput,
} from "@core/interfaces/create-user.interface.ts";
import { User } from "@core/entities/user.entity.ts";

export const createUser = async ({
  data,
  repository,
}: CreateUserInput): Promise<CreateUserOutput> => {
  const newUser: User = {
    id: crypto.randomUUID(),
    ...data,
  };

  return {
    data: await repository.create(newUser),
    error: null,
  };
};
