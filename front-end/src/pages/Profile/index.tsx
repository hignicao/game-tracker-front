import { Box, Container, Skeleton, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameComponent from "../../components/Game/GameComponent";
import Collection from "../../components/ProfileCollection/Collection";
import { getProfileInfo } from "../../services/userApi";
import { UserType } from "../../utils/protocols";

interface StatusProps {
	statusColor: string;
}

export default function Profile() {
	const { username } = useParams() as { username: string };
	const [user, setUser] = useState() as [UserType, (user: UserType) => void];
	const [updateList, setUpdateList] = useState(false);

	async function getProfile() {
		const response = await getProfileInfo(username);
		setUser(response);
	}

	useEffect(() => {
		getProfile();
	}, [username, updateList]);

	if (!user) {
		return (
			<ProfileContainer>
				<UserBox>
					<Left>
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="circular" width={120} height={120} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={190} height={75} />
					</Left>
					<UserStatus>
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={55} height={80} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={55} height={80} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={55} height={80} />
						<Skeleton sx={{ bgcolor: "#705f91" }} variant="rounded" width={55} height={80} />
					</UserStatus>
				</UserBox>
				<CollectionBox>
					<GameBox>
						<p>Recommendations:</p>
						<GameBox>
							<GamesMapped>
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
							</GamesMapped>
						</GameBox>
					</GameBox>
					<GameBox>
						<p>Recent Activity:</p>
						<GameBox>
							<GamesMapped>
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
								<Skeleton sx={{ bgcolor: "#705f91" }} variant="rectangular" width={135} height={180} />
							</GamesMapped>
						</GameBox>
					</GameBox>
				</CollectionBox>
			</ProfileContainer>
		);
	}

	return (
		<ProfileContainer>
			<UserBox>
				<Left>
					<img src={`https://source.boringavatars.com/beam/120/${user?.username}}`} alt="user profile picture" />
					<UserInfo>
						<p>{user?.name}</p>
						<p>@{user?.username}</p>
					</UserInfo>
				</Left>
				<UserStatus>
					<Status statusColor="#479B42">
						<p>Wishlist</p>
						<p>{user.collection.filter((game) => game.statusId === 1).length}</p>
					</Status>
					<Status statusColor="#438EB9">
						<p>Playing</p>
						<p>{user.collection.filter((game) => game.statusId === 2).length}</p>
					</Status>
					<Status statusColor="#EDA55D">
						<p>Finished</p>
						<p>{user.collection.filter((game) => game.statusId === 3).length}</p>
					</Status>
					<Status statusColor="#EF525C">
						<p>Dropped</p>
						<p>{user.collection.filter((game) => game.statusId === 4).length}</p>
					</Status>
				</UserStatus>
			</UserBox>
			<CollectionBox>
				<GameBox>
					<p>Recommendations:</p>
					<GamesMapped>
						<span>Soon...</span>
					</GamesMapped>
				</GameBox>
				<GameBox>
					<p>Recent Activity:</p>
					<GamesMapped>
						{user.collection.map((game) => (
							<GameComponent game={game} key={game.id} location="p"/>
						))}
					</GamesMapped>
				</GameBox>
				{/* <Collection games={user.collection}/> */}
			</CollectionBox>
		</ProfileContainer>
	);
}

const ProfileContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	margin: 10px 0px 70px 0px;
	gap: 40px;
`;

const UserBox = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 50px;
	@media (max-width: 840px) {
		flex-direction: column;
	}
`;

const Left = styled(Box)`
	display: flex;
	align-items: center;
	gap: 35px;
	img {
		width: 120px;
		height: 120px;
		border-radius: 50%;
	}
`;

const UserInfo = styled(Box)`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	> p:nth-of-type(1) {
		font-size: 32px;
		font-weight: 700;
		text-align: center;
	}
	> p:nth-of-type(2) {
		font-size: 20px;
		font-style: italic;
		font-weight: 100;
		font-family: "Audiowide", cursive;
	}
`;

const UserStatus = styled(Box)`
	display: flex;
	align-items: center;
	gap: 40px;
`;

const Status = styled(Box)<StatusProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	p:nth-of-type(1) {
		font-size: 14px;
		font-weight: 300;
	}
	p:nth-of-type(2) {
		font-size: 40px;
		font-weight: 700;
		font-family: "Audiowide", cursive;
		color: ${(props) => props.statusColor};
	}
`;

const CollectionBox = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const GameBox = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	> p {
		font-size: 30px;
		font-weight: 500;
	}
`;

const GamesMapped = styled(Box)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
	> span {
		font-size: 18px;
		font-weight: 300;
		width: 100%;
		padding: 30px 0;
		text-align: center;
	}
	@media (max-width: 600px) {
		flex-wrap: nowrap;
		overflow-x: scroll;
		overflow-y: hidden;
		::-webkit-scrollbar {
			display: none;
		}
	}
`;
