import axios from "axios";
import { BASE_URL } from "../constants/urls";

const instance = axios.create({
	baseURL: BASE_URL,
});

export const externalInstance = axios.create();

export default instance;
