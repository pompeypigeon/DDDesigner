create database dictionarydesigner

create table if not exists DataDictionary(
	dictionaryID	varchar(10) primary key,
	name			varchar(100) not null,
	dateCreated		datetime	not null,
	version			varchar(20)
) engine=InnoDB;

create table if not exists EndUser(
	userID		varchar(10) primary key,
	userName	varchar(25) not null,
	email		varchar(100) not null,
	password	varchar(100) not null,
) engine=InnoDB;

create table if not exists Collaboration(
	dictionaryID	varchar(10),
	userID			varchar(10),
	primary key(dictionaryID, userID),
	constraint foreign key dictionaryID references DataDictionary(dictionaryID),
	constraint foreign key userID references EndUser(userID)
) engine=InnoDB;

create table if not exists Message(
	dictionaryID varchar(10),
	messageID varchar(10), 
	userID varchar(10) not null,
	message longtext not null,
	timeSent datetime not null,
	primary key (dictionaryID, messageID),
	constraint foreign key dictionaryID references DataDictionary(dictionaryID),
	constraint foreign key userID references EndUser(userID)
) engine=InnoDB;

create table if not exists DDTable(
	tableID int,
	dictionaryID varchar(10),
	tableName varchar(64) not null,
	primary key(dictionaryID, tableID),
	constraint foreign key dictionaryID references DataDictionary(dictionaryID)
) engine=InnoDB;

create table if not exists DDField(

) engine=InnoDB;
 
createTable if not exists DDFieldConstraint(

) engine=InnoDB;