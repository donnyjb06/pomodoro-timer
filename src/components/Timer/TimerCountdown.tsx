import { FC } from "react";
import { useTimerContext } from "@utils/Timer/TimerContext";
import styles from "./Timer.module.scss";
import useMediaQuery from "@utils/useMediaQuery";

const TimerCountdown: FC = () => {
	const { timeLeft } = useTimerContext();
	const isModeButtonsHidden = useMediaQuery("(max-width: 305px)");

	//Derived state
	const seconds = timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60;
  const minutes = Math.floor(timeLeft / 60);

	return (
		<p className={styles.timer__countdown}>
			<span className={styles.timer__Countdown_minutes}>{minutes}</span>
			{isModeButtonsHidden ? null : ":"}
			{isModeButtonsHidden ? null : <span className={styles.timer__Countdown_seconds}>{seconds}</span>}
		</p>
	);
};

export default TimerCountdown;
