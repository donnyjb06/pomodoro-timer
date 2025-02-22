import { TimerContextProvider } from "@utils/Timer/TimerContext";

interface TimerWrapperProps {
	children: React.ReactNode;
}

const TimerWrapper: React.FC<TimerWrapperProps> = ({ children }) => {
	return(
		<TimerContextProvider>
			<div>{children}</div>
		</TimerContextProvider>
	)
};

export default TimerWrapper;


