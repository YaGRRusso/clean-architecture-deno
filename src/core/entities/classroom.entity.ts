import Student from "@core/entities/student.entity.ts";

export default interface Classroom {
  id: string;
  name: string;
  open: number;
  close: number;
  capacity: number;
  students: Student[];
}
