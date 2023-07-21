import { UserRepository } from "@core/repositories/user-repository.ts";
import db from "@infra/persistance/db.ts";
import { User } from "@core/entities/user.entity.ts";

const PostgresUsersRepository: Partial<UserRepository> = {
  create: async ({
    id,
    name,
    age,
    email,
    phone,
  }): Promise<User> => {
    await db.connect();

    const result = await db.queryArray(
      `INSERT INTO users (id, name, age, email, phone) VALUES (${id}, ${name}, ${age}, ${email}, ${phone})`,
    ) as unknown as User;
    return result;
  },
};

export default PostgresUsersRepository;
