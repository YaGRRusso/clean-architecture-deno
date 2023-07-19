import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";
import { faker } from "https://deno.land/x/deno_faker@v1.0.3/mod.ts";

const userSchema = z.object({
  _id: z.string(),
  name: z.string().regex(/^[a-zA-Z\u00C0-\u00FF ]+$/).min(3),
  age: z.number().positive().gt(18).lt(60),
  email: z.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  phone: z.string().regex(/^[0-9]*$/).length(11),
});

type IUser = z.infer<typeof userSchema>;

let users: IUser[] = [...Array(faker.random.number({ min: 3, max: 10 }))].map(
  (_item) => {
    return (
      {
        _id: faker.random.uuid(),
        name: faker.name.findName(),
        age: faker.random.number({ min: 18, max: 60 }),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber("###########"),
      }
    );
  },
);

const getUsers = () => {
  return users;
};

const createUser = (user: IUser) => {
  users = [...users, user];
  return user;
};

const deleteUser = (id: string) => {
  users = users.filter((user) => user._id !== id);
  return id;
};

const updateUser = (id: string, user: Partial<IUser>) => {
  const index = users.findIndex((user) => user._id === id);
  users[index] = { ...users[index], ...user };
  return users[index];
};

export type { IUser };
export { createUser, deleteUser, getUsers, updateUser };
