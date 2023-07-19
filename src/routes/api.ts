import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "@controllers/users.controller.ts";
import { IUser } from "@models/users.model.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = "Hello World";
});

router.get("/users", (ctx) => {
  const users = getUsers();

  ctx.response.status = 200;
  ctx.response.body = {
    data: users,
    error: null,
  };
});

router.post("/users", async (ctx) => {
  const body = (await ctx.request.body({ type: "form-data" }).value.read())
    .fields as unknown as IUser;
  const newUser = createUser(body);

  ctx.response.status = 200;
  ctx.response.body = {
    data: newUser,
    error: null,
  };
});

router.get("/users/:id", (ctx) => {
  const id = ctx.params.id;
  const user = getUserById(id);

  ctx.response.status = 200;
  ctx.response.body = {
    data: user,
    error: null,
  };
});

router.put("/users/:id", async (ctx) => {
  const id = ctx.params.id;
  const body = (await ctx.request.body({ type: "form-data" }).value.read())
    .fields as unknown as IUser;
  const updatedUser = updateUser(id, body);

  ctx.response.status = 200;
  ctx.response.body = {
    data: updatedUser,
    error: null,
  };
});

router.delete("/users/:id", (ctx) => {
  const id = ctx.params.id;
  const oldId = deleteUser(id);

  ctx.response.status = 200;
  ctx.response.body = {
    data: oldId,
    error: null,
  };
});

export default router;
