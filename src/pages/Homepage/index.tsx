import { Box, Button, Container, Paper, Skeleton, styled } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import { VscCompass } from "react-icons/vsc";
import { BsStarHalf } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TrendingGameType } from "../../utils/protocols";
import { getTrendingGames } from "../../services/gameApi";
import GameComponent from "../../components/Game/GameComponent";

export default function Homepage() {
	const [trendingGames, setTrendingGames] = useState() as [TrendingGameType[], (game: TrendingGameType[]) => void];
	const navigate = useNavigate();

	async function getTrendingGame() {
		const trending = await getTrendingGames();
		setTrendingGames(trending);
	}

	useEffect(() => {
		getTrendingGame();
	}, []);

	return (
		<HomeContainer>
			<AppInfoBox maxWidth="sm">
				<LogoBox>
					<img src={logo} alt="logo" />
					<h1>GameTracker</h1>
				</LogoBox>
				<h2>Discover new games, track the ones you want to play and organize your collection in an easy and intuitive way.</h2>
				<p>Register now and start tracking!</p>
				<Button
					variant="contained"
					onClick={() => {
						navigate("/sign-up");
					}}
				>
					Sign-Up
				</Button>
			</AppInfoBox>
			<AppFeaturesBox maxWidth="md">
				<FeaturePaper elevation={3}>
					<VscCompass />
					<h6>Discover</h6>
					<p>Browse an extensive database looking for your next game.</p>
				</FeaturePaper>
				<FeaturePaper>
					<BsStarHalf />
					<h6>Rate</h6>
					<p>Evaluate the games you've already zeroed and see the total score.</p>
				</FeaturePaper>
				<FeaturePaper>
					<FaListUl />
					<h6>Organize</h6>
					<p>Browse an extensive database looking for your next game.</p>
				</FeaturePaper>
			</AppFeaturesBox>
			<GameBox>
				<p>Trending Games:</p>
				{!trendingGames ? (
					<GamesMapped>
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={162} height={216} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={162} height={216} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={162} height={216} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={162} height={216} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={162} height={216} />
					</GamesMapped>
				) : (
					<GamesMapped>
						{trendingGames.slice(0, 4).map((game) => (
							<GameComponent game={game} key={game.id} location="t" />
						))}
						<MoreBox onClick={() => navigate("/trending")}>+</MoreBox>
					</GamesMapped>
				)}
			</GameBox>
		</HomeContainer>
	);
}

const HomeContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 70px;
	margin-bottom: 70px;
`;

const AppInfoBox = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 30px;
	h2 {
		max-width: 500px;
		font-weight: 500;
		font-size: 25px;
	}
	p {
		font-size: 20px;
		max-width: 400px;
	}
	Button {
		margin-top: -10px;
	}
`;

const LogoBox = styled(Box)`
	align-self: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
	img {
		max-width: 180px;
		margin-bottom: -30px;
	}
	h1 {
		color: white;
		font-family: "Audiowide", cursive;
		font-size: 40px;
		font-weight: 400;
		-webkit-text-stroke: 1px #1f292b;
	}
`;

const AppFeaturesBox = styled(Box)`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 20px;
`;

const FeaturePaper = styled(Paper)`
	width: 240px;
	height: 200px;
	background-color: #ab99ca;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
	text-align: center;
	padding: 25px;
	@media (max-width: 600px) {
		width: 100%;
		height: 180px;
	}
	svg {
		font-size: 35px;
		margin-bottom: 15px;
	}
	h6 {
		font-size: 20px;
		font-weight: 600;
	}
	p {
		font-size: 15px;
	}
`;

const GameBox = styled(Box)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	> p {
		font-size: 30px;
		font-weight: 500;
	}
`;

const GamesMapped = styled(Box)`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	> span {
		font-size: 18px;
		font-weight: 300;
		width: 100%;
		padding: 30px 0;
		text-align: center;
	}
	@media (max-width: 1000px) {
		justify-content: flex-start;
		flex-wrap: nowrap;
		overflow-x: scroll;
		overflow-y: hidden;
		::-webkit-scrollbar {
			display: none;
		}
	}
`;

const MoreBox = styled(Box)`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #00000037;
	min-width: 162px;
	height: 216px;
	font-size: 50px;
	font-weight: 500;
	border-radius: 5px;
	@media (max-width: 600px) {
		min-width: 135px;
		height: 180px;
	}
`;
