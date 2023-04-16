import { Button, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import { SearchedGameType } from "../../utils/protocols";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function SearchedItem({ game }: { game: SearchedGameType }) {
	const navigate = useNavigate();

	const handleGameClick = () => {
		navigate(`/game/${game.id}`);
	};

	return (
		<SearchPaper elevation={3}>
			<CoverBox onClick={handleGameClick}>
				<img src={`https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover}.jpg`} alt="game's cover" />
			</CoverBox>
			<InfoBox>
				<NameSummaryBox>
					<p onClick={handleGameClick}>
						{game.name} ({format(new Date(game.releaseDate), "yyyy")})
					</p>
					<span>{game.summary && game.summary.slice(0, 200)}...</span>
				</NameSummaryBox>
				<GenresBox>
					{game.genres.map((genre) => (
						<Button variant="outlined" size="small" color="secondary">
							{genre.name}
						</Button>
					))}
				</GenresBox>
			</InfoBox>
		</SearchPaper>
	);
}

const SearchPaper = styled(Paper)`
	background-color: #3f3c5c;
	width: 560px;
	height: 250px;
	display: flex;
	gap: 15px;
	padding: 10px;
	border-radius: 5px;
	@media (max-width: 600px) {
		width: 100%;
		height: 186px;
	}
`;

const CoverBox = styled(Box)`
	display: flex;
	cursor: pointer;
	img {
		width: 172px;
		height: 100%;
		border-radius: 5px;
		object-fit: cover;
	}
	@media (max-width: 600px) {
		img {
			width: 125px;
		}
	}
`;

const InfoBox = styled(Box)`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: space-between;
`;

const NameSummaryBox = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 15px;
	p {
		color: white;
		font-size: 20px;
		font-weight: 600;
		cursor: pointer;
	}
	span {
		text-align: justify;
		font-size: 15px;
		font-weight: 300;
		text-align: left;
		color: #e1d6ff;
		overflow-y: scroll;
		max-height: 100px;
		::-webkit-scrollbar {
			display: none;
		}
	}
	@media (max-width: 600px) {
		p {
			font-size: 16px;
		}
		span {
			max-height: 50px;
		}
	}
	@media (max-width: 400px) {
		span {
			display: none;
		}
	}
`;

const GenresBox = styled(Box)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
	flex-wrap: wrap;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
	button {
		font-size: 12px;
		color: #b398ff;
	}
	@media (max-width: 600px) {
		button {
			font-size: 10px;
		}
	}
`;
