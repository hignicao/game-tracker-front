import { Container, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/styles/GlobalStyle";
import theme from "./assets/styles/Theme";
import Header from "./components/Header/HeaderComponent";
import { UserProvider } from "./contexts/UserContext";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn/SignIn";

function App() {
	return (
		<UserProvider>
			<ToastContainer />
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<BrowserRouter>
					<Header />
					<Container maxWidth="xl">
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/sign-in" element={<SignIn />} />
							<Route path="/sign-up" element={<h1>Sign Up</h1>} />
							<Route path="/profile" element={<h1>Profile</h1>} />
							<Route path="/search/:search" element={<h1>Search</h1>} />
							<Route path="/game/:gameId" element={<h1>GamePage</h1>} />
						</Routes>
					</Container>
				</BrowserRouter>
			</ThemeProvider>
		</UserProvider>
	);
}

export default App;
