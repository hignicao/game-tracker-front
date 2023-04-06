import { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/images/logo.svg";
import { IoSearchSharp } from "react-icons/io5";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface ShowSearchBar {
	show: boolean;
}

export default function Header() {
	const { userData } = useContext(UserContext);
	const avatarPicture = `https://source.boringavatars.com/beam/40/${userData?.user.username}}`;
	const [showSearchBar, setShowSearchBar] = useState(false);
	const navigate = useNavigate();

	function handleSearchBar() {
		if (showSearchBar) {
			// search()
			setShowSearchBar(false);
		} else {
			setShowSearchBar(true);
		}
	}

	return (
		<HeaderContainer>
			<LeftHeader>
				<LogoContainer
					onClick={() => {
						navigate("/");
					}}
				>
					<img src={logo} alt="" />
					<p>GT</p>
				</LogoContainer>
				<HiddenSearchBar show={showSearchBar}>
					<input type="text" placeholder="Pesquisar" />
					<IoSearchSharp onClick={handleSearchBar} />
				</HiddenSearchBar>
				<DivCloseSearchBar show={showSearchBar} onClick={() => setShowSearchBar(false)} />
				<SearchBarContainer>
					<input type="text" placeholder="Pesquisar" />
					<IoSearchSharp onClick={() => alert("Pesquisar")} />
				</SearchBarContainer>
				<IoSearchSharp onClick={handleSearchBar} />
			</LeftHeader>
			<RightHeader>
				<MenuContainer>
					<LinkText to={"/trending"}>trending</LinkText>
					{userData && <LinkText to={"/profile"}>profile</LinkText>}
				</MenuContainer>
				<ProfileContainer>
					{userData !== undefined ? (
						<Avatar src={avatarPicture} />
					) : (
						<Button
							variant="contained"
							onClick={() => {
								navigate("/sign-in");
							}}
						>
							LogIn
						</Button>
					)}
				</ProfileContainer>
			</RightHeader>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	height: 70px;
	width: 100%;
	padding: 10px 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 40px;
	margin-bottom: 20px;
	@media (max-width: 600px) {
		padding: 10px 20px;
	}
`;

const LeftHeader = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 40px;
	> svg {
		display: none;
	}
	@media (max-width: 600px) {
		gap: 10px;
		> svg {
			display: block;
			font-size: 25px;
		}
	}
`;

const RightHeader = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 30px;
	@media (max-width: 600px) {
		gap: 20px;
	}
`;

const LogoContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
	img {
		height: 120%;
		@media (max-width: 600px) {
			height: 110%;
		}
	}
	p {
		color: white;
		font-family: "Audiowide", cursive;
		font-size: 25px;
		font-weight: 600;
		-webkit-text-stroke: 2px #0f0f0f;
		text-shadow: 0px 0px 2px #0f0f0f;
		@media (max-width: 600px) {
			display: none;
		}
	}
`;

const SearchBarContainer = styled.div`
	height: 40px;
	max-width: 300px;
	background-color: #151323;
	border-radius: 8px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding: 0px 10px;
	@media (max-width: 600px) {
		background: none;
		padding: 0px;
	}
	input {
		height: 100%;
		width: 100%;
		background: none;
		border: none;
		outline: none;
		font-family: "Roboto", sans-serif;
		font-size: 18px;
		padding: 0px;
		color: white;
		::placeholder {
			color: #747474;
		}
		@media (max-width: 600px) {
			display: none;
		}
	}
	svg {
		font-size: 20px;
		cursor: pointer;
		@media (max-width: 600px) {
			display: none;
		}
	}
`;

const HiddenSearchBar = styled.div<ShowSearchBar>`
	background-color: #312d5f;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 1;
	top: -70px;
	left: 0;
	height: 70px;
	width: 100%;
	padding: 0 20px;
	input {
		height: 35px;
		width: 100%;
		background: #262349;
		border: none;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		outline: none;
		font-family: "Roboto", sans-serif;
		font-size: 18px;
		padding: 10px;
		color: white;
		::placeholder {
			color: #747474;
		}
	}
	svg {
		background-color: #262349;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		padding: 5px;
		font-size: 35px;
	}
	@media (max-width: 600px) {
		top: ${(props) => (props.show ? "0" : "-70px;")};
		transition: top 0.5s ease-in-out;
	}
`;

const DivCloseSearchBar = styled.div<ShowSearchBar>`
	${(props) => !props.show && "display: none"};
	height: calc(100vh - 70px);
	width: 100%;
	z-index: 1;
	position: fixed;
	left: 0;
	top: 70px;
`;

const MenuContainer = styled.div`
	color: white;
	font-family: "Roboto", sans-serif;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 20px;
	@media (max-width: 600px) {
		gap: 15px;
	}
`;

const LinkText = styled(Link)`
	text-decoration: none;
	color: #ffffff;
`;

const ProfileContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	img {
		height: 40px;
		width: 40px;
		border-radius: 50%;
	}
`;
