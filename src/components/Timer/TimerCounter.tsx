import React, { FC } from "react";
import { useTimerContext } from "@utils/Timer/TimerContext";

const TimerCounter: FC = () => {
  const { timeLeft } = useTimerContext()
  return(
    <h1>{timeLeft}</h1>
  )
}

export default TimerCounter