import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_BASE_URL,
});

export const externalInstance = axios.create();

export default instance;
