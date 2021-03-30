DROP TABLE IF EXISTS stadiums;

CREATE TABLE stadiums (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(250) DEFAULT NULL,
  address VARCHAR(250) DEFAULT NULL,
  capacity INT NOT NULL
);

INSERT INTO stadiums (name, address, capacity) VALUES
  ('stadium 1', 'Lorem ipsum dolor sit amet.', 45000),
  ('stadium 2', 'Lorem ipsum dolor sit amet.', 65000),
  ('stadium 3', 'Lorem ipsum dolor sit amet.', 35000);
