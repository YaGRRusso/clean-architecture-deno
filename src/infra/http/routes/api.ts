import { Router } from "oak";
import {
  getClassroomById,
  getClassrooms,
} from "@controllers/classroom.controller.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = "Hello World";
});

router.get("/classrooms", async (ctx) => {
  const classrooms = await getClassrooms();

  ctx.response.status = 200;
  ctx.response.body = classrooms;
});

router.get("/classrooms/:id", async (ctx) => {
  const classroomId = ctx.params;
  const classroom = await getClassroomById(classroomId);

  ctx.response.status = 200;
  ctx.response.body = classroom;
});

export default router;
