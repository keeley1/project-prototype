DROP DATABASE IF EXISTS projectPrototype;
CREATE DATABASE projectPrototype;

USE projectPrototype;

DROP USER IF EXISTS 'appuser'@'localhost';
CREATE USER 'appuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON astroCollective.* TO 'appuser'@'localhost';      

