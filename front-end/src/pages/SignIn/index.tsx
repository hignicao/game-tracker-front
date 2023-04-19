import { Avatar, Button, TextField, FormControlLabel, Checkbox, Box, Container, styled } from "@mui/material";
import axios from "axios";
import { FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserContext } from "../../contexts/UserContext";
import { signIn } from "../../services/authApi";

export default function SignIn() {
	const { setUserData } = useContext(UserContext);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [disabled, setDisabled] = useState(false);
	const [remember, setRemember] = useState(false);
	const navigate = useNavigate();

	async function handleLogIn(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		setDisabled(true);

		try {
			const userData = await signIn(username, password, remember);
			setUserData(userData);
			navigate(`/profile/${userData.user.username}`);
		} catch (err) {
			toast.error("Unable to login, please try again!", {
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
		<Container maxWidth="xs">
			<LoginBox>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
				<h5>Log In To Your Account</h5>
				<Box component="form" onSubmit={handleLogIn} sx={{ mt: 1 }}>
					<FormTextField
						color="secondary"
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						autoComplete="username"
						autoFocus
					/>
					<FormTextField
						color="secondary"
						margin="normal"
						required
						fullWidth
						id="password"
						label="Password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						autoComplete="current-password"
					/>
					<FormControlLabel control={<Checkbox value={remember} onChange={(e) => setRemember(!remember)} color="secondary" />} label="Remember my data" />
					<LoginButton type="submit" variant="contained" disabled={disabled}>
						LOG IN
					</LoginButton>
					<span>Need an account? </span>
					<LinkText to={"/sign-up"}>Register here!</LinkText>
				</Box>
			</LoginBox>
		</Container>
	);
}

const LoginButton = styled(Button)`
	width: 100%;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const LinkText = styled(Link)`
	text-decoration: none;
	color: #a99cc2;
`;

const LoginBox = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	h5 {
		font-size: 24px;
		font-weight: 500;
		margin-bottom: 10px;
	}
`;

const FormTextField = styled(TextField)`
	background-color: #151323;
	label {
		color: white;
	}
	input {
		color: white;
	}
	input:-webkit-autofill,
	input:-webkit-autofill:active {
		box-shadow: 0 0 0 30px #a99cc2 inset;
	}
`;
