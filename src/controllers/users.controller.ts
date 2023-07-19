import * as UsersModel from "@models/users.model.ts";

const getUsers = (): UsersModel.IUser[] => {
  const users = UsersModel.getUsers();
  return users;
};

const getUserById = (id: string): UsersModel.IUser | undefined => {
  const users = UsersModel.getUsers();
  return users.find((user) => user._id === id);
};

const createUser = (user: UsersModel.IUser): UsersModel.IUser => {
  const newUser = UsersModel.createUser(user);
  return newUser;
};

const deleteUser = (id: string): string => {
  const oldId = UsersModel.deleteUser(id);
  return oldId;
};

const updateUser = (id: string, user: UsersModel.IUser): UsersModel.IUser => {
  const updatedUser = UsersModel.updateUser(id, user);
  return updatedUser;
};

export { createUser, deleteUser, getUserById, getUsers, updateUser };
