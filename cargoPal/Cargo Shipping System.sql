--Check if database exists
IF DB_ID('CargoPal') IS NOT NULL
	BEGIN
    PRINT 'Database exists';
    USE master;
    ALTER DATABASE CargoPal SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE CargoPal;
END

-- Create Cargo Shipping System database 
PRINT 'Creating Database...';
CREATE DATABASE CargoPal;
GO

USE CargoPal
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
    CONSTRAINT userType_check CHECK ([userType] IN ('Client', 'Agent'))
);


-- Populate table for User
INSERT INTO Users
    (firstName, lastName, companyName, phone,email, [address],[password],userType )
VALUES
    ('Dua' , 'Lipa', NULL, '0777345900', 'dualipa@gmail.com', '40.Little London Junction, London,UK', '123456', 'Client'),
    ('John', 'smith', NULL, '079847900', 'johnsmith@gmail.com', '10.Barnes Place, colombo,SL', '123456', 'Client'),
    ('Alexander', 'Hamilton', NULL, '079843456', 'ahamiltion@gmail.com', '100. church road, wattala,SL', '123456', 'Client'),


    ('Drake', 'Graham', 'Ship It', '0773000108', 'shipit@hotmail.com', '12B.Marine Drive,Colombo 03', '567890', 'Agent'),
    ('John', 'Adams', 'Cargo', '0774567876', 'cargo@hotmail.com', 'Ist Flr,office No.9, 445/51, Kalbadevi Road, Mumbai, India', '567890', 'Agent'),
    ('Jessica', 'Nortan', 'Evergreen', '0771234678', 'evergreen@hotmail.com', '116. Union Place,Colombo 07', '567890', 'Agent')
;


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
    CONSTRAINT status_check CHECK ([status] IN ('Shipped','In Transit', 'Arrived')),
);

INSERT INTO Shipments
    (userId, origin, destination,startdate, enddate, capacity, [status] )
VALUES
    (1, 'colombo', 'chennai', '01/10/2020', '03/10/2020', 100, 'Shipped' ),
    (2, 'colombo', 'singapore', '05/10/2020', '08/10/2020', 50, 'In Transit' ),
    (3, 'colombo', 'malaysia', '01/09/2020', '02/09/2020', 30, 'Arrived' ),
    (4, 'colombo', 'maldives', '05/11/2020', '08/11/2020', 300, 'Arrived' );


PRINT 'Creating a table for Bookings...';
CREATE TABLE Bookings
(
    bookingId INT IDENTITY(1,1) PRIMARY KEY,
    userId INT FOREIGN KEY REFERENCES Users(userId),
    shipmentId INT FOREIGN KEY REFERENCES Shipments (shipmentId),
    receiverName VARCHAR (100) NOT NULL,
    receiverPhone VARCHAR (100) NOT NULL,
    receiverAddress VARCHAR (100) NOT NULL,
    item VARCHAR (100) NOT NULL,
    instructions VARCHAR (100) NOT NULL,

    packaging VARCHAR(100) NOT NULL,
    CONSTRAINT packaging_check CHECK (packaging IN ('Small','Medium','Large ')),
    [status] VARCHAR(100) NOT NULL,
    CONSTRAINT paymentType_check CHECK ([status] IN ('Approved','Rejected')),
);
INSERT INTO Bookings
    (userId,shipmentId, receiverName, receiverPhone, receiverAddress, item, instructions,packaging , [status])
VALUES
    (1, 1, 'Eliza Smith', '91-995-5513-746', ' 9/10 Krishna Chaya, Khar Muncipal Market 1 St Road, Khar, Mumbai', 'food', 'fragile', 'Medium', 'Approved'),
    (2, 2, 'Lee Young', '6585557997', ' 590 Yio Chu Kang Road #03-01, Singapore', 'food', 'fragile', 'Large', 'Approved'),
    (3, 3, 'Sarah Miller', '601355532', 'E913 2Nd Floor Jalan Bukit Ubi , Kuantan, Malaysia', 'food', 'fragile', 'Small', 'Approved'),
    (4, 4, 'Lisa Brown', '22355555240', ' 901 Lorong 4 Kampung Bercham, Male main Island', 'food', 'fragile', 'Small', 'Rejected');

PRINT 'Creating a table for Orders...';
CREATE TABLE Orders
(
    orderId INT IDENTITY(1,1) PRIMARY KEY,
    shipmentId INT FOREIGN KEY REFERENCES Shipments(shipmentId),
    bookingId INT FOREIGN KEY REFERENCES Bookings(bookingId),
    [status] VARCHAR(100) NOT NULL,
    CONSTRAINT deliveryType_check CHECK ([status] IN ('Available','Dropped off','On the way','Arrived ')),
);
INSERT INTO Orders
    (shipmentId, bookingId,[status])
VALUES
    (1, 1, 'Dropped off'),
    (2, 2, 'On the way'),
    (3, 3, 'Arrived'),
    (4, 4, 'On the way');










