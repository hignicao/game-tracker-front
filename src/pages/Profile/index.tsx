import { Box, Container, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GameComponent from "../../components/Game/GameComponent";
import Collection from "../../components/ProfileCollection/Collection";
import { getProfileInfo } from "../../services/userApi";

// const games = [
// 	{
// 		id: 1020,
// 		aggregated_rating: 88.1379310344828,
// 		cover: {
// 			id: 120937,
// 			image_id: "co2lbd",
// 		},
// 		first_release_date: 1379376000,
// 		genres: [
// 			{
// 				id: 5,
// 				name: "Shooter",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "Grand Theft Auto V",
// 		platforms: [
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 9,
// 				name: "PlayStation 3",
// 			},
// 			{
// 				id: 12,
// 				name: "Xbox 360",
// 			},
// 			{
// 				id: 48,
// 				name: "PlayStation 4",
// 			},
// 			{
// 				id: 49,
// 				name: "Xbox One",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 5670,
// 				image_id: "o7q3ikzmkjxbftrd64ok",
// 			},
// 			{
// 				id: 5671,
// 				image_id: "vfdeo6kgu0o4cyzd0sng",
// 			},
// 			{
// 				id: 5672,
// 				image_id: "eepecmqsq6uqxiaukar1",
// 			},
// 			{
// 				id: 5673,
// 				image_id: "hjnzngnrtwr82jzmmkef",
// 			},
// 			{
// 				id: 5674,
// 				image_id: "glvmulyejlde31q8b70z",
// 			},
// 			{
// 				id: 6913,
// 				image_id: "n3t2agwuxlqggp3kryf9",
// 			},
// 		],
// 		summary:
// 			"Grand Theft Auto V is a vast open world game set in Los Santos, a sprawling sun-soaked metropolis struggling to stay afloat in an era of economic uncertainty and cheap reality TV. The game blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the game’s three lead characters, playing all sides of the game’s interwoven story.",
// 	},
// 	{
// 		id: 1942,
// 		aggregated_rating: 91.72,
// 		cover: {
// 			id: 89386,
// 			image_id: "co1wyy",
// 		},
// 		first_release_date: 1431993600,
// 		genres: [
// 			{
// 				id: 12,
// 				name: "Role-playing (RPG)",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "The Witcher 3: Wild Hunt",
// 		platforms: [
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 48,
// 				name: "PlayStation 4",
// 			},
// 			{
// 				id: 49,
// 				name: "Xbox One",
// 			},
// 			{
// 				id: 130,
// 				name: "Nintendo Switch",
// 			},
// 			{
// 				id: 167,
// 				name: "PlayStation 5",
// 			},
// 			{
// 				id: 169,
// 				name: "Xbox Series X|S",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 9742,
// 				image_id: "mnljdjtrh44x4snmierh",
// 			},
// 			{
// 				id: 9743,
// 				image_id: "em1y2ugcwy2myuhvb9db",
// 			},
// 			{
// 				id: 9744,
// 				image_id: "usxccsncekxg0wd1v6ee",
// 			},
// 			{
// 				id: 9745,
// 				image_id: "z5t0yuhyiiui1ickwhgj",
// 			},
// 			{
// 				id: 21107,
// 				image_id: "farvemmmxav0bgt6wx7t",
// 			},
// 			{
// 				id: 853177,
// 				image_id: "sciabd",
// 			},
// 			{
// 				id: 853178,
// 				image_id: "sciabe",
// 			},
// 			{
// 				id: 853179,
// 				image_id: "sciabf",
// 			},
// 			{
// 				id: 853180,
// 				image_id: "sciabg",
// 			},
// 			{
// 				id: 853181,
// 				image_id: "sciabh",
// 			},
// 		],
// 		summary:
// 			"RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.",
// 	},
// 	{
// 		id: 472,
// 		aggregated_rating: 96.1111111111111,
// 		cover: {
// 			id: 85100,
// 			image_id: "co1tnw",
// 		},
// 		first_release_date: 1320883200,
// 		genres: [
// 			{
// 				id: 12,
// 				name: "Role-playing (RPG)",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "The Elder Scrolls V: Skyrim",
// 		platforms: [
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 9,
// 				name: "PlayStation 3",
// 			},
// 			{
// 				id: 12,
// 				name: "Xbox 360",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 345,
// 				image_id: "muv70yw3rds1cw8ymr5v",
// 			},
// 			{
// 				id: 346,
// 				image_id: "xzk2h41fiye7uwbhc6ub",
// 			},
// 			{
// 				id: 347,
// 				image_id: "urqw7ltwmhr39gkidsih",
// 			},
// 			{
// 				id: 348,
// 				image_id: "t0mus35qrgclafo1ql8k",
// 			},
// 			{
// 				id: 349,
// 				image_id: "x5bbaqvgbpaz4hzlfeqb",
// 			},
// 		],
// 		summary:
// 			"Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose. Play any type of character you can imagine, and do whatever you want; the legendary freedom of choice, storytelling, and adventure of The Elder Scrolls is realized like never before.",
// 	},
// 	{
// 		id: 1877,
// 		aggregated_rating: 75.2380952380952,
// 		cover: {
// 			id: 209384,
// 			image_id: "co4hk8",
// 		},
// 		first_release_date: 1607472000,
// 		genres: [
// 			{
// 				id: 5,
// 				name: "Shooter",
// 			},
// 			{
// 				id: 12,
// 				name: "Role-playing (RPG)",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "Cyberpunk 2077",
// 		platforms: [
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 48,
// 				name: "PlayStation 4",
// 			},
// 			{
// 				id: 49,
// 				name: "Xbox One",
// 			},
// 			{
// 				id: 167,
// 				name: "PlayStation 5",
// 			},
// 			{
// 				id: 169,
// 				name: "Xbox Series X|S",
// 			},
// 			{
// 				id: 170,
// 				name: "Google Stadia",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 214060,
// 				image_id: "quphnww1axg2mmsvxfux",
// 			},
// 			{
// 				id: 214061,
// 				image_id: "jmi4y3q12o4uitdcaf7i",
// 			},
// 			{
// 				id: 214062,
// 				image_id: "c6ruovzsugjlnlcmm8b0",
// 			},
// 			{
// 				id: 214063,
// 				image_id: "ydyq0pixly7vt29fnzci",
// 			},
// 			{
// 				id: 214064,
// 				image_id: "lelfskpwy4slftl3qdeb",
// 			},
// 			{
// 				id: 214066,
// 				image_id: "c7usjg7gpo8rs0bfjkph",
// 			},
// 			{
// 				id: 214067,
// 				image_id: "ybliaszwqkwui7djaou4",
// 			},
// 			{
// 				id: 214068,
// 				image_id: "ts8wtae3t6aghttvtt2s",
// 			},
// 			{
// 				id: 214069,
// 				image_id: "vnv5cd9kvonsjvazpotx",
// 			},
// 			{
// 				id: 214070,
// 				image_id: "w4plqrhe04byymfksmux",
// 			},
// 			{
// 				id: 214071,
// 				image_id: "ubbe5gewccx5ig3xy30t",
// 			},
// 		],
// 		summary:
// 			"Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
// 	},
// 	{
// 		id: 72,
// 		aggregated_rating: 92.4444444444444,
// 		cover: {
// 			id: 82660,
// 			image_id: "co1rs4",
// 		},
// 		first_release_date: 1303084800,
// 		genres: [
// 			{
// 				id: 5,
// 				name: "Shooter",
// 			},
// 			{
// 				id: 8,
// 				name: "Platform",
// 			},
// 			{
// 				id: 9,
// 				name: "Puzzle",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "Portal 2",
// 		platforms: [
// 			{
// 				id: 3,
// 				name: "Linux",
// 			},
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 9,
// 				name: "PlayStation 3",
// 			},
// 			{
// 				id: 12,
// 				name: "Xbox 360",
// 			},
// 			{
// 				id: 14,
// 				name: "Mac",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 725,
// 				image_id: "i9ys3zdhph1mh3futdit",
// 			},
// 			{
// 				id: 726,
// 				image_id: "rvrge8js7xnhr4z1vrbk",
// 			},
// 			{
// 				id: 727,
// 				image_id: "cmxaa4r52exlqvzwtxkh",
// 			},
// 			{
// 				id: 728,
// 				image_id: "vghkwbdabx0cri7thb9y",
// 			},
// 			{
// 				id: 729,
// 				image_id: "m4hdhjptmmwvrjbojzp0",
// 			},
// 		],
// 		summary:
// 			"Sequel to the acclaimed Portal (2007), Portal 2 pits the protagonist of the original game, Chell, and her new robot friend, Wheatley, against more puzzles conceived by GLaDOS, an A.I. with the sole purpose of testing the Portal Gun's mechanics and taking revenge on Chell for the events of Portal. As a result of several interactions and revelations, Chell once again pushes to escape Aperture Science Labs.",
// 	},
// 	{
// 		id: 1009,
// 		aggregated_rating: 91.5384615384615,
// 		cover: {
// 			id: 81915,
// 			image_id: "co1r7f",
// 		},
// 		first_release_date: 1371168000,
// 		genres: [
// 			{
// 				id: 5,
// 				name: "Shooter",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "The Last of Us",
// 		platforms: [
// 			{
// 				id: 9,
// 				name: "PlayStation 3",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 236,
// 				image_id: "upogjfthdffjlzfi26xe",
// 			},
// 			{
// 				id: 237,
// 				image_id: "emvrwg5vhpfcmn9loxgu",
// 			},
// 			{
// 				id: 238,
// 				image_id: "kdt90b2rbx4tmewaxur9",
// 			},
// 			{
// 				id: 239,
// 				image_id: "oon90tsbpin8qae3rldz",
// 			},
// 			{
// 				id: 240,
// 				image_id: "rta7qwesachxsykzwokf",
// 			},
// 		],
// 		summary:
// 			"A third person shooter/stealth/survival hybrid, in which twenty years after the outbreak of a parasitic fungus which takes over the neural functions of humans, Joel, a Texan with a tragic familial past, finds himself responsible with smuggling a fourteen year old girl named Ellie to a militia group called the Fireflies, while avoiding strict and deadly authorities, infected fungal hosts and other violent survivors.",
// 	},
// 	{
// 		id: 74,
// 		aggregated_rating: 95.6,
// 		cover: {
// 			id: 93684,
// 			image_id: "co20ac",
// 		},
// 		first_release_date: 1264464000,
// 		genres: [
// 			{
// 				id: 5,
// 				name: "Shooter",
// 			},
// 			{
// 				id: 12,
// 				name: "Role-playing (RPG)",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "Mass Effect 2",
// 		platforms: [
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 9,
// 				name: "PlayStation 3",
// 			},
// 			{
// 				id: 12,
// 				name: "Xbox 360",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 892,
// 				image_id: "bk0fi4frntydsqma0g0q",
// 			},
// 			{
// 				id: 893,
// 				image_id: "k22nwxzx6eb4ek7xbjps",
// 			},
// 			{
// 				id: 8205,
// 				image_id: "gzp0z0rcwlw3symd33gy",
// 			},
// 			{
// 				id: 8206,
// 				image_id: "xsdmofyywtzsgrcadaym",
// 			},
// 			{
// 				id: 8218,
// 				image_id: "wvtfwo7zwey0j3mzvlbv",
// 			},
// 		],
// 		summary:
// 			"Are you prepared to lose everything to save the galaxy? You'll need to be, Commander Shephard. It's time to bring together your greatest allies and recruit the galaxy's fighting elite to continue the resistance against the invading Reapers. So steel yourself, because this is an astronomical mission where sacrifices must be made. You'll face tougher choices and new, deadlier enemies. Arm yourself and prepare for an unforgettable intergalactic adventure.\n\nGame Features:\n\nShift the fight in your favour. Equip yourself with powerful new weapons almost instantly thanks to a new inventory system. Plus, an improved health regeneration system means you'll spend less time hunting for restorative items.\n\nMake every decision matter. Divisive crew members are just the tip of the iceberg, Commander, because you'll also be tasked with issues of intergalactic diplomacy. And time's a wastin' so don't be afraid to use new prompt-based actions that let you interrupt conversations, even if they could alter the fate of your crew...and the galaxy.\n\nForge new alliances, carefully. You'll fight alongside some of your most trustworthy crew members, but you'll also get the opportunity to recruit new talent. Just choose your new partners with care because the fate of the galaxy rests on your shoulders, Commander.",
// 	},
// 	{
// 		id: 25076,
// 		aggregated_rating: 94.0588235294118,
// 		cover: {
// 			id: 80403,
// 			image_id: "co1q1f",
// 		},
// 		first_release_date: 1540512000,
// 		genres: [
// 			{
// 				id: 5,
// 				name: "Shooter",
// 			},
// 			{
// 				id: 12,
// 				name: "Role-playing (RPG)",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "Red Dead Redemption 2",
// 		platforms: [
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 48,
// 				name: "PlayStation 4",
// 			},
// 			{
// 				id: 49,
// 				name: "Xbox One",
// 			},
// 			{
// 				id: 170,
// 				name: "Google Stadia",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 43482,
// 				image_id: "xegpfnsvlyeld0zkjnrc",
// 			},
// 			{
// 				id: 43485,
// 				image_id: "c9xalka7stjkx4mes7kp",
// 			},
// 			{
// 				id: 181619,
// 				image_id: "qg7gx276z3hsqlr9xpt6",
// 			},
// 			{
// 				id: 181620,
// 				image_id: "x8xczj2a0y6g9rnhboko",
// 			},
// 			{
// 				id: 181621,
// 				image_id: "dhw6ucx9laj5esv6rngn",
// 			},
// 			{
// 				id: 181622,
// 				image_id: "h8f9uojkzvaau8pxsyxi",
// 			},
// 			{
// 				id: 181623,
// 				image_id: "tdxv4zzkqyjnm9pmwxw0",
// 			},
// 			{
// 				id: 211553,
// 				image_id: "kcfpf8wa8esalk0qkpo5",
// 			},
// 			{
// 				id: 212061,
// 				image_id: "uyaminfh8sugglvt247u",
// 			},
// 			{
// 				id: 212062,
// 				image_id: "banftd8fgfytbsfx6mjz",
// 			},
// 			{
// 				id: 212063,
// 				image_id: "dorsz0jbcecmkxvzi3t8",
// 			},
// 			{
// 				id: 212064,
// 				image_id: "mptosgjarjlyqxy7lqsm",
// 			},
// 		],
// 		summary: "Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.",
// 	},
// 	{
// 		id: 7346,
// 		aggregated_rating: 97.5925925925926,
// 		cover: {
// 			id: 172453,
// 			image_id: "co3p2d",
// 		},
// 		first_release_date: 1488499200,
// 		genres: [
// 			{
// 				id: 12,
// 				name: "Role-playing (RPG)",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "The Legend of Zelda: Breath of the Wild",
// 		platforms: [
// 			{
// 				id: 41,
// 				name: "Wii U",
// 			},
// 			{
// 				id: 130,
// 				name: "Nintendo Switch",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 957969,
// 				image_id: "sckj69",
// 			},
// 			{
// 				id: 957970,
// 				image_id: "sckj6a",
// 			},
// 			{
// 				id: 957971,
// 				image_id: "sckj6b",
// 			},
// 			{
// 				id: 957972,
// 				image_id: "sckj6c",
// 			},
// 			{
// 				id: 957973,
// 				image_id: "sckj6d",
// 			},
// 			{
// 				id: 957974,
// 				image_id: "sckj6e",
// 			},
// 			{
// 				id: 957975,
// 				image_id: "sckj6f",
// 			},
// 			{
// 				id: 957976,
// 				image_id: "sckj6g",
// 			},
// 			{
// 				id: 957977,
// 				image_id: "sckj6h",
// 			},
// 		],
// 		summary:
// 			"The Legend of Zelda: Breath of the Wild is the first 3D open-world game in the Zelda series. Link can travel anywhere and be equipped with weapons and armor found throughout the world to grant him various bonuses. Unlike many games in the series, Breath of the Wild does not impose a specific order in which quests or dungeons must be completed. While the game still has environmental obstacles such as weather effects, inhospitable lands, or powerful enemies, many of them can be overcome using the right method. A lot of critics ranked Breath of the Wild as one of the best video games of all time.",
// 	},
// 	{
// 		id: 529,
// 		aggregated_rating: 89.5333333333333,
// 		cover: {
// 			id: 87745,
// 			image_id: "co1vpd",
// 		},
// 		first_release_date: 1354060800,
// 		genres: [
// 			{
// 				id: 5,
// 				name: "Shooter",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "Far Cry 3",
// 		platforms: [
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 9,
// 				name: "PlayStation 3",
// 			},
// 			{
// 				id: 12,
// 				name: "Xbox 360",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 1282,
// 				image_id: "kwjtiwnlluu30knt0grv",
// 			},
// 			{
// 				id: 1283,
// 				image_id: "kvq6cqtwbrt7hqtl04pv",
// 			},
// 			{
// 				id: 1284,
// 				image_id: "hterz13rpaszugt8spxs",
// 			},
// 			{
// 				id: 1285,
// 				image_id: "h3iymjjobo27kmyg649y",
// 			},
// 			{
// 				id: 6458,
// 				image_id: "yxe6aqle2hup54tlhche",
// 			},
// 		],
// 		summary:
// 			"Beyond the reach of civilization lies a lawless island ruled by violence. This is where you find yourself stranded, caught in a bloody conflict between the island’s psychotic warlords and indigenous rebels. Struggling to survive, your only hope of escape is through the muzzle of a gun. Discover the island’s dark secrets and take the fight to the enemy; improvise and use your environment to your advantage; and outwit its cast of ruthless, deranged inhabitants. Beware the beauty and mystery of this island of insanity… Where nothing is what is seems, you’ll need more than luck to escape alive.",
// 	},
// 	{
// 		id: 121,
// 		aggregated_rating: 84.3571428571429,
// 		cover: {
// 			id: 199481,
// 			image_id: "co49x5",
// 		},
// 		first_release_date: 1321574400,
// 		genres: [
// 			{
// 				id: 13,
// 				name: "Simulator",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "Minecraft",
// 		platforms: [
// 			{
// 				id: 3,
// 				name: "Linux",
// 			},
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 14,
// 				name: "Mac",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 390199,
// 				image_id: "sc8d2v",
// 			},
// 			{
// 				id: 390200,
// 				image_id: "sc8d2w",
// 			},
// 			{
// 				id: 390201,
// 				image_id: "sc8d2x",
// 			},
// 			{
// 				id: 390202,
// 				image_id: "sc8d2y",
// 			},
// 			{
// 				id: 390203,
// 				image_id: "sc8d2z",
// 			},
// 			{
// 				id: 390204,
// 				image_id: "sc8d30",
// 			},
// 			{
// 				id: 390205,
// 				image_id: "sc8d31",
// 			},
// 			{
// 				id: 390206,
// 				image_id: "sc8d32",
// 			},
// 			{
// 				id: 390207,
// 				image_id: "sc8d33",
// 			},
// 			{
// 				id: 1010716,
// 				image_id: "sclnvg",
// 			},
// 		],
// 		summary:
// 			"Minecraft focuses on allowing the player to explore, interact with, and modify a dynamically-generated map made of one-cubic-meter-sized blocks. In addition to blocks, the environment features plants, mobs, and items. Some activities in the game include mining for ore, fighting hostile mobs, and crafting new blocks and tools by gathering various resources found in the game. The game's open-ended model allows players to create structures, creations, and artwork on various multiplayer servers or their single-player maps. Other features include redstone circuits for logic computations and remote actions, minecarts and tracks, and a mysterious underworld called the Nether. A designated but completely optional goal of the game is to travel to a dimension called the End, and defeat the ender dragon.",
// 	},
// ];

// const games2 = [
// 	{
// 		id: 1020,
// 		aggregated_rating: 88.1379310344828,
// 		cover: {
// 			id: 120937,
// 			image_id: "co2lbd",
// 		},
// 		first_release_date: 1379376000,
// 		genres: [
// 			{
// 				id: 5,
// 				name: "Shooter",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "Grand Theft Auto V",
// 		platforms: [
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 9,
// 				name: "PlayStation 3",
// 			},
// 			{
// 				id: 12,
// 				name: "Xbox 360",
// 			},
// 			{
// 				id: 48,
// 				name: "PlayStation 4",
// 			},
// 			{
// 				id: 49,
// 				name: "Xbox One",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 5670,
// 				image_id: "o7q3ikzmkjxbftrd64ok",
// 			},
// 			{
// 				id: 5671,
// 				image_id: "vfdeo6kgu0o4cyzd0sng",
// 			},
// 			{
// 				id: 5672,
// 				image_id: "eepecmqsq6uqxiaukar1",
// 			},
// 			{
// 				id: 5673,
// 				image_id: "hjnzngnrtwr82jzmmkef",
// 			},
// 			{
// 				id: 5674,
// 				image_id: "glvmulyejlde31q8b70z",
// 			},
// 			{
// 				id: 6913,
// 				image_id: "n3t2agwuxlqggp3kryf9",
// 			},
// 		],
// 		summary:
// 			"Grand Theft Auto V is a vast open world game set in Los Santos, a sprawling sun-soaked metropolis struggling to stay afloat in an era of economic uncertainty and cheap reality TV. The game blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the game’s three lead characters, playing all sides of the game’s interwoven story.",
// 	},
// 	{
// 		id: 1942,
// 		aggregated_rating: 91.72,
// 		cover: {
// 			id: 89386,
// 			image_id: "co1wyy",
// 		},
// 		first_release_date: 1431993600,
// 		genres: [
// 			{
// 				id: 12,
// 				name: "Role-playing (RPG)",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "The Witcher 3: Wild Hunt",
// 		platforms: [
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 48,
// 				name: "PlayStation 4",
// 			},
// 			{
// 				id: 49,
// 				name: "Xbox One",
// 			},
// 			{
// 				id: 130,
// 				name: "Nintendo Switch",
// 			},
// 			{
// 				id: 167,
// 				name: "PlayStation 5",
// 			},
// 			{
// 				id: 169,
// 				name: "Xbox Series X|S",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 9742,
// 				image_id: "mnljdjtrh44x4snmierh",
// 			},
// 			{
// 				id: 9743,
// 				image_id: "em1y2ugcwy2myuhvb9db",
// 			},
// 			{
// 				id: 9744,
// 				image_id: "usxccsncekxg0wd1v6ee",
// 			},
// 			{
// 				id: 9745,
// 				image_id: "z5t0yuhyiiui1ickwhgj",
// 			},
// 			{
// 				id: 21107,
// 				image_id: "farvemmmxav0bgt6wx7t",
// 			},
// 			{
// 				id: 853177,
// 				image_id: "sciabd",
// 			},
// 			{
// 				id: 853178,
// 				image_id: "sciabe",
// 			},
// 			{
// 				id: 853179,
// 				image_id: "sciabf",
// 			},
// 			{
// 				id: 853180,
// 				image_id: "sciabg",
// 			},
// 			{
// 				id: 853181,
// 				image_id: "sciabh",
// 			},
// 		],
// 		summary:
// 			"RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.",
// 	},
// 	{
// 		id: 472,
// 		aggregated_rating: 96.1111111111111,
// 		cover: {
// 			id: 85100,
// 			image_id: "co1tnw",
// 		},
// 		first_release_date: 1320883200,
// 		genres: [
// 			{
// 				id: 12,
// 				name: "Role-playing (RPG)",
// 			},
// 			{
// 				id: 31,
// 				name: "Adventure",
// 			},
// 		],
// 		name: "The Elder Scrolls V: Skyrim",
// 		platforms: [
// 			{
// 				id: 6,
// 				name: "PC (Microsoft Windows)",
// 			},
// 			{
// 				id: 9,
// 				name: "PlayStation 3",
// 			},
// 			{
// 				id: 12,
// 				name: "Xbox 360",
// 			},
// 		],
// 		screenshots: [
// 			{
// 				id: 345,
// 				image_id: "muv70yw3rds1cw8ymr5v",
// 			},
// 			{
// 				id: 346,
// 				image_id: "xzk2h41fiye7uwbhc6ub",
// 			},
// 			{
// 				id: 347,
// 				image_id: "urqw7ltwmhr39gkidsih",
// 			},
// 			{
// 				id: 348,
// 				image_id: "t0mus35qrgclafo1ql8k",
// 			},
// 			{
// 				id: 349,
// 				image_id: "x5bbaqvgbpaz4hzlfeqb",
// 			},
// 		],
// 		summary:
// 			"Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose. Play any type of character you can imagine, and do whatever you want; the legendary freedom of choice, storytelling, and adventure of The Elder Scrolls is realized like never before.",
// 	},
// ];

interface StatusProps {
	statusColor: string;
}

export type Game = {
	id: number;
	name: string;
	cover: string;
	statusId: number;
	rating: number;
};

export type User = {
	id: number;
	username: string;
	name: string;
	collection: Game[];
};

export default function Profile() {
	const { username } = useParams() as { username: string };
	const [user, setUser] = useState() as [User, (user: User) => void];
	console.log(user);

	async function profile() {
		const response = await getProfileInfo(username);
		setUser(response);
	}

	useEffect(() => {
		profile();
	}, [username]);

	if (user === undefined) {
		return (
			<ProfileContainer>
				<UserBox>
					<Left>
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="circular" width={120} height={120} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={190} height={75} />
					</Left>
					<UserStatus>
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={60} height={80} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={60} height={80} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={60} height={80} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={60} height={80} />
					</UserStatus>
				</UserBox>
				<CollectionBox>
					<GameBox>
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={230} height={35} />
						<GameBox>
							<GamesMapped>
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
							</GamesMapped>
						</GameBox>
					</GameBox>
					<GameBox>
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={230} height={35} />
						<GameBox>
							<GamesMapped>
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
							</GamesMapped>
						</GameBox>
					</GameBox>
				</CollectionBox>
			</ProfileContainer>
		);
	}

	return (
		<ProfileContainer>
			<UserBox>
				<Left>
					<img src={`https://source.boringavatars.com/beam/120/${user?.username}}`} alt="user profile picture" />
					<UserInfo>
						<p>{user?.name}</p>
						<p>@{user?.username}</p>
					</UserInfo>
				</Left>
				<UserStatus>
					<Status statusColor="#479B42">
						<p>Wishlist</p>
						<p>{user.collection.filter((game) => game.statusId === 1).length}</p>
					</Status>
					<Status statusColor="#438EB9">
						<p>Playing</p>
						<p>{user.collection.filter((game) => game.statusId === 2).length}</p>
					</Status>
					<Status statusColor="#EDA55D">
						<p>Finished</p>
						<p>{user.collection.filter((game) => game.statusId === 3).length}</p>
					</Status>
					<Status statusColor="#EF525C">
						<p>Dropped</p>
						<p>{user.collection.filter((game) => game.statusId === 4).length}</p>
					</Status>
				</UserStatus>
			</UserBox>
			<CollectionBox>
				<GameBox>
					<p>Recommendations:</p>
					<GamesMapped>
						<span>Soon...</span>
					</GamesMapped>
				</GameBox>
				<GameBox>
					<p>Recent Activity:</p>
					<GamesMapped>
						{user.collection.map((game) => (
							<GameComponent game={game} key={game.id} location="p" status={game.statusId} />
						))}
					</GamesMapped>
				</GameBox>
				{/* <Collection games={user.collection}/> */}
			</CollectionBox>
		</ProfileContainer>
	);
}

const ProfileContainer = styled(Container)`
	margin-bottom: 70px;
`;

const UserBox = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 50px;
	@media (max-width: 840px) {
		flex-direction: column;
	}
`;

const Left = styled(Box)`
	display: flex;
	align-items: center;
	gap: 35px;
	img {
		width: 120px;
		height: 120px;
		border-radius: 50%;
	}
`;

const UserInfo = styled(Box)`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	> p:nth-child(1) {
		font-size: 32px;
		font-weight: 700;
		text-align: center;
	}
	> p:nth-child(2) {
		font-size: 20px;
		font-style: italic;
		font-weight: 100;
		font-family: "Audiowide", cursive;
	}
`;

const UserStatus = styled(Box)`
	display: flex;
	align-items: center;
	gap: 40px;
`;

const Status = styled(Box)<StatusProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	cursor: pointer;
	p:nth-child(1) {
		font-size: 14px;
		font-weight: 300;
	}
	p:nth-child(2) {
		font-size: 40px;
		font-weight: 700;
		font-family: "Audiowide", cursive;
		color: ${(props) => props.statusColor};
	}
`;

const CollectionBox = styled(Box)`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const GameBox = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	> p {
		font-size: 30px;
		font-weight: 500;
	}
`;

const GamesMapped = styled(Box)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
	> span {
		font-size: 18px;
		font-weight: 300;
		width: 100%;
		padding: 50px 0;
		text-align: center;
	}
	@media (max-width: 600px) {
		flex-wrap: nowrap;
		overflow-x: scroll;
		::-webkit-scrollbar {
			display: none;
		}
	}
`;
