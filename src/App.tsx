import { ThemeProvider } from "@utils/ThemeContext";
import Header from "@components/Header/Header.tsx";
import Main from "@components/Main/Main.tsx";
import "@styles/App.scss";
import ToggleButton from "@components/ToggleButton/ToggleButton.tsx";
import Timer from "@components/Timer/index.ts";
import {
	TimerContextProvider,
	useTimerContext,
} from "@utils/Timer/TimerContext";
import Button from "@components/Button/Button";
import { ModeType } from "@utils/Timer/TimerMode";
import useMediaQuery from "@utils/useMediaQuery";

function App() {
	const { timerManager, handleModeSwitch } = useTimerContext();
	const isCompactMode = useMediaQuery("(max-width: 385px)");
	const isModeButtonsHidden = useMediaQuery("(max-width: 305px)");

	return (
		<ThemeProvider>
			<Header>
				<h1>Pomodoro Timer</h1>
				<ToggleButton label="Toggle Theme" />
			</Header>
			<Main>
				<TimerContextProvider>
					<Timer.Wrapper>
						{isModeButtonsHidden ? null : <Timer.ButtonGroup>
							{timerManager._modeArray.map(mode => {
								let modeType;
								if (mode._modeType === ModeType.POMODORO) {
									modeType = <p>Pomo{isCompactMode ? null : <span>doro</span>}</p>
								} else if (mode._modeType === ModeType.SHORT_BREAK) {
									modeType = <p>Short{isCompactMode ? null : <span>break</span>}</p>
								} else if (mode._modeType === ModeType.LONG_BREAK) {
									modeType = <p>Long{isCompactMode ? null : <span>break</span>}</p>
								} else {
									throw new Error("Mode is not of type ModeType")
								}

								return(<Button mode={mode._modeType} handleClick={handleModeSwitch} variant="small-faded">{modeType}</Button>)
							})}
						</Timer.ButtonGroup>}
						<Timer.Counter />
						{isModeButtonsHidden ? <Timer.CycleBtn /> : <Timer.Toggle />}
						<Timer.Alarm />
					</Timer.Wrapper>
				</TimerContextProvider>
			</Main>
		</ThemeProvider>
	);
}

export default App;
