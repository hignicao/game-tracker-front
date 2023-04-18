import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { InputAdornment, styled as styled2 } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import styled from "styled-components";
import { signUp } from "../../services/userApi";

export default function SignUp() {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [passwordNotMatch, setPasswordNotMatch] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		setDisabled(true);

		if (password !== confirmPassword) {
			toast.error("As senhas devem ser iguais!", {
				position: "top-right",
				autoClose: 1800,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			setPasswordNotMatch(true);
			setTimeout(() => {
				setPasswordNotMatch(false);
				setDisabled(false);
			}, 2500);
		} else {
			try {
				await signUp(name, username, email, password);
				toast.success(`Cadastro criado com sucesso!`, {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				navigate("/sign-in");
			} catch (error) {
				toast.error("Não foi possível fazer o cadastro, tente novamente!", {
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
	};

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Container maxWidth="xs">
			<SignUpBox>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
				<h5>Cadastre-se</h5>
				<SignUpForm onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<FormTextField
								color="secondary"
								required
								fullWidth
								id="name"
								label="Nome"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								autoComplete="name"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormTextField
								color="secondary"
								required
								fullWidth
								id="username"
								label="Nome de usuário"
								name="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								autoComplete="username"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormTextField
								color="secondary"
								required
								fullWidth
								id="email"
								label="E-mail"
								name="email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormTextField
								color="secondary"
								error={passwordNotMatch}
								required
								fullWidth
								id="password"
								label="Senha"
								name="password"
								type={showPassword ? "text" : "password"}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								autoComplete="new-password"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">{showPassword ? <AiFillEye onClick={handleClickShowPassword} /> : <AiFillEyeInvisible onClick={handleClickShowPassword} />}</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormTextField
								color="secondary"
								error={passwordNotMatch}
								required
								fullWidth
								id="confirmPassword"
								label="Repita sua senha"
								name="confirmPassword"
								type={showPassword ? "text" : "password"}
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								autoComplete="new-password"
							/>
						</Grid>
					</Grid>
					<SignUpButton type="submit" variant="contained" disabled={disabled}>
						Cadastrar
					</SignUpButton>
				</SignUpForm>
				<LinkText to={"/sign-in"}>Já tem uma conta? Entre agora!</LinkText>
			</SignUpBox>
		</Container>
	);
}

const SignUpButton = styled2(Button)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SignUpBox = styled2(Box)`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    font-size: 24px;
  }
`;

const SignUpForm = styled.form`
	margin-top: 20px;
	svg {
		cursor: pointer;
		font-size: 18px;
		color: #7d78aa;
	}
`;

const LinkText = styled2(Link)`
  align-self: flex-start;
  text-decoration: none;
	color: #ffffff;
`;

const FormTextField = styled2(TextField)`
  background-color: #151323;
  label {
    color: white;
  }
  input {
    color: white;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:active{
    box-shadow: 0 0 0 30px #a99cc2 inset;
  }
`;
