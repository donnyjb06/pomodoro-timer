import { FC } from "react";
import { useTimerContext } from "@utils/Timer/TimerContext";
import Button from "@components/Button/Button";

const TimerToggle: FC = () => {
  const { toggleIsRunning, isRunning } = useTimerContext()

  return (
   <Button handleClick={toggleIsRunning} variant="big-solid">{isRunning ? "Pause" : "Start"}</Button>
  )
}

export default TimerToggle;