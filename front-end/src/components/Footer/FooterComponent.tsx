import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { styled } from "@mui/material";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary">
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Footer() {
	return (
		<FooterBox
			component="footer"
			sx={{
				py: 3,
				px: 2,
				mt: "auto",
				backgroundColor: (theme) => (theme.palette.primary.main),
			}}
		>
			<Container maxWidth="sm">
				<Typography variant="body1">My sticky footer can be found here.</Typography>
				<Copyright />
			</Container>
		</FooterBox>
	);
}

const FooterBox = styled(Box)`
  /* width: 100%;
  position: absolute;
  bottom: 0; */
`