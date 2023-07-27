import Classroom from "@core/entities/classroom.entity.ts";

export type GetClassroomInput = {
  id?: string;
};

export default interface ClassroomRepository {
  getClassrooms(): Promise<Classroom[]>;
  getClassroom(data: GetClassroomInput): Promise<Classroom | undefined>;
}
