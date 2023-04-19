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
			toast.error("Passwords must match!", {
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
				toast.success(`Registration successfully created!`, {
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
				toast.error("Unable to register, please try again!", {
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
	}

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Container maxWidth="xs">
			<SignUpBox>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
				<h5>Create Your Account</h5>
				<SignUpForm onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<FormTextField color="secondary" required fullWidth id="name" label="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormTextField
								color="secondary"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								autoComplete="username"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormTextField color="secondary" required fullWidth id="email" label="E-mail" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
						</Grid>
						<Grid item xs={12} sm={6}>
							<FormTextField
								color="secondary"
								error={passwordNotMatch}
								required
								fullWidth
								id="password"
								label="Password"
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
								label="Confirm Password"
								name="confirmPassword"
								type={showPassword ? "text" : "password"}
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								autoComplete="new-password"
							/>
						</Grid>
					</Grid>
					<SignUpButton type="submit" variant="contained" disabled={disabled}>
						Register
					</SignUpButton>
				</SignUpForm>
				<LoginBox>
					<span>Already have an account? </span>
					<LinkText to={"/sign-in"}>Log in</LinkText>
				</LoginBox>
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
		font-weight: 500;
		margin-bottom: 10px;
  }
	span {
		align-self: flex-start;
		tex-align: start;
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

const LoginBox = styled2(Box)`

`

const LinkText = styled2(Link)`
  align-self: flex-start;
  text-decoration: none;
	color: #a99cc2;
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
