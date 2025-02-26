import React, { FC } from "react";

enum ModeType {
	POMODORO,
	SHORT_BREAK,
	LONG_BREAK,
}

class TimerMode {
	readonly _modeType: ModeType;
	private _modeTimerAmount: number;

	constructor(modeType: ModeType, modeTimerAmount: number) {
		this._modeType = modeType;
		this._modeTimerAmount = modeTimerAmount;
	}

	get modeType() {
		return this._modeType;
	}

	get modeTimerAmount() {
		return this._modeTimerAmount;
	}

	set modeTimerAmount(newTimerAmount: number) {
		if (newTimerAmount > 3600) {
			this._modeTimerAmount = 3600;
		} else {
			this._modeTimerAmount = newTimerAmount;
		}
	}
}

class TimerModeManager {
	static getButtonDataset(event: React.MouseEvent<HTMLButtonElement>) {
		const target = event.currentTarget;
		if (!target) {
			throw new Error("Button does not exist in the DOM");
		}

		const btnDataset = target.dataset.mode;
		if (!btnDataset) {
			throw new Error("Button does not have a coordinating 'mode' dataset");
		}

		return parseInt(btnDataset);
	}

	_modeArray: TimerMode[];
	_currentMode: TimerMode;
	_maxInterval: number;
	public _currentIteration: number;

	constructor(_modeArray: TimerMode[]) {
		this._modeArray = _modeArray;
		this._currentMode = this._modeArray[0];
		this._maxInterval = 2;
		this._currentIteration = 0;
	}

	findNodeByDataset(event: React.MouseEvent<HTMLButtonElement>) {
		const btnDataset = TimerModeManager.getButtonDataset(event);

		const mode = this._modeArray.find((mode) => {
			return mode.modeType === btnDataset;
		});

		if (!mode) {
			throw new Error(
				"Mode could nto be foun din  timer mode manager mode array!"
			);
		}

		return mode;
	}

	getUpdatedManagerForState(
		newValue: TimerMode | number,
		propertyName: "currentMode" | "maxInterval" | "currentIteration"
	): TimerModeManager {
		const updatedManager = new TimerModeManager(this._modeArray);
		updatedManager._currentMode = this._currentMode;
		updatedManager._maxInterval = this._maxInterval;
		updatedManager._currentIteration = this._currentIteration;

		switch (propertyName) {
			case "currentMode":
				if (!(newValue instanceof TimerMode)) {
					throw new Error("newValue is not an instance of TimerMode");
				}
				updatedManager._currentMode = newValue;
				break;

			case "maxInterval":
				if (!(typeof newValue === "number")) {
					throw new Error("Type of newValue must be a number");
				}
				updatedManager._maxInterval = newValue;
				break;

			case "currentIteration":
				if (!(typeof newValue === "number")) {
					throw new Error("Type of newValue must be a number");
				}
				updatedManager._currentIteration = newValue;
				break;

			default:
				throw new Error(`Invalid property name: ${propertyName}`);
		}

		return updatedManager;
	}

	cycleToNextMode(isCycleFinished: boolean) {
		let nextMode: TimerMode;
		let currentIteration = this._currentIteration;

		if (
			this._currentIteration === this._maxInterval &&
			this._currentMode !== this._modeArray[2]
		) {
			nextMode = this._modeArray[2]; // LONG_BREAK
		} else {
			if (isCycleFinished) {
				nextMode = this._modeArray[1]; // SHORT_BREAK
			} else {
				nextMode = this._modeArray[0]; // POMODORO MODE
				currentIteration =
					this._currentMode === this._modeArray[2]
						? 0
						: currentIteration + 1;
			}
		}

		let newManager = this.getUpdatedManagerForState(
			currentIteration,
			"currentIteration"
		);
		return newManager.getUpdatedManagerForState(nextMode, "currentMode");
	}
}

interface TimerModeContextType {
	timerManager: TimerModeManager;
	handleModeSwitch: (event: React.MouseEvent<HTMLButtonElement>) => void;
	setTimerManager: React.Dispatch<React.SetStateAction<TimerModeManager>>;
}

const TimerModeContext = React.createContext<TimerModeContextType | undefined>(
	undefined
);

const useTimerModeContext = () => {
	const context = React.useContext(TimerModeContext);
	if (!context) {
		throw new Error(
			"useTimerModeContext must be used within a TimerProvider Component"
		);
	}

	return context;
};

interface TimerProviderProps {
	children: React.ReactNode;
}

const TimerModeContextProvider: FC<TimerProviderProps> = ({ children }) => {
	const [timerManager, setTimerManager] = React.useState<TimerModeManager>(
		new TimerModeManager([
			new TimerMode(ModeType.POMODORO, 1500),
			new TimerMode(ModeType.SHORT_BREAK, 300),
			new TimerMode(ModeType.LONG_BREAK, 900),
		])
	);

	const handleModeSwitch = React.useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			const newCurrentMode = timerManager.findNodeByDataset(event);
			setTimerManager((prevTimerManager) => {
				return prevTimerManager.getUpdatedManagerForState(
					newCurrentMode,
					"currentMode"
				);
			});
		},
		[timerManager]
	);

	console.log(timerManager._currentIteration);

	return (
		<TimerModeContext.Provider
			value={{ timerManager, handleModeSwitch, setTimerManager }}
		>
			{children}
		</TimerModeContext.Provider>
	);
};

export { useTimerModeContext, TimerModeContextProvider, ModeType, TimerModeManager };
