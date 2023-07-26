import ClassroomRepository from "@core/repositories/classroom.repository.ts";

export default (repository: ClassroomRepository) => {
  return repository.getClassrooms();
};
