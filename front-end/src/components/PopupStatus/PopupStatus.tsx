import { Box, Button, FormControlLabel, Paper, Radio, RadioGroup, styled } from "@mui/material";
import { FormEvent, useContext, useState } from "react";
import { HiXCircle } from "react-icons/hi";
import { UserContext } from "../../contexts/UserContext";
import { deleteGameFromCollection, updateGameCollection } from "../../services/collectionApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { GameComponentType } from "../../utils/protocols";

export default function PopupStatus({ game, setShowPopup }: { game: GameComponentType; setShowPopup: (data: boolean) => void }) {
	const [newStatus, setNewStatus] = useState("0");
	const { userData } = useContext(UserContext);
	const [disabled, setDisabled] = useState(false);

	const handlePopupClose = () => {
		if (!disabled) {
			setShowPopup(false);
		}
	};

	async function handleNewStatus(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		setDisabled(true);

		try {
			if (userData) {
				await updateGameCollection(game.id, Number(newStatus), userData.token);
				toast.success("Game saved with success!", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				setDisabled(false);
				setShowPopup(false);
			} else {
				toast.info("You must be logged in to do that!", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				setDisabled(false);
			}
		} catch (err) {
			toast.error("There was an error, try again", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			setDisabled(false);
		}
	}

	async function removeGame() {
		setDisabled(true);

		try {
			if (userData) {
				if (game.statusId === 0) {
					toast.info("This game isnt in your collection!", {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: true,
						progress: undefined,
						theme: "dark",
					});
					setDisabled(false);
					return;
				}
				await deleteGameFromCollection(game.id, userData.token);
				toast.success("Game removed with success!", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				setDisabled(false);
				setShowPopup(false);
			} else {
				toast.info("You must be logged in to do that!", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				setDisabled(false);
			}
		} catch (err) {
			toast.error("Unable to remove the game, please try again!", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			setDisabled(false);
		}
	}

	return (
		<PopupContainer>
			<PopupPaper elevation={7}>
				<HiXCircle onClick={handlePopupClose} />
				<h2>{game.name}</h2>
				<p>Set a new status:</p>
				<Box component="form" onSubmit={handleNewStatus} sx={{ mt: 1 }}>
					<StatusRadioGroup defaultValue={game.statusId} name="status" onChange={(e) => setNewStatus(e.target.value)}>
						<FormControlLabel
							value={1}
							control={
								<Radio
									sx={{
										color: "#479B42",
										"&.Mui-checked": {
											color: "#479B42",
										},
									}}
								/>
							}
							label="Wishlist - Games I want to play/buy."
						/>
						<FormControlLabel
							value={2}
							control={
								<Radio
									sx={{
										color: "#438EB9",
										"&.Mui-checked": {
											color: "#438EB9",
										},
									}}
								/>
							}
							label="Playing - Games I'm currently playing."
						/>
						<FormControlLabel
							value={3}
							control={
								<Radio
									sx={{
										color: "#EDA55D",
										"&.Mui-checked": {
											color: "#EDA55D",
										},
									}}
								/>
							}
							label="Finished - Games I've played and finished."
						/>
						<FormControlLabel
							value={4}
							control={
								<Radio
									sx={{
										color: "#EF525C",
										"&.Mui-checked": {
											color: "#EF525C",
										},
									}}
								/>
							}
							label="Dropped - Games I stopped playing."
						/>
					</StatusRadioGroup>
					<ButtonsBox>
						<Button variant="outlined" onClick={removeGame} color="secondary" disabled={disabled}>
							Remove
						</Button>
						<Button type="submit" variant="contained" disabled={disabled}>
							Save
						</Button>
					</ButtonsBox>
				</Box>
			</PopupPaper>
			<PopupBackground onClick={handlePopupClose} />
		</PopupContainer>
	);
}

const PopupContainer = styled(Box)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PopupPaper = styled(Paper)`
	width: 500px;
	background-color: #151323;
	border-radius: 5px;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding: 40px 30px 30px 30px;
	z-index: 4;
	position: relative;
	> svg {
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
		font-size: 25px;
		background: #312d5f;
		border-radius: 50%;
	}
	> h2 {
		font-size: 30px;
		font-weight: 500;
		text-align: center;
	}
`;

const PopupBackground = styled(Box)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.75);
`;

const StatusRadioGroup = styled(RadioGroup)`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	gap: 35px;
	justify-content: center;
	margin: 30px 16px;
`;

const ButtonsBox = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: space-between;
	button:nth-of-type(1) {
		color: #686588;
	}
`;
