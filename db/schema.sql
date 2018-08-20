CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
	id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name varchar(200) NOT NULL,
    devoured boolean DEFAULT false
);
    
    