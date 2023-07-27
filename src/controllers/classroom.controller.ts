import ClassroomRepositoryMemory from "@infra/database/repositories/classroomMemory.repository.ts";
import getClassroomsUsecase from "@core/use-cases/getClassrooms.usecase.ts";
import getClassroomUsecase from "@core/use-cases/getClassroom.usecase.ts";
import { Params } from "@core/entities/logic/http.entity.ts";

const classroomsMemory = ClassroomRepositoryMemory();

export const getClassrooms = async () => {
  const classrooms = await getClassroomsUsecase({
    repository: classroomsMemory,
  });
  return classrooms;
};

export const getClassroom = async (params: Params) => {
  const classroom = await getClassroomUsecase({
    repository: classroomsMemory,
    data: { id: params?.id },
  });
  return classroom;
};
