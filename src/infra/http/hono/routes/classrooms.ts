import { Hono } from "hono";
import {
  getClassroom,
  getClassrooms,
} from "@controllers/classroom.controller.ts";
const router = new Hono();

router.get("/", async (ctx) => {
  const classrooms = await getClassrooms();

  return ctx.json(classrooms, 200);
});

router.get("/:id", async (ctx) => {
  const params = ctx.req.param();
  const classroom = await getClassroom(params);

  return ctx.json(classroom, 200);
});

export default router;
