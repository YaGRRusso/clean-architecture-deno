import Student from "@core/entities/student.entity.ts";

export default class Classroom {
  constructor(
    public id: string,
    public name: string,
    public open: number,
    public close: number,
    public capacity: number,
    public students: Student[],
  ) {}

  isOpen(date: Date) {
    const hour = date.getHours();
    return (hour >= this.open && hour <= this.close);
  }

  isFull() {
    return this.capacity === this.students.length;
  }
}
