import { Box, Button, Container, Paper, styled } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import { VscCompass } from "react-icons/vsc";
import { BsStarHalf } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
	const navigate = useNavigate();

	return (
		<HomeBox>
			<AppInfoContainer maxWidth="sm">
				<LogoBox>
					<img src={logo} alt="logo" />
					<h1>GameTracker</h1>
				</LogoBox>
				<h2>Descubra novos jogos, acompanhe os que deseja jogar e organize a sua coleção de um jeito fácil e intuitivo.</h2>
				<p>Cadastre-se agora e começe a trackear!</p>
				<Button
					variant="contained"
					onClick={() => {
						navigate("/sign-up");
					}}
				>
					Sign-Up
				</Button>
			</AppInfoContainer>
			<AppFeaturesContainer maxWidth="md">
				<FeaturePaper elevation={3}>
					<VscCompass />
					<h6>Descubra</h6>
					<p>Navegue por uma banco de dados extenso a procura do seu próximo jogo</p>
				</FeaturePaper>
				<FeaturePaper>
					<BsStarHalf />
					<h6>Avalie</h6>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quis iusto.</p>
				</FeaturePaper>
				<FeaturePaper>
					<FaListUl />
					<h6>Organize</h6>
					<p>Navegue por uma banco de dados extenso a procura do seu próximo jogo</p>
				</FeaturePaper>
			</AppFeaturesContainer>
		</HomeBox>
	);
}

const HomeBox = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 70px;
	margin-bottom: 50px;
`;

const AppInfoContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 30px;
	h2 {
		max-width: 500px;
		font-weight: 500;
		font-size: 25px;
	}
	p {
		font-size: 20px;
		max-width: 400px;
	}
	Button {
		margin-top: -10px;
	}
`;

const LogoBox = styled(Box)`
	align-self: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
	img {
		max-width: 180px;
		margin-bottom: -30px;
	}
	h1 {
		color: white;
		font-family: "Audiowide", cursive;
		font-size: 40px;
		font-weight: 400;
		-webkit-text-stroke: 1px #1f292b;
	}
`;

const AppFeaturesContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 20px;
	@media (max-width: 870px) {
		flex-direction: column;
	}
`;

const FeaturePaper = styled(Paper)`
	width: 240px;
	height: 200px;
	background-color: #ab99ca;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
	text-align: center;
	padding: 25px;
	@media (max-width: 600px) {
		width: 100%;
		height: 180px;
	}
	svg {
		font-size: 35px;
		margin-bottom: 15px;
	}
	h6 {
		font-size: 20px;
		font-weight: 600;
	}
	p {
		font-size: 15px;
	}
`;
