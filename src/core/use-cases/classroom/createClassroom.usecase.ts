import ClassroomRepository from "@core/repositories/classroom.repository.ts";
import Classroom from "@core/entities/classroom.entity.ts";

export default (
  repository: ClassroomRepository,
  classroom: Classroom,
) => {
  return repository.createClassroom(classroom);
};
