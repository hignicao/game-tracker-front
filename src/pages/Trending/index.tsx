import { Box, Container, styled } from "@mui/material";
import GameComponent from "../../components/Game/GameComponent";

const games = [
	{
		id: 1020,
		aggregated_rating: 88.1379310344828,
		cover: "co2lbd",

		first_release_date: 1379376000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Grand Theft Auto V",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 5670,
				image_id: "o7q3ikzmkjxbftrd64ok",
			},
			{
				id: 5671,
				image_id: "vfdeo6kgu0o4cyzd0sng",
			},
			{
				id: 5672,
				image_id: "eepecmqsq6uqxiaukar1",
			},
			{
				id: 5673,
				image_id: "hjnzngnrtwr82jzmmkef",
			},
			{
				id: 5674,
				image_id: "glvmulyejlde31q8b70z",
			},
			{
				id: 6913,
				image_id: "n3t2agwuxlqggp3kryf9",
			},
		],
		summary:
			"Grand Theft Auto V is a vast open world game set in Los Santos, a sprawling sun-soaked metropolis struggling to stay afloat in an era of economic uncertainty and cheap reality TV. The game blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the game’s three lead characters, playing all sides of the game’s interwoven story.",
	},
	{
		id: 1942,
		aggregated_rating: 91.72,
		cover: "co1wyy",

		first_release_date: 1431993600,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "The Witcher 3: Wild Hunt",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
			{
				id: 167,
				name: "PlayStation 5",
			},
			{
				id: 169,
				name: "Xbox Series X|S",
			},
		],
		screenshots: [
			{
				id: 9742,
				image_id: "mnljdjtrh44x4snmierh",
			},
			{
				id: 9743,
				image_id: "em1y2ugcwy2myuhvb9db",
			},
			{
				id: 9744,
				image_id: "usxccsncekxg0wd1v6ee",
			},
			{
				id: 9745,
				image_id: "z5t0yuhyiiui1ickwhgj",
			},
			{
				id: 21107,
				image_id: "farvemmmxav0bgt6wx7t",
			},
			{
				id: 853177,
				image_id: "sciabd",
			},
			{
				id: 853178,
				image_id: "sciabe",
			},
			{
				id: 853179,
				image_id: "sciabf",
			},
			{
				id: 853180,
				image_id: "sciabg",
			},
			{
				id: 853181,
				image_id: "sciabh",
			},
		],
		summary:
			"RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.",
	},
	{
		id: 472,
		aggregated_rating: 96.1111111111111,
		cover: "co1tnw",

		first_release_date: 1320883200,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "The Elder Scrolls V: Skyrim",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 345,
				image_id: "muv70yw3rds1cw8ymr5v",
			},
			{
				id: 346,
				image_id: "xzk2h41fiye7uwbhc6ub",
			},
			{
				id: 347,
				image_id: "urqw7ltwmhr39gkidsih",
			},
			{
				id: 348,
				image_id: "t0mus35qrgclafo1ql8k",
			},
			{
				id: 349,
				image_id: "x5bbaqvgbpaz4hzlfeqb",
			},
		],
		summary:
			"Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose. Play any type of character you can imagine, and do whatever you want; the legendary freedom of choice, storytelling, and adventure of The Elder Scrolls is realized like never before.",
	},
	{
		id: 1877,
		aggregated_rating: 75.2380952380952,
		cover: "co4hk8",

		first_release_date: 1607472000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Cyberpunk 2077",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 167,
				name: "PlayStation 5",
			},
			{
				id: 169,
				name: "Xbox Series X|S",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 214060,
				image_id: "quphnww1axg2mmsvxfux",
			},
			{
				id: 214061,
				image_id: "jmi4y3q12o4uitdcaf7i",
			},
			{
				id: 214062,
				image_id: "c6ruovzsugjlnlcmm8b0",
			},
			{
				id: 214063,
				image_id: "ydyq0pixly7vt29fnzci",
			},
			{
				id: 214064,
				image_id: "lelfskpwy4slftl3qdeb",
			},
			{
				id: 214066,
				image_id: "c7usjg7gpo8rs0bfjkph",
			},
			{
				id: 214067,
				image_id: "ybliaszwqkwui7djaou4",
			},
			{
				id: 214068,
				image_id: "ts8wtae3t6aghttvtt2s",
			},
			{
				id: 214069,
				image_id: "vnv5cd9kvonsjvazpotx",
			},
			{
				id: 214070,
				image_id: "w4plqrhe04byymfksmux",
			},
			{
				id: 214071,
				image_id: "ubbe5gewccx5ig3xy30t",
			},
		],
		summary:
			"Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
	},
	{
		id: 72,
		aggregated_rating: 92.4444444444444,
		cover: "co1rs4",

		first_release_date: 1303084800,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 9,
				name: "Puzzle",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Portal 2",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 725,
				image_id: "i9ys3zdhph1mh3futdit",
			},
			{
				id: 726,
				image_id: "rvrge8js7xnhr4z1vrbk",
			},
			{
				id: 727,
				image_id: "cmxaa4r52exlqvzwtxkh",
			},
			{
				id: 728,
				image_id: "vghkwbdabx0cri7thb9y",
			},
			{
				id: 729,
				image_id: "m4hdhjptmmwvrjbojzp0",
			},
		],
		summary:
			"Sequel to the acclaimed Portal (2007), Portal 2 pits the protagonist of the original game, Chell, and her new robot friend, Wheatley, against more puzzles conceived by GLaDOS, an A.I. with the sole purpose of testing the Portal Gun's mechanics and taking revenge on Chell for the events of Portal. As a result of several interactions and revelations, Chell once again pushes to escape Aperture Science Labs.",
	},
	{
		id: 1009,
		aggregated_rating: 91.5384615384615,
		cover: "co1r7f",

		first_release_date: 1371168000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "The Last of Us",
		platforms: [
			{
				id: 9,
				name: "PlayStation 3",
			},
		],
		screenshots: [
			{
				id: 236,
				image_id: "upogjfthdffjlzfi26xe",
			},
			{
				id: 237,
				image_id: "emvrwg5vhpfcmn9loxgu",
			},
			{
				id: 238,
				image_id: "kdt90b2rbx4tmewaxur9",
			},
			{
				id: 239,
				image_id: "oon90tsbpin8qae3rldz",
			},
			{
				id: 240,
				image_id: "rta7qwesachxsykzwokf",
			},
		],
		summary:
			"A third person shooter/stealth/survival hybrid, in which twenty years after the outbreak of a parasitic fungus which takes over the neural functions of humans, Joel, a Texan with a tragic familial past, finds himself responsible with smuggling a fourteen year old girl named Ellie to a militia group called the Fireflies, while avoiding strict and deadly authorities, infected fungal hosts and other violent survivors.",
	},
	{
		id: 74,
		aggregated_rating: 95.6,
		cover: "co20ac",

		first_release_date: 1264464000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Mass Effect 2",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 892,
				image_id: "bk0fi4frntydsqma0g0q",
			},
			{
				id: 893,
				image_id: "k22nwxzx6eb4ek7xbjps",
			},
			{
				id: 8205,
				image_id: "gzp0z0rcwlw3symd33gy",
			},
			{
				id: 8206,
				image_id: "xsdmofyywtzsgrcadaym",
			},
			{
				id: 8218,
				image_id: "wvtfwo7zwey0j3mzvlbv",
			},
		],
		summary:
			"Are you prepared to lose everything to save the galaxy? You'll need to be, Commander Shephard. It's time to bring together your greatest allies and recruit the galaxy's fighting elite to continue the resistance against the invading Reapers. So steel yourself, because this is an astronomical mission where sacrifices must be made. You'll face tougher choices and new, deadlier enemies. Arm yourself and prepare for an unforgettable intergalactic adventure.\n\nGame Features:\n\nShift the fight in your favour. Equip yourself with powerful new weapons almost instantly thanks to a new inventory system. Plus, an improved health regeneration system means you'll spend less time hunting for restorative items.\n\nMake every decision matter. Divisive crew members are just the tip of the iceberg, Commander, because you'll also be tasked with issues of intergalactic diplomacy. And time's a wastin' so don't be afraid to use new prompt-based actions that let you interrupt conversations, even if they could alter the fate of your crew...and the galaxy.\n\nForge new alliances, carefully. You'll fight alongside some of your most trustworthy crew members, but you'll also get the opportunity to recruit new talent. Just choose your new partners with care because the fate of the galaxy rests on your shoulders, Commander.",
	},
	{
		id: 25076,
		aggregated_rating: 94.0588235294118,
		cover: "co1q1f",

		first_release_date: 1540512000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Red Dead Redemption 2",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 43482,
				image_id: "xegpfnsvlyeld0zkjnrc",
			},
			{
				id: 43485,
				image_id: "c9xalka7stjkx4mes7kp",
			},
			{
				id: 181619,
				image_id: "qg7gx276z3hsqlr9xpt6",
			},
			{
				id: 181620,
				image_id: "x8xczj2a0y6g9rnhboko",
			},
			{
				id: 181621,
				image_id: "dhw6ucx9laj5esv6rngn",
			},
			{
				id: 181622,
				image_id: "h8f9uojkzvaau8pxsyxi",
			},
			{
				id: 181623,
				image_id: "tdxv4zzkqyjnm9pmwxw0",
			},
			{
				id: 211553,
				image_id: "kcfpf8wa8esalk0qkpo5",
			},
			{
				id: 212061,
				image_id: "uyaminfh8sugglvt247u",
			},
			{
				id: 212062,
				image_id: "banftd8fgfytbsfx6mjz",
			},
			{
				id: 212063,
				image_id: "dorsz0jbcecmkxvzi3t8",
			},
			{
				id: 212064,
				image_id: "mptosgjarjlyqxy7lqsm",
			},
		],
		summary: "Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.",
	},
	{
		id: 7346,
		aggregated_rating: 97.5925925925926,
		cover: "co3p2d",

		first_release_date: 1488499200,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "The Legend of Zelda: Breath of the Wild",
		platforms: [
			{
				id: 41,
				name: "Wii U",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 957969,
				image_id: "sckj69",
			},
			{
				id: 957970,
				image_id: "sckj6a",
			},
			{
				id: 957971,
				image_id: "sckj6b",
			},
			{
				id: 957972,
				image_id: "sckj6c",
			},
			{
				id: 957973,
				image_id: "sckj6d",
			},
			{
				id: 957974,
				image_id: "sckj6e",
			},
			{
				id: 957975,
				image_id: "sckj6f",
			},
			{
				id: 957976,
				image_id: "sckj6g",
			},
			{
				id: 957977,
				image_id: "sckj6h",
			},
		],
		summary:
			"The Legend of Zelda: Breath of the Wild is the first 3D open-world game in the Zelda series. Link can travel anywhere and be equipped with weapons and armor found throughout the world to grant him various bonuses. Unlike many games in the series, Breath of the Wild does not impose a specific order in which quests or dungeons must be completed. While the game still has environmental obstacles such as weather effects, inhospitable lands, or powerful enemies, many of them can be overcome using the right method. A lot of critics ranked Breath of the Wild as one of the best video games of all time.",
	},
	{
		id: 529,
		aggregated_rating: 89.5333333333333,
		cover: "co1vpd",

		first_release_date: 1354060800,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Far Cry 3",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 1282,
				image_id: "kwjtiwnlluu30knt0grv",
			},
			{
				id: 1283,
				image_id: "kvq6cqtwbrt7hqtl04pv",
			},
			{
				id: 1284,
				image_id: "hterz13rpaszugt8spxs",
			},
			{
				id: 1285,
				image_id: "h3iymjjobo27kmyg649y",
			},
			{
				id: 6458,
				image_id: "yxe6aqle2hup54tlhche",
			},
		],
		summary:
			"Beyond the reach of civilization lies a lawless island ruled by violence. This is where you find yourself stranded, caught in a bloody conflict between the island’s psychotic warlords and indigenous rebels. Struggling to survive, your only hope of escape is through the muzzle of a gun. Discover the island’s dark secrets and take the fight to the enemy; improvise and use your environment to your advantage; and outwit its cast of ruthless, deranged inhabitants. Beware the beauty and mystery of this island of insanity… Where nothing is what is seems, you’ll need more than luck to escape alive.",
	},
	{
		id: 121,
		aggregated_rating: 84.3571428571429,
		cover: "co49x5",

		first_release_date: 1321574400,
		genres: [
			{
				id: 13,
				name: "Simulator",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Minecraft",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 390199,
				image_id: "sc8d2v",
			},
			{
				id: 390200,
				image_id: "sc8d2w",
			},
			{
				id: 390201,
				image_id: "sc8d2x",
			},
			{
				id: 390202,
				image_id: "sc8d2y",
			},
			{
				id: 390203,
				image_id: "sc8d2z",
			},
			{
				id: 390204,
				image_id: "sc8d30",
			},
			{
				id: 390205,
				image_id: "sc8d31",
			},
			{
				id: 390206,
				image_id: "sc8d32",
			},
			{
				id: 390207,
				image_id: "sc8d33",
			},
			{
				id: 1010716,
				image_id: "sclnvg",
			},
		],
		summary:
			"Minecraft focuses on allowing the player to explore, interact with, and modify a dynamically-generated map made of one-cubic-meter-sized blocks. In addition to blocks, the environment features plants, mobs, and items. Some activities in the game include mining for ore, fighting hostile mobs, and crafting new blocks and tools by gathering various resources found in the game. The game's open-ended model allows players to create structures, creations, and artwork on various multiplayer servers or their single-player maps. Other features include redstone circuits for logic computations and remote actions, minecarts and tracks, and a mysterious underworld called the Nether. A designated but completely optional goal of the game is to travel to a dimension called the End, and defeat the ender dragon.",
	},
	{
		id: 1164,
		aggregated_rating: 84.6428571428571,
		cover: "co1rbu",

		first_release_date: 1362355200,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 9,
				name: "Puzzle",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Tomb Raider",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 1733,
				image_id: "lq9a31uqkexzf1gpclti",
			},
			{
				id: 1734,
				image_id: "dsrqmixzfddse3oscing",
			},
			{
				id: 1735,
				image_id: "lgkgtrli8zkqnn8fnwrv",
			},
			{
				id: 1736,
				image_id: "esryx4vgbsz9pkwhov66",
			},
			{
				id: 1737,
				image_id: "ft2zywudfmu7xsipcsj2",
			},
		],
		summary:
			"Tomb Raider explores the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor. Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold.",
	},
	{
		id: 538,
		aggregated_rating: 93.2142857142857,
		cover: "co2n12",

		first_release_date: 1361836800,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "BioShock Infinite",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 865035,
				image_id: "scijgr",
			},
			{
				id: 865036,
				image_id: "scijgs",
			},
			{
				id: 865037,
				image_id: "scijgt",
			},
			{
				id: 865038,
				image_id: "scijgu",
			},
			{
				id: 865039,
				image_id: "scijgv",
			},
			{
				id: 865040,
				image_id: "scijgw",
			},
			{
				id: 865041,
				image_id: "scijgx",
			},
			{
				id: 865042,
				image_id: "scijgy",
			},
			{
				id: 865043,
				image_id: "scijgz",
			},
		],
		summary:
			"BioShock Infinite is the third game in the BioShock series. It is not a direct sequel/prequel to any of the previous BioShock games but takes place in an entirely different setting, although it shares similar features, gameplay and concepts with the previous games. BioShock Infinite features a range of environments that force the player to adapt, with different weapons and strategies for each situation. Interior spaces feature close combat with enemies, but unlike previous games set in Rapture, the setting of Infinite contains open spaces with emphasis on sniping and ranged combat against as many as fifteen enemies at once.",
	},
	{
		id: 11156,
		aggregated_rating: 88.8461538461538,
		cover: "co2una",

		first_release_date: 1488240000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Horizon Zero Dawn",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 10700,
				image_id: "fmvburhlunnhs3mdqysc",
			},
			{
				id: 10701,
				image_id: "o7ehlmbjcvkeeltwreeg",
			},
			{
				id: 10702,
				image_id: "gdc15kvjedin5c4v6cce",
			},
			{
				id: 10703,
				image_id: "gko0jchtb85kbsc1dg9l",
			},
			{
				id: 10704,
				image_id: "llwixfa0dy8fpex3tcwr",
			},
		],
		summary:
			"Welcome to a vibrant world rich with the beauty of nature – but inhabited by awe-inspiring, highly advanced machines. As a young machine hunter named Aloy, you must unravel the mysteries of this world and find your own destiny.",
	},
	{
		id: 7331,
		aggregated_rating: 93.24,
		cover: "co1r7h",

		first_release_date: 1462838400,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Uncharted 4: A Thief's End",
		platforms: [
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 11575,
				image_id: "fn1wbuvikoacxt4zvfxl",
			},
			{
				id: 11576,
				image_id: "b41umzxjcehm8fozl3gf",
			},
			{
				id: 11577,
				image_id: "tqt0sxjytiovh3g96cl0",
			},
			{
				id: 11578,
				image_id: "rtu8k7vm5x4mw5hilh2z",
			},
			{
				id: 23584,
				image_id: "qwytrspu8brvow9x9y15",
			},
		],
		summary:
			"Several years after his last adventure, retired fortune hunter, Nathan Drake, is forced back into the world of thieves. With the stakes much more personal, Drake embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. His greatest adventure will test his physical limits, his resolve, and ultimately what he's willing to sacrifice to save the ones he loves.",
	},
	{
		id: 501,
		aggregated_rating: 91.2,
		cover: "co1voh",

		first_release_date: 1318896000,
		genres: [
			{
				id: 25,
				name: "Hack and slash/Beat 'em up",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Batman: Arkham City",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 113,
				name: "OnLive Game System",
			},
		],
		screenshots: [
			{
				id: 350,
				image_id: "optmyqz2utbniy4abipu",
			},
			{
				id: 351,
				image_id: "zogoamnedpsulpqblwfn",
			},
			{
				id: 352,
				image_id: "ephvdh5mjs2jdadxzw4u",
			},
			{
				id: 354,
				image_id: "ygltnojhp2e8dvo8yapm",
			},
			{
				id: 40724,
				image_id: "mpgh7k42h4gpg9saizpr",
			},
		],
		summary:
			"After the events of Batman: Arkham Asylum (2009), a section of the city of Gotham has been turned into a prison, designed to keep the scum of the city away from the people. Bruce Wayne protests this prison but is shortly kidnapped by the despicable Hugo Strange, thus having to face the city's most powerful villains as the Batman while trying to uncover Strange's plans.",
	},
	{
		id: 434,
		aggregated_rating: 91.8,
		cover: "co2lcv",

		first_release_date: 1274140800,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Red Dead Redemption",
		platforms: [
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 1244,
				image_id: "eaj8ukcnb9pqrupxxr5g",
			},
			{
				id: 1246,
				image_id: "kb2l3ty0uwvktogoiicx",
			},
			{
				id: 1248,
				image_id: "dn5pz8gvd4jobsqrcjy3",
			},
			{
				id: 3651,
				image_id: "q7homzi5rjybswimfakb",
			},
			{
				id: 3652,
				image_id: "b8hdl5qreh7cnce6ste8",
			},
		],
		summary:
			"A modern-day Western epic, Red Dead Redemption takes John Marston, a relic from the fast-closing time of the gunslinger, through an open-world filled with wildlife, mini games and shootouts. Marston sets out to hunt down his old gang mates for the government, who have taken away his family, and meets many characters emblematic of the Wild West, heroism and the new civilization along his journey.",
	},
	{
		id: 75,
		aggregated_rating: 90.8125,
		cover: "co1x7q",

		first_release_date: 1330992000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Mass Effect 3",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 41,
				name: "Wii U",
			},
		],
		screenshots: [
			{
				id: 251,
				image_id: "lmvgtguef4qt5moqdywg",
			},
			{
				id: 252,
				image_id: "oswmovlpgvm8bv6aqixd",
			},
			{
				id: 253,
				image_id: "u4s5xujuojx2aoxp64db",
			},
			{
				id: 254,
				image_id: "fuvw6ovhzymcnkqizlxc",
			},
			{
				id: 255,
				image_id: "b8awpofzslalvoupx7er",
			},
			{
				id: 182407,
				image_id: "foz4feni33hcjkl935xe",
			},
			{
				id: 182408,
				image_id: "m4pxyygigwayr8in1rsa",
			},
			{
				id: 182409,
				image_id: "vbdw4lnfztl9lgw5du3h",
			},
			{
				id: 182410,
				image_id: "tqavuhopswznjqwzx01s",
			},
			{
				id: 182411,
				image_id: "sxh0r6qmiobnwgbcvfln",
			},
			{
				id: 182412,
				image_id: "z6ghg8n8zp8rvg3x8jf5",
			},
		],
		summary:
			"Earth is burning. The Reapers have taken over and other civilizations are falling like dominoes. Lead the final fight to save humanity and take back Earth from these terrifying machines, Commander Shepard. You'll need backup for these battles. Fortunately, the galaxy has a habit of sending unexpected species your way. Recruit team members and forge new alliances, but be prepared to say goodbye at any time as partners make the ultimate sacrifice. It's time for Commander Shepard to fight for the fate of the human race and save the galaxy. No pressure, Commander.\n\nFight smarter. Take advantage of new powers and combat moves. Shepard can now blind fire at enemies and build tougher melee attacks. Plus, when you fight as a team you can combine new biotic and tech powers to unleash devastating Power Combos.\n\nBuild the final force. Build a team from a variety of races and classes and combine their skills to overcome impossible odds. You'll be joined by newcomers like James Vega, a tough-as-nails soldier, as well as EDI, a trusted AI in a newly acquired physical form. Keep an eye out for beloved characters from your past, but beware. Some may not survive the final battle...\n\nFace off against friends. Enjoy an integrated co-op multiplayer mode and team up with friends online to liberate key conflict zones from increasingly tough opponents. Customize your warrior and earn new weapons, armor, and abilities to build war preparedness stats in your single player campaign.",
	},
	{
		id: 26192,
		aggregated_rating: 95.1818181818182,
		cover: "co5ziw",

		first_release_date: 1592524800,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "The Last of Us Part II",
		platforms: [
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 34673,
				image_id: "oh8a5shtmdbqx73cv765",
			},
			{
				id: 34674,
				image_id: "rqr5dxxw97zikyhdn2tq",
			},
			{
				id: 34675,
				image_id: "mobc8z5fnxljhadccvy6",
			},
			{
				id: 34677,
				image_id: "kazgjykzu18dhqjpspko",
			},
			{
				id: 214555,
				image_id: "rdonk4uvyh8ijanrbs46",
			},
			{
				id: 214556,
				image_id: "dbqn4wax78tgvplrpf1m",
			},
			{
				id: 214557,
				image_id: "mmenctgbvassqs1uepax",
			},
			{
				id: 396903,
				image_id: "sc8i93",
			},
			{
				id: 396904,
				image_id: "sc8i94",
			},
			{
				id: 396905,
				image_id: "sc8i95",
			},
			{
				id: 396906,
				image_id: "sc8i96",
			},
			{
				id: 396907,
				image_id: "sc8i97",
			},
		],
		summary:
			"The Last of Us Part II is an action-adventure game set five years after the events of The Last of Us. The player traverses post-apocalyptic environments such as buildings and forests to advance the story. He can use firearms, improvised weapons, and stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus. The game intermittently switches control between Ellie and Abby, and also briefly Joel in the opening sequence. The nimble nature of the player character introduces platforming elements, allowing the player to jump and climb to traverse environments and gain advantages during combat.",
	},
	{
		id: 19560,
		aggregated_rating: 96.2307692307692,
		cover: "co1tmu",

		first_release_date: 1524182400,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 25,
				name: "Hack and slash/Beat 'em up",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "God of War",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 25153,
				image_id: "qseegzssgetrybgbplrv",
			},
			{
				id: 25154,
				image_id: "rm35ytrytuka9qkylqyk",
			},
			{
				id: 25155,
				image_id: "ywrkjcrbeemmb51flsfj",
			},
			{
				id: 44388,
				image_id: "jvdoaxza3cawklvof1sl",
			},
			{
				id: 44389,
				image_id: "gpt3d0gpue5mat4kkso6",
			},
			{
				id: 208194,
				image_id: "mzg7f3xx57sf8rt7tja8",
			},
			{
				id: 208195,
				image_id: "nee23o7rtpaqbu8g7byx",
			},
			{
				id: 208196,
				image_id: "o4mg2wvhlcikaogvvzqe",
			},
			{
				id: 208197,
				image_id: "w5eazrrf4wdxjl4idfya",
			},
			{
				id: 208198,
				image_id: "s2zdtxopibrfjbxvpj5h",
			},
			{
				id: 208199,
				image_id: "wunlbofh23trw0u67gms",
			},
			{
				id: 208200,
				image_id: "r7hpzsqic1bjwyzn1bnq",
			},
		],
		summary:
			"God of War is the sequel to God of War III as well as a continuation of the canon God of War chronology. Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his son Atreus in the years since the third game. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
	},
	{
		id: 16,
		aggregated_rating: 81.9,
		cover: "co1u60",

		first_release_date: 1287446400,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
		],
		name: "Fallout: New Vegas",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 43,
				image_id: "tiaygjcahvaxjsn9zlih",
			},
			{
				id: 866,
				image_id: "btzvsqq7lqpeffwsayni",
			},
			{
				id: 867,
				image_id: "drhrr5rfvavb1xiyxnr6",
			},
			{
				id: 210798,
				image_id: "yoqtxqgcq6ceoegzi5ii",
			},
			{
				id: 210799,
				image_id: "mvu2bm1u1jz4lgp9qrwg",
			},
			{
				id: 210802,
				image_id: "xgoin1cr0uh9o26auuns",
			},
			{
				id: 210803,
				image_id: "jomecpizlep5k6jcaye7",
			},
		],
		summary:
			"In this first-person Western RPG, the player takes on the role of Courier 6, barely surviving after being robbed of their cargo, shot and put into a shallow grave by a New Vegas mob boss. The Courier sets out to track down their robbers and retrieve their cargo, and winds up getting tangled in the complex ideological and socioeconomic web of the many factions and settlements of post-nuclear Nevada.",
	},
	{
		id: 19441,
		aggregated_rating: 81.3333333333333,
		cover: "co2p3j",

		first_release_date: 1479168000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Watch Dogs 2",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 24896,
				image_id: "jaj2rfqtl1sy7kpscva5",
			},
			{
				id: 24897,
				image_id: "un0qlfwn5i5roafrqwfk",
			},
			{
				id: 24898,
				image_id: "mfuq53zm8lhzlshmqrux",
			},
			{
				id: 27241,
				image_id: "ooubot1nhubptdxtnruw",
			},
			{
				id: 27242,
				image_id: "symavesoxuljlslcw0jo",
			},
		],
		summary:
			"Explore a massive and dynamic open world offering an incredible variety of gameplay possibilities. Hack your way through traffic while you engage in dangerous car chases through the winding streets of San Francisco, traverse the rooftops of the colorful and vibrant neighborhoods of Oakland, and infiltrate the cutting-edge offices of Silicon Valley companies. There are many secrets to uncover in the birthplace of the tech revolution.",
	},
	{
		id: 7599,
		aggregated_rating: 78.8378378378378,
		cover: "co1r8e",

		first_release_date: 1422489600,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Life is Strange",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 34,
				name: "Android",
			},
			{
				id: 39,
				name: "iOS",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 6554,
				image_id: "azrk1nu49s6o75bb962n",
			},
			{
				id: 9015,
				image_id: "nw8gupltr8pejuf0wlbs",
			},
			{
				id: 9018,
				image_id: "b5qtx5jvklrvchh21isj",
			},
			{
				id: 9019,
				image_id: "b6rjjpluz7vzprxny8oi",
			},
			{
				id: 9020,
				image_id: "lszanbcwri0hqwpktbk0",
			},
			{
				id: 189157,
				image_id: "a25lj1d3nxhaeiszfpgj",
			},
			{
				id: 189158,
				image_id: "mhb6anom7mapdlde2gry",
			},
			{
				id: 189159,
				image_id: "csa4mkepi7frqktztwdl",
			},
			{
				id: 189160,
				image_id: "oknhsz8s8z2ghyl3zjod",
			},
			{
				id: 189161,
				image_id: "awy9lkmi2cb1qnii7ro9",
			},
			{
				id: 189162,
				image_id: "q1b7qo2bnho6d6tas2wc",
			},
			{
				id: 189163,
				image_id: "g5ei35tmwtbcwn4xm11q",
			},
		],
		summary:
			"Life is Strange is a five part episodic game that sets out to revolutionize story based choice and consequence games by allowing the player to rewind time and affect the past, present and future.",
	},
	{
		id: 1871,
		aggregated_rating: 84.3529411764706,
		cover: "co2j1g",

		first_release_date: 1335225600,
		genres: [
			{
				id: 2,
				name: "Point-and-click",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "The Walking Dead: Season One",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 34,
				name: "Android",
			},
			{
				id: 39,
				name: "iOS",
			},
			{
				id: 46,
				name: "PlayStation Vita",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 1869,
				image_id: "lmogp7yqsnri3mrzgtsb",
			},
			{
				id: 1870,
				image_id: "de1mbpaem0ribfstomum",
			},
			{
				id: 1871,
				image_id: "h1uisnak6rzgnsu629ul",
			},
			{
				id: 1872,
				image_id: "m4gdjehicf1rd5wi7yyt",
			},
			{
				id: 1873,
				image_id: "cehlsygg5jing9mzct6x",
			},
			{
				id: 212556,
				image_id: "h7uzbpn60fh3djkb0but",
			},
		],
		summary:
			"The Walking Dead: Season One (also known as The Walking Dead: The Game) is an episodic interactive drama graphic adventure video game developed and published by Telltale Games. Based on Robert Kirkman's The Walking Dead comic book series, the game consists of five episodes, released between April and November 2012. It is available for Android, iOS, Kindle Fire HDX, Microsoft Windows, Mac OS X, PlayStation 3, PlayStation Vita, Xbox 360, PlayStation 4 and Xbox One. The game is the first of The Walking Dead video game series published by Telltale.",
	},
	{
		id: 9630,
		aggregated_rating: 84.6666666666667,
		cover: "co1yc6",

		first_release_date: 1447027200,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
		],
		name: "Fallout 4",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 167,
				name: "PlayStation 5",
			},
			{
				id: 169,
				name: "Xbox Series X|S",
			},
		],
		screenshots: [
			{
				id: 11187,
				image_id: "twgwp1xobnae4kbky2hw",
			},
			{
				id: 11188,
				image_id: "ufocunt4ze1rjomybg2h",
			},
			{
				id: 11189,
				image_id: "xqhildldpukjvj9gcfmt",
			},
			{
				id: 11190,
				image_id: "whhptvhci1bdoqolofjo",
			},
			{
				id: 16344,
				image_id: "acrxfc2grr69wfbql8ax",
			},
		],
		summary:
			"Bethesda Game Studios welcome you to the world of Fallout 4, their most ambitious game ever, and the next generation of open-world gaming. As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland. Welcome home.",
	},
	{
		id: 113,
		aggregated_rating: 83.3333333333333,
		cover: "co1mxz",

		first_release_date: 1289865600,
		genres: [
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Assassin's Creed Brotherhood",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 102347,
				image_id: "por5yntbtmllfy866fqc",
			},
			{
				id: 102348,
				image_id: "i6clwjatck5ffghjszjj",
			},
			{
				id: 102349,
				image_id: "wpuw0qdi6zp3waa0trob",
			},
			{
				id: 102350,
				image_id: "gcegtpcfkiqva1sup5ve",
			},
			{
				id: 102351,
				image_id: "kdwsevmwpzwhuiqhxftq",
			},
		],
		summary:
			"Live and breathe as Ezio, a legendary Master Assassin, in his enduring struggle against the powerful Templar Order. He must journey into Italy’s greatest city, Rome, center of power, greed and corruption to strike at the heart of the enemy.\nDefeating the corrupt tyrants entrenched there will require not only strength, but leadership, as Ezio commands an entire Brotherhood who will rally to his side. Only by working together can the Assassins defeat their mortal enemies.\nAnd for the first time, introducing a never-before-seen multiplayer layer that allows you to choose from a wide range of unique characters, each with their own signature weapons and assassination techniques, and match your skills against other players from around the world.\nIt’s time to join the Brotherhood.",
	},
	{
		id: 1011,
		aggregated_rating: 80.7058823529412,
		cover: "co20tn",

		first_release_date: 1347926400,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
		],
		name: "Borderlands 2",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 34,
				name: "Android",
			},
			{
				id: 46,
				name: "PlayStation Vita",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 246,
				image_id: "eocdvaynboqmud9hmysu",
			},
			{
				id: 247,
				image_id: "balxsfafzeyy3ki3sc0z",
			},
			{
				id: 248,
				image_id: "ithhctwgt8rsxbxe5uy5",
			},
			{
				id: 249,
				image_id: "ixynqzoedwo8vc5nzqma",
			},
			{
				id: 250,
				image_id: "bz4asonezfuq945jg1qr",
			},
		],
		summary:
			"A new era of shoot and loot is about to begin. Play as one of four new vault hunters facing off against a massive new world of creatures, psychos and the evil mastermind, Handsome Jack. Make new friends, arm them with a bazillion weapons and fight alongside them in 4 player co-op on a relentless quest for revenge and redemption across the undiscovered and unpredictable living planet.",
	},
	{
		id: 25657,
		aggregated_rating: 82.44,
		cover: "co67qb",

		first_release_date: 1504656000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Destiny 2",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 167,
				name: "PlayStation 5",
			},
			{
				id: 169,
				name: "Xbox Series X|S",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 104239,
				image_id: "m9mdkmpv1efkc2nmxqlt",
			},
			{
				id: 104240,
				image_id: "d0s5upisfnao3h3jdsib",
			},
			{
				id: 104241,
				image_id: "ymxy2otllrluvcqwnyhk",
			},
			{
				id: 104242,
				image_id: "r3qos1ovmkboaskqmhtp",
			},
			{
				id: 104243,
				image_id: "nmuz3tmvxva1nqhjaxvn",
			},
		],
		summary:
			"Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your Guardian's look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety of PvP modes alone or with friends. Download for free today and write your legend in the stars.",
	},
	{
		id: 28204,
		aggregated_rating: 75.2777777777778,
		cover: "co1rdj",

		first_release_date: 1509580800,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
		],
		name: "Call of Duty: WWII",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 42190,
				image_id: "zum4prw3m27jsqv2lobq",
			},
			{
				id: 42191,
				image_id: "mno7spxuafapa8ajvixm",
			},
			{
				id: 42192,
				image_id: "vdmxnihoegzdbyahjpat",
			},
			{
				id: 42193,
				image_id: "o9mbl0rabu0sazsbxiji",
			},
			{
				id: 42199,
				image_id: "qslsn7dl1nmjvlidmlc6",
			},
			{
				id: 211129,
				image_id: "ccxizgajbolu4kw5iild",
			},
			{
				id: 211130,
				image_id: "snkucsvixsexyfcvi1ks",
			},
			{
				id: 211131,
				image_id: "uaxzlzruz9be57tq5ayf",
			},
			{
				id: 211132,
				image_id: "ijoenntauq5gfurpayt1",
			},
			{
				id: 211436,
				image_id: "fvyd4c4ybhw5asidd0tk",
			},
			{
				id: 211437,
				image_id: "duzljmjdctiljgu4bzkt",
			},
			{
				id: 211438,
				image_id: "m7j8nno7wpfdvxrvnam3",
			},
		],
		summary:
			"Call of Duty: WWII creates the definitive World War II next generation experience across three different game modes: Campaign, Multiplayer, and Co-Operative. Featuring stunning visuals, the Campaign transports players to the European theater as they engage in an all-new Call of Duty story set in iconic World War II battles. Multiplayer marks a return to original, boots-on-the ground Call of Duty gameplay. Authentic weapons and traditional run-and-gun action immerse you in a vast array of World War II-themed locations. The Co-Operative mode unleashes a new and original story in a standalone game experience full of unexpected, adrenaline-pumping moments.",
	},
	{
		id: 1970,
		aggregated_rating: 84.5714285714286,
		cover: "co4qfn",

		first_release_date: 1383004800,
		genres: [
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Assassin's Creed IV Black Flag",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 41,
				name: "Wii U",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 7553,
				image_id: "klueeisww1wumxudur9l",
			},
			{
				id: 152250,
				image_id: "amoqttuiszhyd6s4tgg5",
			},
			{
				id: 152251,
				image_id: "xcxhhxv4vvevmstzxzz6",
			},
			{
				id: 152253,
				image_id: "jejhpngrm1kttpn03lol",
			},
			{
				id: 152255,
				image_id: "uiaywb4ybnqal47xgska",
			},
			{
				id: 672404,
				image_id: "sceetw",
			},
			{
				id: 672405,
				image_id: "sceetx",
			},
			{
				id: 672406,
				image_id: "sceety",
			},
			{
				id: 672460,
				image_id: "sceevg",
			},
		],
		summary:
			"Assassin’s Creed IV Black Flag begins in 1715, when pirates established a lawless republic in the Caribbean and ruled the land and seas. These outlaws paralyzed navies, halted international trade, and plundered vast fortunes. They threatened the power structures that ruled Europe, inspired the imaginations of millions, and left a legacy that still endures.",
	},
	{
		id: 8173,
		aggregated_rating: 89.0833333333333,
		cover: "co1rcb",

		first_release_date: 1464048000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 15,
				name: "Strategy",
			},
		],
		name: "Overwatch",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
			{
				id: 169,
				name: "Xbox Series X|S",
			},
		],
		screenshots: [
			{
				id: 7311,
				image_id: "xcyoi025lvvwnnrdargv",
			},
			{
				id: 7312,
				image_id: "qyardon47coclwtjfwwr",
			},
			{
				id: 7313,
				image_id: "bpcshm1ryzyf4nwu0rkt",
			},
			{
				id: 7314,
				image_id: "aq1xangaqzrlhgetcrop",
			},
			{
				id: 7315,
				image_id: "ao0jpev6qtvqlftjlhv5",
			},
		],
		summary:
			"Join the fight for the future in the world of Overwatch and choose your hero from a diverse cast of soldiers, scientists, adventurers, and oddities. Bend time, defy physics, and unleash a dizzying array of extraordinary powers and weapons. Engage your enemies in iconic locations from around the globe in the ultimate team-based shooter.",
	},
	{
		id: 5503,
		aggregated_rating: 91.8125,
		cover: "co1nh1",

		first_release_date: 1435017600,
		genres: [
			{
				id: 25,
				name: "Hack and slash/Beat 'em up",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Batman: Arkham Knight",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 214456,
				image_id: "z3z1odurhninhnorve6g",
			},
			{
				id: 214457,
				image_id: "njfbulzuivfqqtavv8pi",
			},
			{
				id: 214458,
				image_id: "qphzev6p9rdtqun10tnj",
			},
			{
				id: 214459,
				image_id: "es3bkhmszhr0lgfitds7",
			},
			{
				id: 214460,
				image_id: "gvexzjpbwq7aelsicwt1",
			},
			{
				id: 214461,
				image_id: "kgjnikufzrw1ahslkn69",
			},
			{
				id: 214462,
				image_id: "zy4zjqeydva5pw4afk9b",
			},
			{
				id: 214463,
				image_id: "wmryo6uxdy1opndpqzsg",
			},
			{
				id: 214464,
				image_id: "g6djmksheahgmj8qw4jh",
			},
			{
				id: 214465,
				image_id: "f7dtfyst1yempsfapqze",
			},
			{
				id: 214466,
				image_id: "ietlbq4wk9beejz4we8d",
			},
			{
				id: 214467,
				image_id: "hhpdzsjzt1rq0zfyztqh",
			},
		],
		summary:
			"Batman: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile. The highly anticipated addition of this legendary vehicle, combined with the acclaimed gameplay of the Arkham series, offers gamers the ultimate and complete Batman experience as they tear through the streets and soar across the skyline of the entirety of Gotham City. In this explosive finale, Batman faces the ultimate threat against the city that he is sworn to protect, as Scarecrow returns to unite the super criminals of Gotham and destroy the Batman forever.",
	},
	{
		id: 478,
		aggregated_rating: 85.7142857142857,
		cover: "co1wy4",

		first_release_date: 1305590400,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "The Witcher 2: Assassins of Kings",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 327,
				image_id: "few5b8tm9daauwv29opk",
			},
			{
				id: 328,
				image_id: "zb5whw2xb13yavuzqhhy",
			},
			{
				id: 329,
				image_id: "fujznpait3vgks1fsf8u",
			},
			{
				id: 944,
				image_id: "auslwvtps8woqdd5t0um",
			},
			{
				id: 6520,
				image_id: "qelsfsxjgnkz5zuvaat4",
			},
		],
		summary:
			"This third-person dark fantasy Western RPG and sequel to The Witcher (2007), featuring multiple endings and branching narrative paths, follows the travels of Geralt of Rivia, witcher, who, after being falsely accused of regicide, sets out to clear his name and find the real killer, in a time of political turmoil and the brink of war between the imperialistic Nilfgaardian Empire and the Four Kingdoms.",
	},
	{
		id: 28540,
		aggregated_rating: 85.9333333333333,
		cover: "co1rbe",

		first_release_date: 1508976000,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Assassin's Creed Origins",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 44272,
				image_id: "giqtb8y4awm9ibt942cn",
			},
			{
				id: 151403,
				image_id: "bdcceejc2e9vaimn0ngn",
			},
			{
				id: 151404,
				image_id: "l1nbqll4r42lqrz1wesv",
			},
			{
				id: 151405,
				image_id: "uaxy3tjubonooualy5x8",
			},
			{
				id: 151406,
				image_id: "gxadfrdicxjlraalvltb",
			},
			{
				id: 151407,
				image_id: "nfwxynqhormtovylykxr",
			},
			{
				id: 151408,
				image_id: "wzltqoi9xgmmgimnxsrq",
			},
			{
				id: 151409,
				image_id: "efqqm3t15ey0jlkv0xqv",
			},
			{
				id: 151410,
				image_id: "dxbpxe7xewmvkz8dnrgp",
			},
			{
				id: 151411,
				image_id: "wq0tjsduutk6jeaqakrh",
			},
			{
				id: 151412,
				image_id: "p5fjuotpkdecuturqw1c",
			},
			{
				id: 151413,
				image_id: "oh9o0c3d5eo7qnwkm9q2",
			},
		],
		summary:
			"For the last four years, the team behind Assassin’s Creed IV Black Flag has been crafting a new beginning for the Assassin’s Creed franchise.\n\nSet in Ancient Egypt, players will journey to the most mysterious place in history, during a crucial period that will shape the world and give rise to the Assassin’s Brotherhood. Plunged into a living, systemic and majestic open world, players are going to discover vibrant ecosystems, made of diverse and exotic landscapes that will provide them with infinite opportunities of pure exploration, adventures and challenges.\n\nPowered by a new fight philosophy, Assassin's Creed Originsembraces a brand new RPG direction where players level up, loot, and choose abilities to shape and customize their very own skilled Assassin as they grow in power and expertise while exploring the entire country of Ancient Egypt.",
	},
	{
		id: 1372,
		aggregated_rating: 81,
		cover: "co6996",

		first_release_date: 1345507200,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 24,
				name: "Tactical",
			},
		],
		name: "Counter-Strike: Global Offensive",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 383085,
				image_id: "sc87l9",
			},
			{
				id: 383086,
				image_id: "sc87la",
			},
			{
				id: 383087,
				image_id: "sc87lb",
			},
			{
				id: 383088,
				image_id: "sc87lc",
			},
			{
				id: 383089,
				image_id: "sc87ld",
			},
			{
				id: 642664,
				image_id: "scdrvs",
			},
			{
				id: 642665,
				image_id: "scdrvt",
			},
			{
				id: 642666,
				image_id: "scdrvu",
			},
			{
				id: 642667,
				image_id: "scdrvv",
			},
			{
				id: 642668,
				image_id: "scdrvw",
			},
			{
				id: 642669,
				image_id: "scdrvx",
			},
			{
				id: 642670,
				image_id: "scdrvy",
			},
		],
		summary:
			"CS:GO is the fourth iteration of Valve's team-based modern-military first-person shooter that features new and updated versions of the classic CS content. While expanding the franchise, the game also introduces new gameplay modes, matchmaking and leader boards.",
	},
	{
		id: 7334,
		aggregated_rating: 91.1111111111111,
		cover: "co1rba",

		first_release_date: 1427155200,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Bloodborne",
		platforms: [
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 9530,
				image_id: "adssvwsfbaxcrucjolv9",
			},
			{
				id: 9531,
				image_id: "bklmdxphzoflbgtushg0",
			},
			{
				id: 9532,
				image_id: "uqmif3sshdrbbcd0pu8l",
			},
			{
				id: 9533,
				image_id: "hc9nb80b0xni5wxm5zh3",
			},
			{
				id: 9534,
				image_id: "aokcsspzrqyaaoug7jnn",
			},
		],
		summary:
			'An action RPG in which the player embodies a Hunter who, after being transfused with the mysterious blood local to the city of Yharnam, sets off into a "night of the Hunt", an extended night in which Hunters may phase in and out of dream and reality in order to thin the outbreak of abominable beasts that plague the land and, for the more resilient and insightful Hunters, uncover the answers to the Hunt\'s many mysteries.',
	},
	{
		id: 533,
		aggregated_rating: 90.3571428571429,
		cover: "co5pcs",

		first_release_date: 1349740800,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Dishonored",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 1261,
				image_id: "g7gj1dq82qv2wvv3izxg",
			},
			{
				id: 1262,
				image_id: "gket6hnfqf2o6btpluck",
			},
			{
				id: 1263,
				image_id: "feem9stvuzbeuhue9itk",
			},
			{
				id: 1264,
				image_id: "tuxvvb4tqnnnatdy4c4b",
			},
			{
				id: 1265,
				image_id: "utk6olfwdeqkw7bwxbd7",
			},
		],
		summary:
			"Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge. With Dishonored’s flexible combat system, creatively eliminate your targets as you combine the supernatural abilities, weapons and unusual gadgets at your disposal. Pursue your enemies under the cover of darkness or ruthlessly attack them head on with weapons drawn. The outcome of each mission plays out based on the choices you make.",
	},
	{
		id: 28552,
		aggregated_rating: 84.3333333333333,
		cover: "co21a6",

		first_release_date: 1522022400,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Far Cry 5",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 43448,
				image_id: "b2k0cvfbzprnuizutgow",
			},
			{
				id: 43449,
				image_id: "xeqtlwx9f80ekqiyh25w",
			},
			{
				id: 43453,
				image_id: "ikk26u9j3qpug39snuoj",
			},
			{
				id: 43454,
				image_id: "xrbujdrkuyta8cneqipz",
			},
			{
				id: 43457,
				image_id: "u5ldoak74o1yhl2gt6y7",
			},
			{
				id: 193164,
				image_id: "ndceepit98cuj5fbgjrs",
			},
			{
				id: 193165,
				image_id: "aa66xisnbagxsepnx2el",
			},
			{
				id: 193166,
				image_id: "xqw9h7z7psiuktt9dgos",
			},
			{
				id: 208180,
				image_id: "r72spvqvrzfyqncgbspw",
			},
			{
				id: 208181,
				image_id: "g1jcmromr4x3jwunyb0b",
			},
			{
				id: 208182,
				image_id: "rg4qqcigwxd9aa7zbsos",
			},
			{
				id: 208183,
				image_id: "sfchhwjgcyxtm8ceyj17",
			},
		],
		summary:
			"Welcome to Hope County, Montana, land of the free and the brave, but also home to a fanatical doomsday cult known as The Project at Eden’s Gate that is threatening the community's freedom. Stand up to the cult’s leader, Joseph Seed and the Heralds, and spark the fires of resistance that will liberate the besieged community.\n\nIn this expansive world, your limits and creativity will be tested against the biggest and most ruthless baddest enemy Far Cry has ever seen. It’ll be wild and it’ll get weird, but as long as you keep your wits about you, the residents of Hope County can rest assured knowing you’re their beacon of hope.",
	},
	{
		id: 7351,
		aggregated_rating: 86.96875,
		cover: "co1nc7",

		first_release_date: 1463011200,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
		],
		name: "Doom",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 10815,
				image_id: "z8hso07ic2nymktnrdgr",
			},
			{
				id: 10819,
				image_id: "ruihyw2ggun3g422i0cg",
			},
			{
				id: 25076,
				image_id: "ztefs6yagwsy7mqadtr6",
			},
			{
				id: 25077,
				image_id: "zvgdnda5xvoogorofvmr",
			},
			{
				id: 25078,
				image_id: "ae1m6xxg9tprlsh4gvd6",
			},
		],
		summary:
			"Developed by id software, the studio that pioneered the first-person shooter genre and created multiplayer Deathmatch, Doom returns as a brutally fun and challenging modern-day shooter experience. Relentless demons, impossibly destructive guns, and fast, fluid movement provide the foundation for intense, first-person combat – whether you’re obliterating demon hordes through the depths of Hell in the single-player campaign, or competing against your friends in numerous multiplayer modes. Expand your gameplay experience using Doom SnapMap game editor to easily create, play, and share your content with the world.",
	},
	{
		id: 512,
		aggregated_rating: 93.25,
		cover: "co1tp8",

		first_release_date: 1320105600,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Uncharted 3: Drake's Deception",
		platforms: [
			{
				id: 9,
				name: "PlayStation 3",
			},
		],
		screenshots: [
			{
				id: 10913,
				image_id: "htlgs12rau2b0ioyndhy",
			},
			{
				id: 10914,
				image_id: "dmosla0vizvx9rrpbqit",
			},
			{
				id: 10915,
				image_id: "emrydikio4zgsstvby0k",
			},
			{
				id: 10916,
				image_id: "j03srracbjrfzdvxinaz",
			},
			{
				id: 10917,
				image_id: "nzqyhy7lbovg7syqs2ad",
			},
			{
				id: 403906,
				image_id: "sc8nnm",
			},
			{
				id: 403907,
				image_id: "sc8nnn",
			},
			{
				id: 403908,
				image_id: "sc8nno",
			},
			{
				id: 403909,
				image_id: "sc8nnp",
			},
			{
				id: 403910,
				image_id: "sc8nnq",
			},
			{
				id: 403911,
				image_id: "sc8nnr",
			},
			{
				id: 403912,
				image_id: "sc8nns",
			},
		],
		summary:
			'A search for the fabled "Atlantis of the Sands" propels fortune hunter Nathan Drake on a trek into the heart of the Arabian Desert. When the terrible secrets of this lost city are unearthed, Drake\'s quest descends into a desperate bid for survival that strains the limits of his endurance and forces him to confront his deepest fears.',
	},
	{
		id: 3025,
		aggregated_rating: 83.8888888888889,
		cover: "co20pd",

		first_release_date: 1412035200,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 25,
				name: "Hack and slash/Beat 'em up",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Middle-earth: Shadow of Mordor",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 5827,
				image_id: "v8v20jlqyncrbfbftwrx",
			},
			{
				id: 5828,
				image_id: "anyfu26e1hfmr45gkozd",
			},
			{
				id: 5829,
				image_id: "gktc7tabdgnlaxectjgw",
			},
			{
				id: 5830,
				image_id: "wgnsn9c6svcie0od4vyb",
			},
			{
				id: 5831,
				image_id: "q6xqaduy589inatsefrj",
			},
		],
		summary:
			"Middle-earth: Shadow of Mordor is a open world third-person action role-playing video game developed by Monolith Productions and published by Warner Bros. Interactive Entertainment, which takes place in the world of J.R.R. Tolkien's Legendarium.\n\nThe game takes place in the 60-year gap between the events of Tolkien's The Hobbit and The Lord of The Rings. It is a story of revenge, slaughter, and mystery set entirely in Mordor, the Land of Shadows. At its center is Talion, an ordinary man who loses everything, including his mortal life.\n\nThe game is set in a fully open world, and features various role-playing game elements such as experience points and skills. There are various ways the player can complete their main objective. Aside from the main storyline, there are various side quests and random events the player can complete within Mordor.\n\nThe melee system is inspired by that of the Batman Arkham series. Getting into a good fighting rhythm, using both regular attacks and counter-attacks will improve the player's combo multiplier.\n\nA unique feature of Middle-earth: Shadow of Mordor is the Nemesis system. Every enemy in the game has their own name, rank, and memory. These enemies will continue to do their own jobs and tasks even when they're off screen. If the player does not kill an enemy in an encounter, this enemy will remember the player and change their tactics and conversations based on the encounter.",
	},
	{
		id: 866,
		aggregated_rating: 86.6,
		cover: "co20up",

		first_release_date: 1285027200,
		genres: [
			{
				id: 13,
				name: "Simulator",
			},
			{
				id: 15,
				name: "Strategy",
			},
			{
				id: 16,
				name: "Turn-based strategy (TBS)",
			},
		],
		name: "Sid Meier's Civilization V",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 141,
				image_id: "qyfmwjlwlm3ttvwjfhvg",
			},
			{
				id: 2009,
				image_id: "z163dgurfi253nzalfu8",
			},
			{
				id: 2010,
				image_id: "q5tu4kcbihvp2eyx5zss",
			},
			{
				id: 2011,
				image_id: "kxy47kwvh2rhvkossqdr",
			},
			{
				id: 2012,
				image_id: "hovtagtyld3aqxivfnf0",
			},
		],
		summary:
			"Sid Meier's Civilization V is a turn-based strategy game where the player leads a civilization from the stone-age all the way to future tech, there is more than one way to win, achieving one of a number of different victory conditions through research, exploration, diplomacy, expansion, economic development, government and military conquest. You will face other civilizations, either online as other people or played by the computer, civilization 5 features a advanced diplomacy system when dealing with computer controlled civs or computer controlled city-states.",
	},
	{
		id: 2114,
		aggregated_rating: 79.8181818181818,
		cover: "co1yvf",

		first_release_date: 1457308800,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 15,
				name: "Strategy",
			},
			{
				id: 24,
				name: "Tactical",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Tom Clancy's The Division",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 5727,
				image_id: "cxbek9fkak6hedfaoyop",
			},
			{
				id: 5728,
				image_id: "azhsf6mpj4r6u5hs9qd7",
			},
			{
				id: 5729,
				image_id: "tjmwsltwywzysfmocp6j",
			},
			{
				id: 5730,
				image_id: "jujgir86uktohxkbkgy2",
			},
			{
				id: 5769,
				image_id: "i6fqqacohnotkuzs7wuo",
			},
			{
				id: 211106,
				image_id: "vuzj5sqkdob7rfdmuxpd",
			},
			{
				id: 211107,
				image_id: "gfmovsoiunzkkgqlnd5e",
			},
			{
				id: 211108,
				image_id: "h5kkauiod3jk2n9nlxqb",
			},
		],
		summary:
			"After a deadly pandemic sweeps through New York, it's up to Agents to save what remains. Complete missions, explore the Dark Zone, and fight back enemy factions alone or with 3 friends. Experience a full endgame offering you new PvP and PvE modes.",
	},
	{
		id: 7349,
		aggregated_rating: 73.2173913043478,
		cover: "co39vk",

		first_release_date: 1490054400,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Mass Effect: Andromeda",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 33938,
				image_id: "zxhpemg4tyhgrce1lgne",
			},
			{
				id: 33939,
				image_id: "vnkudolgmkdmv0edwqqj",
			},
			{
				id: 33941,
				image_id: "mdi22rsmhd0eaepita2w",
			},
			{
				id: 34896,
				image_id: "og2vhbqftsdljfhornu1",
			},
			{
				id: 376149,
				image_id: "sc828l",
			},
			{
				id: 376150,
				image_id: "sc828m",
			},
		],
		summary:
			"A new adventure awaits in the Mass Effect universe. With stunning visuals and a new galaxy to discover, BioWare delivers the next generation of space exploration.\n\nCommander Shepard's story may be over, but there are many more stories to tell in the Mass Effect universe. Mass Effect Andromeda will be set in a new galaxy, with new characters, new quests and a whole load of new consequence-laden decisions to make.\n\nMass Effect: Andromeda takes you to the Andromeda galaxy, far beyond the Milky Way. There, you'll lead our fight for a new home in hostile territory - where WE are the aliens.\n\nPlay as the Pathfinder - a leader of a squad of military-trained explorers - with deep progression and customisation systems. This is the story of humanity’s next chapter, and your choices throughout the game will ultimately determine our survival in the Andromeda Galaxy.\n\nAs you unfold the mysteries of the Andromeda Galaxy and the hope for humanity lies on your shoulders – You must ask yourself… How far will you go?\n\nKey Features:\n\nReturn to the Mass Effect universe. Lead the first humans in Andromeda on a desperate search for our new home. In this new chapter of Mass Effect, meet and recruit all-new, interesting characters caught up in an epic space saga filled with mystery and galactic conflict.\n\nFight for survival. Battle with your Pathfinder team against terrifying enemies and creatures. New additions like destructible environments, boosted jumps for added verticality, and all-new weapons and Biotics make combat more thrilling than ever.\n\nBuild your hero. Create a formidable hero with amazing weapons, powers and tech. A much more flexible skill and weapon progression tree means you can replicate your play style to make you unstoppable against new, powerful alien enemies.\n\nExplore a new galaxy. Chart your own course in a dangerous new region. Unravel the mysteries of the Andromeda galaxy as you discover rich, alien worlds in the search for humanity’s new home.",
	},
	{
		id: 2155,
		aggregated_rating: 90.625,
		cover: "co1x78",

		first_release_date: 1316649600,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Dark Souls",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 2613,
				image_id: "sylfmtzktmb4b0ext8nr",
			},
			{
				id: 2614,
				image_id: "nz70mpjc7kszcyesgmqw",
			},
			{
				id: 4617,
				image_id: "xov2ga3zkudrtr0sqp8n",
			},
			{
				id: 6379,
				image_id: "i16sgcogmkrvy0ixs0rt",
			},
			{
				id: 9111,
				image_id: "gdplcyvz8fvgxvgu2phn",
			},
		],
		summary:
			"An action RPG and spiritual sequel to Demon's Souls in which the player embodies the Chosen Undead, who is tasked with fulfilling an ancient prophecy by ringing the Bells of Awakening in the dark fantasy setting of Lordran, an open world with intricate areas full of beasts, former humans gone hollow, and magical abominations whom the player must overcome in challenging and unforgiving combat.",
	},
	{
		id: 7323,
		aggregated_rating: 87.04,
		cover: "co1rqa",

		first_release_date: 1447113600,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Rise of the Tomb Raider",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 10685,
				image_id: "qgbk3c7ws8mapylzswat",
			},
			{
				id: 10686,
				image_id: "mbidhmrrzdoxv6flh4x3",
			},
			{
				id: 10687,
				image_id: "s5wyp8ujrmjifueaypxl",
			},
			{
				id: 10688,
				image_id: "feoegrjyhepdrs5tubrr",
			},
			{
				id: 10689,
				image_id: "bymhdw6rhislriio8n0d",
			},
			{
				id: 211018,
				image_id: "friid2lfemtabcrby6zh",
			},
			{
				id: 211019,
				image_id: "htt4wmsndvo3el8xgcnv",
			},
			{
				id: 211020,
				image_id: "cdgscwy875dewjdxdfr7",
			},
			{
				id: 211021,
				image_id: "vwcam22erhj59b8wgwxi",
			},
			{
				id: 211022,
				image_id: "u3obs5jsfqponnkp3qp1",
			},
		],
		summary:
			"Join Lara Croft on her first great tomb raiding expedition as she seeks to discover the secret of immortality. Featuring high-octane action set in the most beautiful and hostile environments on earth, Rise of the Tomb Raider delivers cinematic survival action-adventure.",
	},
	{
		id: 18167,
		aggregated_rating: 36.75,
		cover: "co1r7c",

		first_release_date: 1512691200,
		genres: [
			{
				id: 9,
				name: "Puzzle",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 15,
				name: "Strategy",
			},
			{
				id: 31,
				name: "Adventure",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "Hello Neighbor",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 34,
				name: "Android",
			},
			{
				id: 39,
				name: "iOS",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 21243,
				image_id: "y9s7qv25untipfcirlei",
			},
			{
				id: 21435,
				image_id: "dlnozlv1jmjv5zrm3iqt",
			},
			{
				id: 21436,
				image_id: "wwm17mai4r1jqaiggcvc",
			},
			{
				id: 21437,
				image_id: "mnokrxmkflaianxhsrkd",
			},
			{
				id: 212577,
				image_id: "kwdt3wa4rqagmy5pvzgm",
			},
			{
				id: 212578,
				image_id: "kito03qskgq8ht8dfpqa",
			},
			{
				id: 212579,
				image_id: "dykdvcmiwelebe2lff0v",
			},
			{
				id: 212580,
				image_id: "zb9ch1qw54a9rddvvbmo",
			},
		],
		summary:
			"Hello Neighbor is a stealth horror game about sneaking into Mr.Petersons house to figure out what horrible secrets he's hiding in the basement. You play against an advanced AI that learns from your every move. Really enjoying climbing through that backyard window? Expect a bear trap there. Sneaking through the front door? There'll be cameras there soon. Trying to escape? The Neighbor will find a shortcut and catch you.",
	},
	{
		id: 26758,
		aggregated_rating: 96.7058823529412,
		cover: "co1mxf",

		first_release_date: 1509062400,
		genres: [
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Super Mario Odyssey",
		platforms: [
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 44370,
				image_id: "hj3spi7odlvp4pfvnwtv",
			},
			{
				id: 44371,
				image_id: "kcapvog4g7ko1n21x57t",
			},
			{
				id: 44372,
				image_id: "tcgnbkmz7f0tgglfol9m",
			},
			{
				id: 44373,
				image_id: "q1ydkthtdtozqzw1tr2m",
			},
			{
				id: 44374,
				image_id: "kmbewcsuuytnsxvemltw",
			},
			{
				id: 174797,
				image_id: "ovib1jmt2wcifb8vvrl9",
			},
			{
				id: 174798,
				image_id: "eggangsrrexlrxekqn2f",
			},
			{
				id: 174799,
				image_id: "equ6v5psjfdq2sepgw41",
			},
			{
				id: 174801,
				image_id: "xugrhmbobkhqi2pgs0xs",
			},
			{
				id: 174802,
				image_id: "tznt5qzxdqdzqxsy1crl",
			},
			{
				id: 174803,
				image_id: "qgcn3akcfv4rvojqdbvb",
			},
			{
				id: 1010715,
				image_id: "sclnvf",
			},
		],
		summary:
			"Explore incredible places far from the Mushroom Kingdom as you join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure. Use amazing new abilities, like the power to capture and control objects, animals, and enemies to collect Power Moons so you can power up the Odyssey airship and save Princess Peach from Bowser’s wedding plans!",
	},
	{
		id: 12517,
		aggregated_rating: 96.3846153846154,
		cover: "co2855",

		first_release_date: 1442275200,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 16,
				name: "Turn-based strategy (TBS)",
			},
			{
				id: 31,
				name: "Adventure",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "Undertale",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 46,
				name: "PlayStation Vita",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 20147,
				image_id: "tz5ypjqhppmtypognq7o",
			},
			{
				id: 20148,
				image_id: "ze8i79ycm3gyymrjvxf0",
			},
			{
				id: 20149,
				image_id: "dp7ytj3ouesyoq7ddrrx",
			},
			{
				id: 20150,
				image_id: "njxoybaxsgaxso8qadmo",
			},
			{
				id: 20151,
				image_id: "thidwzj4rqnuurycg3dy",
			},
			{
				id: 925093,
				image_id: "scjtt1",
			},
			{
				id: 925094,
				image_id: "scjtt2",
			},
			{
				id: 925095,
				image_id: "scjtt3",
			},
			{
				id: 925096,
				image_id: "scjtt4",
			},
			{
				id: 925097,
				image_id: "scjtt5",
			},
			{
				id: 925098,
				image_id: "scjtt6",
			},
			{
				id: 925099,
				image_id: "scjtt7",
			},
			{
				id: 925100,
				image_id: "scjtt8",
			},
			{
				id: 925101,
				image_id: "scjtt9",
			},
			{
				id: 925102,
				image_id: "scjtta",
			},
			{
				id: 925103,
				image_id: "scjttb",
			},
			{
				id: 925104,
				image_id: "scjttc",
			},
			{
				id: 925105,
				image_id: "scjttd",
			},
			{
				id: 925106,
				image_id: "scjtte",
			},
			{
				id: 925107,
				image_id: "scjttf",
			},
		],
		summary:
			"A small child falls into the Underground, where monsters have long been banished by humans and are hunting every human that they find. The player controls the child as they try to make it back to the Surface through hostile environments, all the while engaging with a turn-based combat system with puzzle-solving and bullet hell elements, as well as other unconventional game mechanics.",
	},
	{
		id: 18866,
		aggregated_rating: 67.1111111111111,
		cover: "co5zky",

		first_release_date: 1465862400,
		genres: [
			{
				id: 15,
				name: "Strategy",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "Dead by Daylight",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
			{
				id: 167,
				name: "PlayStation 5",
			},
			{
				id: 169,
				name: "Xbox Series X|S",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 320880,
				image_id: "sc6vlc",
			},
			{
				id: 320881,
				image_id: "sc6vld",
			},
			{
				id: 320882,
				image_id: "sc6vle",
			},
			{
				id: 320883,
				image_id: "sc6vlf",
			},
			{
				id: 320884,
				image_id: "sc6vlg",
			},
			{
				id: 320885,
				image_id: "sc6vlh",
			},
			{
				id: 320886,
				image_id: "sc6vli",
			},
		],
		summary:
			"Dead by Daylight is an asymmetrical multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
	},
	{
		id: 1262,
		aggregated_rating: 80.3571428571429,
		cover: "co1v8x",

		first_release_date: 1393804800,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 15,
				name: "Strategy",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "South Park: The Stick of Truth",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 1316,
				image_id: "bvpwrzlwglbajs3dxzpk",
			},
			{
				id: 1317,
				image_id: "ijrnmongvn7vplw10bik",
			},
			{
				id: 1318,
				image_id: "vevt14vztlsidoewcrip",
			},
			{
				id: 1319,
				image_id: "bjwrnizsisnykyj2unls",
			},
			{
				id: 1320,
				image_id: "oyb4wcxtuc5egvqyw7u9",
			},
		],
		summary:
			"From the perilous battlefields of the fourth-grade playground, a young hero will rise, destined to be South Park’s savior. From the creators of South Park, Trey Parker and Matt Stone, comes an epic quest to become… cool. Introducing South Park: The Stick of Truth.You begin as the new kid in town facing a harrowing challenge: making friends.\n\nAs you start your quest the children of South Park are embroiled in a city-wide, live-action-role-playing game, casting imaginary spells and swinging fake swords. Over time the simple children’s game escalates into a battle of good and evil that threatens to consume the world.Arm yourself with weapons of legend to defeat crab people, underpants gnomes, hippies and other forces of evil.\n\nDiscover the lost Stick of Truth and earn your place at the side of Stan, Kyle, Cartman and Kenny as their new friend. Succeed, and you shall be South Park’s savior, cementing your social status in South Park Elementary. Fail, and you will forever be known… as a loser.",
	},
	{
		id: 36926,
		aggregated_rating: 93.25,
		cover: "co1rst",

		first_release_date: 1516924800,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Monster Hunter: World",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 44383,
				image_id: "c9rskkieuhapebstfxys",
			},
			{
				id: 44384,
				image_id: "nqmwzj4azjunajjlniy8",
			},
			{
				id: 44385,
				image_id: "oydgjnzydmdfwd3vtmp9",
			},
			{
				id: 44386,
				image_id: "ojdwmo8mhipudkalaxlo",
			},
			{
				id: 44387,
				image_id: "ghcjheumz1norh0rwaxk",
			},
			{
				id: 256182,
				image_id: "xcx4gvuehj9qzklnuadu",
			},
			{
				id: 256183,
				image_id: "imxdu1yovg9qvv85hidw",
			},
			{
				id: 256184,
				image_id: "afmdmszdechkmzrhq7zm",
			},
			{
				id: 256185,
				image_id: "nlkhosogz2ymgk9nypyq",
			},
		],
		summary:
			"Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand. Hunt alone or in co-op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts!",
	},
	{
		id: 9061,
		aggregated_rating: 86.8823529411765,
		cover: "co62ao",

		first_release_date: 1506643200,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 32,
				name: "Indie",
			},
			{
				id: 33,
				name: "Arcade",
			},
		],
		name: "Cuphead",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 44258,
				image_id: "sqho6e7tv9verg6j1tvv",
			},
			{
				id: 44259,
				image_id: "r9zt66wdgqohmhuukiir",
			},
			{
				id: 44260,
				image_id: "ec5tsfhl7wjabwjnsshs",
			},
			{
				id: 44261,
				image_id: "eulkrcocd1zyuvvcv7k0",
			},
			{
				id: 44262,
				image_id: "sngyjwqwzzlciy0ko0sq",
			},
		],
		summary:
			"Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional cel animation (hand drawn & hand inked!), watercolor backgrounds, and original jazz recordings. Play as Cuphead or Mugman (in single player or co-op) as you traverse strange worlds, acquire new weapons, learn powerful super moves, and discover hidden secrets. Cuphead is all action, all the time.",
	},
	{
		id: 1985,
		aggregated_rating: 95.7368421052632,
		cover: "co1v85",

		first_release_date: 1441065600,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 24,
				name: "Tactical",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Metal Gear Solid V: The Phantom Pain",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 888627,
				image_id: "scj1o3",
			},
			{
				id: 888628,
				image_id: "scj1o4",
			},
			{
				id: 888629,
				image_id: "scj1o5",
			},
			{
				id: 888630,
				image_id: "scj1o6",
			},
			{
				id: 888631,
				image_id: "scj1o7",
			},
			{
				id: 888632,
				image_id: "scj1o8",
			},
			{
				id: 888633,
				image_id: "scj1o9",
			},
		],
		summary:
			"Metal Gear Solid V: The Phantom Pain is the final game in the Metal Gear series. It is the sequel to Metal Gear Solid V: Ground Zeroes released the year before and a prequel to the original Metal Gear. The game has a complex story with long cut-scene sequences, but there are fewer and they are shorter compared to earlier Metal Gear Solid titles. Most of the gameplay mechanics introduced in Ground Zeroes are carried over: it is still an action game and stealth oriented but replaces the linear corridor design from most earlier titles with large open world environments that offer the player unrestricted freedom for the approach. The world has now a real-time day and night cycle and various weather effects that influence enemy behaviour, visibility and sound. Sabotaging or destroying certain structures can also influence other parts of the map.",
	},
	{
		id: 4843,
		aggregated_rating: 73.7272727272727,
		cover: "co4aqi",

		first_release_date: 1518480000,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Kingdom Come: Deliverance",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 4226,
				image_id: "fzi1nrrphqfwwlwpko7u",
			},
			{
				id: 4227,
				image_id: "husdtaexowgllpe3ho5n",
			},
			{
				id: 4228,
				image_id: "rajzvbqovrcbdykkqpaz",
			},
			{
				id: 4229,
				image_id: "we7i6lksiieqlynlx1vf",
			},
			{
				id: 210957,
				image_id: "olbzvi6zau7seirs88e3",
			},
			{
				id: 210958,
				image_id: "d7xe9pzuqxeoqmrvt1me",
			},
			{
				id: 211554,
				image_id: "cnslqsgdvltzxl1f3bvz",
			},
			{
				id: 211555,
				image_id: "fxmxcj6jstrhop3gxjma",
			},
			{
				id: 211557,
				image_id: "cq2tqhx5vs7wcwsba8hu",
			},
			{
				id: 211558,
				image_id: "bxvwknezzljvoaw6inww",
			},
		],
		summary:
			"Story-driven open-world RPG that immerses you in an epic adventure in the Holy Roman Empire. Avenge your parents' death as you battle invading forces, go on game-changing quests, and make influential choices. Explore castles, forests, villages and other realistic settings in medieval Bohemia!",
	},
	{
		id: 1331,
		aggregated_rating: 84,
		cover: "co1qrs",

		first_release_date: 1279670400,
		genres: [
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 9,
				name: "Puzzle",
			},
			{
				id: 31,
				name: "Adventure",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "Limbo",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 34,
				name: "Android",
			},
			{
				id: 39,
				name: "iOS",
			},
			{
				id: 46,
				name: "PlayStation Vita",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 432791,
				image_id: "sc99xz",
			},
			{
				id: 432792,
				image_id: "sc99y0",
			},
			{
				id: 432793,
				image_id: "sc99y1",
			},
			{
				id: 432794,
				image_id: "sc99y2",
			},
			{
				id: 432795,
				image_id: "sc99y3",
			},
			{
				id: 432796,
				image_id: "sc99y4",
			},
			{
				id: 432797,
				image_id: "sc99y5",
			},
			{
				id: 432798,
				image_id: "sc99y6",
			},
			{
				id: 432799,
				image_id: "sc99y7",
			},
			{
				id: 432800,
				image_id: "sc99y8",
			},
		],
		summary: "Limbo is a black and white puzzle-platforming adventure. Play the role of a young boy traveling through an eerie and treacherous world in an attempt to discover the fate of his sister.",
	},
	{
		id: 19565,
		aggregated_rating: 89.6875,
		cover: "co1r77",

		first_release_date: 1536278400,
		genres: [
			{
				id: 25,
				name: "Hack and slash/Beat 'em up",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Marvel's Spider-Man",
		platforms: [
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 25151,
				image_id: "gc3cpzbpddhfxj4nvaq1",
			},
			{
				id: 25152,
				image_id: "inft7cmgvqcionq0jtrn",
			},
			{
				id: 44397,
				image_id: "o25kbk0jom2uvfm37l62",
			},
			{
				id: 44398,
				image_id: "fozp4i9v0b1w0uucoii8",
			},
			{
				id: 44399,
				image_id: "fmjzieghsgjfks7akhhy",
			},
			{
				id: 209487,
				image_id: "buzcfrd5g9umokl8eyy0",
			},
			{
				id: 209488,
				image_id: "pegynjc4fge2jzwkqoqi",
			},
			{
				id: 209489,
				image_id: "ytkccnptotyzm9xuorks",
			},
			{
				id: 214089,
				image_id: "bjoksdiwvkatzql3gi95",
			},
			{
				id: 214090,
				image_id: "nofld5l3txxuqhp7j8cc",
			},
			{
				id: 214091,
				image_id: "kzjckffwuqaemo5rx6uu",
			},
			{
				id: 244025,
				image_id: "vfmpwxgrk6lubydwm4it",
			},
		],
		summary:
			"Starring the world’s most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it’s Spider-Man unlike any you’ve played before.",
	},
	{
		id: 1384,
		aggregated_rating: 86.2,
		cover: "co1vqp",

		first_release_date: 1350950400,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 32,
				name: "Indie",
			},
			{
				id: 33,
				name: "Arcade",
			},
		],
		name: "Hotline Miami",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 34,
				name: "Android",
			},
			{
				id: 46,
				name: "PlayStation Vita",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 14086,
				image_id: "qv1iqu0f1g1wmygyvsga",
			},
			{
				id: 14087,
				image_id: "oxtvgvfdli3odbcs03d8",
			},
			{
				id: 14088,
				image_id: "igebxlcq4lz9pqpam3bo",
			},
			{
				id: 36079,
				image_id: "xnzetcofuyj7oo9dtsjd",
			},
			{
				id: 36080,
				image_id: "czluiyzytlkkchwn1mga",
			},
		],
		summary:
			"A top-down slasher/shooter with unlockable gameplay-altering masks and weapons, featuring a neon-flavoured electronic aesthetic, in which a hitman receives anonymous calls ordering him to travel to certain residences and crime dens and massacre those within, as he stumbles through unreal visions and inconsistencies without any answers to how, why or who.",
	},
	{
		id: 1887,
		aggregated_rating: 87.9375,
		cover: "co2mvy",

		first_release_date: 1416268800,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 24,
				name: "Tactical",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Dragon Age: Inquisition",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 414515,
				image_id: "sc8vub",
			},
			{
				id: 414516,
				image_id: "sc8vuc",
			},
			{
				id: 414517,
				image_id: "sc8vud",
			},
			{
				id: 414518,
				image_id: "sc8vue",
			},
			{
				id: 414519,
				image_id: "sc8vuf",
			},
			{
				id: 414520,
				image_id: "sc8vug",
			},
		],
		summary:
			"Dragon Age: Inquisition is a role-playing game and the third main game in the Dragon Age series. It is set in the Thedas continent, the same fantasy world as the two previous games. It consist of two large countries: Ferelden (from Dragon Age: Origins) and Orlais, as well as the land inbetween.\n\nTrue to the spirit of the series the character can be customized for appearance, sex, class and race. The available races are dwarf, elf, human, and Qunari and the classes are mage, rogue, and warrior with three specializations each. To grow the Inquisition experience needs to be earned by completing quests, which allows the player to further define allegiances and pursue romances.\n\nA custom party can be defined and each member benefits from experience as it opens up access to better weapons and more abilities. Power points open up new areas and Inquisition points define the influence over the region; each new level provides a perk that benefits the entire Inquisition.",
	},
	{
		id: 2031,
		aggregated_rating: 77.3125,
		cover: "co21c0",

		first_release_date: 1400544000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Wolfenstein: The New Order",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 4689,
				image_id: "dq87ooxc88vl6hy2k8td",
			},
			{
				id: 4690,
				image_id: "qc2ebgvjqzrrsc9ecspf",
			},
			{
				id: 4691,
				image_id: "kmta1sv8rmkdm0rm3if8",
			},
			{
				id: 4692,
				image_id: "adjwlekkxco6w0d5ywdb",
			},
			{
				id: 4693,
				image_id: "nqrqacvu7a2l0whogkr3",
			},
		],
		summary:
			"Wolfenstein: The New Order is an action-adventure shooter game played from a first-person perspective. It is the semi-sequel to 2009's Wolfenstein, however utilizes very little from the game and drops any direct references to veil or supernatural.\n\nTo progress through the story, the player battle enemies throughout levels. The game utilizes a health system in which players' health is divided into separate sections that regenerate; if an entire section is lost, the player must use a health pack to replenish the missing health. In combat, a cover system can be used as assistance against enemies. The player have the ability to lean around, over, and under cover, which can be used as a tactical advantage during shootouts and stealth levels. The game gives the player a wide variety of weapon options—they can be found on the ground, retrieved from dead enemies, or removed from their stationary position and carried around.",
	},
	{
		id: 11133,
		aggregated_rating: 86.0769230769231,
		cover: "co1vcf",

		first_release_date: 1458777600,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Dark Souls III",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 11453,
				image_id: "vdugyv42fp2jkh1w4lnz",
			},
			{
				id: 11454,
				image_id: "nwrsu8awczsx38hmnqx7",
			},
			{
				id: 11455,
				image_id: "dqyd3lhqnklcepe8dxw5",
			},
			{
				id: 11456,
				image_id: "acdyxftnekdkxob4leek",
			},
			{
				id: 11457,
				image_id: "wlefrkqqtxge3lo81cis",
			},
			{
				id: 963885,
				image_id: "scknql",
			},
		],
		summary: "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and embrace the darkness!",
	},
	{
		id: 1905,
		aggregated_rating: 82.6,
		cover: "co2ekt",

		first_release_date: 1500940800,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 15,
				name: "Strategy",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Fortnite",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 34,
				name: "Android",
			},
			{
				id: 39,
				name: "iOS",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
			{
				id: 167,
				name: "PlayStation 5",
			},
			{
				id: 169,
				name: "Xbox Series X|S",
			},
		],
		screenshots: [
			{
				id: 2187,
				image_id: "vqphwdpqcsk0yvo8sbhu",
			},
			{
				id: 2188,
				image_id: "xxta3pauqxscx89ou887",
			},
			{
				id: 2189,
				image_id: "fev4okgev4xmxdogdwdf",
			},
			{
				id: 2190,
				image_id: "yrhcvy88atrfuhfshj2b",
			},
			{
				id: 2191,
				image_id: "wklmdcc9vn93257yjg1c",
			},
		],
		summary:
			"Fortnite is the completely free online game where you and your friends fight to be the last one standing in Battle Royale, join forces to make your own Creative games, or catch a live show at Party Royale.",
	},
	{
		id: 43,
		aggregated_rating: 92.1111111111111,
		cover: "co1rd2",

		first_release_date: 1314057600,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
		],
		name: "Deus Ex: Human Revolution",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 1076,
				image_id: "mflw12xmyqdbipgkrf9l",
			},
			{
				id: 1077,
				image_id: "doylbeanofgprnvxduih",
			},
			{
				id: 1078,
				image_id: "g6oylozfnpyabrflolta",
			},
			{
				id: 1079,
				image_id: "qigvfnaabt9i05eekyvr",
			},
			{
				id: 1080,
				image_id: "hjychzk0rokufu8vwp8d",
			},
		],
		summary:
			"In Deus Ex: Human Revolution you play Adam Jensen, a security specialist, handpicked to oversee the defense of one of America's most experimental biotechnology firms. But when a black ops team breaks in and kills the scientists you were hired to protect, everything you thought you knew about your job changes. At a time when scientific advancements are routinely turning athletes, soldiers and spies into super-enhanced beings, someone is working very hard to ensure mankind's evolution follows a particular path. You need to discover why - because the decisions you take and the choices you make will be the only things that can determine mankind's future.",
	},
	{
		id: 14362,
		aggregated_rating: 77.6153846153846,
		cover: "co2md2",

		first_release_date: 1527206400,
		genres: [
			{
				id: 9,
				name: "Puzzle",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Detroit: Become Human",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 16200,
				image_id: "wzgo0jtaajeq14vl4l0q",
			},
			{
				id: 16201,
				image_id: "amlt3ob9o48fubgfrt9i",
			},
			{
				id: 16203,
				image_id: "iux3644a2bewicybhcjo",
			},
			{
				id: 44396,
				image_id: "dwkgylckse3aewbv3lpr",
			},
			{
				id: 192910,
				image_id: "v1loppxzf43qvp7wt8gz",
			},
			{
				id: 192911,
				image_id: "k59thzeaqb9ul1pryxbq",
			},
			{
				id: 192913,
				image_id: "tefcnnribjp79ncp3ag2",
			},
			{
				id: 192914,
				image_id: "fx3ckwdhebpjvxlhq4bx",
			},
			{
				id: 192915,
				image_id: "e032aajjtvoakohuuac5",
			},
			{
				id: 192916,
				image_id: "sn6g2xe3dd1ip6cuotci",
			},
			{
				id: 192917,
				image_id: "v33h6a2od5folrdrsljm",
			},
			{
				id: 211656,
				image_id: "flij8fnx5drfqcrhjcv7",
			},
		],
		summary:
			"Detroit: Become Human puts the destiny of both mankind and androids in your hands, taking you to a near future where machines have become more intelligent than humans. Every choice you make affects the outcome of the game, with one of the most intricately branching narratives ever created.",
	},
	{
		id: 6801,
		aggregated_rating: 86.4210526315789,
		cover: "co2npa",

		first_release_date: 1416268800,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 24,
				name: "Tactical",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Far Cry 4",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 5731,
				image_id: "rolghctvlbgis0iet6by",
			},
			{
				id: 5732,
				image_id: "m47pr24fdazdco3oajov",
			},
			{
				id: 5733,
				image_id: "mczvcq7qlfbvmqljgspe",
			},
			{
				id: 5734,
				image_id: "ivcnf7sy2ipudtpbqj9v",
			},
			{
				id: 5735,
				image_id: "fyf79knlrqa9cwru1ok3",
			},
		],
		summary:
			"In Far Cry 4, players find themselves in Kyrat, a wild region of the Himalayas struggling under the regime of a despotic self-appointed king. Using a vast array of weapons, vehicles and animals, players will write their own story across an exotic open-world landscape.",
	},
	{
		id: 1266,
		aggregated_rating: 81.1764705882353,
		cover: "co1xii",

		first_release_date: 1351555200,
		genres: [
			{
				id: 15,
				name: "Strategy",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Assassin's Creed III",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 41,
				name: "Wii U",
			},
		],
		screenshots: [
			{
				id: 1335,
				image_id: "fjsea0ufemtie04czf9m",
			},
			{
				id: 1336,
				image_id: "mazwxafpn4trr1egmj7j",
			},
			{
				id: 1337,
				image_id: "nyy6injtxg9grtmuoa1m",
			},
			{
				id: 1339,
				image_id: "ccfvfvn8w5ucmtaw9uu2",
			},
			{
				id: 5358,
				image_id: "lwbc2mifimzfmyxt6r56",
			},
			{
				id: 152242,
				image_id: "okyz7qmbwrbqr7s3yxsh",
			},
			{
				id: 152243,
				image_id: "ok2u0qqlarohz7rx8eo7",
			},
			{
				id: 152244,
				image_id: "aghxxmr2mpygyq5ftldb",
			},
			{
				id: 152245,
				image_id: "tjocflec2doowuhlgt3b",
			},
			{
				id: 152246,
				image_id: "jmyedumbxkdyfudgzaay",
			},
			{
				id: 152247,
				image_id: "mlynnq49vemvljigsx79",
			},
			{
				id: 152248,
				image_id: "umu9a0ptzj84rdzc5wa0",
			},
		],
		summary:
			"The American Colonies, 1775. A brave young warrior fights to save his homeland. But what begins as a struggle over territory turns into an extraordinary journey that will transform him into a Master Assassin—and will forever change the destiny of a nation.\n\nYou are Connor, warrior son of a Native American mother and British father. As the colonies draw closer to revolution, you will dedicate your life to the freedom of your clan –becoming the spark that ignites the revolution into full blaze. Your crusade will take you through blood-soaked battlefields to crowded city streets, to perilous wilderness and beyond. You will not only witness history—you will make it.\nWelcome to an entirely new chapter in the Assassin’s Creed saga.",
	},
	{
		id: 11208,
		aggregated_rating: 85.72,
		cover: "co5pcj",

		first_release_date: 1487808000,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 25,
				name: "Hack and slash/Beat 'em up",
			},
		],
		name: "NieR: Automata",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 16254,
				image_id: "gzkc9kfusk2qss9vnuj4",
			},
			{
				id: 37447,
				image_id: "m5ytymipeljiatfrblhs",
			},
			{
				id: 37448,
				image_id: "bgmyc8eupb0coy0giatf",
			},
			{
				id: 37449,
				image_id: "banme9peksg7gcxr26oa",
			},
			{
				id: 37450,
				image_id: "et43nztghwnyzqd0br9q",
			},
			{
				id: 425173,
				image_id: "sc942d",
			},
			{
				id: 425174,
				image_id: "sc942e",
			},
			{
				id: 425175,
				image_id: "sc942f",
			},
			{
				id: 425176,
				image_id: "sc942g",
			},
		],
		summary: "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
	},
	{
		id: 7342,
		aggregated_rating: 92.4871794871795,
		cover: "co2fca",

		first_release_date: 1467158400,
		genres: [
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 9,
				name: "Puzzle",
			},
			{
				id: 31,
				name: "Adventure",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "Inside",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 39,
				name: "iOS",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 5739,
				image_id: "z4fkserflyby1nv5ispe",
			},
			{
				id: 5740,
				image_id: "egrvtyqlcuc8phbwhay7",
			},
			{
				id: 5741,
				image_id: "zevsyjjfxmbljcmfhh8k",
			},
			{
				id: 25092,
				image_id: "ldbfqsvfeptbvguzaqdy",
			},
			{
				id: 25093,
				image_id: "kvxijejg9ueks3fowhv3",
			},
			{
				id: 189989,
				image_id: "r8hddnknfqul63fmquqh",
			},
			{
				id: 189992,
				image_id: "sz0lscqqkhsi7ceao6og",
			},
			{
				id: 189994,
				image_id: "ijf1mlv8dxfza2d2co1j",
			},
			{
				id: 189997,
				image_id: "juqasfaxktobte35l2hj",
			},
			{
				id: 189999,
				image_id: "d5989qwb1b9l3ag8n448",
			},
			{
				id: 190000,
				image_id: "guhljbryvlqg2kn25z7r",
			},
			{
				id: 190003,
				image_id: "wbmd7havifhasigwrfli",
			},
		],
		summary: "An atmospheric 2D side-scroller in which, hunted and alone, a boy finds himself drawn into the center of a dark project and struggles to preserve his identity.",
	},
	{
		id: 7344,
		aggregated_rating: 88.2857142857143,
		cover: "co1y41",

		first_release_date: 1426032000,
		genres: [
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 9,
				name: "Puzzle",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Ori and the Blind Forest",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 5745,
				image_id: "mflx0tyq2wusao1wq2ad",
			},
			{
				id: 5746,
				image_id: "v2pnld98yq2xvs788c4o",
			},
			{
				id: 5747,
				image_id: "qw0ciwlf01lqiutfg92c",
			},
			{
				id: 5748,
				image_id: "qg1jc1rqlwyp9bh4cyvz",
			},
			{
				id: 5749,
				image_id: "ritdwffctzicqdpz44lz",
			},
			{
				id: 267707,
				image_id: "sc5qkb",
			},
			{
				id: 267708,
				image_id: "sc5qkc",
			},
			{
				id: 267709,
				image_id: "sc5qkd",
			},
			{
				id: 267710,
				image_id: "sc5qke",
			},
			{
				id: 267711,
				image_id: "sc5qkf",
			},
			{
				id: 267712,
				image_id: "sc5qkg",
			},
			{
				id: 267713,
				image_id: "sc5qkh",
			},
		],
		summary:
			"The forest of Nibel is dying. After a powerful storm sets a series of devastating events in motion, an unlikely hero must journey to find his courage and confront a dark nemesis to save his home. Ori and the Blind Forest tells the tale of a young orphan destined for heroics, through a visually stunning action-platformer crafted by Moon Studios for Xbox One and PC. Featuring hand-painted artwork, meticulously animated character performance, and a fully orchestrated score, Ori and the Blind Forest explores a deeply emotional story about love and sacrifice, and the hope that exists in us all.",
	},
	{
		id: 3225,
		aggregated_rating: 73.8421052631579,
		cover: "co5j66",

		first_release_date: 1470700800,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 13,
				name: "Simulator",
			},
			{
				id: 31,
				name: "Adventure",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "No Man's Sky",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 163,
				name: "SteamVR",
			},
			{
				id: 165,
				name: "PlayStation VR",
			},
			{
				id: 167,
				name: "PlayStation 5",
			},
			{
				id: 169,
				name: "Xbox Series X|S",
			},
			{
				id: 385,
				name: "Oculus Rift",
			},
			{
				id: 390,
				name: "PlayStation VR2",
			},
		],
		screenshots: [
			{
				id: 16616,
				image_id: "slbfwlrvqjrgvrvfghrk",
			},
			{
				id: 16617,
				image_id: "xufkotfn5udk2aijb6f0",
			},
			{
				id: 16618,
				image_id: "kmyailnbyy0afbyqdfxn",
			},
			{
				id: 16619,
				image_id: "byull3k2xzfndgivkdlw",
			},
			{
				id: 16620,
				image_id: "o0pqdynpsv7vvziaxwzr",
			},
			{
				id: 208488,
				image_id: "hlv3vnzamh1l3pdc2omn",
			},
			{
				id: 208489,
				image_id: "wihfvjowvwt4lx0qw5eo",
			},
			{
				id: 208490,
				image_id: "s6p3zqbfof7kncyp7ocf",
			},
			{
				id: 208491,
				image_id: "bynzojxiouy00pqw1utm",
			},
			{
				id: 208492,
				image_id: "mdhzsdazyj8vyht9wnnj",
			},
		],
		summary:
			"Inspired by the adventure and imagination that we love from classic science-fiction, No Man's Sky presents you with a galaxy to explore, filled with unique planets and lifeforms, and constant danger and action.\n\nIn No Man's Sky, every star is the light of a distant sun, each orbited by planets filled with life, and you can go to any of them you choose. Fly smoothly from deep space to planetary surfaces, with no loading screens, and no limits. In this infinite procedurally generated universe, you'll discover places and creatures that no other players have seen before - and perhaps never will again.",
	},
	{
		id: 3035,
		aggregated_rating: 88.5,
		cover: "co1rc9",

		first_release_date: 1381968000,
		genres: [
			{
				id: 31,
				name: "Adventure",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "The Stanley Parable",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 101321,
				image_id: "nt09vloq2eeo3lh0jmmf",
			},
			{
				id: 101322,
				image_id: "actq9drc05o5wqomeokp",
			},
			{
				id: 101323,
				image_id: "cxjrbykakjtcfji15zby",
			},
			{
				id: 101324,
				image_id: "frdhnv0fqfi90xjahqwk",
			},
			{
				id: 101325,
				image_id: "sagszjvrwbjxvcczg6ic",
			},
		],
		summary:
			"The Stanley Parable is a first-person exploration game which ponders questions related to player agency, narrative pacing, escapism through gaming, objective-driven game design, authorial intent, and the conflict of interest between players and game creators.",
	},
	{
		id: 2993,
		aggregated_rating: 79.5227272727273,
		cover: "co1rcy",

		first_release_date: 1381449600,
		genres: [
			{
				id: 2,
				name: "Point-and-click",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "The Wolf Among Us",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 34,
				name: "Android",
			},
			{
				id: 39,
				name: "iOS",
			},
			{
				id: 46,
				name: "PlayStation Vita",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 3246,
				image_id: "mh2k4rrkrgtabcv9pqjn",
			},
			{
				id: 3258,
				image_id: "vjst5wbz5mo5trsjnqtx",
			},
			{
				id: 3259,
				image_id: "j5zhyfcszxmljqptfjnh",
			},
			{
				id: 3260,
				image_id: "dxeenymseuuo3t5csa6g",
			},
			{
				id: 3261,
				image_id: "yajqtyz4pgoyt8frutmo",
			},
			{
				id: 212557,
				image_id: "spek8ctgfneapp5ide90",
			},
			{
				id: 212558,
				image_id: "fcoax7d3izpjrssxxiic",
			},
			{
				id: 212559,
				image_id: "d5htuyopcah5gp3qytbt",
			},
			{
				id: 212560,
				image_id: "qgbhlqrukffrb3ebinhc",
			},
			{
				id: 212561,
				image_id: "tc4n9sspndrvjt8qdpgs",
			},
			{
				id: 212562,
				image_id: "gpao1mzffxp1o2cy7bqw",
			},
			{
				id: 212563,
				image_id: "c6dzp09wjsl10ytwjf48",
			},
		],
		summary:
			"The Wolf Among Us is a five episode series from the creators of the 2012 Game of the Year: The Walking Dead. Based on Fables (DC Comics/Vertigo), an award-winning comic book series, it is an often violent, mature and hard-boiled thriller where the characters and creatures of myth, lore and legend are real and exist in our world. As Bigby Wolf - The Big Bad Wolf in human form - you will discover that the brutal, bloody murder of a Fable is just a taste of things to come, in a game series where your every decision can have enormous consequences.",
	},
	{
		id: 19561,
		aggregated_rating: 74.6875,
		cover: "co1izz",

		first_release_date: 1556236800,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Days Gone",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 44402,
				image_id: "kjrtfpaex7mwrjazwv1m",
			},
			{
				id: 44403,
				image_id: "r5mn9rt7aqvf5nrn8dqq",
			},
			{
				id: 44404,
				image_id: "msmuubbmqkosdwinh54f",
			},
			{
				id: 44405,
				image_id: "ukzjmwiud0hdn8jk5fkb",
			},
			{
				id: 44406,
				image_id: "zpddyocposjq6qm3ntek",
			},
			{
				id: 212323,
				image_id: "netptvmanlolewudyw45",
			},
			{
				id: 212324,
				image_id: "eqd6kktmq9dva0cd5clc",
			},
			{
				id: 212326,
				image_id: "jwayyepmsjnqoscmodjv",
			},
			{
				id: 212327,
				image_id: "tesebvw0eadixciqfalo",
			},
			{
				id: 212328,
				image_id: "kd9mk48xev3eisdev4sz",
			},
			{
				id: 212329,
				image_id: "kxgcsxrg5yeumz50ozg5",
			},
			{
				id: 213661,
				image_id: "tbueqwnebwlbax8dxgyv",
			},
		],
		summary:
			"Days Gone is an open-world action-adventure game set in a harsh wilderness two years after a devastating global pandemic. Play as Deacon St. John, a Drifter and bounty hunter who rides the broken road, fighting to survive while searching for a reason to live.\n\nAt its core, Days Gone is about survivors and what makes them human: desperation, loss, madness, betrayal, friendship, brotherhood, regret, love – and hope. It’s about how even when confronted with such enormous tragedy they find a reason to live. Hope never dies.",
	},
	{
		id: 18320,
		aggregated_rating: 89.0952380952381,
		cover: "co2n9d",

		first_release_date: 1477008000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
		],
		name: "Battlefield 1",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 23501,
				image_id: "ez6qfdwknjwshjkf5cvo",
			},
			{
				id: 25044,
				image_id: "jm9kereghangms42rrp3",
			},
			{
				id: 25045,
				image_id: "fsgtjoqvpwpcb7kbdayb",
			},
			{
				id: 25046,
				image_id: "qtw7wt4lzftyuadu7h8j",
			},
			{
				id: 25047,
				image_id: "njrtwbrbluzscozfzsac",
			},
			{
				id: 257448,
				image_id: "sc5inc",
			},
			{
				id: 257449,
				image_id: "sc5ind",
			},
			{
				id: 257450,
				image_id: "sc5ine",
			},
			{
				id: 257451,
				image_id: "sc5inf",
			},
			{
				id: 257452,
				image_id: "sc5ing",
			},
			{
				id: 257453,
				image_id: "sc5inh",
			},
		],
		summary:
			"Discover classic Battlefield gameplay with epic multiplayer and an adventure-filled campaign. Experience the dawn of all-out war, only in Battlefield 1. Fight your way through epic battles going from tight urban combat in a besieged French city to big open spaces in the Italian Alps or frantic combats in the Arabic sand dunes. Experience large-scale battles as infantry or piloting vehicles on land, air and sea, from the tanks and bikes on the ground, to bi-planes and gigantic battleships.",
	},
	{
		id: 1352,
		aggregated_rating: 93.8571428571429,
		cover: "co1q8q",

		first_release_date: 1331596800,
		genres: [
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Journey",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 39,
				name: "iOS",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 1974,
				image_id: "cjt1dvmwyz5qr0xmrkrs",
			},
			{
				id: 1975,
				image_id: "ndmhmgw0qfxrc4ajvbpk",
			},
			{
				id: 1976,
				image_id: "xyqfksubtonzdgzcs8fl",
			},
			{
				id: 1977,
				image_id: "ltdjvz1bhad8tdi07nj9",
			},
			{
				id: 1978,
				image_id: "o5jocbesmzd3ytiyea1q",
			},
			{
				id: 404213,
				image_id: "sc8nw5",
			},
			{
				id: 404214,
				image_id: "sc8nw6",
			},
			{
				id: 404215,
				image_id: "sc8nw7",
			},
			{
				id: 404216,
				image_id: "sc8nw8",
			},
			{
				id: 404217,
				image_id: "sc8nw9",
			},
		],
		summary:
			"A third-person adventure game in which the player, controlling a robed figure, makes a pilgrimage through a desert landscape to a rugged mountain with a beacon of light in the distance while uncovering the history of their people, rescuing and cooperating with friendly creatures, avoiding predatory ones and communicating with other travelers.",
	},
	{
		id: 537,
		aggregated_rating: 81.7142857142857,
		cover: "co1xih",

		first_release_date: 1321228800,
		genres: [
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Assassin's Creed Revelations",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 8219,
				image_id: "y6o09sjwlpotulpkyi8v",
			},
			{
				id: 8220,
				image_id: "taqubzfll3c84co1v0a5",
			},
			{
				id: 8221,
				image_id: "djemthnshqygffcpas1w",
			},
			{
				id: 8222,
				image_id: "g6l3sr93xngc4b7wddvt",
			},
			{
				id: 8223,
				image_id: "jhbcpqlsowkfwwsyimnm",
			},
		],
		summary:
			"Assassin's Creed Revelations presents the most immersive experience available in the series to date and the culmination of Ezio's adventure. In Assassin's Creed Revelations, master assassin Ezio Auditore walks in the footsteps of his legendary mentor, Altair, on a journey of discovery and revelation. It is a perilous path - one that will take Ezio to Constantinople, the heart of the Ottoman Empire, where a growing army of Templars threatens to destabilize the region.\n\nIn addition to Ezio's award-winning story, the acclaimed online multiplayer experience from Assassin's Creed Brotherhood returns; refined and expanded, with more modes, more maps and more characters that allow players to test their assassin skills against others from around the world. The latest chapter in the Assassin's Creed saga also includes revolutionary gameplay, allowing players to manipulate the construct of Desmond's memories and the Animus to decipher the mysteries of his past and gain insight into the future.",
	},
	{
		id: 11198,
		aggregated_rating: 88.7058823529412,
		cover: "co5w0w",

		first_release_date: 1436140800,
		genres: [
			{
				id: 10,
				name: "Racing",
			},
			{
				id: 14,
				name: "Sport",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "Rocket League",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
			{
				id: 167,
				name: "PlayStation 5",
			},
			{
				id: 169,
				name: "Xbox Series X|S",
			},
		],
		screenshots: [
			{
				id: 99705,
				image_id: "x2ebxdsn5kfjcnjbo7q2",
			},
			{
				id: 99706,
				image_id: "ipnuinh71ny8bcblibgq",
			},
			{
				id: 99707,
				image_id: "zbk8r9mm9bb56duk5tjp",
			},
			{
				id: 99708,
				image_id: "w23nbjchdt6ulfxws9nt",
			},
			{
				id: 99709,
				image_id: "ygepetru87ka9nzqowr6",
			},
			{
				id: 171294,
				image_id: "kky41w6g87pnw8omnoff",
			},
			{
				id: 171295,
				image_id: "czksik7zl3tzb72jafhw",
			},
			{
				id: 171296,
				image_id: "k1hcu9flbu0tvheine15",
			},
			{
				id: 171297,
				image_id: "k8pr0aobdo3mquapdirk",
			},
			{
				id: 171298,
				image_id: "zrosrzhc8qxivegbqyl6",
			},
			{
				id: 171299,
				image_id: "obxqkxqtfhpvgd4wkb24",
			},
			{
				id: 171300,
				image_id: "qehejfbfvynrmjvnmxua",
			},
		],
		summary:
			"Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Rocket League includes casual and competitive Online Matches, a fully-featured offline Season Mode, special “Mutators” that let you change the rules entirely, hockey and basketball-inspired Extra Modes, and more than 500 trillion possible cosmetic customization combinations.",
	},
	{
		id: 119313,
		aggregated_rating: 76.6,
		cover: "co4vs3",

		first_release_date: 1596499200,
		genres: [
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 14,
				name: "Sport",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "Fall Guys",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
			{
				id: 167,
				name: "PlayStation 5",
			},
			{
				id: 169,
				name: "Xbox Series X|S",
			},
		],
		screenshots: [
			{
				id: 395312,
				image_id: "sc8h0w",
			},
			{
				id: 395313,
				image_id: "sc8h0x",
			},
			{
				id: 395314,
				image_id: "sc8h0y",
			},
			{
				id: 395315,
				image_id: "sc8h0z",
			},
			{
				id: 797035,
				image_id: "sch2zv",
			},
			{
				id: 797036,
				image_id: "sch2zw",
			},
			{
				id: 797037,
				image_id: "sch2zx",
			},
		],
		summary:
			"Fall Guys flings hordes of contestants together online in a mad dash through round after round of escalating chaos until one victor remains! Battle bizarre obstacles, shove through unruly competitors, and overcome the unbending laws of physics to avoid both humiliation and elimination. Leave your dignity at the door and prepare for hilarious failure in your quest for the crown.",
	},
	{
		id: 40,
		aggregated_rating: 72.625,
		cover: "co2n13",

		first_release_date: 1282608000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 10,
				name: "Racing",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Mafia II",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 591,
				image_id: "xtmuuthx1emzj6qqscal",
			},
			{
				id: 592,
				image_id: "oyix5eyd58n8t1l7wwvu",
			},
			{
				id: 593,
				image_id: "lfjb1pgi8sbm2aa8puzo",
			},
			{
				id: 594,
				image_id: "ifqtss7nitwqb5cunkqi",
			},
			{
				id: 595,
				image_id: "xzakn2ei4k9laq7ya3qj",
			},
		],
		summary:
			'The storyline for Mafia II is a gritty drama and chronicles the rise of Vito Scaletta, the son of Sicilian immigrants. As the game progresses, Vito joins the Falcone crime family and becomes "a made man" along with his best friend Joe Barbaro.',
	},
	{
		id: 19562,
		aggregated_rating: 88.4615384615385,
		cover: "co545w",

		first_release_date: 1485216000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Resident Evil 7: Biohazard",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 165,
				name: "PlayStation VR",
			},
			{
				id: 167,
				name: "PlayStation 5",
			},
			{
				id: 169,
				name: "Xbox Series X|S",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 25115,
				image_id: "io6hffcfxfgtibwwn9jl",
			},
			{
				id: 25116,
				image_id: "ctxtlpyzlo3q5hvshysw",
			},
			{
				id: 36228,
				image_id: "wyn4sipweizrkjvshid9",
			},
			{
				id: 36229,
				image_id: "tc63ssff6rzvaiq1xjuw",
			},
			{
				id: 36230,
				image_id: "r03xsdmmrxyddimojni1",
			},
		],
		summary:
			"Resident Evil 7: Biohazard is the first game of the Resident Evil series to switch from 3rd-person to fully 1st-person perspective. A complete refresh of gameplay systems simultaneously propels the survival horror experience to another level. It is as much horror as it is survival, boosting up scare elements and minimizing downright shooting action. The game allows use of Sony's PSVR Headset to play in VR mode.",
	},
	{
		id: 109,
		aggregated_rating: 89.375,
		cover: "co2ldn",

		first_release_date: 1305590400,
		genres: [
			{
				id: 15,
				name: "Strategy",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "L.A. Noire",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 6612,
				image_id: "jmjhqyypk9xm3oeklqg0",
			},
			{
				id: 6613,
				image_id: "qgucar0njcwq9ty36pzb",
			},
			{
				id: 6614,
				image_id: "oit37pncl124uzspaxlu",
			},
			{
				id: 6615,
				image_id: "mpq9gqlzwcao6lyfuozm",
			},
			{
				id: 6616,
				image_id: "njbpnivas2duz9hxk54v",
			},
		],
		summary:
			"L.A. Noire is a neo-noir detective action-adventure video game developed by Team Bondi and published by Rockstar Games. It was initially released for the PlayStation 3 and Xbox 360 platforms on 17 May 2011; a Microsoft Windows port was later released on 8 November 2011.\n\nL.A. Noire is set in Los Angeles in 1947 and challenges the player, controlling a Los Angeles Police Department (LAPD) officer, to solve a range of cases across five divisions. Players must investigate crime scenes for clues, follow up leads, and interrogate suspects, and the player's success at these activities will impact how much of each case's story is revealed.\n\nThe game draws heavily from both the plot and aesthetic elements of film noir—stylistic films made popular in the 1940s and 1950s that share similar visual styles and themes, including crime and moral ambiguity—along with drawing inspiration from real-life crimes for its in-game cases, based upon what was reported by the Los Angeles media in 1947.\n\nThe game uses a distinctive colour palette, but in homage to film noir it includes the option to play the game in black and white. Various plot elements reference the major themes of detective and mobster stories such as The Naked City, Chinatown, The Untouchables, The Black Dahlia, and L.A. Confidential.",
	},
	{
		id: 9730,
		aggregated_rating: 79.2777777777778,
		cover: "co1m35",

		first_release_date: 1454976000,
		genres: [
			{
				id: 31,
				name: "Adventure",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "Firewatch",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 9381,
				image_id: "bwpqwqxuiwc164v2kt73",
			},
			{
				id: 9382,
				image_id: "qlapgaeuto9xntsonbz3",
			},
			{
				id: 9383,
				image_id: "zmzwkye0dfbfzl4h6cz8",
			},
			{
				id: 9384,
				image_id: "lv39uamjbc0zb0vtu8bl",
			},
			{
				id: 9385,
				image_id: "opimnxkcrlmycittkjwy",
			},
			{
				id: 212564,
				image_id: "xtaqzyjki3cht8pk78jp",
			},
			{
				id: 212565,
				image_id: "txrgvyal0avsv8pq9kf4",
			},
			{
				id: 212566,
				image_id: "yhwlu7mkfnaeyu34y56c",
			},
			{
				id: 212567,
				image_id: "svdcnhawrdapmikkav3i",
			},
			{
				id: 212568,
				image_id: "psqoae3njgkmcn2vswhg",
			},
			{
				id: 212569,
				image_id: "dplkqbxlzu087ywsajxj",
			},
		],
		summary:
			"Firewatch is a single-player first-person video game where you, as a man named Henry, explore the Wyoming wilderness after taking a summer job as a fire lookout. What is supposed to be a peaceful respite from your complicated life takes a turn when you start to question some of the things that are happening to you.\n\nYour only human connection is over a handheld radio, which you’ll use to speak with your supervisor Delilah about the things both of you are experiencing.",
	},
	{
		id: 343,
		aggregated_rating: 85,
		cover: "co1xbu",

		first_release_date: 1319500800,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
		],
		name: "Battlefield 3",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 5760,
				image_id: "wfj4uguuur5idlyw6o1r",
			},
			{
				id: 5761,
				image_id: "hlu3aizx7iybhlbdgwwb",
			},
			{
				id: 5762,
				image_id: "vp5xovezrke5ndk5c1tq",
			},
			{
				id: 5763,
				image_id: "dmaijjdq8os2g50klrq8",
			},
			{
				id: 6441,
				image_id: "fog4gznwpq1ea1qbe0ni",
			},
		],
		summary:
			"In Battlefield 3, players step into the role of the elite U.S. Marines. As the first boots on the ground, players will experience heart-pounding missions across diverse locations including Paris, Tehran and New York. As a U.S. Marine in the field, periods of tension and anticipation are punctuated by moments of complete chaos. As bullets whiz by, as walls crumble, as explosions force players to the ground, the battlefield feels more alive and interactive than ever before.",
	},
	{
		id: 21,
		aggregated_rating: 87,
		cover: "co2mlj",

		first_release_date: 1265673600,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "BioShock 2",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 865030,
				image_id: "scijgm",
			},
			{
				id: 865031,
				image_id: "scijgn",
			},
			{
				id: 865032,
				image_id: "scijgo",
			},
			{
				id: 865033,
				image_id: "scijgp",
			},
			{
				id: 865034,
				image_id: "scijgq",
			},
		],
		summary:
			"BioShock 2 is the second game of the BioShock series and the sequel to BioShock. It continues the grand storyline of the underwater metropolis Rapture. BioShock 2 capitalizes and improves upon the high-quality effects, unique gameplay elements, and immersive atmosphere that defined the first game. It explores more brutal gameplay than its predecessor, with new enemies, weapons, Plasmids, and Gene Tonics.",
	},
	{
		id: 36950,
		aggregated_rating: 60.1333333333333,
		cover: "co2n94",

		first_release_date: 1550793600,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Anthem",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 44213,
				image_id: "bwjri6c8g1n94haoztgm",
			},
			{
				id: 44214,
				image_id: "nknebu6mov0enphbwxib",
			},
			{
				id: 44215,
				image_id: "opsyuak5nsg11p9wvqcj",
			},
			{
				id: 44216,
				image_id: "ta5m1c6vp6226kdblwge",
			},
			{
				id: 44217,
				image_id: "uols5jinxtna1w9dgxdw",
			},
			{
				id: 213489,
				image_id: "f1pvnnlhyqvbtstk3zbj",
			},
			{
				id: 213490,
				image_id: "tp3tsdlzfkdp1hhofmb1",
			},
		],
		summary:
			"Anthem is a shared-world action RPG, where players can delve into a vast landscape teeming with amazing technology and forgotten treasures. This is a world where Freelancers are called upon to defeat savage beasts, ruthless marauders, and forces plotting to conquer humanity.",
	},
	{
		id: 27421,
		aggregated_rating: 83.8947368421053,
		cover: "co20pq",

		first_release_date: 1507593600,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Middle-earth: Shadow of War",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 37186,
				image_id: "lcak6gdsite8tqdhtawh",
			},
			{
				id: 37268,
				image_id: "bgrkid38ifj8szgdx9y8",
			},
			{
				id: 43022,
				image_id: "d5olq3gfovwdm8kifmav",
			},
			{
				id: 43023,
				image_id: "qrkvefuadtvpg5hbop5y",
			},
			{
				id: 43024,
				image_id: "qfxnxpyj7dnjfxcfbhvg",
			},
			{
				id: 211038,
				image_id: "fledxgtnwiyqramipjq6",
			},
			{
				id: 211039,
				image_id: "ijgi6z59kd9vxtb1djrt",
			},
			{
				id: 211040,
				image_id: "b2b97ug48cknkvdlt96w",
			},
			{
				id: 211041,
				image_id: "bzhreqzciyaheoourok7",
			},
			{
				id: 211042,
				image_id: "fr8s79zejqtqp4sfjblt",
			},
			{
				id: 211043,
				image_id: "jap8yvyzwjx6wez2m8cm",
			},
		],
		summary:
			"Go behind enemy lines to forge your army, conquer Fortresses and dominate Mordor from within. Experience how the award winning Nemesis System creates unique personal stories with every enemy and follower, and confront the full power of the Dark Lord Sauron and his Ringwraiths in this epic new story of Middle-earth.",
	},
	{
		id: 1121,
		aggregated_rating: 81.0952380952381,
		cover: "co2p5w",

		first_release_date: 1401062400,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Watch Dogs",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 41,
				name: "Wii U",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 4661,
				image_id: "jnevcwcfjeywmapglhec",
			},
			{
				id: 4662,
				image_id: "wqdyx9rx6mmhbrc9fzel",
			},
			{
				id: 4663,
				image_id: "otyao34szry2icwarsns",
			},
			{
				id: 4664,
				image_id: "lxmysvnpxlmiht3iq7ju",
			},
			{
				id: 4665,
				image_id: "jzehv6mqtb3glfbf3h6z",
			},
			{
				id: 178157,
				image_id: "wmjxtazw5pecs3avany4",
			},
			{
				id: 178170,
				image_id: "mqurt7yl18tx8qvzdaf5",
			},
			{
				id: 178171,
				image_id: "tbiqs7mtxxmkhnheghnp",
			},
			{
				id: 178172,
				image_id: "arinjhfinn6fui0i4f1c",
			},
			{
				id: 178173,
				image_id: "urjndvgzfaqhokcc2jeu",
			},
			{
				id: 178176,
				image_id: "acqyygtqibebss7l4ndk",
			},
			{
				id: 178177,
				image_id: "leriwrjsd2l9wihapzgs",
			},
		],
		summary:
			"Set in Chicago, where a central network of computers connects everyone and everything, Watch Dogs explores the impact of technology within our society. Using the city as your weapon, you will embark on a personal mission to inflict your own brand of justice. Chicago's overarching network is known as the Central Operating System (ctOS), and it controls almost all of the city's technology and information - including key data on all of the city's residents.",
	},
	{
		id: 1062,
		aggregated_rating: 83,
		cover: "co2dft",

		first_release_date: 1273795200,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Alan Wake",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 1220,
				image_id: "mxscclds496mp4wqrhje",
			},
			{
				id: 1221,
				image_id: "yvbeukf7akfc2fkkzpmc",
			},
			{
				id: 1222,
				image_id: "u9z3xj0m1nragrlxnene",
			},
			{
				id: 1223,
				image_id: "vibjzy3bhdkevvz31cte",
			},
			{
				id: 1224,
				image_id: "o3bjopus7brxrqxqal3m",
			},
		],
		summary:
			"Presented in the style of a TV series, Alan Wake features the trademark Remedy storytelling and pulse-pounding action sequences. As players dive deeper and deeper into the mystery, they’ll face overwhelming odds, plot twists, and cliffhangers. It’s only by mastering the Fight With Light combat mechanic that they can stay one step ahead of the darkness that spreads across Bright Falls.\n\nWith the body of an action game and the mind of a psychological thriller, Alan Wake’s intense atmosphere, deep and multi-layered story, and exceptionally tense combat sequences provide players with an entertaining and original gaming experience.",
	},
	{
		id: 960,
		aggregated_rating: 89.3333333333333,
		cover: "co2mjo",

		first_release_date: 1337040000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
		],
		name: "Max Payne 3",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 241,
				image_id: "xaceurmpwijin0x7lszr",
			},
			{
				id: 242,
				image_id: "k5vsslwfcuevslbgnsup",
			},
			{
				id: 243,
				image_id: "fdilaf7wbwtbcppckzvc",
			},
			{
				id: 244,
				image_id: "exxw2bqmljwe47hwwu5p",
			},
			{
				id: 245,
				image_id: "hm5tkccid4wxgznrtsiz",
			},
		],
		summary:
			"Max Payne 3 is a third-person shooter in which the player assumes the role of its titular character, Max Payne. A new feature to the series, introduced in Max Payne 3, is the cover system, which allows players to gain a tactical advantage, and avoid taking damage from enemies. To progress through the linear story, players take on enemies throughout levels. The game features interactive cutscenes which transition seamlessly into continuing gameplay; there are no loading screens across gameplay and cutscenes.",
	},
	{
		id: 885,
		aggregated_rating: 85.25,
		cover: "co276m",

		first_release_date: 1287532800,
		genres: [
			{
				id: 8,
				name: "Platform",
			},
			{
				id: 31,
				name: "Adventure",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "Super Meat Boy",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 41,
				name: "Wii U",
			},
			{
				id: 46,
				name: "PlayStation Vita",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 3704,
				image_id: "agatqhsdwnr1oz5ghqdt",
			},
			{
				id: 3705,
				image_id: "c8g7g29d2n7iwf0mecwl",
			},
			{
				id: 3706,
				image_id: "hs0vtcqw6h2owf3m3in0",
			},
			{
				id: 39188,
				image_id: "awbgkxutchrptvs2d4ee",
			},
			{
				id: 39189,
				image_id: "bt4z8ujs6cccabs7sjyf",
			},
			{
				id: 174848,
				image_id: "uoahcu0eld7f7sbrtkvq",
			},
			{
				id: 174849,
				image_id: "loymuopes4xhofv5kstm",
			},
			{
				id: 174850,
				image_id: "ecjz4bjuamok2dogyugi",
			},
			{
				id: 174851,
				image_id: "cnlkisya5linmwub7zyq",
			},
			{
				id: 174852,
				image_id: "u9vr8zjntbmfbyhuu5kc",
			},
			{
				id: 174853,
				image_id: "ptlmm0yrdczb6esjnvno",
			},
			{
				id: 174854,
				image_id: "tqgcze2uofopxhenlhas",
			},
		],
		summary:
			"Super Meat Boy is a tough as nails platformer where you play as an animated cube of meat who's trying to save his girlfriend (who happens to be made of bandages) from an evil fetus in a jar wearing a tux.",
	},
	{
		id: 493,
		aggregated_rating: 80.25,
		cover: "co3rhy",

		first_release_date: 1266451200,
		genres: [
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Heavy Rain",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 18591,
				image_id: "n79lclnyzkyg82iaotnp",
			},
			{
				id: 18592,
				image_id: "io5akxvdn7aosqdt82gs",
			},
			{
				id: 18593,
				image_id: "w7s3b3ylqststasevlpj",
			},
			{
				id: 18594,
				image_id: "k2zmtm03stdzyw9pqivu",
			},
			{
				id: 18595,
				image_id: "rvpqkdb8dp4bwrtq0ixl",
			},
		],
		summary:
			"Heavy Rain is a cinematic psychological thriller from game developer Quantic Dream exclusively for the PlayStation 3. Dealing with a range of adult themes, the game revolves around a sophisticated plot and strong narrative threads that explore a complex moral proposition. You assume the role of multiple characters with very different backgrounds, motivations, and skills in a world where each player decision affects what will follow.",
	},
	{
		id: 359,
		aggregated_rating: 81.44,
		cover: "co1tr2",

		first_release_date: 1480377600,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Final Fantasy XV",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 115692,
				image_id: "oxj8f3hdmwehkcruvwnv",
			},
			{
				id: 115693,
				image_id: "hxohr2c4he1ihtjlkmgf",
			},
			{
				id: 115694,
				image_id: "nuhxdqmns2qk17m80lsn",
			},
			{
				id: 115695,
				image_id: "tc0h3axfmy0gzorvuwgq",
			},
			{
				id: 115696,
				image_id: "syj5nxjqoqthtwzxx31z",
			},
			{
				id: 211012,
				image_id: "gggzxnyenxpmzeip2ck1",
			},
			{
				id: 211013,
				image_id: "uzwreby9o7duzzrkwrus",
			},
			{
				id: 211014,
				image_id: "fovl9fyq79camin87ljy",
			},
			{
				id: 211015,
				image_id: "rbabhd4gqbibzg4cho6w",
			},
			{
				id: 211016,
				image_id: "dwnzpnqwqqvkkz3wvlde",
			},
			{
				id: 211017,
				image_id: "t7gmtxixzahltbciikkb",
			},
		],
		summary:
			"Take the journey, now in ultimate quality. Boasting a wealth of bonus content and supporting ultra high-resolution graphical options and HDR 10, you can now enjoy the beautiful and carefully-crafted experience of FINAL FANTASY XV like never before.",
	},
	{
		id: 19564,
		aggregated_rating: 84.4117647058823,
		cover: "co5vq8",

		first_release_date: 1573171200,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Death Stranding",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
		],
		screenshots: [
			{
				id: 213953,
				image_id: "ot22cc6wsmhbrcnuo8ti",
			},
			{
				id: 213954,
				image_id: "u8ylruedniehtc18wzin",
			},
			{
				id: 307162,
				image_id: "sc6l0a",
			},
			{
				id: 307163,
				image_id: "sc6l0b",
			},
			{
				id: 307164,
				image_id: "sc6l0c",
			},
			{
				id: 307165,
				image_id: "sc6l0d",
			},
			{
				id: 307166,
				image_id: "sc6l0e",
			},
			{
				id: 307167,
				image_id: "sc6l0f",
			},
			{
				id: 307168,
				image_id: "sc6l0g",
			},
			{
				id: 307169,
				image_id: "sc6l0h",
			},
			{
				id: 307170,
				image_id: "sc6l0i",
			},
			{
				id: 307171,
				image_id: "sc6l0j",
			},
		],
		summary:
			"From legendary game creator Hideo Kojima comes an all-new, genre-defying open world action adventure, starring Norman Reedus, Mads Mikkelsen, Léa Seydoux and Lindsay Wagner.\n\nIn the near future, mysterious explosions have rocked the globe, setting off a series of supernatural events known as the Death Stranding. With otherworldly creatures plaguing the landscape, and mass extinction imminent, it’s up to Sam Porter Bridges to travel across the ravaged wasteland and save humanity from impending annihilation.",
	},
	{
		id: 11118,
		aggregated_rating: 85.85,
		cover: "co5pd0",

		first_release_date: 1478822400,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Dishonored 2",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 25059,
				image_id: "rgh8d9ockrwnduixjc5d",
			},
			{
				id: 25060,
				image_id: "axfa10t9md3bcqvdyxlk",
			},
			{
				id: 31317,
				image_id: "zuia09etftbctjuxlkm2",
			},
			{
				id: 31318,
				image_id: "xrfbfmwnkacej9twdyuv",
			},
			{
				id: 31319,
				image_id: "gwzz1tjttrjdgoqokvdo",
			},
			{
				id: 431552,
				image_id: "sc98zk",
			},
			{
				id: 431553,
				image_id: "sc98zl",
			},
		],
		summary:
			"Dishonored 2 is a first-person action video game and the sequel to Dishonored. It borrows many of the gameplay elements from the first opus: players define their own play style by blending action, assassination, stealth, mobility and combat. Combining tools at their disposal, players are allowed options to eliminate enemies, whether they choose to pursue them unseen or ruthlessly attack head on. Dishonored 2 features the same campaign style as its predecessor in which the protagonist must advance through a series of missions.",
	},
	{
		id: 7205,
		aggregated_rating: 84.7222222222222,
		cover: "co2656",

		first_release_date: 1456358400,
		genres: [
			{
				id: 4,
				name: "Fighting",
			},
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 9,
				name: "Puzzle",
			},
			{
				id: 24,
				name: "Tactical",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "SuperHot",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
			{
				id: 170,
				name: "Google Stadia",
			},
		],
		screenshots: [
			{
				id: 92453,
				image_id: "r96zj9bkejpttcuoo9pf",
			},
			{
				id: 92454,
				image_id: "x5rhyqreyktajtvzg91t",
			},
			{
				id: 92455,
				image_id: "zq4kpmk7tww73otsien2",
			},
			{
				id: 92456,
				image_id: "v15eycc2dqklnrj6643g",
			},
			{
				id: 92457,
				image_id: "qd48nns0djp93hygx1mv",
			},
		],
		summary:
			"SuperHot is the first person shooter where time moves only when you move. No regenerating health bars. No conveniently placed ammo drops. It's just you, outnumbered and outgunned, grabbing weapons off fallen enemies to shoot, slice, and maneuver through a hurricane of slow-motion bullets.\n\nWith its mesmerising gameplay and unique, stylized graphics SUPERHOT aims to finally add something new and disruptive to the FPS genre.\n\nSee the bullets crawling towards you as you carefully plan your steps and aim your gun. Enjoy the mayhem that is unleashed as you put that plan into motion.",
	},
	{
		id: 19531,
		aggregated_rating: 75.8125,
		cover: "pzgwdpvoww1nrlkv7d5x",

		first_release_date: 1493856000,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Prey",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 41549,
				image_id: "kdn9mk9gsdtgzmaqqvhp",
			},
			{
				id: 41550,
				image_id: "bfmh4zvh9ko9kbbfhjlr",
			},
			{
				id: 41551,
				image_id: "uivch74unugylmh3joqa",
			},
			{
				id: 41552,
				image_id: "a4bshpcah62lbxzxeyui",
			},
			{
				id: 41553,
				image_id: "mras4gtszut3dhwyq2n0",
			},
		],
		summary:
			"In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted. As you dig into the dark secrets of Talos I and your own past, you must survive using the tools found on the station, your wits, weapons, and mind-bending abilities.",
	},
	{
		id: 239,
		aggregated_rating: 89.4,
		cover: "co1tnn",

		first_release_date: 1280188800,
		genres: [
			{
				id: 11,
				name: "Real Time Strategy (RTS)",
			},
			{
				id: 15,
				name: "Strategy",
			},
		],
		name: "StarCraft II: Wings of Liberty",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
		],
		screenshots: [
			{
				id: 596,
				image_id: "adhx1okhll6bs7p5aprr",
			},
			{
				id: 597,
				image_id: "ol7tyhzuaqy0xdeedimc",
			},
			{
				id: 598,
				image_id: "aj9xp0caenpve0v4qav8",
			},
			{
				id: 599,
				image_id: "kysejwx3rgus2w79e6es",
			},
			{
				id: 600,
				image_id: "jidojbvgp9s5d6awun5n",
			},
		],
		summary:
			"In the distant future, in the darkest reaches of space, the ghosts of the past whisper your name. You are Jim Raynor, a marshal-turned-rebel on a vigilante crusade to bring down the Dominion and its nefarious leader, Arcturus Mengsk. Haunted by betrayal and remorse, some believe you may have given up the fight. But you have promises to keep… and a need for vengeance that’s long overdue.",
	},
	{
		id: 38,
		aggregated_rating: 90,
		cover: "co20xq",

		first_release_date: 1295913600,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Dead Space 2",
		platforms: [
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
		],
		screenshots: [
			{
				id: 1158,
				image_id: "yadkllvjpd1lnqlixxso",
			},
			{
				id: 1159,
				image_id: "wkypfjptjgqn6s0qrkbe",
			},
			{
				id: 1160,
				image_id: "o2dzissnnfnhy8zcmjzl",
			},
			{
				id: 1161,
				image_id: "s7y8lukfvl3vwfhobksu",
			},
			{
				id: 1162,
				image_id: "x6wtlvyuhtxnhgkce08e",
			},
		],
		summary:
			"Three years after the Necromorph infestation aboard the USS Ishimura, Isaac Clarke awakens from a coma, confused, disoriented, and on a space station called The Sprawl. Just as his health begins to improve, The Sprawl is overrun with even more advanced forms of the alien-zombie hybrids.",
	},
	{
		id: 3042,
		aggregated_rating: 72.0588235294118,
		cover: "co65yq",

		first_release_date: 1422230400,
		genres: [
			{
				id: 5,
				name: "Shooter",
			},
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 31,
				name: "Adventure",
			},
		],
		name: "Dying Light",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 9,
				name: "PlayStation 3",
			},
			{
				id: 12,
				name: "Xbox 360",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
		],
		screenshots: [
			{
				id: 5652,
				image_id: "y3mcevfaze2vqv1qmapj",
			},
			{
				id: 5653,
				image_id: "yvstmj75wfqrtz4um8x0",
			},
			{
				id: 5654,
				image_id: "ldffm3ihtlvoqt9qtrnh",
			},
			{
				id: 5655,
				image_id: "uuotpnsbi3rgjcmxqjhl",
			},
			{
				id: 5656,
				image_id: "gsuyug4huoox1orousyo",
			},
		],
		summary:
			"Dying Light is a first-person, action survival horror game set in a vast and dangerous open world. During the day, players traverse an expansive urban environment overrun by a vicious outbreak, scavenging the world for supplies and crafting weapons to defend against the growing infected population. At night, the hunter becomes the hunted, as the infected become aggressive and more dangerous. Most frightening are the predators which only appear after sundown. Players must use everything in their power to survive until the morning’s first light.",
	},
	{
		id: 17000,
		aggregated_rating: 90.5384615384615,
		cover: "xrpmydnu9rpxvxfjkiu7",

		first_release_date: 1456444800,
		genres: [
			{
				id: 12,
				name: "Role-playing (RPG)",
			},
			{
				id: 13,
				name: "Simulator",
			},
			{
				id: 15,
				name: "Strategy",
			},
			{
				id: 32,
				name: "Indie",
			},
		],
		name: "Stardew Valley",
		platforms: [
			{
				id: 3,
				name: "Linux",
			},
			{
				id: 6,
				name: "PC (Microsoft Windows)",
			},
			{
				id: 14,
				name: "Mac",
			},
			{
				id: 34,
				name: "Android",
			},
			{
				id: 39,
				name: "iOS",
			},
			{
				id: 46,
				name: "PlayStation Vita",
			},
			{
				id: 48,
				name: "PlayStation 4",
			},
			{
				id: 49,
				name: "Xbox One",
			},
			{
				id: 130,
				name: "Nintendo Switch",
			},
		],
		screenshots: [
			{
				id: 20037,
				image_id: "rhxs1x9w5hf5kde2osf5",
			},
			{
				id: 20038,
				image_id: "sw7rtba7p1xs77klsime",
			},
			{
				id: 20039,
				image_id: "iwswpvxa9ytrpk8yjcyx",
			},
			{
				id: 20040,
				image_id: "ak7zmag7zztpqha1jjde",
			},
			{
				id: 20041,
				image_id: "g1aakqbkp2quq0krqeky",
			},
		],
		summary:
			"Stardew Valley is an open-ended country-life RPG! You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!",
	},
];

export default function Trending() {

	return (
		<TrendingContainer>
			<h2>Trending Games</h2>
			<p>The top 100 trending games around the community.</p>
			<GamesBox>
				{games.map((game) => (
					<GameComponent game={game} key={game.id} location="t" status={0} />
				))}
			</GamesBox>
		</TrendingContainer>
	);
}

const TrendingContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 50px;
	h2 {
		font-size: 35px;
		font-weight: 600;
	}
	p {
		font-size: 18px;
	}
`;

const GamesBox = styled(Box)`
	margin-top: 40px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 15px;
`;
