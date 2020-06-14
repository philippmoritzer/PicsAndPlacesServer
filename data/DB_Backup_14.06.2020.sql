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
  `zipcode` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `zipcode_idx` (`zipcode`),
  KEY `country_id_idx` (`country_id`),
  KEY `country_address_id_idx` (`country_id`),
  KEY `country_add_id_idx` (`country_id`),
  CONSTRAINT `country_add_id` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `zipcode` FOREIGN KEY (`zipcode`) REFERENCES `city` (`zipcode`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'Kieler Straße',32,28219,1),(2,'Am Markt',1,28195,1),(3,'Franz-Böhmert-Straße',1,28205,1),(4,'Bremer Roland Str.',1,28205,1),(5,'Bremer Roland Str.',1,28205,1),(7,'Inserted by api street',5,28211,1),(8,'Inserted by api street',5,28211,1),(9,'Inserted by api street',5,28211,1),(10,'Inserted by api street',5,28211,1),(11,'Inserted by api street',5,28211,1),(12,'Inserted by api street',5,28211,1),(13,'Inserted by api street',5,28211,1),(14,'Inserted by api street',5,28211,1),(15,'Inserted by api street',5,28211,1),(16,'Inserted by api street',5,28211,1),(18,'Inserted by api street',5,28213,1),(20,'Inserted by api street',5,28217,1),(21,'Inserted by api street',5,28211,1),(23,'Inserted by api street',5,28266,1),(24,'Inserted by api street',5,28266,1),(25,'Inserted by api street',5,28266,1),(26,'Inserted by api street',5,28266,1),(27,'Inserted by api street',5,28266,1),(28,'Inserted by api street',5,28266,1),(29,'Inserted by api street',5,28266,1),(30,'Inserted by api street',5,28266,1),(31,'Inserted by api street',5,28266,1),(32,'Inserted by api street',5,28266,1),(33,'Final API-Test Street',551,30712,7),(34,'Final API-Test Street',551,30712,7),(35,'Final API-Test Street',551,30712,7),(36,'Final API-Test Street',551,30712,7),(37,'Final API-Test Street',551,30712,7),(38,'Final API-Test Street',551,30712,7),(39,'Final API-Test Street',551,30312,8),(40,'Final API-Test Street',551,30312,8),(41,'Schwachhauser Heerstraße',59,28211,1),(42,'Schwachhauser Heerstraße',59,28211,1),(43,'Carl-Hurtzig-Straße',0,28259,1),(44,'Weg zum Krähenberg',55,28201,1),(45,'Rembertiring',0,28203,1),(46,'Belfortstraße',5,28211,1),(47,'Hastedter Osterdeich',207,28207,1),(48,'Hastedter Brückenstraße',44,28207,1),(49,'Westerstraße',80,28199,1),(50,'Stephanikirchenweide',20,28217,1),(51,'Oldenburger Straße',0,28199,1),(52,'Eickedorfer Straße',0,28215,1),(53,'Theodor-Heuss-Allee',14,28215,1),(54,'Rosenweg',6,28219,1),(55,'Use Akschen',100,28237,1),(56,'Ferdinand-Porsche-Straße',0,28237,1),(58,'Republica de Chile',0,20230,9),(59,'Ehrhorner Straße',11,28329,1),(60,'Flughafenallee',10,28199,1),(61,'Utbremer Straße',0,28217,1),(62,'undefined',0,940001,10),(63,'Sudwalder Straße',3,28307,1),(65,'Lilienthaler Heerstraße',0,28357,1),(66,'Schwachhauser Ring',133,28213,1),(67,'Waller Heerstraße',144,28219,1),(68,'Am Winterhafen',5,28217,1),(69,'Im Krummen Arm',1,28203,1),(70,'Kamphofer Damm',0,28197,1),(71,'Arsterdamm',0,28279,1),(72,'Ludwig-Roselius-Allee',75,28329,1),(73,'Borgfelder Heerstraße',34,28357,1),(74,'A 281',0,28197,1),(75,'Autobahnzubringer Universität',0,28359,1),(81,'Storchenweg',0,28259,1),(82,'Flughafenallee',20,28199,1),(83,'Dötlinger Straße',3,28197,1),(84,'Steinmetzenweg',0,28309,1);
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
  `zipcode` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `city` varchar(50) NOT NULL,
  PRIMARY KEY (`zipcode`,`country_id`),
  KEY `country_id_idx` (`country_id`),
  CONSTRAINT `country_id` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (20230,9,'Aguascalientes'),(28195,1,'Bremen'),(28197,1,'Bremen'),(28199,1,'Bremen'),(28201,1,'Bremen'),(28203,1,'Bremen'),(28205,1,'Bremen'),(28207,1,'Bremen'),(28211,1,'bremen'),(28212,1,'bremen'),(28213,1,'bremen'),(28215,1,'Bremen'),(28217,1,'bremen'),(28219,1,'Bremen'),(28237,1,'Bremen'),(28239,1,'Bremen'),(28259,1,'Bremen'),(28266,1,'bremen'),(28266,5,'bremen'),(28279,1,'Bremen'),(28307,1,'Bremen'),(28309,1,'Bremen'),(28325,1,'Bremen'),(28329,1,'Bremen'),(28357,1,'Bremen'),(28359,1,'Bremen'),(30312,8,'Toronto'),(30712,7,'Kapstadt'),(940001,10,'Inírida');
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
  `name` varchar(120) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (5,'Argentina'),(3,'Belgium'),(8,'Canada'),(2,'France'),(1,'Germany'),(10,'Kolumbien'),(9,'Mexiko'),(4,'Serbia'),(7,'South Africa');
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
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Bremer Roland Refurbished','Aufbereitete Version vom Bremer Roland, neue Hausnummer',53.075873672603585,8.807303781089786,1,5,1,'2020-05-04 12:40:28','2020-05-07 20:23:53'),(2,'Weserstadion','Fußball-Stadion',53.067298889160156,8.838866233825684,1,3,1,'2020-05-04 12:48:54',NULL),(3,'inserted by api','I am inserted by the api',2.90182,5.3812,1,1,1,'2020-05-16 20:51:31',NULL),(5,'inserted by api','I am inserted by the api',2.90182,5.3812,1,1,1,'2020-05-16 20:53:43',NULL),(6,'inserted by api','I am inserted by the api',2.90182,5.3812,1,7,1,'2020-05-16 21:25:23',NULL),(7,'inserted by api','I am inserted by the api',2.90182,5.3812,1,12,1,'2020-05-16 21:38:44',NULL),(8,'inserted by api','I am inserted by the api',2.90182,5.3812,1,13,1,'2020-05-16 21:39:03',NULL),(9,'inserted by api','I am inserted by the api',2.90182,5.3812,1,15,1,'2020-05-16 21:40:13',NULL),(10,'inserted by api','I am inserted by the api',2.90182,5.3812,1,16,1,'2020-05-16 21:40:42',NULL),(11,'inserted by api','I am inserted by the api',2.90182,5.3812,1,18,1,'2020-05-16 21:42:42',NULL),(12,'inserted by api','I am inserted by the api',2.90182,5.3812,1,21,1,'2020-05-17 12:19:09',NULL),(13,'inserted by api','I am inserted by the api',2.90182,5.3812,1,23,1,'2020-05-17 12:19:40',NULL),(14,'inserted by api','I am inserted by the api',2.90182,5.3812,1,24,1,'2020-05-17 12:41:04',NULL),(15,'inserted by api','I am inserted by the api',2.90182,5.3812,1,25,1,'2020-05-17 12:41:38',NULL),(16,'inserted by api','I am inserted by the api',2.90182,5.3812,1,26,1,'2020-05-17 12:42:38',NULL),(17,'inserted by api','I am inserted by the api',2.90182,5.3812,1,27,1,'2020-05-17 12:44:12',NULL),(18,'inserted by api','I am inserted by the api',2.90182,5.3812,1,28,1,'2020-05-17 12:44:59',NULL),(19,'inserted by api','I am inserted by the api',2.90182,5.3812,1,29,1,'2020-05-17 12:46:07',NULL),(20,'inserted by api','I am inserted by the api',2.90182,5.3812,1,30,1,'2020-05-17 12:47:11',NULL),(21,'inserted by api','I am inserted by the api',2.90182,5.3812,1,31,1,'2020-05-17 12:47:28',NULL),(22,'inserted by api','I am inserted by the api',2.90182,5.3812,1,32,1,'2020-05-17 12:47:49',NULL),(23,'Final API-Test','Final API-Test Description',3.90182,-5.3812,1,33,1,'2020-05-17 13:03:40',NULL),(24,'Final API-Test','Final API-Test Description',3.90182,-5.3812,1,34,1,'2020-05-17 13:04:07',NULL),(25,'Final API-Test','Final API-Test Description',3.90182,-5.3812,1,35,1,'2020-05-17 15:12:50',NULL),(26,'Final API-Test','Final API-Test Description',3.90182,-5.3812,1,36,1,'2020-05-17 15:14:30',NULL),(27,'Final API-Test','Final API-Test Description',3.90182,-5.3812,1,37,1,'2020-05-17 15:15:20',NULL),(28,'Final API-Test','Final API-Test Description',3.90182,-5.3812,1,38,1,'2020-05-18 10:49:07',NULL),(29,'Final API-Test','Final API-Test Description',3.90182,-5.3812,1,39,1,'2020-05-18 10:49:47',NULL),(31,'asgasg','asdgasg',53.081410704023625,8.83376264064599,1,41,1,'2020-05-22 22:21:48',NULL),(32,'Inserted From Webapplication','First time inserted from webapplication',53.081410704023625,8.83376264064599,1,42,1,'2020-05-22 22:23:18',NULL),(33,'Inserted By Webapplication 2','Inserted from here',53.05395973086753,8.739313704662305,1,43,1,'2020-05-22 22:24:51',NULL),(34,'Hier wohnt doch Leo oder?','Leos zuhause',53.061941623441,8.831813602360423,1,44,1,'2020-05-22 22:28:28',NULL),(35,'Rembertiring','Ringringring banana phone',53.07725828365818,8.819974947722777,1,45,1,'2020-05-22 22:47:28',NULL),(36,'Not quiet Lars','Erster über die Webanwendung editierter Ort',53.0812272713964,8.850728590269583,2,46,1,'2020-05-22 22:50:13','2020-06-14 13:48:27'),(37,'Kennst du diesen Ort','Ich kenne ihn nicht',53.06262159500251,8.864803340643883,1,47,1,'2020-05-23 09:35:45',NULL),(38,'What an interesting Location tho','yesyes',53.06116627905956,8.85282727937632,1,48,1,'2020-05-23 09:37:13',NULL),(39,'Neue Stadt','Neue Stadt in der Neustadt',53.07412121580419,8.79438120219395,1,49,1,'2020-05-23 09:38:32',NULL),(40,'Pier 2','Konzerthalle',53.08783634515598,8.773695181586458,1,50,1,'2020-05-23 09:39:28',NULL),(41,'Vergessen wo ich geklickt habe','Geklickt',53.072004947401076,8.784078804989846,1,51,1,'2020-05-23 09:42:14',NULL),(42,'Automatische Aktualisierung Test','Automatsich',53.09257316315933,8.810675030546584,1,52,1,'2020-05-23 09:44:50',NULL),(43,'Ging gerade nicht','Tstaa',53.086490087132155,8.811116657344114,1,53,1,'2020-05-23 09:45:30',NULL),(44,'Bremen Nord','Rosenweg',53.11255564126899,8.808602826839156,1,54,1,'2020-05-23 09:52:05',NULL),(45,'Industriehäfen','Bremen',53.1160606129982,8.742011544983006,1,55,1,'2020-05-23 09:52:40',NULL),(46,'Stahlwerke','Produktion von Stahl',53.13698309719282,8.699793051724926,1,56,1,'2020-05-23 09:53:24',NULL),(48,'Mechikoooo','Leo wohnt in Mexiko',21.8671851007872,-102.30056951685543,1,58,1,'2020-05-23 10:08:25',NULL),(49,'Fahr','In der Vahr',53.07769666395527,8.878969903027341,11,59,1,'2020-05-23 10:40:30',NULL),(50,'ZIMT Hochschule Bremen EDITED','Hochschule Bremen Gebäude',53.05507932403559,8.78312122430526,10,60,1,'2020-05-24 08:57:52','2020-06-13 22:34:38'),(51,'Fernseherturm','Er ist groß und dreckig',53.09528996541181,8.791872089294378,10,61,1,'2020-05-24 14:53:20',NULL),(52,'Natur','Ich glaube mehr Natur geht nicht',3.7603729946174522,-67.95593261718751,2,62,1,'2020-05-24 15:09:24',NULL),(53,'Holz an Ostern','Holz ist nur an Ostern schön',53.0554049551423,8.948308805196723,12,63,1,'2020-05-29 20:34:47',NULL),(55,'Hörner','Hörner lehe',53.10636970003141,8.886178950015548,13,65,1,'2020-05-29 20:38:40',NULL),(56,'Schwache Häuser','In Schwachhausen',53.090075797697025,8.839152485044185,2,66,1,'2020-05-29 20:42:32',NULL),(57,'Wall-E','Der Film 3D',53.1024496838478,8.784918158805858,10,67,1,'2020-05-29 20:44:24','2020-06-14 09:05:51'),(58,'Winterhafen','Hier kommen die Schiffe im Winter an.',53.10018286894668,8.762262498521649,12,68,1,'2020-05-29 20:56:06',NULL),(59,'Saudi Arabi Money Rich','Lass die Affen ausm Zoo',53.07129922315383,8.824392353702782,11,69,1,'2020-05-29 20:57:22',NULL),(60,'tseta','testa123',53.081410704023625,8.757429037885395,12,70,1,'2020-05-29 21:18:57',NULL),(61,'Unterviechland','z.B. Naturpark Bremen',53.03743943927171,8.838465967307366,10,71,1,'2020-05-29 21:27:25','2020-06-13 22:36:35'),(62,'East Expansion','kein plan',53.07129922315383,8.903988400692144,13,72,1,'2020-05-29 21:46:27',NULL),(63,'BARGFELD','buckbuckbuck',53.124219810888285,8.900210675893684,2,73,14,'2020-06-03 12:01:58','2020-06-13 12:46:40'),(64,'new123','newlocation',53.07583632221047,8.745258489295425,13,74,14,'2020-06-09 14:54:13','2020-06-09 14:59:26'),(71,'Naturpark Bremen','Park-Natur in Bremen',53.06898815526443,8.76154780217974,12,81,2,'2020-06-14 13:34:05',NULL),(72,'Brumm brumm Flugzeug','Flugzeug',53.04278180097709,8.788665698318729,12,82,2,'2020-06-14 13:42:46',NULL),(73,'hallo','testest',53.08136356664882,8.771161967754598,13,83,2,'2020-06-14 13:43:54',NULL),(74,'xD edit','loloooo',53.063624372348386,8.915310337106344,11,84,2,'2020-06-14 13:44:43','2020-06-14 13:49:26');
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
INSERT INTO `location_tour` VALUES (1,4),(2,4),(34,5),(50,5),(57,10),(58,10),(60,10),(64,10),(60,11),(61,11),(62,11),(63,11),(64,11),(60,12),(61,12),(62,12),(63,12),(64,12),(61,13),(62,13),(60,14),(61,14),(62,14),(63,14),(64,14);
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
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (1,'2020-05-07 20:23:53','/contextpath/images/bremer_roland_32.png',30),(3,'2020-05-07 21:38:36','media-upload/media_1589752810815_6e6990.png',1),(4,'2020-05-07 21:38:52','/image.png',1),(5,'2020-05-07 21:39:05','/image.png',1),(6,'2020-05-07 21:41:27','/image.png',1),(7,'2020-05-07 21:41:45','/image.png',1),(8,'2020-05-07 21:42:24','/image.png',1),(9,'2020-05-07 21:46:26','/image.png',1),(10,'2020-05-17 22:00:15','media-upload/media_1589752810815_6e6990.png',1),(11,'2020-05-17 22:00:54','media-upload/media_1589752849774_6e6990.png',1),(12,'2020-05-17 22:02:55','media-upload/media_1589752971039_6e6990.png',1),(13,'2020-05-18 10:57:24','media-upload/media_1589799439789_6e6990.png',1),(14,'2020-05-22 12:26:13','media-upload/media_1590150372613_6e6990.png',1),(15,'2020-05-22 12:26:56','media-upload/media_1590150415457_6e6990.png',1),(16,'2020-05-22 12:27:11','media-upload/media_1590150431200_6e6990.png',1),(17,'2020-05-22 12:29:08','media-upload/media_1590150547492_6e6990.png',1),(18,'2020-05-22 12:29:27','media-upload/media_1590150566770_6e6990.png',1),(19,'2020-05-22 12:30:23','media-upload/media_1590150623032_6e6990.png',1),(21,'2020-05-22 14:41:32','media-upload/media_1590158491530_0.jpg',0),(22,'2020-05-22 14:41:51','media-upload/media_1590158511311_0.jpg',0),(23,'2020-05-22 14:43:51','media-upload/media_1590158631326_0.jpg',0),(24,'2020-05-22 14:43:56','media-upload/media_1590158635655_41tq4I4Up-L._AC_US218_.jpg',0),(25,'2020-05-22 22:50:13','media-upload/media_1590187813572_0.jpg',36),(26,'2020-05-22 22:50:13','media-upload/media_1590187813581_0.jpg',36),(27,'2020-05-23 09:35:45','media-upload/media_1590226544436_Rest-API.png',37),(28,'2020-05-23 09:37:13','media-upload/media_1590226632096_71Z6i0krmrL._SX355_.jpg',38),(29,'2020-05-23 09:42:14','media-upload/media_1590226933241_1200px-Amazon_Web_Services_Logo.svg.png',41),(30,'2020-05-23 09:45:30','media-upload/media_1590227129077_1200px-Amazon_Web_Services_Logo.svg.png',43),(33,'2020-05-23 10:08:25','media-upload/media_1590228504563_a004e8f7-e00d-4f81-b557-9f97f9401bf3.jpg',48),(34,'2020-05-24 08:57:52','media-upload/media_1590310669833_download.jpg',50),(36,'2020-05-24 15:09:24','media-upload/media_1590332962313_Cerros_Mavecure,_Inirida._-_panoramio.jpg',52),(38,'2020-05-29 20:38:40','media-upload/media_1590784719154_Cerros_Mavecure,_Inirida._-_panoramio.jpg',55),(39,'2020-05-29 20:42:32','media-upload/media_1590784951191_download.jpg',56),(40,'2020-05-29 20:44:24','media-upload/media_1590785063020_WallE.jpg',57),(43,'2020-05-29 21:45:29','media-upload/media_1590788727856_Cerros_Mavecure,_Inirida._-_panoramio.jpg',58),(44,'2020-05-29 21:46:27','media-upload/media_1590788785470_02_big.jpg',62),(45,'2020-06-09 14:54:13','media-upload/media_1591714451093_2.png',64),(46,'2020-06-09 15:42:48','media-upload/media_1591717366056_12.png',65),(60,'2020-06-13 22:34:25','media-upload/media_1592087664310_02_big.jpg',50),(61,'2020-06-14 09:05:52','media-upload/media_1592125551134_delethis.png',57),(62,'2020-06-14 13:34:05','media-upload/media_1592141644492_1.png',71),(64,'2020-06-14 13:49:26','media-upload/media_1592142564716_hart.jpg',74);
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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (1,5,'top',NULL,1,1,'2020-05-04 12:43:03',NULL),(2,3,'Ein sehr schöner Ort! Bitte besuchen!',NULL,36,2,'2020-05-29 21:51:30',NULL),(3,5,'Das ist ein Kommentar, er ist relativ lang im Gegensatz zu den anderen Testdaten. Ich versuche das auch zu testen, manchmal ist das wichtig',NULL,36,3,'2020-05-30 08:46:06',NULL),(4,1,'Das was ich da erlebt habe, habe ich noch nirgendwo anders erlebt.',NULL,36,1,'2020-05-30 08:47:01',NULL),(5,1,'Nachtrag: Es war nicht positiv xD',NULL,36,1,'2020-05-30 08:47:29',NULL),(6,1,'Nachtrag: Es war nicht positiv xD',NULL,36,1,'2020-05-30 20:39:57',NULL),(7,1,'Nachtrag: Es war nicht positiv xD',NULL,36,1,'2020-05-30 20:53:39',NULL),(8,1,'Nachtrag: Es war nicht positiv xD',NULL,36,1,'2020-05-30 20:54:59',NULL),(9,1,'Nachtrag: Es war nicht positiv xD',NULL,36,1,'2020-05-30 20:55:30',NULL),(10,1,'Nachtrag: Es war nicht positiv xD',NULL,36,1,'2020-05-30 21:01:20',NULL),(11,1,'Nachtrag: Es war nicht positiv xD',NULL,36,1,'2020-05-30 21:02:25',NULL),(12,4,'what a test',NULL,49,2,'2020-05-30 21:05:58',NULL),(13,2,'What a test',NULL,49,2,'2020-05-30 21:06:47',NULL),(14,1,'Masse',NULL,49,2,'2020-05-30 21:07:31',NULL),(15,1,'Masse',NULL,49,2,'2020-05-30 21:07:32',NULL),(16,1,'Masse',NULL,49,2,'2020-05-30 21:07:32',NULL),(17,1,'Masse',NULL,49,2,'2020-05-30 21:07:33',NULL),(18,1,'Masse',NULL,49,2,'2020-05-30 21:07:33',NULL),(19,1,'Masse',NULL,49,2,'2020-05-30 21:07:33',NULL),(20,1,'Nachtrag: Es war nicht positiv xD',NULL,36,1,'2020-06-01 13:36:32',NULL),(21,3,'Ich finde das super!',NULL,63,2,'2020-06-09 15:02:16',NULL),(22,5,'Aber\n',NULL,63,2,'2020-06-09 15:03:59',NULL),(23,5,'Aber\nDann',NULL,63,2,'2020-06-09 15:04:03',NULL),(24,2,'Doch das funktioniert gut.',NULL,63,2,'2020-06-09 15:04:15',NULL),(26,1,'this comment is edited',NULL,36,1,'2020-06-09 19:48:30','2020-06-09 19:57:14'),(27,1,'Nachtrag: Es war nicht positiv xD',NULL,36,1,'2020-06-09 19:48:53',NULL),(28,1,'Nachtrag: Es war nicht positiv xD',NULL,36,1,'2020-06-09 19:49:17',NULL),(38,1,'I edited the starts',NULL,63,14,'2020-06-13 14:06:59','2020-06-13 14:12:09');
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
  `description` varchar(45) DEFAULT NULL,
  `length` double NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `created_time` datetime NOT NULL,
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `category_id_tour_idx` (`category_id`),
  CONSTRAINT `category_id_tour` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tour`
--

LOCK TABLES `tour` WRITE;
/*!40000 ALTER TABLE `tour` DISABLE KEYS */;
INSERT INTO `tour` VALUES (3,'edited','edited description',5,1,'2020-05-07 20:00:43',NULL),(4,'edited','edited description',5,1,'2020-05-07 20:03:50',NULL),(5,'edited','edited description',5,1,'2020-06-11 17:11:59',NULL),(10,'editedNew','edited description',5,1,'2020-06-12 08:57:04',NULL),(11,'Inserted by postman','beschreiben',33,1,'2020-06-13 11:56:50',NULL),(12,'Inserted by postman','beschreiben',33,1,'2020-06-13 11:59:09',NULL),(13,'Inserted by postman','beschreiben',33,1,'2020-06-13 12:00:13',NULL),(14,'Inserted by postman','beschreiben',33,1,'2020-06-13 12:01:12',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jbolz@stud.hs-bremen.de','Jan','geheim',1),(2,'pmoritzer@stud.hs-bremen.de','Philipp','$2b$12$1l90fgn4fHpCrZxs5p0XO.WTUBz.QkMU0xpamyhV/dzBjFuV2njvC',3),(3,'ltuturea@stud.hs-bremen.de','Leonard','thisshouldbeahashvalue',3),(14,'philipp.moritzer@yahoo.de','Philipp_NonAdmin','$2b$12$1l90fgn4fHpCrZxs5p0XO.WTUBz.QkMU0xpamyhV/dzBjFuV2njvC',1),(16,'test@testmensch.de','Weserboy','$2b$12$OmMnNHY9yVzDJGqaHVD3TuzZ7k..gYUoxUUGzS9yxqlIdbI2OCKdS',1),(17,'ilog@logged.in','hallo','$2b$12$ejLkLUiRCk1Lmy40uc461..Ze1/F6.ld9Huy5ogJXvgGbQeRw1Lzy',1);
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

-- Dump completed on 2020-06-14 16:05:08
