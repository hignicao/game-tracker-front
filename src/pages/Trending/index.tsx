import { Box, Container, styled } from "@mui/material";
import GameComponent from "../../components/Game/GameComponent";

const games = [
	{
		id: 1020,
		aggregated_rating: 88.1379310344828,
		cover: {
			id: 120937,
			image_id: "co2lbd",
		},
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
		summary:
			"Grand Theft Auto V is a vast open world game set in Los Santos, a sprawling sun-soaked metropolis struggling to stay afloat in an era of economic uncertainty and cheap reality TV. The game blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the game’s three lead characters, playing all sides of the game’s interwoven story.",
	},
	{
		id: 1942,
		aggregated_rating: 91.72,
		cover: {
			id: 89386,
			image_id: "co1wyy",
		},
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
		summary:
			"RPG and sequel to The Witcher 2 (2011), The Witcher 3 follows witcher Geralt of Rivia as he seeks out his former lover and his young subject while intermingling with the political workings of the wartorn Northern Kingdoms. Geralt has to fight monsters and deal with people of all sorts in order to solve complex problems and settle contentious disputes, each ranging from the personal to the world-changing.",
	},
	{
		id: 472,
		aggregated_rating: 96.1111111111111,
		cover: {
			id: 85100,
			image_id: "co1tnw",
		},
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
		summary:
			"Skyrim reimagines and revolutionizes the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose. Play any type of character you can imagine, and do whatever you want; the legendary freedom of choice, storytelling, and adventure of The Elder Scrolls is realized like never before.",
	},
	{
		id: 1877,
		aggregated_rating: 75.2380952380952,
		cover: {
			id: 209384,
			image_id: "co4hk8",
		},
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
		summary:
			"Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
	},
	{
		id: 72,
		aggregated_rating: 92.4444444444444,
		cover: {
			id: 82660,
			image_id: "co1rs4",
		},
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
		summary:
			"Sequel to the acclaimed Portal (2007), Portal 2 pits the protagonist of the original game, Chell, and her new robot friend, Wheatley, against more puzzles conceived by GLaDOS, an A.I. with the sole purpose of testing the Portal Gun's mechanics and taking revenge on Chell for the events of Portal. As a result of several interactions and revelations, Chell once again pushes to escape Aperture Science Labs.",
	},
	{
		id: 1009,
		aggregated_rating: 91.5384615384615,
		cover: {
			id: 81915,
			image_id: "co1r7f",
		},
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
		summary:
			"A third person shooter/stealth/survival hybrid, in which twenty years after the outbreak of a parasitic fungus which takes over the neural functions of humans, Joel, a Texan with a tragic familial past, finds himself responsible with smuggling a fourteen year old girl named Ellie to a militia group called the Fireflies, while avoiding strict and deadly authorities, infected fungal hosts and other violent survivors.",
	},
	{
		id: 74,
		aggregated_rating: 95.6,
		cover: {
			id: 93684,
			image_id: "co20ac",
		},
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
		summary:
			"Are you prepared to lose everything to save the galaxy? You'll need to be, Commander Shephard. It's time to bring together your greatest allies and recruit the galaxy's fighting elite to continue the resistance against the invading Reapers. So steel yourself, because this is an astronomical mission where sacrifices must be made. You'll face tougher choices and new, deadlier enemies. Arm yourself and prepare for an unforgettable intergalactic adventure.\n\nGame Features:\n\nShift the fight in your favour. Equip yourself with powerful new weapons almost instantly thanks to a new inventory system. Plus, an improved health regeneration system means you'll spend less time hunting for restorative items.\n\nMake every decision matter. Divisive crew members are just the tip of the iceberg, Commander, because you'll also be tasked with issues of intergalactic diplomacy. And time's a wastin' so don't be afraid to use new prompt-based actions that let you interrupt conversations, even if they could alter the fate of your crew...and the galaxy.\n\nForge new alliances, carefully. You'll fight alongside some of your most trustworthy crew members, but you'll also get the opportunity to recruit new talent. Just choose your new partners with care because the fate of the galaxy rests on your shoulders, Commander.",
	},
	{
		id: 25076,
		aggregated_rating: 94.0588235294118,
		cover: {
			id: 80403,
			image_id: "co1q1f",
		},
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
		summary: "Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age.",
	},
	{
		id: 7346,
		aggregated_rating: 97.5925925925926,
		cover: {
			id: 172453,
			image_id: "co3p2d",
		},
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
		summary:
			"The Legend of Zelda: Breath of the Wild is the first 3D open-world game in the Zelda series. Link can travel anywhere and be equipped with weapons and armor found throughout the world to grant him various bonuses. Unlike many games in the series, Breath of the Wild does not impose a specific order in which quests or dungeons must be completed. While the game still has environmental obstacles such as weather effects, inhospitable lands, or powerful enemies, many of them can be overcome using the right method. A lot of critics ranked Breath of the Wild as one of the best video games of all time.",
	},
	{
		id: 529,
		aggregated_rating: 89.5333333333333,
		cover: {
			id: 87745,
			image_id: "co1vpd",
		},
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
		summary:
			"Beyond the reach of civilization lies a lawless island ruled by violence. This is where you find yourself stranded, caught in a bloody conflict between the island’s psychotic warlords and indigenous rebels. Struggling to survive, your only hope of escape is through the muzzle of a gun. Discover the island’s dark secrets and take the fight to the enemy; improvise and use your environment to your advantage; and outwit its cast of ruthless, deranged inhabitants. Beware the beauty and mystery of this island of insanity… Where nothing is what is seems, you’ll need more than luck to escape alive.",
	},
	{
		id: 121,
		aggregated_rating: 84.3571428571429,
		cover: {
			id: 199481,
			image_id: "co49x5",
		},
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
		summary:
			"Minecraft focuses on allowing the player to explore, interact with, and modify a dynamically-generated map made of one-cubic-meter-sized blocks. In addition to blocks, the environment features plants, mobs, and items. Some activities in the game include mining for ore, fighting hostile mobs, and crafting new blocks and tools by gathering various resources found in the game. The game's open-ended model allows players to create structures, creations, and artwork on various multiplayer servers or their single-player maps. Other features include redstone circuits for logic computations and remote actions, minecarts and tracks, and a mysterious underworld called the Nether. A designated but completely optional goal of the game is to travel to a dimension called the End, and defeat the ender dragon.",
	},
	{
		id: 1164,
		aggregated_rating: 84.6428571428571,
		cover: {
			id: 82074,
			image_id: "co1rbu",
		},
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
		summary:
			"Tomb Raider explores the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor. Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold.",
	},
	{
		id: 538,
		aggregated_rating: 93.2142857142857,
		cover: {
			id: 123158,
			image_id: "co2n12",
		},
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
		summary:
			"BioShock Infinite is the third game in the BioShock series. It is not a direct sequel/prequel to any of the previous BioShock games but takes place in an entirely different setting, although it shares similar features, gameplay and concepts with the previous games. BioShock Infinite features a range of environments that force the player to adapt, with different weapons and strategies for each situation. Interior spaces feature close combat with enemies, but unlike previous games set in Rapture, the setting of Infinite contains open spaces with emphasis on sniping and ranged combat against as many as fifteen enemies at once.",
	},
	{
		id: 11156,
		aggregated_rating: 88.8461538461538,
		cover: {
			id: 133030,
			image_id: "co2una",
		},
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
		summary:
			"Welcome to a vibrant world rich with the beauty of nature – but inhabited by awe-inspiring, highly advanced machines. As a young machine hunter named Aloy, you must unravel the mysteries of this world and find your own destiny.",
	},
	{
		id: 7331,
		aggregated_rating: 93.24,
		cover: {
			id: 81917,
			image_id: "co1r7h",
		},
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
		summary:
			"Several years after his last adventure, retired fortune hunter, Nathan Drake, is forced back into the world of thieves. With the stakes much more personal, Drake embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. His greatest adventure will test his physical limits, his resolve, and ultimately what he's willing to sacrifice to save the ones he loves.",
	},
	{
		id: 501,
		aggregated_rating: 91.2,
		cover: {
			id: 87713,
			image_id: "co1voh",
		},
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
		summary:
			"After the events of Batman: Arkham Asylum (2009), a section of the city of Gotham has been turned into a prison, designed to keep the scum of the city away from the people. Bruce Wayne protests this prison but is shortly kidnapped by the despicable Hugo Strange, thus having to face the city's most powerful villains as the Batman while trying to uncover Strange's plans.",
	},
	{
		id: 434,
		aggregated_rating: 91.8,
		cover: {
			id: 120991,
			image_id: "co2lcv",
		},
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
		summary:
			"A modern-day Western epic, Red Dead Redemption takes John Marston, a relic from the fast-closing time of the gunslinger, through an open-world filled with wildlife, mini games and shootouts. Marston sets out to hunt down his old gang mates for the government, who have taken away his family, and meets many characters emblematic of the Wild West, heroism and the new civilization along his journey.",
	},
	{
		id: 75,
		aggregated_rating: 90.8125,
		cover: {
			id: 89702,
			image_id: "co1x7q",
		},
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
		summary:
			"Earth is burning. The Reapers have taken over and other civilizations are falling like dominoes. Lead the final fight to save humanity and take back Earth from these terrifying machines, Commander Shepard. You'll need backup for these battles. Fortunately, the galaxy has a habit of sending unexpected species your way. Recruit team members and forge new alliances, but be prepared to say goodbye at any time as partners make the ultimate sacrifice. It's time for Commander Shepard to fight for the fate of the human race and save the galaxy. No pressure, Commander.\n\nFight smarter. Take advantage of new powers and combat moves. Shepard can now blind fire at enemies and build tougher melee attacks. Plus, when you fight as a team you can combine new biotic and tech powers to unleash devastating Power Combos.\n\nBuild the final force. Build a team from a variety of races and classes and combine their skills to overcome impossible odds. You'll be joined by newcomers like James Vega, a tough-as-nails soldier, as well as EDI, a trusted AI in a newly acquired physical form. Keep an eye out for beloved characters from your past, but beware. Some may not survive the final battle...\n\nFace off against friends. Enjoy an integrated co-op multiplayer mode and team up with friends online to liberate key conflict zones from increasingly tough opponents. Customize your warrior and earn new weapons, armor, and abilities to build war preparedness stats in your single player campaign.",
	},
	{
		id: 26192,
		aggregated_rating: 95.1818181818182,
		cover: {
			id: 279320,
			image_id: "co5ziw",
		},
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
		summary:
			"The Last of Us Part II is an action-adventure game set five years after the events of The Last of Us. The player traverses post-apocalyptic environments such as buildings and forests to advance the story. He can use firearms, improvised weapons, and stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus. The game intermittently switches control between Ellie and Abby, and also briefly Joel in the opening sequence. The nimble nature of the player character introduces platforming elements, allowing the player to jump and climb to traverse environments and gain advantages during combat.",
	},
	{
		id: 19560,
		aggregated_rating: 96.2307692307692,
		cover: {
			id: 85062,
			image_id: "co1tmu",
		},
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
		summary:
			"God of War is the sequel to God of War III as well as a continuation of the canon God of War chronology. Unlike previous installments, this game focuses on Norse mythology and follows an older and more seasoned Kratos and his son Atreus in the years since the third game. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
	},
	{
		id: 16,
		aggregated_rating: 81.9,
		cover: {
			id: 85752,
			image_id: "co1u60",
		},
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
		summary:
			"In this first-person Western RPG, the player takes on the role of Courier 6, barely surviving after being robbed of their cargo, shot and put into a shallow grave by a New Vegas mob boss. The Courier sets out to track down their robbers and retrieve their cargo, and winds up getting tangled in the complex ideological and socioeconomic web of the many factions and settlements of post-nuclear Nevada.",
	},
	{
		id: 19441,
		aggregated_rating: 81.3333333333333,
		cover: {
			id: 125839,
			image_id: "co2p3j",
		},
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
		summary:
			"Explore a massive and dynamic open world offering an incredible variety of gameplay possibilities. Hack your way through traffic while you engage in dangerous car chases through the winding streets of San Francisco, traverse the rooftops of the colorful and vibrant neighborhoods of Oakland, and infiltrate the cutting-edge offices of Silicon Valley companies. There are many secrets to uncover in the birthplace of the tech revolution.",
	},
	{
		id: 7599,
		aggregated_rating: 78.8378378378378,
		cover: {
			id: 81950,
			image_id: "co1r8e",
		},
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
		summary:
			"Life is Strange is a five part episodic game that sets out to revolutionize story based choice and consequence games by allowing the player to rewind time and affect the past, present and future.",
	},
	{
		id: 1871,
		aggregated_rating: 84.3529411764706,
		cover: {
			id: 117988,
			image_id: "co2j1g",
		},
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
		summary:
			"The Walking Dead: Season One (also known as The Walking Dead: The Game) is an episodic interactive drama graphic adventure video game developed and published by Telltale Games. Based on Robert Kirkman's The Walking Dead comic book series, the game consists of five episodes, released between April and November 2012. It is available for Android, iOS, Kindle Fire HDX, Microsoft Windows, Mac OS X, PlayStation 3, PlayStation Vita, Xbox 360, PlayStation 4 and Xbox One. The game is the first of The Walking Dead video game series published by Telltale.",
	},
	{
		id: 9630,
		aggregated_rating: 84.6666666666667,
		cover: {
			id: 91158,
			image_id: "co1yc6",
		},
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
		summary:
			"Bethesda Game Studios welcome you to the world of Fallout 4, their most ambitious game ever, and the next generation of open-world gaming. As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours. Only you can rebuild and determine the fate of the Wasteland. Welcome home.",
	},
	{
		id: 113,
		aggregated_rating: 83.3333333333333,
		cover: {
			id: 76391,
			image_id: "co1mxz",
		},
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
		summary:
			"Live and breathe as Ezio, a legendary Master Assassin, in his enduring struggle against the powerful Templar Order. He must journey into Italy’s greatest city, Rome, center of power, greed and corruption to strike at the heart of the enemy.\nDefeating the corrupt tyrants entrenched there will require not only strength, but leadership, as Ezio commands an entire Brotherhood who will rally to his side. Only by working together can the Assassins defeat their mortal enemies.\nAnd for the first time, introducing a never-before-seen multiplayer layer that allows you to choose from a wide range of unique characters, each with their own signature weapons and assassination techniques, and match your skills against other players from around the world.\nIt’s time to join the Brotherhood.",
	},
	{
		id: 1011,
		aggregated_rating: 80.7058823529412,
		cover: {
			id: 94379,
			image_id: "co20tn",
		},
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
		summary:
			"A new era of shoot and loot is about to begin. Play as one of four new vault hunters facing off against a massive new world of creatures, psychos and the evil mastermind, Handsome Jack. Make new friends, arm them with a bazillion weapons and fight alongside them in 4 player co-op on a relentless quest for revenge and redemption across the undiscovered and unpredictable living planet.",
	},
	{
		id: 25657,
		aggregated_rating: 82.44,
		cover: {
			id: 289955,
			image_id: "co67qb",
		},
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
		summary:
			"Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your Guardian's look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety of PvP modes alone or with friends. Download for free today and write your legend in the stars.",
	},
	{
		id: 28204,
		aggregated_rating: 75.2777777777778,
		cover: {
			id: 82135,
			image_id: "co1rdj",
		},
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
		summary:
			"Call of Duty: WWII creates the definitive World War II next generation experience across three different game modes: Campaign, Multiplayer, and Co-Operative. Featuring stunning visuals, the Campaign transports players to the European theater as they engage in an all-new Call of Duty story set in iconic World War II battles. Multiplayer marks a return to original, boots-on-the ground Call of Duty gameplay. Authentic weapons and traditional run-and-gun action immerse you in a vast array of World War II-themed locations. The Co-Operative mode unleashes a new and original story in a standalone game experience full of unexpected, adrenaline-pumping moments.",
	},
	{
		id: 1970,
		aggregated_rating: 84.5714285714286,
		cover: {
			id: 220883,
			image_id: "co4qfn",
		},
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
		summary:
			"Assassin’s Creed IV Black Flag begins in 1715, when pirates established a lawless republic in the Caribbean and ruled the land and seas. These outlaws paralyzed navies, halted international trade, and plundered vast fortunes. They threatened the power structures that ruled Europe, inspired the imaginations of millions, and left a legacy that still endures.",
	},
	{
		id: 8173,
		aggregated_rating: 89.0833333333333,
		cover: {
			id: 82091,
			image_id: "co1rcb",
		},
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
		summary:
			"Join the fight for the future in the world of Overwatch and choose your hero from a diverse cast of soldiers, scientists, adventurers, and oddities. Bend time, defy physics, and unleash a dizzying array of extraordinary powers and weapons. Engage your enemies in iconic locations from around the globe in the ultimate team-based shooter.",
	},
	{
		id: 5503,
		aggregated_rating: 91.8125,
		cover: {
			id: 77077,
			image_id: "co1nh1",
		},
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
		summary:
			"Batman: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady's uniquely designed version of the Batmobile. The highly anticipated addition of this legendary vehicle, combined with the acclaimed gameplay of the Arkham series, offers gamers the ultimate and complete Batman experience as they tear through the streets and soar across the skyline of the entirety of Gotham City. In this explosive finale, Batman faces the ultimate threat against the city that he is sworn to protect, as Scarecrow returns to unite the super criminals of Gotham and destroy the Batman forever.",
	},
	{
		id: 478,
		aggregated_rating: 85.7142857142857,
		cover: {
			id: 89356,
			image_id: "co1wy4",
		},
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
		summary:
			"This third-person dark fantasy Western RPG and sequel to The Witcher (2007), featuring multiple endings and branching narrative paths, follows the travels of Geralt of Rivia, witcher, who, after being falsely accused of regicide, sets out to clear his name and find the real killer, in a time of political turmoil and the brink of war between the imperialistic Nilfgaardian Empire and the Four Kingdoms.",
	},
	{
		id: 28540,
		aggregated_rating: 85.9333333333333,
		cover: {
			id: 82058,
			image_id: "co1rbe",
		},
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
		summary:
			"For the last four years, the team behind Assassin’s Creed IV Black Flag has been crafting a new beginning for the Assassin’s Creed franchise.\n\nSet in Ancient Egypt, players will journey to the most mysterious place in history, during a crucial period that will shape the world and give rise to the Assassin’s Brotherhood. Plunged into a living, systemic and majestic open world, players are going to discover vibrant ecosystems, made of diverse and exotic landscapes that will provide them with infinite opportunities of pure exploration, adventures and challenges.\n\nPowered by a new fight philosophy, Assassin's Creed Originsembraces a brand new RPG direction where players level up, loot, and choose abilities to shape and customize their very own skilled Assassin as they grow in power and expertise while exploring the entire country of Ancient Egypt.",
	},
	{
		id: 1372,
		aggregated_rating: 81,
		cover: {
			id: 291930,
			image_id: "co6996",
		},
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
		summary:
			"CS:GO is the fourth iteration of Valve's team-based modern-military first-person shooter that features new and updated versions of the classic CS content. While expanding the franchise, the game also introduces new gameplay modes, matchmaking and leader boards.",
	},
	{
		id: 7334,
		aggregated_rating: 91.1111111111111,
		cover: {
			id: 82054,
			image_id: "co1rba",
		},
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
		summary:
			'An action RPG in which the player embodies a Hunter who, after being transfused with the mysterious blood local to the city of Yharnam, sets off into a "night of the Hunt", an extended night in which Hunters may phase in and out of dream and reality in order to thin the outbreak of abominable beasts that plague the land and, for the more resilient and insightful Hunters, uncover the answers to the Hunt\'s many mysteries.',
	},
	{
		id: 533,
		aggregated_rating: 90.3571428571429,
		cover: {
			id: 266140,
			image_id: "co5pcs",
		},
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
		summary:
			"Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge. With Dishonored’s flexible combat system, creatively eliminate your targets as you combine the supernatural abilities, weapons and unusual gadgets at your disposal. Pursue your enemies under the cover of darkness or ruthlessly attack them head on with weapons drawn. The outcome of each mission plays out based on the choices you make.",
	},
	{
		id: 28552,
		aggregated_rating: 84.3333333333333,
		cover: {
			id: 94974,
			image_id: "co21a6",
		},
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
		summary:
			"Welcome to Hope County, Montana, land of the free and the brave, but also home to a fanatical doomsday cult known as The Project at Eden’s Gate that is threatening the community's freedom. Stand up to the cult’s leader, Joseph Seed and the Heralds, and spark the fires of resistance that will liberate the besieged community.\n\nIn this expansive world, your limits and creativity will be tested against the biggest and most ruthless baddest enemy Far Cry has ever seen. It’ll be wild and it’ll get weird, but as long as you keep your wits about you, the residents of Hope County can rest assured knowing you’re their beacon of hope.",
	},
	{
		id: 7351,
		aggregated_rating: 86.96875,
		cover: {
			id: 76903,
			image_id: "co1nc7",
		},
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
		summary:
			"Developed by id software, the studio that pioneered the first-person shooter genre and created multiplayer Deathmatch, Doom returns as a brutally fun and challenging modern-day shooter experience. Relentless demons, impossibly destructive guns, and fast, fluid movement provide the foundation for intense, first-person combat – whether you’re obliterating demon hordes through the depths of Hell in the single-player campaign, or competing against your friends in numerous multiplayer modes. Expand your gameplay experience using Doom SnapMap game editor to easily create, play, and share your content with the world.",
	},
	{
		id: 512,
		aggregated_rating: 93.25,
		cover: {
			id: 85148,
			image_id: "co1tp8",
		},
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
		summary:
			'A search for the fabled "Atlantis of the Sands" propels fortune hunter Nathan Drake on a trek into the heart of the Arabian Desert. When the terrible secrets of this lost city are unearthed, Drake\'s quest descends into a desperate bid for survival that strains the limits of his endurance and forces him to confront his deepest fears.',
	},
	{
		id: 3025,
		aggregated_rating: 83.8888888888889,
		cover: {
			id: 94225,
			image_id: "co20pd",
		},
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
		summary:
			"Middle-earth: Shadow of Mordor is a open world third-person action role-playing video game developed by Monolith Productions and published by Warner Bros. Interactive Entertainment, which takes place in the world of J.R.R. Tolkien's Legendarium.\n\nThe game takes place in the 60-year gap between the events of Tolkien's The Hobbit and The Lord of The Rings. It is a story of revenge, slaughter, and mystery set entirely in Mordor, the Land of Shadows. At its center is Talion, an ordinary man who loses everything, including his mortal life.\n\nThe game is set in a fully open world, and features various role-playing game elements such as experience points and skills. There are various ways the player can complete their main objective. Aside from the main storyline, there are various side quests and random events the player can complete within Mordor.\n\nThe melee system is inspired by that of the Batman Arkham series. Getting into a good fighting rhythm, using both regular attacks and counter-attacks will improve the player's combo multiplier.\n\nA unique feature of Middle-earth: Shadow of Mordor is the Nemesis system. Every enemy in the game has their own name, rank, and memory. These enemies will continue to do their own jobs and tasks even when they're off screen. If the player does not kill an enemy in an encounter, this enemy will remember the player and change their tactics and conversations based on the encounter.",
	},
	{
		id: 866,
		aggregated_rating: 86.6,
		cover: {
			id: 94417,
			image_id: "co20up",
		},
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
		summary:
			"Sid Meier's Civilization V is a turn-based strategy game where the player leads a civilization from the stone-age all the way to future tech, there is more than one way to win, achieving one of a number of different victory conditions through research, exploration, diplomacy, expansion, economic development, government and military conquest. You will face other civilizations, either online as other people or played by the computer, civilization 5 features a advanced diplomacy system when dealing with computer controlled civs or computer controlled city-states.",
	},
	{
		id: 2114,
		aggregated_rating: 79.8181818181818,
		cover: {
			id: 91851,
			image_id: "co1yvf",
		},
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
		summary:
			"After a deadly pandemic sweeps through New York, it's up to Agents to save what remains. Complete missions, explore the Dark Zone, and fight back enemy factions alone or with 3 friends. Experience a full endgame offering you new PvP and PvE modes.",
	},
	{
		id: 7349,
		aggregated_rating: 73.2173913043478,
		cover: {
			id: 152768,
			image_id: "co39vk",
		},
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
		summary:
			"A new adventure awaits in the Mass Effect universe. With stunning visuals and a new galaxy to discover, BioWare delivers the next generation of space exploration.\n\nCommander Shepard's story may be over, but there are many more stories to tell in the Mass Effect universe. Mass Effect Andromeda will be set in a new galaxy, with new characters, new quests and a whole load of new consequence-laden decisions to make.\n\nMass Effect: Andromeda takes you to the Andromeda galaxy, far beyond the Milky Way. There, you'll lead our fight for a new home in hostile territory - where WE are the aliens.\n\nPlay as the Pathfinder - a leader of a squad of military-trained explorers - with deep progression and customisation systems. This is the story of humanity’s next chapter, and your choices throughout the game will ultimately determine our survival in the Andromeda Galaxy.\n\nAs you unfold the mysteries of the Andromeda Galaxy and the hope for humanity lies on your shoulders – You must ask yourself… How far will you go?\n\nKey Features:\n\nReturn to the Mass Effect universe. Lead the first humans in Andromeda on a desperate search for our new home. In this new chapter of Mass Effect, meet and recruit all-new, interesting characters caught up in an epic space saga filled with mystery and galactic conflict.\n\nFight for survival. Battle with your Pathfinder team against terrifying enemies and creatures. New additions like destructible environments, boosted jumps for added verticality, and all-new weapons and Biotics make combat more thrilling than ever.\n\nBuild your hero. Create a formidable hero with amazing weapons, powers and tech. A much more flexible skill and weapon progression tree means you can replicate your play style to make you unstoppable against new, powerful alien enemies.\n\nExplore a new galaxy. Chart your own course in a dangerous new region. Unravel the mysteries of the Andromeda galaxy as you discover rich, alien worlds in the search for humanity’s new home.",
	},
	{
		id: 2155,
		aggregated_rating: 90.625,
		cover: {
			id: 89684,
			image_id: "co1x78",
		},
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
		summary:
			"An action RPG and spiritual sequel to Demon's Souls in which the player embodies the Chosen Undead, who is tasked with fulfilling an ancient prophecy by ringing the Bells of Awakening in the dark fantasy setting of Lordran, an open world with intricate areas full of beasts, former humans gone hollow, and magical abominations whom the player must overcome in challenging and unforgiving combat.",
	},
	{
		id: 7323,
		aggregated_rating: 87.04,
		cover: {
			id: 82594,
			image_id: "co1rqa",
		},
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
		summary:
			"Join Lara Croft on her first great tomb raiding expedition as she seeks to discover the secret of immortality. Featuring high-octane action set in the most beautiful and hostile environments on earth, Rise of the Tomb Raider delivers cinematic survival action-adventure.",
	},
	{
		id: 18167,
		aggregated_rating: 36.75,
		cover: {
			id: 81912,
			image_id: "co1r7c",
		},
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
		summary:
			"Hello Neighbor is a stealth horror game about sneaking into Mr.Petersons house to figure out what horrible secrets he's hiding in the basement. You play against an advanced AI that learns from your every move. Really enjoying climbing through that backyard window? Expect a bear trap there. Sneaking through the front door? There'll be cameras there soon. Trying to escape? The Neighbor will find a shortcut and catch you.",
	},
	{
		id: 26758,
		aggregated_rating: 96.7058823529412,
		cover: {
			id: 76371,
			image_id: "co1mxf",
		},
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
		summary:
			"Explore incredible places far from the Mushroom Kingdom as you join Mario and his new ally Cappy on a massive, globe-trotting 3D adventure. Use amazing new abilities, like the power to capture and control objects, animals, and enemies to collect Power Moons so you can power up the Odyssey airship and save Princess Peach from Bowser’s wedding plans!",
	},
	{
		id: 12517,
		aggregated_rating: 96.3846153846154,
		cover: {
			id: 103865,
			image_id: "co2855",
		},
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
		summary:
			"A small child falls into the Underground, where monsters have long been banished by humans and are hunting every human that they find. The player controls the child as they try to make it back to the Surface through hostile environments, all the while engaging with a turn-based combat system with puzzle-solving and bullet hell elements, as well as other unconventional game mechanics.",
	},
	{
		id: 18866,
		aggregated_rating: 67.1111111111111,
		cover: {
			id: 279394,
			image_id: "co5zky",
		},
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
		summary:
			"Dead by Daylight is an asymmetrical multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
	},
	{
		id: 1262,
		aggregated_rating: 80.3571428571429,
		cover: {
			id: 87153,
			image_id: "co1v8x",
		},
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
		summary:
			"From the perilous battlefields of the fourth-grade playground, a young hero will rise, destined to be South Park’s savior. From the creators of South Park, Trey Parker and Matt Stone, comes an epic quest to become… cool. Introducing South Park: The Stick of Truth.You begin as the new kid in town facing a harrowing challenge: making friends.\n\nAs you start your quest the children of South Park are embroiled in a city-wide, live-action-role-playing game, casting imaginary spells and swinging fake swords. Over time the simple children’s game escalates into a battle of good and evil that threatens to consume the world.Arm yourself with weapons of legend to defeat crab people, underpants gnomes, hippies and other forces of evil.\n\nDiscover the lost Stick of Truth and earn your place at the side of Stan, Kyle, Cartman and Kenny as their new friend. Succeed, and you shall be South Park’s savior, cementing your social status in South Park Elementary. Fail, and you will forever be known… as a loser.",
	},
	{
		id: 36926,
		aggregated_rating: 93.25,
		cover: {
			id: 82685,
			image_id: "co1rst",
		},
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
		summary:
			"Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand. Hunt alone or in co-op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts!",
	},
	{
		id: 9061,
		aggregated_rating: 86.8823529411765,
		cover: {
			id: 282912,
			image_id: "co62ao",
		},
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
		summary:
			"Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional cel animation (hand drawn & hand inked!), watercolor backgrounds, and original jazz recordings. Play as Cuphead or Mugman (in single player or co-op) as you traverse strange worlds, acquire new weapons, learn powerful super moves, and discover hidden secrets. Cuphead is all action, all the time.",
	},
	{
		id: 1985,
		aggregated_rating: 95.7368421052632,
		cover: {
			id: 87125,
			image_id: "co1v85",
		},
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
		summary:
			"Metal Gear Solid V: The Phantom Pain is the final game in the Metal Gear series. It is the sequel to Metal Gear Solid V: Ground Zeroes released the year before and a prequel to the original Metal Gear. The game has a complex story with long cut-scene sequences, but there are fewer and they are shorter compared to earlier Metal Gear Solid titles. Most of the gameplay mechanics introduced in Ground Zeroes are carried over: it is still an action game and stealth oriented but replaces the linear corridor design from most earlier titles with large open world environments that offer the player unrestricted freedom for the approach. The world has now a real-time day and night cycle and various weather effects that influence enemy behaviour, visibility and sound. Sabotaging or destroying certain structures can also influence other parts of the map.",
	},
	{
		id: 4843,
		aggregated_rating: 73.7272727272727,
		cover: {
			id: 200538,
			image_id: "co4aqi",
		},
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
		summary:
			"Story-driven open-world RPG that immerses you in an epic adventure in the Holy Roman Empire. Avenge your parents' death as you battle invading forces, go on game-changing quests, and make influential choices. Explore castles, forests, villages and other realistic settings in medieval Bohemia!",
	},
	{
		id: 1331,
		aggregated_rating: 84,
		cover: {
			id: 81352,
			image_id: "co1qrs",
		},
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
		summary: "Limbo is a black and white puzzle-platforming adventure. Play the role of a young boy traveling through an eerie and treacherous world in an attempt to discover the fate of his sister.",
	},
	{
		id: 19565,
		aggregated_rating: 89.6875,
		cover: {
			id: 81907,
			image_id: "co1r77",
		},
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
		summary:
			"Starring the world’s most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it’s Spider-Man unlike any you’ve played before.",
	},
	{
		id: 1384,
		aggregated_rating: 86.2,
		cover: {
			id: 87793,
			image_id: "co1vqp",
		},
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
		summary:
			"A top-down slasher/shooter with unlockable gameplay-altering masks and weapons, featuring a neon-flavoured electronic aesthetic, in which a hitman receives anonymous calls ordering him to travel to certain residences and crime dens and massacre those within, as he stumbles through unreal visions and inconsistencies without any answers to how, why or who.",
	},
	{
		id: 1887,
		aggregated_rating: 87.9375,
		cover: {
			id: 122974,
			image_id: "co2mvy",
		},
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
		summary:
			"Dragon Age: Inquisition is a role-playing game and the third main game in the Dragon Age series. It is set in the Thedas continent, the same fantasy world as the two previous games. It consist of two large countries: Ferelden (from Dragon Age: Origins) and Orlais, as well as the land inbetween.\n\nTrue to the spirit of the series the character can be customized for appearance, sex, class and race. The available races are dwarf, elf, human, and Qunari and the classes are mage, rogue, and warrior with three specializations each. To grow the Inquisition experience needs to be earned by completing quests, which allows the player to further define allegiances and pursue romances.\n\nA custom party can be defined and each member benefits from experience as it opens up access to better weapons and more abilities. Power points open up new areas and Inquisition points define the influence over the region; each new level provides a perk that benefits the entire Inquisition.",
	},
	{
		id: 2031,
		aggregated_rating: 77.3125,
		cover: {
			id: 95040,
			image_id: "co21c0",
		},
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
		summary:
			"Wolfenstein: The New Order is an action-adventure shooter game played from a first-person perspective. It is the semi-sequel to 2009's Wolfenstein, however utilizes very little from the game and drops any direct references to veil or supernatural.\n\nTo progress through the story, the player battle enemies throughout levels. The game utilizes a health system in which players' health is divided into separate sections that regenerate; if an entire section is lost, the player must use a health pack to replenish the missing health. In combat, a cover system can be used as assistance against enemies. The player have the ability to lean around, over, and under cover, which can be used as a tactical advantage during shootouts and stealth levels. The game gives the player a wide variety of weapon options—they can be found on the ground, retrieved from dead enemies, or removed from their stationary position and carried around.",
	},
	{
		id: 11133,
		aggregated_rating: 86.0769230769231,
		cover: {
			id: 87279,
			image_id: "co1vcf",
		},
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
		summary: "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and embrace the darkness!",
	},
	{
		id: 1905,
		aggregated_rating: 82.6,
		cover: {
			id: 112205,
			image_id: "co2ekt",
		},
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
		summary:
			"Fortnite is the completely free online game where you and your friends fight to be the last one standing in Battle Royale, join forces to make your own Creative games, or catch a live show at Party Royale.",
	},
	{
		id: 43,
		aggregated_rating: 92.1111111111111,
		cover: {
			id: 82118,
			image_id: "co1rd2",
		},
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
		summary:
			"In Deus Ex: Human Revolution you play Adam Jensen, a security specialist, handpicked to oversee the defense of one of America's most experimental biotechnology firms. But when a black ops team breaks in and kills the scientists you were hired to protect, everything you thought you knew about your job changes. At a time when scientific advancements are routinely turning athletes, soldiers and spies into super-enhanced beings, someone is working very hard to ensure mankind's evolution follows a particular path. You need to discover why - because the decisions you take and the choices you make will be the only things that can determine mankind's future.",
	},
	{
		id: 14362,
		aggregated_rating: 77.6153846153846,
		cover: {
			id: 122294,
			image_id: "co2md2",
		},
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
		summary:
			"Detroit: Become Human puts the destiny of both mankind and androids in your hands, taking you to a near future where machines have become more intelligent than humans. Every choice you make affects the outcome of the game, with one of the most intricately branching narratives ever created.",
	},
	{
		id: 6801,
		aggregated_rating: 86.4210526315789,
		cover: {
			id: 124030,
			image_id: "co2npa",
		},
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
		summary:
			"In Far Cry 4, players find themselves in Kyrat, a wild region of the Himalayas struggling under the regime of a despotic self-appointed king. Using a vast array of weapons, vehicles and animals, players will write their own story across an exotic open-world landscape.",
	},
	{
		id: 1266,
		aggregated_rating: 81.1764705882353,
		cover: {
			id: 90090,
			image_id: "co1xii",
		},
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
		summary:
			"The American Colonies, 1775. A brave young warrior fights to save his homeland. But what begins as a struggle over territory turns into an extraordinary journey that will transform him into a Master Assassin—and will forever change the destiny of a nation.\n\nYou are Connor, warrior son of a Native American mother and British father. As the colonies draw closer to revolution, you will dedicate your life to the freedom of your clan –becoming the spark that ignites the revolution into full blaze. Your crusade will take you through blood-soaked battlefields to crowded city streets, to perilous wilderness and beyond. You will not only witness history—you will make it.\nWelcome to an entirely new chapter in the Assassin’s Creed saga.",
	},
	{
		id: 11208,
		aggregated_rating: 85.72,
		cover: {
			id: 266131,
			image_id: "co5pcj",
		},
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
		summary: "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
	},
	{
		id: 7342,
		aggregated_rating: 92.4871794871795,
		cover: {
			id: 113194,
			image_id: "co2fca",
		},
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
		summary: "An atmospheric 2D side-scroller in which, hunted and alone, a boy finds himself drawn into the center of a dark project and struggles to preserve his identity.",
	},
	{
		id: 7344,
		aggregated_rating: 88.2857142857143,
		cover: {
			id: 90865,
			image_id: "co1y41",
		},
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
		summary:
			"The forest of Nibel is dying. After a powerful storm sets a series of devastating events in motion, an unlikely hero must journey to find his courage and confront a dark nemesis to save his home. Ori and the Blind Forest tells the tale of a young orphan destined for heroics, through a visually stunning action-platformer crafted by Moon Studios for Xbox One and PC. Featuring hand-painted artwork, meticulously animated character performance, and a fully orchestrated score, Ori and the Blind Forest explores a deeply emotional story about love and sacrifice, and the hope that exists in us all.",
	},
	{
		id: 3225,
		aggregated_rating: 73.8421052631579,
		cover: {
			id: 258126,
			image_id: "co5j66",
		},
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
		summary:
			"Inspired by the adventure and imagination that we love from classic science-fiction, No Man's Sky presents you with a galaxy to explore, filled with unique planets and lifeforms, and constant danger and action.\n\nIn No Man's Sky, every star is the light of a distant sun, each orbited by planets filled with life, and you can go to any of them you choose. Fly smoothly from deep space to planetary surfaces, with no loading screens, and no limits. In this infinite procedurally generated universe, you'll discover places and creatures that no other players have seen before - and perhaps never will again.",
	},
	{
		id: 3035,
		aggregated_rating: 88.5,
		cover: {
			id: 82089,
			image_id: "co1rc9",
		},
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
		summary:
			"The Stanley Parable is a first-person exploration game which ponders questions related to player agency, narrative pacing, escapism through gaming, objective-driven game design, authorial intent, and the conflict of interest between players and game creators.",
	},
	{
		id: 2993,
		aggregated_rating: 79.5227272727273,
		cover: {
			id: 82114,
			image_id: "co1rcy",
		},
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
		summary:
			"The Wolf Among Us is a five episode series from the creators of the 2012 Game of the Year: The Walking Dead. Based on Fables (DC Comics/Vertigo), an award-winning comic book series, it is an often violent, mature and hard-boiled thriller where the characters and creatures of myth, lore and legend are real and exist in our world. As Bigby Wolf - The Big Bad Wolf in human form - you will discover that the brutal, bloody murder of a Fable is just a taste of things to come, in a game series where your every decision can have enormous consequences.",
	},
	{
		id: 19561,
		aggregated_rating: 74.6875,
		cover: {
			id: 71279,
			image_id: "co1izz",
		},
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
		summary:
			"Days Gone is an open-world action-adventure game set in a harsh wilderness two years after a devastating global pandemic. Play as Deacon St. John, a Drifter and bounty hunter who rides the broken road, fighting to survive while searching for a reason to live.\n\nAt its core, Days Gone is about survivors and what makes them human: desperation, loss, madness, betrayal, friendship, brotherhood, regret, love – and hope. It’s about how even when confronted with such enormous tragedy they find a reason to live. Hope never dies.",
	},
	{
		id: 18320,
		aggregated_rating: 89.0952380952381,
		cover: {
			id: 123457,
			image_id: "co2n9d",
		},
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
		summary:
			"Discover classic Battlefield gameplay with epic multiplayer and an adventure-filled campaign. Experience the dawn of all-out war, only in Battlefield 1. Fight your way through epic battles going from tight urban combat in a besieged French city to big open spaces in the Italian Alps or frantic combats in the Arabic sand dunes. Experience large-scale battles as infantry or piloting vehicles on land, air and sea, from the tanks and bikes on the ground, to bi-planes and gigantic battleships.",
	},
	{
		id: 1352,
		aggregated_rating: 93.8571428571429,
		cover: {
			id: 80666,
			image_id: "co1q8q",
		},
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
		summary:
			"A third-person adventure game in which the player, controlling a robed figure, makes a pilgrimage through a desert landscape to a rugged mountain with a beacon of light in the distance while uncovering the history of their people, rescuing and cooperating with friendly creatures, avoiding predatory ones and communicating with other travelers.",
	},
	{
		id: 537,
		aggregated_rating: 81.7142857142857,
		cover: {
			id: 90089,
			image_id: "co1xih",
		},
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
		summary:
			"Assassin's Creed Revelations presents the most immersive experience available in the series to date and the culmination of Ezio's adventure. In Assassin's Creed Revelations, master assassin Ezio Auditore walks in the footsteps of his legendary mentor, Altair, on a journey of discovery and revelation. It is a perilous path - one that will take Ezio to Constantinople, the heart of the Ottoman Empire, where a growing army of Templars threatens to destabilize the region.\n\nIn addition to Ezio's award-winning story, the acclaimed online multiplayer experience from Assassin's Creed Brotherhood returns; refined and expanded, with more modes, more maps and more characters that allow players to test their assassin skills against others from around the world. The latest chapter in the Assassin's Creed saga also includes revolutionary gameplay, allowing players to manipulate the construct of Desmond's memories and the Animus to decipher the mysteries of his past and gain insight into the future.",
	},
	{
		id: 11198,
		aggregated_rating: 88.7058823529412,
		cover: {
			id: 274784,
			image_id: "co5w0w",
		},
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
		summary:
			"Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Rocket League includes casual and competitive Online Matches, a fully-featured offline Season Mode, special “Mutators” that let you change the rules entirely, hockey and basketball-inspired Extra Modes, and more than 500 trillion possible cosmetic customization combinations.",
	},
	{
		id: 119313,
		aggregated_rating: 76.6,
		cover: {
			id: 227811,
			image_id: "co4vs3",
		},
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
		summary:
			"Fall Guys flings hordes of contestants together online in a mad dash through round after round of escalating chaos until one victor remains! Battle bizarre obstacles, shove through unruly competitors, and overcome the unbending laws of physics to avoid both humiliation and elimination. Leave your dignity at the door and prepare for hilarious failure in your quest for the crown.",
	},
	{
		id: 40,
		aggregated_rating: 72.625,
		cover: {
			id: 123159,
			image_id: "co2n13",
		},
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
		summary:
			'The storyline for Mafia II is a gritty drama and chronicles the rise of Vito Scaletta, the son of Sicilian immigrants. As the game progresses, Vito joins the Falcone crime family and becomes "a made man" along with his best friend Joe Barbaro.',
	},
	{
		id: 19562,
		aggregated_rating: 88.4615384615385,
		cover: {
			id: 238676,
			image_id: "co545w",
		},
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
		summary:
			"Resident Evil 7: Biohazard is the first game of the Resident Evil series to switch from 3rd-person to fully 1st-person perspective. A complete refresh of gameplay systems simultaneously propels the survival horror experience to another level. It is as much horror as it is survival, boosting up scare elements and minimizing downright shooting action. The game allows use of Sony's PSVR Headset to play in VR mode.",
	},
	{
		id: 109,
		aggregated_rating: 89.375,
		cover: {
			id: 121019,
			image_id: "co2ldn",
		},
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
		summary:
			"L.A. Noire is a neo-noir detective action-adventure video game developed by Team Bondi and published by Rockstar Games. It was initially released for the PlayStation 3 and Xbox 360 platforms on 17 May 2011; a Microsoft Windows port was later released on 8 November 2011.\n\nL.A. Noire is set in Los Angeles in 1947 and challenges the player, controlling a Los Angeles Police Department (LAPD) officer, to solve a range of cases across five divisions. Players must investigate crime scenes for clues, follow up leads, and interrogate suspects, and the player's success at these activities will impact how much of each case's story is revealed.\n\nThe game draws heavily from both the plot and aesthetic elements of film noir—stylistic films made popular in the 1940s and 1950s that share similar visual styles and themes, including crime and moral ambiguity—along with drawing inspiration from real-life crimes for its in-game cases, based upon what was reported by the Los Angeles media in 1947.\n\nThe game uses a distinctive colour palette, but in homage to film noir it includes the option to play the game in black and white. Various plot elements reference the major themes of detective and mobster stories such as The Naked City, Chinatown, The Untouchables, The Black Dahlia, and L.A. Confidential.",
	},
	{
		id: 9730,
		aggregated_rating: 79.2777777777778,
		cover: {
			id: 75281,
			image_id: "co1m35",
		},
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
		summary:
			"Firewatch is a single-player first-person video game where you, as a man named Henry, explore the Wyoming wilderness after taking a summer job as a fire lookout. What is supposed to be a peaceful respite from your complicated life takes a turn when you start to question some of the things that are happening to you.\n\nYour only human connection is over a handheld radio, which you’ll use to speak with your supervisor Delilah about the things both of you are experiencing.",
	},
	{
		id: 343,
		aggregated_rating: 85,
		cover: {
			id: 89850,
			image_id: "co1xbu",
		},
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
		summary:
			"In Battlefield 3, players step into the role of the elite U.S. Marines. As the first boots on the ground, players will experience heart-pounding missions across diverse locations including Paris, Tehran and New York. As a U.S. Marine in the field, periods of tension and anticipation are punctuated by moments of complete chaos. As bullets whiz by, as walls crumble, as explosions force players to the ground, the battlefield feels more alive and interactive than ever before.",
	},
	{
		id: 21,
		aggregated_rating: 87,
		cover: {
			id: 122599,
			image_id: "co2mlj",
		},
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
		summary:
			"BioShock 2 is the second game of the BioShock series and the sequel to BioShock. It continues the grand storyline of the underwater metropolis Rapture. BioShock 2 capitalizes and improves upon the high-quality effects, unique gameplay elements, and immersive atmosphere that defined the first game. It explores more brutal gameplay than its predecessor, with new enemies, weapons, Plasmids, and Gene Tonics.",
	},
	{
		id: 36950,
		aggregated_rating: 60.1333333333333,
		cover: {
			id: 123448,
			image_id: "co2n94",
		},
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
		summary:
			"Anthem is a shared-world action RPG, where players can delve into a vast landscape teeming with amazing technology and forgotten treasures. This is a world where Freelancers are called upon to defeat savage beasts, ruthless marauders, and forces plotting to conquer humanity.",
	},
	{
		id: 27421,
		aggregated_rating: 83.8947368421053,
		cover: {
			id: 94238,
			image_id: "co20pq",
		},
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
		summary:
			"Go behind enemy lines to forge your army, conquer Fortresses and dominate Mordor from within. Experience how the award winning Nemesis System creates unique personal stories with every enemy and follower, and confront the full power of the Dark Lord Sauron and his Ringwraiths in this epic new story of Middle-earth.",
	},
	{
		id: 1121,
		aggregated_rating: 81.0952380952381,
		cover: {
			id: 125924,
			image_id: "co2p5w",
		},
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
		summary:
			"Set in Chicago, where a central network of computers connects everyone and everything, Watch Dogs explores the impact of technology within our society. Using the city as your weapon, you will embark on a personal mission to inflict your own brand of justice. Chicago's overarching network is known as the Central Operating System (ctOS), and it controls almost all of the city's technology and information - including key data on all of the city's residents.",
	},
	{
		id: 1062,
		aggregated_rating: 83,
		cover: {
			id: 110729,
			image_id: "co2dft",
		},
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
		summary:
			"Presented in the style of a TV series, Alan Wake features the trademark Remedy storytelling and pulse-pounding action sequences. As players dive deeper and deeper into the mystery, they’ll face overwhelming odds, plot twists, and cliffhangers. It’s only by mastering the Fight With Light combat mechanic that they can stay one step ahead of the darkness that spreads across Bright Falls.\n\nWith the body of an action game and the mind of a psychological thriller, Alan Wake’s intense atmosphere, deep and multi-layered story, and exceptionally tense combat sequences provide players with an entertaining and original gaming experience.",
	},
	{
		id: 960,
		aggregated_rating: 89.3333333333333,
		cover: {
			id: 122532,
			image_id: "co2mjo",
		},
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
		summary:
			"Max Payne 3 is a third-person shooter in which the player assumes the role of its titular character, Max Payne. A new feature to the series, introduced in Max Payne 3, is the cover system, which allows players to gain a tactical advantage, and avoid taking damage from enemies. To progress through the linear story, players take on enemies throughout levels. The game features interactive cutscenes which transition seamlessly into continuing gameplay; there are no loading screens across gameplay and cutscenes.",
	},
	{
		id: 885,
		aggregated_rating: 85.25,
		cover: {
			id: 102622,
			image_id: "co276m",
		},
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
		summary:
			"Super Meat Boy is a tough as nails platformer where you play as an animated cube of meat who's trying to save his girlfriend (who happens to be made of bandages) from an evil fetus in a jar wearing a tux.",
	},
	{
		id: 493,
		aggregated_rating: 80.25,
		cover: {
			id: 175606,
			image_id: "co3rhy",
		},
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
		summary:
			"Heavy Rain is a cinematic psychological thriller from game developer Quantic Dream exclusively for the PlayStation 3. Dealing with a range of adult themes, the game revolves around a sophisticated plot and strong narrative threads that explore a complex moral proposition. You assume the role of multiple characters with very different backgrounds, motivations, and skills in a world where each player decision affects what will follow.",
	},
	{
		id: 359,
		aggregated_rating: 81.44,
		cover: {
			id: 85214,
			image_id: "co1tr2",
		},
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
		summary:
			"Take the journey, now in ultimate quality. Boasting a wealth of bonus content and supporting ultra high-resolution graphical options and HDR 10, you can now enjoy the beautiful and carefully-crafted experience of FINAL FANTASY XV like never before.",
	},
	{
		id: 19564,
		aggregated_rating: 84.4117647058823,
		cover: {
			id: 274400,
			image_id: "co5vq8",
		},
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
		summary:
			"From legendary game creator Hideo Kojima comes an all-new, genre-defying open world action adventure, starring Norman Reedus, Mads Mikkelsen, Léa Seydoux and Lindsay Wagner.\n\nIn the near future, mysterious explosions have rocked the globe, setting off a series of supernatural events known as the Death Stranding. With otherworldly creatures plaguing the landscape, and mass extinction imminent, it’s up to Sam Porter Bridges to travel across the ravaged wasteland and save humanity from impending annihilation.",
	},
	{
		id: 11118,
		aggregated_rating: 85.85,
		cover: {
			id: 266148,
			image_id: "co5pd0",
		},
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
		summary:
			"Dishonored 2 is a first-person action video game and the sequel to Dishonored. It borrows many of the gameplay elements from the first opus: players define their own play style by blending action, assassination, stealth, mobility and combat. Combining tools at their disposal, players are allowed options to eliminate enemies, whether they choose to pursue them unseen or ruthlessly attack head on. Dishonored 2 features the same campaign style as its predecessor in which the protagonist must advance through a series of missions.",
	},
	{
		id: 7205,
		aggregated_rating: 84.7222222222222,
		cover: {
			id: 101274,
			image_id: "co2656",
		},
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
		summary:
			"SuperHot is the first person shooter where time moves only when you move. No regenerating health bars. No conveniently placed ammo drops. It's just you, outnumbered and outgunned, grabbing weapons off fallen enemies to shoot, slice, and maneuver through a hurricane of slow-motion bullets.\n\nWith its mesmerising gameplay and unique, stylized graphics SUPERHOT aims to finally add something new and disruptive to the FPS genre.\n\nSee the bullets crawling towards you as you carefully plan your steps and aim your gun. Enjoy the mayhem that is unleashed as you put that plan into motion.",
	},
	{
		id: 19531,
		aggregated_rating: 75.8125,
		cover: {
			id: 39984,
			image_id: "pzgwdpvoww1nrlkv7d5x",
		},
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
		summary:
			"In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted. As you dig into the dark secrets of Talos I and your own past, you must survive using the tools found on the station, your wits, weapons, and mind-bending abilities.",
	},
	{
		id: 239,
		aggregated_rating: 89.4,
		cover: {
			id: 85091,
			image_id: "co1tnn",
		},
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
		summary:
			"In the distant future, in the darkest reaches of space, the ghosts of the past whisper your name. You are Jim Raynor, a marshal-turned-rebel on a vigilante crusade to bring down the Dominion and its nefarious leader, Arcturus Mengsk. Haunted by betrayal and remorse, some believe you may have given up the fight. But you have promises to keep… and a need for vengeance that’s long overdue.",
	},
	{
		id: 38,
		aggregated_rating: 90,
		cover: {
			id: 94526,
			image_id: "co20xq",
		},
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
		summary:
			"Three years after the Necromorph infestation aboard the USS Ishimura, Isaac Clarke awakens from a coma, confused, disoriented, and on a space station called The Sprawl. Just as his health begins to improve, The Sprawl is overrun with even more advanced forms of the alien-zombie hybrids.",
	},
	{
		id: 3042,
		aggregated_rating: 72.0588235294118,
		cover: {
			id: 287666,
			image_id: "co65yq",
		},
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
		summary:
			"Dying Light is a first-person, action survival horror game set in a vast and dangerous open world. During the day, players traverse an expansive urban environment overrun by a vicious outbreak, scavenging the world for supplies and crafting weapons to defend against the growing infected population. At night, the hunter becomes the hunted, as the infected become aggressive and more dangerous. Most frightening are the predators which only appear after sundown. Players must use everything in their power to survive until the morning’s first light.",
	},
	{
		id: 17000,
		aggregated_rating: 90.5384615384615,
		cover: {
			id: 14012,
			image_id: "xrpmydnu9rpxvxfjkiu7",
		},
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
		summary:
			"Stardew Valley is an open-ended country-life RPG! You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!",
	},
];

export default function Trending() {
	return (
		<TrendingContainer>
			<h2>Trending Games</h2>
			<p>Os 100 jogos mais populares da comunidade.</p>
			<GamesBox>
				{games.map((game) => (
					<GameComponent game={game} key={game.id} />
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
