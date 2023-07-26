import ClassroomRepository from "@core/repositories/classroom.repository.ts";
import Classroom from "@core/entities/classroom.entity.ts";
import Output from "@core/entities/logic/output.entity.ts";

export default (): ClassroomRepository => {
  const classrooms: Classroom[] = [
    {
      id: "pt",
      name: "Português",
      open: 6,
      close: 10,
      capacity: 10,
      students: [
        {
          id: "1",
          name: "Yago",
          enter: 7,
        },
        {
          id: "2",
          name: "Gabriel",
          enter: 6,
          leave: 9,
        },
      ],
    },
    {
      id: "mt",
      name: "Matemática",
      open: 1,
      close: 5,
      capacity: 10,
      students: [
        {
          id: "3",
          name: "João",
          enter: 2,
        },
      ],
    },
  ];

  const getClassrooms = (): Promise<Classroom[]> => {
    return Promise.resolve(classrooms);
  };

  const getClassroom = (id: string): Output<Classroom | undefined> => {
    return Promise.resolve(classrooms.find((item) => item.id === id));
  };

  return {
    getClassroom,
    getClassrooms,
  };
};
