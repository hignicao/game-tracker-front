import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Header from "./components/Header/HeaderComponent";
import { UserProvider } from "./contexts/UserContext";

function App() {
	return (
		<UserProvider>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<h1>Home</h1>} />
					<Route path="/sign-up" element={<h1>Sign Up</h1>} />
					<Route path="/sign-in" element={<h1>Sign In</h1>} />
					<Route path="/profile" element={<h1>Profile</h1>} />
					<Route path="/search/:search" element={<h1>Search</h1>} />
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;
