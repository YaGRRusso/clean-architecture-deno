CREATE TABLE classrooms (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  open INT NOT NULL,
  close INT NOT NULL,
  capacity INT NOT NULL
);

CREATE TABLE students (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  enter INT NOT NULL,
  leave INT
);

ALTER TABLE students
ADD COLUMN classroom_id INT,
ADD CONSTRAINT fk_classroom_id
FOREIGN KEY (classroom_id)
REFERENCES classrooms(id);
