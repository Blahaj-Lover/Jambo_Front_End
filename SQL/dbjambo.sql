-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2023 at 09:52 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbjambo`
--

-- --------------------------------------------------------

--
-- Table structure for table `msgame`
--

CREATE TABLE `msgame` (
  `GaID` int(11) NOT NULL,
  `GaName` varchar(100) NOT NULL,
  `GaCover` varchar(100) DEFAULT NULL,
  `GaFile` varchar(100) DEFAULT NULL,
  `GaPrice` varchar(15) NOT NULL,
  `GaDesc` varchar(300) DEFAULT NULL,
  `GaReq` varchar(100) DEFAULT NULL,
  `GaDev` int(11) NOT NULL,
  `GaCtgy` varchar(300) NOT NULL,
  `GaTag` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `msgame`
--

INSERT INTO `msgame` (`GaID`, `GaName`, `GaCover`, `GaFile`, `GaPrice`, `GaDesc`, `GaReq`, `GaDev`, `GaCtgy`, `GaTag`) VALUES
(1, 'The Third Wish\n', './assets/TheThirdWish.png', NULL, 'Free to Play', 'Altair 4. A planet 17 light years from Earth, containing one Mr. and Mrs. White who run a moisture farm for an unconcerned company at the far edge of explored space.', NULL, 10, 'Adventure, RPG', 'Featured'),
(2, 'Light Fall', './assets/LightFall.png', NULL, 'Free to Play', 'Light Fall is a 2D platformer that reinvents the genre with its innovative game mechanic called Shadow Core', NULL, 12, 'Adventure', 'Featured'),
(3, 'Fairy Song', './assets/FairySong.png', NULL, 'Free to Play', 'Fairy song is an exploration game, you take part in a vast and mysterious world, where you\'ll me lots of curious characters', NULL, 9, 'Puzzle', 'More'),
(4, 'Takume', './assets/Takume.png', NULL, 'Free to Play', 'A silly physics-based anti-golf game where you get to golf anything. Every golf course is a new surprising type of golf, some brilliant or hilarious, others so absurd they will make you go: WHAT THE GOLF?Takume is a very short (5 min.) and linear atmospheric and dramatic adventure game.Takume is a v', NULL, 11, 'Action, Adventure', 'New');

-- --------------------------------------------------------

--
-- Table structure for table `msuser`
--

CREATE TABLE `msuser` (
  `UsUsername` varchar(50) NOT NULL,
  `UsEmail` varchar(100) NOT NULL,
  `UsPassword` varchar(100) NOT NULL,
  `UsDob` date DEFAULT NULL,
  `UsSex` varchar(20) NOT NULL,
  `UsCountry` varchar(50) DEFAULT NULL,
  `UsPp` varchar(100) DEFAULT '../img/profile/pp_default',
  `UsID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `msuser`
--

INSERT INTO `msuser` (`UsUsername`, `UsEmail`, `UsPassword`, `UsDob`, `UsSex`, `UsCountry`, `UsPp`, `UsID`) VALUES
('Budi', 'Budiman@gmail.com', 'buds1212', NULL, 'Male', '', '../img/profile/pp_default', 1),
('Soekidjan', 'Sui@gmail.com', 'ss0022', NULL, 'Male', '', '../img/profile/pp_default', 2),
('Antonio', 'Anto42@gmail.com', 'uminipasswordgw', NULL, 'Male', '', '../img/profile/pp_default', 3),
('OmenValorant', 'OmenDariValo@gmail.com', 'ohman', NULL, 'Male', '', '../img/profile/pp_default', 4),
('Jojo', 'Jo3333@gmail.com', 'jotaslim', NULL, 'Male', '', '../img/profile/pp_default', 5),
('Owen Friday', 'Owen@gmail.com', '123123', NULL, 'Male', '', '../img/profile/pp_default', 6),
('Dust In', 'Dastin@gmail.com', '234432', NULL, 'Male', '', '../img/profile/pp_default', 7),
('Henry', 'Henry@gmail.com', '333', NULL, 'Male', '', '../img/profile/pp_default', 8),
('pixel-boy', 'Pixel@gmail.com', 'pix9393', NULL, 'Male', '', '../img/profile/pp_default', 9),
('George Broussard', 'GeorgeBr@gmail.com', 'GBisthebast', NULL, 'Male', '', '../img/profile/pp_default', 10),
('talecrafter', 'Tale@gmail.com', 'talecraft123', NULL, 'Male', '', '../img/profile/pp_default', 11),
('Jae Cloud Yoo', 'Jae232@gmail.com', 'Yooooo', NULL, 'Male', '', '../img/profile/pp_default', 12),
('Eriyowww', 'Erio@yahoo.com', 'eriothebest', NULL, 'test', '', '../img/profile/pp_default', 13);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `msgame`
--
ALTER TABLE `msgame`
  ADD PRIMARY KEY (`GaID`),
  ADD KEY `GaDev` (`GaDev`);

--
-- Indexes for table `msuser`
--
ALTER TABLE `msuser`
  ADD PRIMARY KEY (`UsID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `msgame`
--
ALTER TABLE `msgame`
  MODIFY `GaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `msuser`
--
ALTER TABLE `msuser`
  MODIFY `UsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `msgame`
--
ALTER TABLE `msgame`
  ADD CONSTRAINT `msgame_ibfk_1` FOREIGN KEY (`GaDev`) REFERENCES `msuser` (`UsID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
