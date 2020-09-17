--Check if database exists
IF DB_ID('CargoSystem') IS NOT NULL
	BEGIN
    PRINT 'Database exists';
    USE master;
    ALTER DATABASE CargoSystem SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE CargoSystem;
END

-- Create Cargo Shipping System database 
PRINT 'Creating Database...';
CREATE DATABASE CargoSystem;
GO

USE CargoSystem
GO

-- Create a table for Users
PRINT 'Creating a table for Users...';
CREATE TABLE Users
(
    userId INT IDENTITY(1,1) PRIMARY KEY,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    companyName VARCHAR(100),
    phone VARCHAR(10) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    [address] VARCHAR(MAX) NOT NULL,
    [password] VARCHAR(MAX) NOT NULL,
    userType VARCHAR(10) NOT NULL,
    CONSTRAINT userType_check CHECK ([userType] IN ('Client','Agent'))
);

-- Populate table for User
-- INSERT INTO Users (firstName, lastName, phone, [address],companyName,email,[password]) VALUES
-- ('Dua','Lipa','0777345900', '40.Little London Junction, London,UK','Sea Ways','dualipa@gmail.com','123456'),
-- ('Drake', 'Graham', '0773000108','12B.Marine Drive,Colombo 03','Ship It','shipit@hotmail.com', '567890');


PRINT 'Creating a table for Shipments...';
CREATE TABLE Shipments
(
    shipmentId INT IDENTITY(1,1) PRIMARY KEY,
    userId INT FOREIGN KEY REFERENCES Users(userId),
	origin VARCHAR (100) NOT NULL,
	destination VARCHAR (100) NOT NULL,
	startdate DATETIME NOT NULL,
	enddate DATETIME NOT NULL,
	capacity FLOAT NOT NULL,   
	[status] VARCHAR(100) NOT NULL,
    [timeStamp] DATETIME DEFAULT GETDATE(),
    CONSTRAINT paymentType_check CHECK ([status] IN ('Approved','Rejected ')),
);

PRINT 'Creating a table for Bookings...';
CREATE TABLE Bookings
(
    bookingId INT IDENTITY(1,1) PRIMARY KEY,  
    userId INT FOREIGN KEY REFERENCES Users(userId), 
	shipmentId INT FOREIGN KEY REFERENCES Shipments (shipmentId),
	receiverName VARCHAR (100) NOT NULL,
	receiverPhone VARCHAR (100) NOT NULL,
	receiverAdd VARCHAR (100) NOT NULL,
	[status] VARCHAR(100) NOT NULL,
	CONSTRAINT boxType_check CHECK ([status] IN ('Small','Medium','Large ')),
);

PRINT 'Creating a table for Orders...';
CREATE TABLE Orders
(
    orderId INT IDENTITY(1,1) PRIMARY KEY,    
    shipmentId INT FOREIGN KEY REFERENCES Shipments(shipmentId),  
    bookingId INT FOREIGN KEY REFERENCES Bookings(bookingId),  
	[status] VARCHAR(100) NOT NULL,
	CONSTRAINT deliveryType_check CHECK ([status] IN ('Dropped off','On the way','Arrived ')),
);










