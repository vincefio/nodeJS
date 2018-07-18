create database IF NOT EXISTS real_estate;
use real_estate;

create table houses(
	id INT NOT NULL AUTO_INCREMENT,
    picture VARCHAR(50),
    city VARCHAR(20) NOT NULL,
    price INT(6) NOT NULL,
    PRIMARY KEY(id)
);
