import { Box, Container, Skeleton, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchedItem from "../../components/SearchedComponent/SearchedComponent";
import { UserContext } from "../../contexts/UserContext";
import { getCollection } from "../../services/collectionApi";
import { searchGames } from "../../services/gameApi";
import { SearchedGameType } from "../../utils/protocols";

export default function Search() {
	const { search } = useParams() as { search: string };
	const { userData } = useContext(UserContext);
	const [searchedGames, setSearchedGames] = useState() as [SearchedGameType[], (game: SearchedGameType[]) => void];

	async function getTrendingGame() {
		const searchResult = await searchGames(search);
		if (userData) {
			const collection = await getCollection(userData.token);
			searchResult.forEach((searchResultGame) => {
				const foundGame = collection.find((game) => game.id === searchResultGame.id);
				if (foundGame) {
					searchResultGame.statusId = foundGame.statusId;
				}
			});
		}
		setSearchedGames(searchResult);
	}

	useEffect(() => {
		getTrendingGame();
	}, [search]);

	if (!searchedGames) {
		return (
			<SearchContainer>
				<h2>
					Results for: <span>{search}</span>
				</h2>
				<GamesBox>
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={560} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={560} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={560} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={560} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={560} />
					<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" height={216} width={560} />
				</GamesBox>
			</SearchContainer>
		);
	}

	return (
		<SearchContainer>
			<h2>
				Results for: <span>{search}</span>
			</h2>
			<p>
				Showing {searchedGames.length} results for {search} - Search results are sorted by relevance based on search query matches, popularity, and release year.
			</p>
			<GamesBox>
				{searchedGames.map((game) => (
					<SearchedItem key={game.id} game={game} />
				))}
			</GamesBox>
		</SearchContainer>
	);
}

const SearchContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 70px;
	h2 {
		font-size: 35px;
		font-weight: 600;
	}
	p {
		font-size: 12px;
	}
	span {
		font-weight: 300;
	}
	@media (max-width: 600px) {
		align-items: center;
		gap: 5px;
		text-align: center;
	}
`;

const GamesBox = styled(Box)`
	width: 100%;
	margin-top: 40px;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	@media (max-width: 600px) {
		margin-top: 30px;
	}
`;
