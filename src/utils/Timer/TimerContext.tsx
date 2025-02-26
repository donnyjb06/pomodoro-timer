import React, { FC } from "react";
import { useTimerModeContext, TimerModeManager } from "./TimerMode";

interface TimerContextType {
	timeLeft: number;
	isRunning: boolean;
	toggleIsRunning: () => void;
	handleModeSwitch: (event: React.MouseEvent<HTMLButtonElement>) => void;
	timerManager: TimerModeManager;
	skipToNextMode: () => void;
}

const TimerContext = React.createContext<TimerContextType | undefined>(
	undefined
);
const useTimerContext = () => {
	const context = React.useContext(TimerContext);
	if (!context) {
		throw new Error("useTimerContext must be used within a TimerProvider");
	}

	return context;
};

interface TimerProviderProps {
	children: React.ReactNode;
}

const TimerContextProvider: FC<TimerProviderProps> = ({ children }) => {
	const { timerManager, handleModeSwitch, setTimerManager } =
		useTimerModeContext();

	const [timeLeft, setTimeLeft] = React.useState<number>(
		timerManager._currentMode.modeTimerAmount
	);
	const [isRunning, setIsRunning] = React.useState<boolean>(false);
	const timerRef = React.useRef<number | null>(null);

	const isFirstRender = React.useRef<boolean>(true);
	const isCycleFinished =
		timerManager._currentMode === timerManager._modeArray[0];

	const toggleIsRunning = () => {
		setIsRunning((prevIsRunning) => !prevIsRunning);
	};

	const decrementSeconds = () => {
		setTimeLeft((prevTimeLeft) => {
			return prevTimeLeft - 1;
		});
	};

	const skipToNextMode = () => {
		setTimerManager(timerManager.cycleToNextMode(isCycleFinished));
	}

	React.useEffect(() => {
		if (timeLeft === 0 && isRunning) {
			toggleIsRunning();
			setTimerManager(timerManager.cycleToNextMode(isCycleFinished));
		}

		if (isRunning && timeLeft !== 0) {
			timerRef.current = setInterval(decrementSeconds, 1000);
		}

		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, [isRunning, timeLeft]);

	React.useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
		}

		setIsRunning(false);

		setTimeLeft(timerManager._currentMode.modeTimerAmount);
	}, [timerManager._currentMode]);

	return (
		<TimerContext.Provider
			value={{
				timeLeft,
				isRunning,
				toggleIsRunning,
				handleModeSwitch,
				timerManager,
				skipToNextMode,
			}}
		>
			{children}
		</TimerContext.Provider>
	);
};

export { useTimerContext, TimerContextProvider };
