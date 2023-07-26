import { assertEquals } from "assert";
import ClassroomRepositoryMemory from "@infra/database/repositories/classroomMemory.repository.ts";
import getClassrooms from "@core/use-cases/getClassrooms.usecase.ts";
import getClassroom from "@core/use-cases/getClassroom.usecase.ts";

Deno.test("should get classrooms", async () => {
  const classroomsMemory = ClassroomRepositoryMemory();

  const classrooms = await getClassrooms(classroomsMemory);
  assertEquals(classrooms.length, 2);
  assertEquals(classrooms[0].id, "pt");
  assertEquals(classrooms[1].id, "mt");
});

Deno.test("should get classroom", async () => {
  const classroomsMemory = ClassroomRepositoryMemory();

  const classroomPt = await getClassroom(classroomsMemory, "pt");
  assertEquals(classroomPt?.id, "pt");
  assertEquals(classroomPt?.name, "Português");

  const classroomMt = await getClassroom(classroomsMemory, "mt");
  assertEquals(classroomMt?.id, "mt");
  assertEquals(classroomMt?.name, "Matemática");
});
