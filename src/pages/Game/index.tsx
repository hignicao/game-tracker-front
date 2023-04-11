import { Box, Container, styled } from "@mui/material";
import { useParams } from "react-router-dom";

const game = {
	id: 472,
	rating: 96.1111111111111,
	cover: "co1tnw",
	releaseDate: 1320883200,
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
};

export default function Game() {
	const { gameId } = useParams() as { gameId: string };

	return (
		<>
			<GameBackground>
				<img src={`https://images.igdb.com/igdb/image/upload/t_1080p_2x/${game.screenshots[0].image_id}.jpg`} alt="Screenshot of the game being used to be the background of the page" />
				<GradientDiv />
			</GameBackground>
			<GameContainer>
				<h1>{game.name}</h1>
			</GameContainer>
		</>
	);
}

const GameBackground = styled(Box)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 600px;
	z-index: -1;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
	}
`;

const GradientDiv = styled(Box)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 600px;
	background: linear-gradient(180deg, rgba(11, 10, 18, 0.75) 0%, rgba(11, 10, 18, 0.8) 75%, rgba(31, 28, 51, 1) 100%);
`;

const GameContainer = styled(Container)`
	border: 1px solid red;
`;
