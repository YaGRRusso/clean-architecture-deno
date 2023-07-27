import ClassroomRepository from "@core/repositories/classroom.repository.ts";
import {
  UsecaseInput,
  UsecaseOutput,
} from "@core/entities/logic/usecase.entity.ts";
import Classroom from "@core/entities/classroom.entity.ts";

const getClassrooms = async (
  { repository }: UsecaseInput<ClassroomRepository>,
): UsecaseOutput<Classroom[]> => {
  const result = await repository.getClassrooms();

  if (!result) return { data: null, error: "notFound" };
  return { data: result, error: null };
};

export default getClassrooms;
