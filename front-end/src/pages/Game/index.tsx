import { Box, Button, Container, Paper, Rating, Skeleton, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameInfo } from "../../services/gameApi";
import { GameType } from "../../utils/protocols";
import { format, intlFormatDistance } from "date-fns";
import ScreenshotsGrid from "../../components/ScreenshotsGrid/Screenshots";
import PopupStatus from "../../components/PopupStatus/PopupStatus";
import { HiPlusCircle } from "react-icons/hi";
import { getCollection } from "../../services/collectionApi";
import { UserContext } from "../../contexts/UserContext";

interface GameProps {
	status: number;
}

export default function Game() {
	const { userData } = useContext(UserContext);
	const { gameId } = useParams() as { gameId: string };
	const [game, setGame] = useState() as [GameType, (game: GameType) => void];
	const [isReadMore, setIsReadMore] = useState(true);
	const [randomBackground, setRandomBackground] = useState(0);
	const [showPopup, setShowPopup] = useState(false);

	const togglePopup = () => {
		setShowPopup(!showPopup);
	};

	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	async function getGame() {
		const gameApi = await getGameInfo(Number(gameId));
		if (userData) {
			const collection = await getCollection(userData.token);
			const foundGame = collection.find((game) => game.id === Number(gameApi.id));
			if (foundGame) {
				gameApi.statusId = foundGame.statusId;
			}
		}
		setGame(gameApi);
		setRandomBackground(Math.floor(Math.random() * gameApi.screenshots.length));
	}

	useEffect(() => {
		getGame();
	}, [gameId, showPopup]);

	if (!game) {
		return (
			<Container>
				<GameInfoBox>
					<CoverBox>
						<CoverPaper status={0}></CoverPaper>
						<NameRatingSummaryBox status={0}>
							<Skeleton sx={{ bgcolor: "#705f91" }} variant="text" width={300} height={80} />
							<RatingBox>
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={150} height={30} />
							</RatingBox>
							<SummaryBox>
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="text" width={500} height={120} />
							</SummaryBox>
						</NameRatingSummaryBox>
					</CoverBox>
					<InfoBox>
						<InfoBoxLeft>
							<GenresBox>
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={80} height={30} />
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={80} height={30} />
							</GenresBox>
							<ReleaseBox>
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="text" width={150} height={50} />
							</ReleaseBox>
							<PlatformsBox>
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="text" width={150} height={50} />
							</PlatformsBox>
						</InfoBoxLeft>
						<InfoBoxRight>
							<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={300} height={200} />
							<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={150} height={100} />
						</InfoBoxRight>
					</InfoBox>
				</GameInfoBox>
			</Container>
		);
	}

	return (
		<Container>
			<GameBackground>
				{game.screenshots.length > 0 && (
					<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${game.screenshots[randomBackground]}.jpg`} alt="Screenshot of the game being used to be the background of the page" />
				)}
				<GradientDiv />
			</GameBackground>
			<GameInfoBox>
				<CoverBox>
					<CoverPaper elevation={3} status={game.statusId}>
						<img src={`https://images.igdb.com/igdb/image/upload/t_1080p_2x/${game.cover}.jpg`} alt="" />
					</CoverPaper>
					<NameRatingSummaryBox status={game.statusId}>
						<HiPlusCircle onClick={togglePopup} />
						<h1>{game.name}</h1>
						<RatingBox>
							<Rating name="read-only" value={game.rating / 20} precision={0.1} readOnly size="medium" />
							<p>{game.rating === null ? "N/A" : (game.rating / 20).toFixed(1)}</p>
						</RatingBox>
						<SummaryBox>
							<p>
								{isReadMore ? game.summary.slice(0, 250) : game.summary}
								{game.summary.length > 250 && <span onClick={toggleReadMore}>{isReadMore ? "...read more" : " show less"}</span>}
							</p>
						</SummaryBox>
					</NameRatingSummaryBox>
				</CoverBox>
				<InfoBox>
					<InfoBoxLeft>
						<GenresBox>
							{game.genres.map((genre) => (
								<Button variant="outlined" size="small" color="secondary">
									{genre.name}
								</Button>
							))}
						</GenresBox>
						<ReleaseBox>
							<p>Release Date:</p>
							<span>
								{game.releaseDate === null ? (
									"N/A"
								) : (
									<>
										{format(new Date(game.releaseDate), "LLL dd, yyyy")} ({intlFormatDistance(new Date(game.releaseDate), new Date())})
									</>
								)}
							</span>
						</ReleaseBox>
						<PlatformsBox>
							<p>Platforms:</p>
							{game.platforms.length === 0 && <span>N/A</span>}
							{game.platforms.map((platform) => (
								<span>- {platform.name}</span>
							))}
						</PlatformsBox>
						<Button variant="contained" color="secondary" onClick={togglePopup}>
							+ Add to Collection
						</Button>
					</InfoBoxLeft>
					<InfoBoxRight>
						<ScreenshotsGrid screenshots={game.screenshots} />
					</InfoBoxRight>
				</InfoBox>
			</GameInfoBox>
			{showPopup && <PopupStatus game={game} setShowPopup={setShowPopup} />}
		</Container>
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

const GameInfoBox = styled(Box)`
	align-self: center;
	margin: 250px 0px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	@media (max-width: 600px) {
		margin: 100px 0px;
	}
`;

const CoverBox = styled(Box)`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	gap: 30px;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

const CoverPaper = styled(Paper)<GameProps>`
	align-self: flex-start;
	min-width: 243px;
	height: 324px;
	border-radius: 10px;
	border: ${(props) =>
		props.status === 1 ? "4px solid #479B42" : props.status === 2 ? "4px solid #438EB9" : props.status === 3 ? "4px solid #EDA55D" : props.status === 4 ? "4px solid #EF525C" : "0px solid #000000"};
	img {
		width: 100%;
		height: 100%;
		border-radius: 6px;
	}
	@media (max-width: 600px) {
		align-self: center;
		min-width: 187px;
		height: 250px;
	}
`;

const NameRatingSummaryBox = styled(Box)<GameProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	h1 {
		font-size: 40px;
		font-weight: 600;
	}
	> svg {
		position: absolute;
		top: 10px;
		left: 10px;
		font-size: 35px;
		background: ${(props) => (props.status === 1 ? "#479B42" : props.status === 2 ? "#438EB9" : props.status === 3 ? "#EDA55D" : props.status === 4 ? "#EF525C" : "black")};
		border-radius: 50%;
		box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.8);
		cursor: pointer;
	}
	@media (max-width: 600px) {
		align-items: center;
		text-align: center;
		h1 {
			font-size: 32px;
		}
	}
`;

const RatingBox = styled(Box)`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	gap: 10px;
	p {
		font-size: 18px;
		font-weight: 300;
		font-family: "Audiowide", cursive;
	}
	@media (min-width: 600px) {
		svg {
			font-size: 30px;
		}
	}
`;

const SummaryBox = styled(Box)`
	p {
		font-size: 18px;
		font-weight: 300;
		line-height: 25px;
	}
	span {
		cursor: pointer;
		color: #ab99ca;
	}
	@media (max-width: 600px) {
		p {
			text-align: justify;
			font-size: 16px;
			line-height: 20px;
		}
	}
`;

const InfoBox = styled(Box)`
	display: flex;
	flex-direction: row;
	gap: 30px;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

const InfoBoxLeft = styled(Box)`
	min-width: 243px;
	width: 243px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	@media (max-width: 600px) {
		width: 100%;
	}
`;

const GenresBox = styled(Box)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
	flex-wrap: wrap;
	button {
		font-size: 12px;
		color: #827ea8;
	}
`;

const ReleaseBox = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 5px;
	p {
		font-size: 14px;
		color: #9793b8;
	}
	span {
		font-size: 16px;
		font-family: "Audiowide", cursive;
	}
`;

const PlatformsBox = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 5px;
	p {
		font-size: 14px;
		color: #9793b8;
	}
	span {
		font-size: 16px;
		font-family: "Audiowide", cursive;
	}
`;

const InfoBoxRight = styled(Box)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 25px;
	p {
		font-size: 22px;
		font-weight: 600;
	}
`;
