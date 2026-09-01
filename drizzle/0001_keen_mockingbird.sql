CREATE TABLE `network_applications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`role` varchar(100) NOT NULL,
	`location` varchar(255) NOT NULL,
	`bio` text,
	`portfolioUrl` text,
	`portfolioFileKey` text,
	`portfolioFileUrl` text,
	`portfolioFileName` varchar(255),
	`status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `network_applications_id` PRIMARY KEY(`id`)
);
