import TimerWrapper from "@components/Timer/TimerWrapper";
import TimerCounter from "./TimerCountdown";
import TimerToggle from "./TimerToggle";
import TimerButtonGroup from "./TimerButtonGroup";
import ToggleCycle from "./TimerCycleBtn";
import TimerAlarm from "./TimerAlarm";

const Timer = {
	Wrapper: TimerWrapper,
	Counter: TimerCounter,
	Toggle: TimerToggle,
	ButtonGroup: TimerButtonGroup,
	CycleBtn: ToggleCycle,
	Alarm: TimerAlarm
};

export default Timer;
