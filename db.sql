create database dictionarydesigner

create table if not exists DataDictionary(
	dictionaryID	varchar(10) primary key,
	name			varchar(100) not null,
	dateCreated		datetime	not null,
	version			varchar(20)
) engine=InnoDB;

create table if not exists EndUser(
	userID		 varchar(10)  primary key,
	userName	 varchar(25)  not null,
	email		 varchar(100)  not null
) engine=InnoDB;

create table if not exists Collaboration(
	dictionaryID	 varchar(10),
	userID			 varchar(10),
	primary key(dictionaryID, userID),
	constraint foreign key (dictionaryID) references Dictionary(dictID),
	constraint foreign key (userID) references EndUser(userID)
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
	tableName varchar(64),
	dictID varchar(10),
	primary key(dictID, tableName),
	constraint foreign key (dictID) references Dictionary(dictID)
) engine=InnoDB;

create table if not exists TableAttribute (
	attributeName varchar(64),
	tableName varchar(64),
	dictID varchar(10),
	primary key(attributeName, tableName, dictID)
) engine=InnoDB;

create table if not exists TableField(
	fieldName varchar(64),
	tableName varchar(64),
	dataType varchar(40) not null,
	dataTypeLength varchar(20),
	description varchar(100),
	dictID varchar(10) not null,
	primary key(fieldName, tableName, dictID),
	constraint foreign key (dictID) references Dictionary(dictID)
) engine=InnoDB;

insert into DDTable values ("Customer", "8212");
insert into DDTable values ("Product", "8212");
insert into DDTable values ("Location", "8212");
insert into DDTable values ("Customer", "8723937212");

insert into TableAttribute values ("custID", "Customer", "8212");
insert into TableAttribute values ("custName", "Customer", "8212");
insert into TableAttribute values ("custDOB", "Customer", "8212");
insert into TableAttribute values ("custValue", "Customer", "8212");
insert into TableAttribute values ("productID", "Product", "8212");
insert into TableAttribute values ("locationID", "Location", "8212");
insert into TableAttribute values ("custID", "Customer", "8723937212");
