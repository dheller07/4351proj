Create Database `restaurant_db`

USE restaurant_db;

CREATE TABLE `CreditCard` (
  `cardNumber` varchar(255) NOT NULL,
  `cardType` varchar(255) NOT NULL,
  `CVV` varchar(255) NOT NULL,
  `expirationDate` varchar(255) NOT NULL,
  `cardHolder` varchar(255) NOT NULL,
  PRIMARY KEY (`cardNumber`)
)ENGINE=INNODB;

CREATE TABLE `User` (
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `admin` boolean NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `mailingAddress` varchar(255) NOT NULL,
  `billingAddress` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `preferredPayment` varchar(255) NOT NULL,
  `preferredDinerNumber` INT NOT NULL,
  `dinerPoints` varchar(255) NOT NULL,
  PRIMARY KEY (`userName`)
)ENGINE=INNODB;

CREATE TABLE `Reservation` (
  `reservationNumber` varchar(255) NOT NULL,
   `reservationUser` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `numberOfGuests` int NOT NULL,
  PRIMARY KEY (`reservationNumber`),
  UNIQUE KEY  `reservationUser` (`reservationUser`),
  FOREIGN KEY(`reservationUser`)
  REFERENCES User(`userName`)
)ENGINE=INNODB;

CREATE TABLE `TimeSlot` (
  `timeSlotNumber` int NOT NULL,
  `holdFee` double NOT NULL,
  `reserveTimeSlot` varchar(255) NOT NULL,
  `dataAndTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`timeSlotNumber`),
  UNIQUE KEY  `reserveTimeSlot` (`reserveTimeSlot`),
  FOREIGN KEY (`reserveTimeSlot`)
  REFERENCES Reservation(`reservationNumber`)
)ENGINE=INNODB;


CREATE TABLE `Table` (
  `tableNumber` int NOT NULL,
  `capacityLimit` int NOT NULL,
  PRIMARY KEY (`tableNumber`)
)ENGINE=INNODB;

