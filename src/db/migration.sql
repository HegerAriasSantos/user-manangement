CREATE DATABASE IF NOT EXISTS `technical_test` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE technical_test;

CREATE TABLE `teacher` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50),
  `active` boolean,
  `date_created` varchar(25),
  `date_deleted` varchar(25)
);

CREATE TABLE `subject` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(50)
);

CREATE TABLE `class_room` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `code` varchar(10),
  `capacity` int
);

CREATE TABLE `session` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `day` int,
  `teacher_id` int,
  `subject` int,
  `class_room_id` int,
  `hour_start` varchar(20),
  `hour_end` varchar(20)
);

CREATE TABLE `days` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(15)
);

insert into days (name) values ('Monday'), ('Tuesday'), ('Wednesday'), ('Thursday'), ('Friday'), ('Saturday');

CREATE TABLE `student` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `code` varchar(10),
  `name` varchar(50),
  `class_room_id` int
);

ALTER TABLE `session` ADD FOREIGN KEY (`day`) REFERENCES `days` (`id`);

ALTER TABLE `session` ADD FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`);

ALTER TABLE `session` ADD FOREIGN KEY (`subject`) REFERENCES `subject` (`id`);

ALTER TABLE `session` ADD FOREIGN KEY (`class_room_id`) REFERENCES `class_room` (`id`);

ALTER TABLE `student` ADD FOREIGN KEY (`class_room_id`) REFERENCES `class_room` (`id`);