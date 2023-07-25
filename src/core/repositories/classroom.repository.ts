import Classroom from "@core/entities/classroom.entity.ts";
import Output from "@core/entities/logic/output.entity.ts";

export default interface ClassroomRepository {
  createClassroom(classroom: Classroom): Output<Classroom>;
  deleteClassroom(id: string): Output<void>;
  getClassrooms(): Output<Classroom[]>;
  getClassroom(id: string): Output<Classroom>;
}
