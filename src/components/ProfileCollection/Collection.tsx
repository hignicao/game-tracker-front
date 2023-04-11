import { Box, styled } from "@mui/material";
import GameComponent from "../Game/GameComponent";

export default function Collection({ games }: { games: any }) {
	return (
		<GameBox>
			<GamesMapped>
				{games.map((game) => (
					<GameComponent game={game.Games} key={game.Games.id} location="p" status={game.statusId} />
				))}
			</GamesMapped>
		</GameBox>
	);
}

const GameBox = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	> p {
		font-size: 30px;
		font-weight: 600;
	}
`;

const GamesMapped = styled(Box)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
	@media (max-width: 600px) {
		flex-wrap: nowrap;
		overflow-x: scroll;
		::-webkit-scrollbar {
			display: none;
		}
	}
`;
