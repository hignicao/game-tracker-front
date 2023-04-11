import { Box, Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, styled } from "@mui/material";
import { HiXCircle } from "react-icons/hi";

export default function PopupStatus({ game, setShowPopup, status }: { game: any; setShowPopup: (data: boolean) => void; status: number }) {

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const removeGame = () => {
		alert("Remover jogo");
		setShowPopup(false);
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
				<StatusFormControl>
					<FormLabel component="legend" focused={false}>
						Defina o novo status:
					</FormLabel>
					<StatusRadioGroup defaultValue={status} name="status">
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
							color="error"
							label="Abandonado - Jogos que parei de jogar."
						/>
					</StatusRadioGroup>
					<ButtonsBox>
						<Button variant="outlined" onClick={removeGame}>Remover</Button>
						<Button type="submit" variant="contained">
							Salvar
						</Button>
					</ButtonsBox>
				</StatusFormControl>
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

const StatusFormControl = styled(FormControl)`
	flex-grow: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 40px;
	legend {
		font-size: 18px;
		font-weight: 300;
		color: white;
		text-align: center;
	}
`;

const StatusRadioGroup = styled(RadioGroup)`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	gap: 35px;
	justify-content: center;
	margin: 0px 10px;
`;

const ButtonsBox = styled(Box)`
	width: 100%;
	display: flex;
	justify-content: space-between;
	button:nth-child(1) {
		color: #dadada;
	}
`;