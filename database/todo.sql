/*
 Navicat Premium Data Transfer

 Source Server         : Intern
 Source Server Type    : MySQL
 Source Server Version : 100132
 Source Host           : localhost:3306
 Source Schema         : todo

 Target Server Type    : MySQL
 Target Server Version : 100132
 File Encoding         : 65001

 Date: 06/07/2021 23:56:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tasks
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks`  (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `description` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `datecomplete` datetime NOT NULL,
  `status` enum('NEW','COMPLETE') CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `datecreated` datetime NOT NULL,
  `datemodified` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tasks
-- ----------------------------
INSERT INTO `tasks` VALUES (1, 'Master React 2', 'OK', '2021-12-07 17:00:00', 'COMPLETE', '2021-12-06 17:00:00', '2021-07-06 16:23:55');
INSERT INTO `tasks` VALUES (3, 'Master React', 'master react', '2022-03-02 17:00:00', 'COMPLETE', '2021-07-05 16:23:45', '2021-07-06 15:59:11');
INSERT INTO `tasks` VALUES (10, 'Master React 1', 'master react', '2022-03-02 17:00:00', 'COMPLETE', '2021-07-05 16:27:55', '2021-07-06 16:01:15');

-- ----------------------------
-- Table structure for tasks_users
-- ----------------------------
DROP TABLE IF EXISTS `tasks_users`;
CREATE TABLE `tasks_users`  (
  `taskid` int NOT NULL,
  `userid` int NOT NULL,
  PRIMARY KEY (`taskid`, `userid`) USING BTREE,
  INDEX `FK_users`(`userid`) USING BTREE,
  CONSTRAINT `FK_tasks` FOREIGN KEY (`taskid`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_users` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tasks_users
-- ----------------------------
INSERT INTO `tasks_users` VALUES (1, 1);
INSERT INTO `tasks_users` VALUES (1, 4);
INSERT INTO `tasks_users` VALUES (1, 7);
INSERT INTO `tasks_users` VALUES (3, 1);
INSERT INTO `tasks_users` VALUES (3, 2);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL,
  `username` char(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `password` char(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `index_username`(`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'abcd', '$2b$10$VK1uC/RpFVAddmlv6vdBYevNhFjuPEsQuxS5BlLHBKH9IV3RuMuf.');
INSERT INTO `users` VALUES (2, 'abcde', '$2b$10$UJxVxvChTk9E3Goximjsp.0gtt5DMr5yP4ujOsHIbXZ6jsWkAVwRq');
INSERT INTO `users` VALUES (3, 'abcdef', '$2b$10$3UiNWvnnsq60HsrdIpaGQ.nOw.qZMBOlIa7FHAlIn5UXOJ4nbfQUS');
INSERT INTO `users` VALUES (4, '1234567', '$2b$10$27oM6Jj9umhJonQFEJBpYeUfJVNPfJRQz66APGEGLv3xCa9T5wqOu');
INSERT INTO `users` VALUES (7, '12345678', '$2b$10$sSEXkvNMKQu9s6wkluKuLu2byJ.HGBuGmshKkBaFzBHEJnnS7Jd9y');

SET FOREIGN_KEY_CHECKS = 1;
