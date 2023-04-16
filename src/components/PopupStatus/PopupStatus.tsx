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

	async function handleNewStatus(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		try {
			if (userData) {
				await updateGameCollection(game.id, Number(newStatus), userData.token);
				toast.success("Jogo salvo com sucesso!", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				setShowPopup(false);
			} else {
				toast.info("Você precisa estar logado para fazer isso!", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			}
		} catch (err) {
			toast.error("Não foi possível salvar o jogo, tente novamente!", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			setShowPopup(false);
		}
	}

	async function removeGame() {
		try {
			if (userData) {
				if (game.statusId === 0) {
					toast.info("Esse jogo não está na sua collecão!", {
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: false,
						draggable: true,
						progress: undefined,
						theme: "dark",
					});
					return;
				}
				await deleteGameFromCollection(game.id, userData.token);
				toast.success("Jogo removido com sucesso!", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				setShowPopup(false);
			} else {
				toast.info("Você precisa estar logado para fazer isso!", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			}
		} catch (err) {
			toast.error("Não foi possível remover o jogo, tente novamente!", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		}
	}

	return (
		<PopupContainer>
			<PopupPaper elevation={7}>
				<HiXCircle
					onClick={() => {
						setShowPopup(false);
					}}
				/>
				<h2>{game.name}</h2>
				<p>Defina o novo status:</p>
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
							label="Wishlist - Jogos que pretendo jogar/comprar."
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
							label="Jogando - Jogos que estou jogando no momento."
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
							label="Zerado - Jogos que já joguei e terminei."
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
							label="Abandonado - Jogos que parei de jogar."
						/>
					</StatusRadioGroup>
					<ButtonsBox>
						<Button variant="outlined" onClick={removeGame} color="secondary">
							Remover
						</Button>
						<Button type="submit" variant="contained">
							Salvar
						</Button>
					</ButtonsBox>
				</Box>
			</PopupPaper>
			<PopupBackground
				onClick={() => {
					setShowPopup(false);
				}}
			/>
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
