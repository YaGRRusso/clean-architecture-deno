import ClassroomRepository, {
  GetClassroomInput,
} from "@core/repositories/classroom.repository.ts";
import {
  UsecaseInput,
  UsecaseOutput,
} from "@core/entities/logic/usecase.entity.ts";
import Classroom from "@core/entities/classroom.entity.ts";

const getClassroom = async (
  { repository, data }: UsecaseInput<ClassroomRepository, GetClassroomInput>,
): UsecaseOutput<Classroom> => {
  if (!data) return { data: null, error: "requiredData" };
  if (!data.id) return { data: null, error: "requiredId" };

  const result = await repository.getClassroom(data);
  if (!result) return { data: null, error: "notFound" };

  return { data: result, error: null };
};

export default getClassroom;
