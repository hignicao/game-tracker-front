import { UserDataType } from "../contexts/UserContext";
import api from "./api";

export async function signIn(username: string, password: string, remember: boolean): Promise<UserDataType> {
	const response = await api.post("/auth/sign-in", { username, password, remember });
	return response.data;
}
