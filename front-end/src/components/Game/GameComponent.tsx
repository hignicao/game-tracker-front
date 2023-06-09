import { Paper, Box, styled } from "@mui/material";
import { useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { GameComponentType } from "../../utils/protocols";
import PopupStatus from "../PopupStatus/PopupStatus";
interface GameProps {
	location: string;
	status: number;
}

export default function GameComponent({ game, location }: { game: GameComponentType; location: string }) {
	const [showPopup, setShowPopup] = useState(false);
	const navigate = useNavigate();

	const togglePopup = () => {
		setShowPopup(!showPopup);
	};

	const handleGameClick = () => {
		navigate(`/game/${game.id}`);
	};

	return (
		<>
			<GamePaper elevation={3} location={location} status={game.statusId}>
				<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover}.jpg`} alt="" />
				<TitleBox location={location} status={game.statusId} onClick={handleGameClick}>
					<h3>{game.name}</h3>
				</TitleBox>
				<HiPlusCircle onClick={togglePopup} />
			</GamePaper>
			{showPopup && <PopupStatus game={game} setShowPopup={setShowPopup} />}
		</>
	);
}

const GamePaper = styled(Paper)<GameProps>`
	cursor: pointer;
	position: relative;
	height: ${(props) => (props.location === "p" ? "180px" : props.location === "t" ? "216px" : "324px")};
	width: ${(props) => (props.location === "p" ? "135px" : props.location === "t" ? "162px" : "243px")};
	border-radius: 7px;
	border: ${(props) =>
		props.location === "t"
			? "none"
			: props.status === 1
			? "2px solid #479B42"
			: props.status === 2
			? "2px solid #438EB9"
			: props.status === 3
			? "2px solid #EDA55D"
			: props.status === 4
			? "2px solid #EF525C"
			: "none"};
	img {
		min-width: 100%;
		height: 100%;
		border-radius: 5px;
		object-fit: cover;
	}
	svg {
		background: ${(props) => (props.status === 1 ? "#479B42" : props.status === 2 ? "#438EB9" : props.status === 3 ? "#EDA55D" : props.status === 4 ? "#EF525C" : "black")};
		border-radius: 50%;
		box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.8);
		z-index: 2;
		color: white;
		display: none;
		position: absolute;
		bottom: 10px;
		right: 10px;
		font-size: ${(props) => (props.location === "p" ? "25px" : props.location === "t" ? "30px" : "30px")};
	}
	:hover {
		svg {
			display: block;
		}
	}
	@media (max-width: 600px) {
		height: ${(props) => props.location === "t" && "180px"};
		width: ${(props) => props.location === "t" && "135px"};
		svg {
			display: block;
			font-size: 25px;
		}
	}
`;

const TitleBox = styled(Box)<GameProps>`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 5px;
	transition: all 0.2s ease-in-out;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	h3 {
		display: none;
		color: white;
		font-size: ${(props) => (props.location === "p" ? "12px" : props.location === "t" ? "16px" : "20px")};
		font-weight: 500;
		font-style: italic;
		text-align: center;
		text-shadow: 1px 1px 5px black;
	}
	:hover {
		background-color: #0000007a;
		h3 {
			display: block;
		}
	}
`;
