import { createUserAdapter } from "@adapters/adapter/user.adapter.ts";
import { Context } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { User } from "@core/entities/user.entity.ts";
import { createUser } from "@core/usecases/create-user.usecase.ts";
import PostgresUsersRepository from "@infra/persistance/repositories/users.repository.ts";
import { UserRepository } from "@core/repositories/user-repository.ts";

export async function createUserController(ctx: Context) {
  const body = (await ctx.request.body({ type: "form-data" }).value.read())
    .fields as unknown as User;

  const newUser = createUserAdapter(body);
  const usersRepository = PostgresUsersRepository as UserRepository;

  await createUser({
    data: newUser,
    repository: usersRepository,
  });

  ctx.response.status = 200;
  ctx.response.body = {
    data: body,
    error: null,
  };
  return ctx;
}
