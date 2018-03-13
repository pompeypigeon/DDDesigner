create database ddDesigner;
use ddDesigner;

create table if not exists Dictionary(
	dictionaryID int primary key,
	databaseName varchar(64) not null,
	dateCreated date not null,
	version varchar(20),
	private bit
) engine=InnoDB;

create table if not exists Entity(
	entityName varchar(64),
	dictionaryID int,
	primary key(entityName, dictionaryID),
	constraint foreign key (dictionaryID) references Dictionary(dictionaryID)
) engine=InnoDB;

create table if not exists Attribute(
	attrName varchar(64),
	entityName varchar(64),
	dictionaryID int,
	dataType varchar(64) not null,
	dataTypeLength int,
	enumList text,
	primaryKey bit,
	foreignKey bit,
	fkEntity varchar(64),
	fkAttr varchar(64),
	nullable bit not null,
	defaultValue varchar(64),
	description text,
	primary key(attrName, entityName, dictionaryID),
	constraint foreign key (entityName) references Entity(entityName),
	constraint foreign key (dictionaryID) references Dictionary(dictionaryID)
) engine=InnoDB;

create table if not exists User(
	userID int primary key,
	userEmail varchar(200)
) engine=InnoDB;

create table if not exists Collaboration(
	dictionaryID int,
	userID int,
	primary key(dictionaryID, userID),
	constraint foreign key (dictionaryID) references Dictionary(dictionaryID),
	constraint foreign key (userID) references User(userID)
) engine=InnoDB;
