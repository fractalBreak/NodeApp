drop schema if exists test_schema;
CREATE DATABASE `test_schema` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
GO;
USE test_schema;
CREATE TABLE test_table (
    ID integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(55) NOT NULL,
    contents text not null,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);
INSERT INTO test_table (title, contents)
VALUES
('First Entry','This is the first entry.'),
('Second Entry','This is the second entry.');
