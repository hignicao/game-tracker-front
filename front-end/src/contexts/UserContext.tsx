import { createContext, useState, ReactNode, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export type UserDataType = {
	user: {
		id: number;
		name: string;
		username: string;
		email: string;
	};
	token: string;
};

type UserContextType = {
	userData: UserDataType | undefined;
	setUserData: (data: UserDataType | undefined) => void;
	avatarPicture: string;
	setSaveInLocalStorage: (data: boolean) => void;
};

export const UserContext = createContext<UserContextType>({
	userData: {
		user: {
			id: 0,
			name: "",
			username: "",
			email: "",
		},
		token: "",
	},
	setUserData: () => {},
	avatarPicture: "",
	setSaveInLocalStorage: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
	const [saveInLocalStorage, setSaveInLocalStorage] = useState(false);
	const [userData, setUserData] = useLocalStorage("userData", undefined);
	const [avatarPicture, setAvatarPicture] = useState(``);

	useEffect(() => {
		if (userData) {
			setAvatarPicture(`https://source.boringavatars.com/beam/120/${userData?.user.username}}`);
		}
	}, [userData]);

	return <UserContext.Provider value={{ userData, setUserData, avatarPicture, setSaveInLocalStorage }}>{children}</UserContext.Provider>;
}
