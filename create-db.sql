CREATE DATABASE projectPrototype;

USE projectPrototype;

DROP USER IF EXISTS 'appuser'@'localhost';
CREATE USER 'appuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'harmony';
GRANT ALL PRIVILEGES ON projectPrototype.* TO 'appuser'@'localhost';      

DROP TABLE IF EXISTS user_details;
CREATE TABLE user_details (
  user_id INT NOT NULL UNIQUE AUTO_INCREMENT,
  fullname VARCHAR(60) NOT NULL,
  username VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL,
  user_password VARCHAR(60) NOT NULL,
  PRIMARY KEY(user_id)
);

DROP TABLE IF EXISTS daily_tasks;
CREATE TABLE daily_tasks (
  task_id INT NOT NULL UNIQUE AUTO_INCREMENT,
  task VARCHAR(300) NOT NULL,
  task_complete TINYINT(1) NOT NULL,
  PRIMARY KEY(daily_tasks_id)
);