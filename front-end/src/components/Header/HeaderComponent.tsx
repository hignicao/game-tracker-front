import { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/images/logo.svg";
import { IoSearchSharp } from "react-icons/io5";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

interface ShowSearchBar {
	show: boolean;
}

export default function Header() {
	const { userData, setUserData, avatarPicture } = useContext(UserContext);
	const [search, setSearch] = useState("");
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();

	function handleSearchBar() {
		if (showSearchBar) {
			navigate(`/search/${search}`);
			setSearch("");
			setShowSearchBar(false);
		} else {
			setShowSearchBar(true);
		}
	}

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	function handleLogout() {
		localStorage.removeItem("userData");
		setUserData(undefined);
		navigate("/");
	}

	return (
		<HeaderContainer>
			<LeftHeader>
				<LogoContainer
					onClick={() => {
						navigate("/");
					}}
				>
					<img src={logo} alt="game-tracker logo" />
					<p>GT</p>
				</LogoContainer>
				<HiddenSearchBar show={showSearchBar}>
					<BackGroundHiddenSearchBar>
						<form onSubmit={handleSearchBar}>
							<input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
							<button type="submit">
								<IoSearchSharp />
							</button>
						</form>
					</BackGroundHiddenSearchBar>
				</HiddenSearchBar>
				<DivCloseSearchBar show={showSearchBar} onClick={() => setShowSearchBar(false)} />
				<SearchBarContainer>
					<form onSubmit={() => navigate(`/search/${search}`)}>
						<input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
						<button type="submit">
							<IoSearchSharp />
						</button>
					</form>
				</SearchBarContainer>
				<IoSearchSharp onClick={handleSearchBar} />
			</LeftHeader>
			<RightHeader>
				<MenuContainer>
					<LinkText to={"/trending"}>TRENDING</LinkText>
				</MenuContainer>
				<ProfileContainer>
					{userData !== undefined ? (
						<>
							<Avatar src={avatarPicture} onClick={handleClick} />
							<Menu anchorEl={anchorEl} open={open} onClick={handleClose}>
								<MenuItem
									onClick={() => {
										navigate(`/profile/${userData.user.username}`);
									}}
									selected={false}
								>
									Profile
								</MenuItem>
								<MenuItem selected={false} onClick={handleLogout}>
									Log-Out
								</MenuItem>
							</Menu>
						</>
					) : (
						<Button
							variant="contained"
							onClick={() => {
								navigate("/sign-in");
							}}
						>
							LOG IN
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
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 0px 10px;
	form {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		gap: 10px;
		justify-content: space-between;
	}
	input {
		height: 100%;
		width: 100%;
		background: none;
		border: none;
		outline: none;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
		font-size: 18px;
		padding: 0px;
		color: white;
		::placeholder {
			font-weight: 300;
			color: #747474;
		}
	}
	svg {
		margin-top: 3px;
		font-size: 20px;
		cursor: pointer;
		color: white;
	}
	button {
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
		padding: 0px;
	}
	@media (max-width: 600px) {
		background: none;
		padding: 0px;
		input {
			display: none;
		}
		svg {
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
	z-index: 3;
	top: -70px;
	left: 0;
	height: 70px;
	width: 100%;
	padding: 0 20px;
	@media (max-width: 600px) {
		top: ${(props) => (props.show ? "0" : "-70px;")};
		transition: top 0.5s ease-in-out;
	}
`;

const BackGroundHiddenSearchBar = styled.div`
	display: flex;
	align-items: center;
	background: #262349;
	width: 100%;
	padding: 5px 10px;
	border-radius: 5px;
	form {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		gap: 5px;
		justify-content: space-between;
	}
	input {
		flex-grow: 1;
		background-color: transparent;
		height: 35px;
		border: none;
		outline: none;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
		font-size: 18px;
		padding: 10px;
		color: white;
		::placeholder {
			font-weight: 300;
			color: #747474;
		}
	}
	button {
		height: 100%;
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
		padding: 0px;
		margin: 0px;
	}
	svg {
		margin-top: 3px;
		font-size: 25px;
		color: white;
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
		cursor: pointer;
	}
`;
