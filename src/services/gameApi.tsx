import { GameType, SearchedGameType, TrendingGameType } from "../utils/protocols";
import api from "./api";

export async function getGameInfo(gameId: number): Promise<GameType> {
	const response = await api.get(`/games/info/${gameId}`);
	return response.data;
}

export async function getTrendingGames(): Promise<TrendingGameType[]> {
	const response = await api.get(`/games/trending`);
	return response.data;
}

export async function searchGames(search: string): Promise<SearchedGameType[]> {
	const response = await api.get(`/games/search?game=${search}`);
	return response.data;
}
