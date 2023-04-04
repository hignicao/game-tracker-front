import { Paper, Box, styled } from "@mui/material";

export default function GameComponent({ game }: { game: any }) {
	return (
		<GamePaper elevation={3}>
			<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg`} alt="" />
			<TitleBox>
				<h3>{game.name}</h3>
			</TitleBox>
		</GamePaper>
	);
}

const GamePaper = styled(Paper)`
	position: relative;
	height: 216px;
	width: 162px;
	border-radius: 5px;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
`;

const TitleBox = styled(Box)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 4px;
	transition: all 0.2s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
  padding: 10px;
	h3 {
    display: none;
    color: white;
		font-size: 16px;
		font-weight: 500;
		font-style: italic;
    text-align: center;
    text-shadow: 1px 1px 5px black;
	}
	:hover {
		background-color: #000000a9;
    h3 {
      display: block;
    }
	}
`;
