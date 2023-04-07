import { Paper, Box, styled } from "@mui/material";

interface SizeProps {
	size: string;
}

export default function GameComponent({ game, size }: { game: any; size: string }) {

	return (
		<GamePaper elevation={3} size={size}>
			<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg`} alt="" />
			<TitleBox size={size}>
				<h3>{game.name}</h3>
			</TitleBox>
		</GamePaper>
	);
}

const GamePaper = styled(Paper)<SizeProps>`
	position: relative;
	height: ${(props) => (props.size === "s" ? "180px" : props.size === "m" ? "216px" : "324px")};
	min-width: ${(props) => (props.size === "s" ? "135px" : props.size === "m" ? "162px" : "243px")};
	border-radius: 5px;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}
`;

const TitleBox = styled(Box)<SizeProps>`
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
		font-size: ${(props) => (props.size === "s" ? "12px" : props.size === "m" ? "16px" : "20px")};
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
