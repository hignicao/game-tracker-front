import { Container, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/styles/GlobalStyle";
import theme from "./assets/styles/Theme";
import { UserProvider } from "./contexts/UserContext";
import Header from "./components/Header/HeaderComponent";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Trending from "./pages/Trending";
import Game from "./pages/Game";

function App() {
	return (
		<UserProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<BrowserRouter>
					<Header />
					<Container maxWidth="xl">
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="/sign-in" element={<SignIn />} />
							<Route path="/sign-up" element={<SignUp />} />
							<Route path="/profile" element={<h1>Profile</h1>} />
							<Route path="/trending" element={<Trending />} />
							<Route path="/search/:search" element={<h1>Search</h1>} />
							<Route path="/game/:gameId" element={<Game />} />
						</Routes>
					</Container>
				</BrowserRouter>
				<ToastContainer />
			</ThemeProvider>
		</UserProvider>
	);
}

export default App;
