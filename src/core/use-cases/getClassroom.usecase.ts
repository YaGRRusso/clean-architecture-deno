import ClassroomRepository from "@core/repositories/classroom.repository.ts";

export default (repository: ClassroomRepository, id: string) => {
  return repository.getClassroom(id);
};
