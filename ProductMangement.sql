-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2024 at 05:00 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ProductMangement`
--

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `productId` int(11) NOT NULL,
  `productName` varchar(250) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`productId`, `productName`, `description`, `price`, `quantity`, `status`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'mobile', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It h', 5, 2, 'inactive', 'uploads/1727725242403-Screenshot 2024-05-26 115735.png', '2024-09-30 19:40:42', '2024-09-30 19:40:42'),
(2, 'mobile', 'Lorem Ipsum is simply dummy text of theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble', 5, 2, 'active', 'uploads/1727725265776-Screenshot 2024-05-26 115735.png', '2024-09-30 19:41:05', '2024-09-30 19:48:16'),
(3, 'mobile', 'Lorem Ipsum is simply dummy text of theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble', 5, 2, 'active', 'uploads/1727725354315-Screenshot 2024-05-26 115735.png', '2024-09-30 19:42:34', '2024-09-30 19:42:34'),
(4, 'tv', 'Lorem Ipsum is simply dummy text of theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble', 5, 2, 'active', 'uploads/1727725383593-Screenshot 2024-05-26 115735.png', '2024-09-30 19:43:03', '2024-09-30 19:43:03'),
(5, 'string', '', 1, 1, 'active', 'uploads/default-image.jpg', '2024-10-01 02:32:28', '2024-10-01 02:32:28'),
(6, 'string', 'dsfghjkl;;kjhgfdszfxcgvjkl,;.', 1, 2, 'active', 'uploads/default-image.jpg', '2024-10-01 02:32:54', '2024-10-01 02:32:54'),
(7, 'shyam', '', 1, 1, 'active', 'uploads/default-image.jpg', '2024-10-01 02:34:24', '2024-10-01 02:34:24'),
(9, 'shyam', '', 1, 1, 'active', 'uploads/default-image.jpg', '2024-10-01 02:35:15', '2024-10-01 02:35:15'),
(10, 'shyam', '', 1, 1, 'active', 'uploads/1727750224974-Screenshot 2024-05-26 120030.png', '2024-10-01 02:37:04', '2024-10-01 02:37:04'),
(12, 'shyam', NULL, 1, 1, 'active', 'uploads/1727750290838-Screenshot 2024-05-26 120030.png', '2024-10-01 02:38:10', '2024-10-01 02:38:10'),
(13, 'alpha', '', 1, 1, 'active', 'uploads/default-image.jpg', '2024-10-01 02:55:17', '2024-10-01 02:55:17'),
(14, 'alpha', '', 1, 1, 'active', 'uploads/default-image.jpg', '2024-10-01 02:55:29', '2024-10-01 02:55:29');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20240930165027-create-products.js');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`productId`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
