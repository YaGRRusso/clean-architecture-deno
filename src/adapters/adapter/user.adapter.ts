import { User } from "@core/entities/user.entity.ts";

type Input = {
  name: User["name"];
  age: User["age"];
  email: User["email"];
  phone?: User["phone"];
};

export const createUserAdapter = ({ phone, ...data }: Input): User => {
  const user: User = {
    id: crypto.randomUUID(),
    phone: phone ?? "00900000000",
    ...data,
  };

  return user;
};
