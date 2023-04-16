import { SimplifiedCollectionGameType } from "../utils/protocols";
import api from "./api";

export async function getCollection(token: string): Promise<SimplifiedCollectionGameType[]> {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await api.get(`/collection`, config);
	return response.data;
}

export async function updateGameCollection(gameId: number, statusId: number, token: string) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const body = {
		gameId,
		statusId,
	};

	const response = await api.put(`/collection/update-collection`, body, config);
	return response.data;
}

export async function deleteGameFromCollection(gameId: number, token: string) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await api.delete(`/collection/${gameId}`, config);
	return response.data;
}
