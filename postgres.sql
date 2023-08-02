CREATE TABLE classrooms (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  open INTEGER NOT NULL,
  close INTEGER NOT NULL,
  capacity INTEGER NOT NULL
);

CREATE TABLE students (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  enter INTEGER NOT NULL,
  leave INTEGER
);

ALTER TABLE students
ADD COLUMN classroom_id VARCHAR(36) REFERENCES classrooms(id);

INSERT INTO classrooms (id, name, open, close, capacity)
VALUES
  ('a1f531c6-702b-4dc6-a2d4-5a5c8db40f7e', 'Portugues', 6, 10, 10),
  ('e09a64d9-8f4f-4f10-9657-3b334f43d74b', 'Matematica', 6, 10, 10);

INSERT INTO students (id, name, enter, leave, classroom_id)
VALUES
  ('b0a6496e-8873-45a0-ba57-543da95b266f', 'John Smith', 7, null, 'a1f531c6-702b-4dc6-a2d4-5a5c8db40f7e'),
  ('7dd4f095-5a24-4e37-96a5-af6c2df733e0', 'Jane Doe', 6, null, 'a1f531c6-702b-4dc6-a2d4-5a5c8db40f7e'),
  ('9e434a07-c87a-4b1e-bd8a-c4b896876216', 'Michael Johnson', 6, 9, 'e09a64d9-8f4f-4f10-9657-3b334f43d74b'),
  ('d0a92a2c-3463-44ab-9b43-9ce972f16f8b', 'Emily Williams', 7, null, 'e09a64d9-8f4f-4f10-9657-3b334f43d74b');