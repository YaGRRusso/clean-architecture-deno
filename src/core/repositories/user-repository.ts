import { User } from "@core/entities/user.entity.ts";

export interface UserRepository {
  create(user: User): Promise<User>;
  findById(userId: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
