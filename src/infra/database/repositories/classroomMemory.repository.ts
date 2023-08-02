import ClassroomRepository from "@core/repositories/classroom.repository.ts";
import Classroom from "@core/entities/classroom.entity.ts";

export default (): ClassroomRepository => {
  const classrooms: Classroom[] = [
    {
      id: "a1f531c6-702b-4dc6-a2d4-5a5c8db40f7e",
      name: "Portugues",
      open: 6,
      close: 10,
      capacity: 10,
      students: [
        {
          id: "b0a6496e-8873-45a0-ba57-543da95b266f",
          name: "John Smith",
          enter: 7,
          leave: null,
        },
        {
          id: "7dd4f095-5a24-4e37-96a5-af6c2df733e0",
          name: "Jane Doe",
          enter: 6,
          leave: null,
        },
      ],
    },
    {
      id: "e09a64d9-8f4f-4f10-9657-3b334f43d74b",
      name: "Matematica",
      open: 6,
      close: 10,
      capacity: 10,
      students: [
        {
          id: "9e434a07-c87a-4b1e-bd8a-c4b896876216",
          name: "Michael Johnson",
          enter: 6,
          leave: 9,
        },
        {
          id: "d0a92a2c-3463-44ab-9b43-9ce972f16f8b",
          name: "Emily Williams",
          enter: 7,
          leave: null,
        },
      ],
    },
  ];

  const getClassrooms: ClassroomRepository["getClassrooms"] = () => {
    return Promise.resolve(classrooms);
  };

  const getClassroom: ClassroomRepository["getClassroom"] = ({ id }) => {
    return Promise.resolve(classrooms.find((item) => item.id === id));
  };

  return {
    getClassroom,
    getClassrooms,
  };
};
