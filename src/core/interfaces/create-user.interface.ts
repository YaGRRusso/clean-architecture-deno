import { UserRepository } from "@core/repositories/user-repository.ts";
import { BaseInput, BaseOutput } from "@core/interfaces/base.interface.ts";
import { User } from "@core/entities/user.entity.ts";

export type CreateUserInput = BaseInput<Omit<User, "id">, UserRepository>;

export type CreateUserOutput = BaseOutput<User>;
