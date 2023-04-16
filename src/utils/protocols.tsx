export type GameType = {
	id: number;
	name: string;
	cover: string;
	rating: number;
	releaseDate: Date;
	summary: string;
	genres: {
		id: number;
		name: string;
	}[];
	platforms: {
		id: number;
		name: string;
	}[];
	screenshots: string[];
	statusId: number;
};

export type TrendingGameType = Pick<GameType, "id" | "name" | "cover" | "rating" | "statusId">;

export type CollectionGameType = Pick<GameType, "id" | "name" | "cover" | "rating" | "statusId">;

export type SimplifiedCollectionGameType = Pick<GameType, "id" | "statusId">;

export type SearchedGameType = Pick<GameType, "id" | "name" | "cover" | "summary" | "genres" | "statusId" | "releaseDate">;

export type UserType = {
	id: number;
	username: string;
	name: string;
	collection: CollectionGameType[];
};
