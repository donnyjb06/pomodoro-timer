import { FC } from "react";
import { useTimerContext } from "@utils/hooks/useTimerContext";

const TimerToggle: FC = () => {
  const { toggleIsRunning, isRunning } = useTimerContext()

  return (
    <button onClick={toggleIsRunning}>{isRunning ? "Pause" : "Resume"}</button>
  )
}

export default TimerToggle;