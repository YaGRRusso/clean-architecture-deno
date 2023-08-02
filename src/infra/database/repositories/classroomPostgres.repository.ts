import { Client } from "postgres";
import ClassroomRepository from "@core/repositories/classroom.repository.ts";
import Classroom from "@core/entities/classroom.entity.ts";

const client = new Client({
  user: "postgres",
  database: "postgres",
  password: "pass123",
  hostname: "localhost",
  port: 5432,
});
await client.connect();

export default (): ClassroomRepository => {
  const getClassroom: ClassroomRepository["getClassroom"] = async ({ id }) => {
    const classrooms = await client.queryArray(`
    SELECT
    json_build_object(
        'id', classrooms.id,
        'name', classrooms.name,
        'open', classrooms.open,
        'close', classrooms.close,
        'capacity', classrooms.capacity,
        'students', (
        SELECT json_agg(json_build_object(
                    'id', students.id,
                    'name', students.name,
                    'enter', students.enter,
                    'leave', students.leave
                ))
        FROM students
        WHERE students.classroom_id = classrooms.id
        )
    ) AS classroom_json
    FROM classrooms
    WHERE classrooms.id = '${id}';
    `);

    const rows = classrooms.rows;
    return rows[0][0] as unknown as Classroom;
  };

  const getClassrooms: ClassroomRepository["getClassrooms"] = async () => {
    const classrooms = await client.queryArray(`
    SELECT
    json_build_object(
        'id', classrooms.id,
        'name', classrooms.name,
        'open', classrooms.open,
        'close', classrooms.close,
        'capacity', classrooms.capacity,
        'students', (
        SELECT json_agg(json_build_object(
                    'id', students.id,
                    'name', students.name,
                    'enter', students.enter,
                    'leave', students.leave
                ))
        FROM students
        WHERE students.classroom_id = classrooms.id
        )
    ) AS classroom_json
    FROM classrooms
    `);

    const rows = classrooms.rows;
    return rows.map((item) => item[0]) as unknown as Classroom[];
  };

  return {
    getClassroom,
    getClassrooms,
  };
};
