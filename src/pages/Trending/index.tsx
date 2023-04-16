import { Box, Container, Skeleton, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import GameComponent from "../../components/Game/GameComponent";
import { UserContext } from "../../contexts/UserContext";
import { getCollection } from "../../services/collectionApi";
import { getTrendingGames } from "../../services/gameApi";
import { TrendingGameType } from "../../utils/protocols";

export default function Trending() {
	const { userData } = useContext(UserContext);
	const [trendingGames, setTrendingGames] = useState() as [TrendingGameType[], (game: TrendingGameType[]) => void];
	const [updateList, setUpdateList] = useState(false);

	async function getTrendingGame() {
		const trending = await getTrendingGames();
		if (userData) {
			const collection = await getCollection(userData.token);
			trending.forEach((trendingGame) => {
				const foundGame = collection.find((game) => game.id === trendingGame.id);
				if (foundGame) {
					trendingGame.statusId = foundGame.statusId;
				}
			});
		}
		setTrendingGames(trending);
	}

	useEffect(() => {
		getTrendingGame();
	}, [updateList]);

	if (!trendingGames) {
		return (
			<TrendingContainer>
				<h2>Trending Games</h2>
				<p>The top 100 trending games around the community.</p>
				<GamesBox>
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={162} />
				</GamesBox>
			</TrendingContainer>
		);
	}

	return (
		<TrendingContainer>
			<h2>Trending Games</h2>
			<p>The top 100 trending games around the community.</p>
			<GamesBox>
				{trendingGames.map((game) => (
					<GameComponent game={game} key={game.id} location="t"/>
				))}
			</GamesBox>
		</TrendingContainer>
	);
}

const TrendingContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 70px;
	h2 {
		font-size: 35px;
		font-weight: 600;
	}
	p {
		font-size: 18px;
	}
	@media (max-width: 600px) {
		align-items: center;
		gap: 5px;
		p {
			text-align: center;
			font-size: 16px;
		}
	}
`;

const GamesBox = styled(Box)`
	margin-top: 40px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 15px;
	@media (max-width: 600px) {
		margin-top: 30px;
	}
`;
