import { Router } from "oak";
import {
  getClassroom,
  getClassrooms,
} from "@controllers/classroom.controller.ts";

const router = new Router();

router.get("/classrooms", async (ctx) => {
  const classrooms = await getClassrooms();

  ctx.response.status = 200;
  ctx.response.body = classrooms;
});

router.get("/classrooms/:id", async (ctx) => {
  const classroomId = ctx.params;
  const classroom = await getClassroom(classroomId);

  ctx.response.status = 200;
  ctx.response.body = classroom;
});

export default router;
