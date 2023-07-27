import { assertEquals, assertNotEquals } from "assert";
import ClassroomRepositoryMemory from "@infra/database/repositories/classroomMemory.repository.ts";
import getClassrooms from "@core/use-cases/getClassrooms.usecase.ts";
import getClassroom from "@core/use-cases/getClassroom.usecase.ts";

Deno.test("should get classrooms", async () => {
  const classroomsMemory = ClassroomRepositoryMemory();

  const classrooms = await getClassrooms({ repository: classroomsMemory });
  assertNotEquals(classrooms.data, null);
  if (classrooms.data) {
    assertEquals(classrooms.data.length, 2);
    assertEquals(classrooms.data[0].id, "pt");
    assertEquals(classrooms.data[1].id, "mt");
  }
});

Deno.test("should get classroom", async () => {
  const classroomsMemory = ClassroomRepositoryMemory();

  const classroomPt = await getClassroom({
    repository: classroomsMemory,
    data: { id: "pt" },
  });
  if (classroomPt.data) {
    assertEquals(classroomPt.data.id, "pt");
    assertEquals(classroomPt.data.name, "Português");
  }

  const classroomMt = await getClassroom({
    repository: classroomsMemory,
    data: { id: "mt" },
  });
  if (classroomMt.data) {
    assertEquals(classroomMt.data.id, "mt");
    assertEquals(classroomMt.data.name, "Matemática");
  }
});
