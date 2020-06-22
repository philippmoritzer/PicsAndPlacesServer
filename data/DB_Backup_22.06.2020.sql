-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 195.37.176.178    Database: 20_Gruppe2_DB
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(45) NOT NULL,
  `number` int(11) NOT NULL,
  `zipcode` varchar(10) NOT NULL,
  `country_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `zipcode_idx` (`zipcode`),
  KEY `country_id_idx` (`country_id`),
  KEY `country_address_id_idx` (`country_id`),
  KEY `country_add_id_idx` (`country_id`),
  CONSTRAINT `country_add_id` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (2,'Am Markt',1,'28195',1),(3,'Franz-Böhmert-Straße',1,'28205',1),(4,'Bremer Roland Str.',1,'28205',1),(5,'Bremer Roland Str.',1,'28205',1),(8,'Inserted by api street',5,'28211',1),(9,'Inserted by api street',5,'28211',1),(10,'Inserted by api street',5,'28211',1),(11,'Inserted by api street',5,'28211',1),(14,'Inserted by api street',5,'28211',1),(20,'Inserted by api street',5,'28217',1),(40,'Final API-Test Street',551,'30312',8),(44,'Weg zum Krähenberg',55,'28201',1),(50,'Stephanikirchenweide',20,'28217',1),(55,'Use Akschen',100,'28237',1),(56,'Ferdinand-Porsche-Straße',0,'28237',1),(60,'Flughafenallee',10,'28199',1),(74,'A 281',0,'28197',1),(75,'Autobahnzubringer Universität',0,'28359',1),(81,'Storchenweg',0,'28259',1),(87,'Merkurstraße',0,'28197',1),(88,'Via Tiziano',0,'20145',11),(95,'Steffensweg',0,'28217',1),(97,'A 281',0,'28197',1);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `hexcolor` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `hexcolor_UNIQUE` (`hexcolor`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Sehenswürdigkeit','#C62828'),(2,'Natur','#558B2F'),(10,'Architektur','#1565C0'),(11,'Kunst','#EF6C00'),(12,'Geschichte','#6A1B9A'),(13,'Kultur','#00695C');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `zipcode` varchar(10) NOT NULL,
  `country_id` int(11) NOT NULL,
  `city` varchar(50) NOT NULL,
  PRIMARY KEY (`country_id`,`zipcode`),
  KEY `country_id_idx` (`country_id`),
  CONSTRAINT `country_id` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES ('28195',1,'Bremen'),('28197',1,'Bremen'),('28199',1,'Bremen'),('28201',1,'Bremen'),('28203',1,'Bremen'),('28205',1,'Bremen'),('28207',1,'Bremen'),('28211',1,'bremen'),('28212',1,'bremen'),('28213',1,'bremen'),('28215',1,'Bremen'),('28217',1,'bremen'),('28219',1,'Bremen'),('28237',1,'Bremen'),('28239',1,'Bremen'),('28259',1,'Bremen'),('28266',1,'bremen'),('28279',1,'Bremen'),('28307',1,'Bremen'),('28309',1,'Bremen'),('28325',1,'Bremen'),('28329',1,'Bremen'),('28357',1,'Bremen'),('28359',1,'Bremen'),('28266',5,'bremen'),('30712',7,'Kapstadt'),('30312',8,'Toronto'),('20230',9,'Aguascalientes'),('940001',10,'Inírida'),('20121',11,'Mailand'),('20145',11,'Mailand'),('168',12,'Oslo'),('undefined',12,'undefined'),('4370',13,'undefined'),('6360',13,'undefined'),('101',15,'Reykjavik'),('103',15,'Reykjavik'),('M16 8EE',16,'Manchester'),('44112',17,'Bejing');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(120) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (5,'Argentina'),(3,'Belgium'),(8,'Canada'),(17,'China'),(13,'Dänemark'),(2,'France'),(1,'Germany'),(15,'Island'),(11,'Italien'),(10,'Kolumbien'),(9,'Mexiko'),(12,'Norwegen'),(14,'Schweden'),(4,'Serbia'),(7,'South Africa'),(16,'Vereinigtes Königreich');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `address_id` int(11) NOT NULL,
  `create_user_id` int(11) NOT NULL,
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `create_user_id_idx` (`create_user_id`),
  KEY `adress_id_idx` (`address_id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `adress_id` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `create_user_id` FOREIGN KEY (`create_user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Bremer Roland Refurbished','Aufbereitete Version vom Bremer Roland, neue Hausnummer',53.075873672603585,8.807303781089786,1,5,1,'2020-05-04 12:40:28','2020-05-07 20:23:53'),(2,'Weserstadion','Fußball-Stadion',53.067298889160156,8.838866233825684,1,3,1,'2020-05-04 12:48:54',NULL),(34,'Hier wohnt doch Leo oder?','Leos zuhause',53.061941623441,8.831813602360423,1,44,1,'2020-05-22 22:28:28',NULL),(40,'Pier 2','Konzerthalle',53.08783634515598,8.773695181586458,1,50,1,'2020-05-23 09:39:28',NULL),(45,'Industriehäfen','Bremen',53.1160606129982,8.742011544983006,1,55,1,'2020-05-23 09:52:40',NULL),(46,'Stahlwerke','Produktion von Stahl',53.13698309719282,8.699793051724926,1,56,1,'2020-05-23 09:53:24',NULL),(50,'ZIMT Hochschule Bremen EDITED','Hochschule Bremen Gebäude',53.05507932403559,8.78312122430526,10,60,1,'2020-05-24 08:57:52','2020-06-13 22:34:38'),(64,'new123','newlocation',53.07583632221047,8.745258489295425,13,74,14,'2020-06-09 14:54:13','2020-06-09 14:59:26'),(71,'Naturpark Bremen','Park-Natur in Bremen',53.06898815526443,8.76154780217974,12,81,2,'2020-06-14 13:34:05',NULL),(77,'Meine neuste Location','Erstellt von mir, eine schöne Umgebung\n*edit',53.095261036640416,8.709411621093752,2,87,18,'2020-06-20 18:23:24','2020-06-20 18:23:56'),(78,'Modestraße Mailand','Die größte Modestraße in Mailand',45.47150768851259,9.157361984252931,2,88,14,'2020-06-21 11:12:04',NULL),(85,'Fischig Tischig','Weitere location dank Fisch',53.097515859475386,8.78138065338135,11,95,2,'2020-06-21 12:47:21',NULL),(87,'deletthis','desasdf',53.07010208747327,8.77189636230469,2,97,2,'2020-06-21 12:51:25',NULL);
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location_tour`
--

DROP TABLE IF EXISTS `location_tour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location_tour` (
  `location_id` int(11) NOT NULL,
  `tour_id` int(11) NOT NULL,
  PRIMARY KEY (`location_id`,`tour_id`),
  KEY `tour_id_idx` (`tour_id`),
  CONSTRAINT `location_id` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tour_id` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location_tour`
--

LOCK TABLES `location_tour` WRITE;
/*!40000 ALTER TABLE `location_tour` DISABLE KEYS */;
INSERT INTO `location_tour` VALUES (45,23),(46,23),(45,25),(50,25),(77,25),(64,26),(77,27);
/*!40000 ALTER TABLE `location_tour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `mediapath` varchar(100) NOT NULL,
  `location_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `location_id_idx` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (34,'2020-05-24 08:57:52','media-upload/media_1590310669833_download.jpg',50),(45,'2020-06-09 14:54:13','media-upload/media_1591714451093_2.png',64),(46,'2020-06-09 15:42:48','media-upload/media_1591717366056_12.png',65),(60,'2020-06-13 22:34:25','media-upload/media_1592087664310_02_big.jpg',50),(62,'2020-06-14 13:34:05','media-upload/media_1592141644492_1.png',71),(67,'2020-06-20 18:23:24','media-upload/media_1592677404709_3.png',77),(68,'2020-06-20 18:23:24','media-upload/media_1592677404705_2.png',77),(69,'2020-06-21 11:12:04','media-upload/media_1592737922535_unnamed.jpg',78),(75,'2020-06-21 12:47:21','media-upload/media_1592743639498_300px-Hrognkelsi.jpg',85),(76,'2020-06-21 12:51:25','media-upload/media_1592743883983_3.png',87);
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` int(11) NOT NULL,
  `comment` varchar(300) DEFAULT NULL,
  `tour_id` int(11) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `location_id_idx` (`location_id`),
  KEY `tour_id_idx` (`tour_id`),
  KEY `user_id_idx` (`user_id`),
  KEY `location_id_rating_dx` (`location_id`),
  KEY `tour_id_rating_idx` (`tour_id`),
  KEY `user_id_rating_idx` (`user_id`),
  CONSTRAINT `location_id_rating` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tour_id_rating` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_id_rating` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (1,5,'top',NULL,1,1,'2020-05-04 12:43:03',NULL),(45,4,'habe ich erstellt, daher 4*',NULL,77,18,'2020-06-20 18:23:35','2020-06-20 18:23:43');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tour`
--

DROP TABLE IF EXISTS `tour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `created_time` datetime NOT NULL,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `create_user_id` int(11) NOT NULL,
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `category_id_tour_idx` (`category_id`),
  KEY `create_user_id_tour_idx` (`create_user_id`),
  CONSTRAINT `category_id_tour` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `create_user_id_tour` FOREIGN KEY (`create_user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tour`
--

LOCK TABLES `tour` WRITE;
/*!40000 ALTER TABLE `tour` DISABLE KEYS */;
INSERT INTO `tour` VALUES (23,'Fahrradtour durch die Provence','Fahrradtour durch die Provence DESC',33,10,'2020-06-19 12:01:47','2020-06-22 13:54:49',14),(25,'Neue Location bis zum Zimt!','Neue Location bis zum Zimt Desc',34,10,'2020-06-20 18:24:41','2020-06-20 18:25:14',18),(26,'Inserted by postman','beschreiben',33,1,'2020-06-22 13:51:54',NULL,1),(27,'Inserted by postman','beschreiben',33,1,'2020-06-22 13:52:08',NULL,1);
/*!40000 ALTER TABLE `tour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `password` varchar(150) NOT NULL,
  `role` int(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `mail_UNIQUE` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jbolz@stud.hs-bremen.de','Jan','geheim',1),(2,'pmoritzer@stud.hs-bremen.de','Philipp','$2b$12$1l90fgn4fHpCrZxs5p0XO.WTUBz.QkMU0xpamyhV/dzBjFuV2njvC',3),(3,'ltuturea@stud.hs-bremen.de','Leonard','thisshouldbeahashvalue',3),(14,'philipp.moritzer@yahoo.de','Philipp_NonAdmin','$2b$12$XxfR0ATaicI4oso.SDOLJOY6jrlGnYvv.FtvLdirLM6169QdXGyiS',1),(16,'test@testmensch.de','Weserboy','$2b$12$OmMnNHY9yVzDJGqaHVD3TuzZ7k..gYUoxUUGzS9yxqlIdbI2OCKdS',1),(17,'ilog@logged.in','hallo','$2b$12$ejLkLUiRCk1Lmy40uc461..Ze1/F6.ld9Huy5ogJXvgGbQeRw1Lzy',1),(18,'philipp@moritzer.de','Philipp_Neu','$2b$12$FRk8zWojJ9aTAIwYWahVkOh4ag28LXfXBMGZa5.oSGIKmUhMgcTwa',1),(19,'Lisa69@web.de','Lisa69','$2b$12$NuNXX4oRjWVKd6W45Ep/mu9nW8dkgvuSsY.Tza2.3eKx/Y1ISxsUS',1),(20,'testmail2@testproivder.de','23einhalb','$2b$12$FUAh0VjZyna8BzrwrMs7RuDHQDBjVpNVbWNYQ0bUm30DUMLcHm.vS',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-22 15:55:57
