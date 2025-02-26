
import styles from "./Timer.module.scss"

interface TimerWrapperProps {
	children: React.ReactNode;
}

const TimerWrapper: React.FC<TimerWrapperProps> = ({ children }) => {
	return(
			<div className={styles.timer}>{children}</div>
	)
};

export default TimerWrapper;


