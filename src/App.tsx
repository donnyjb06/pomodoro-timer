import React from "react";
import { ThemeProvider } from "@utils/ThemeContext";
import Header from "@components/Header/Header.tsx";
import Main from "@components/Main/Main.tsx";
import "@styles/App.scss";
import ToggleButton from "@components/ToggleButton/ToggleButton.tsx";
import Timer from "@components/Timer/index.ts";
import { TimerContextProvider, useTimerContext } from "@utils/Timer/TimerContext";
import TimerCounter from "@components/Timer/TimerCounter";
import TimerToggle from "@components/Timer/TimerToggle";
function App() {

	return (
		<ThemeProvider>
			<Header>
				<h1>Pomodoro Timer</h1>
				<ToggleButton label="Toggle Theme" />
			</Header>
			<Main>
				<TimerContextProvider>
					<Timer.Wrapper>
						<TimerCounter />
						<TimerToggle />
					</Timer.Wrapper>
				</TimerContextProvider>
			</Main>
		</ThemeProvider>
	);
}

export default App;
