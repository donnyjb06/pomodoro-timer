import React from "react";
import { ThemeProvider } from "@utils/ThemeContext";
import Header from "@components/Header/Header.tsx";
import Main from "@components/Main/Main.tsx";
import "@styles/App.scss";
import ToggleButton from "@components/ToggleButton/ToggleButton.tsx";

function App() {
	return (
		<ThemeProvider>
			<Header>
				<h1>Pomodoro Timer</h1>
				<ToggleButton label="Toggle Theme" />
			</Header>
			<Main>
				<h2>30:00</h2>
				
			</Main>
		</ThemeProvider>
	);
}

export default App;
