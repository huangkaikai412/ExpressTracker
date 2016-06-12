-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016-06-12 18:14:59
-- 服务器版本: 5.5.49-0ubuntu0.14.04.1
-- PHP 版本: 5.5.9-1ubuntu4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `express`
--

-- --------------------------------------------------------

--
-- 表的结构 `list`
--

CREATE TABLE IF NOT EXISTS `list` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `req_ID` char(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `res_ID` char(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `usrname` varchar(50) CHARACTER SET gb2312 NOT NULL,
  `address` varchar(10) CHARACTER SET gb2312 NOT NULL,
  `company` varchar(10) CHARACTER SET gb2312 NOT NULL,
  `telephone` bigint(15) NOT NULL,
  `res_tele` bigint(15) NOT NULL,
  `state` int(11) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=gbk AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `list`
--

INSERT INTO `list` (`id`, `req_ID`, `res_ID`, `usrname`, `address`, `company`, `telephone`, `res_tele`, `state`, `time`) VALUES
(1, '', '', '黄凯凯', '13号楼E1313', '韵达', 18668775393, 0, 1, '0000-00-00 00:00:00'),
(2, '', '', '孙晴', '13号楼', '顺丰', 12345678911, 0, 1, '0000-00-00 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
