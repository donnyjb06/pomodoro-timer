import React, { FC } from "react";
import { useTimerContext } from "@utils/Timer/TimerContext";
import arcadeGameJackpotSound from "@assets/arcade-game-fruit-machine-jackpot-002-short.mp3"

const TimerAlarm: FC = () => {
  const { timeLeft } = useTimerContext();
  const alarmRef = React.useRef<HTMLAudioElement>(null);
  
  React.useEffect( () => {
    if (timeLeft === 0 && alarmRef.current) {
      alarmRef.current.play();
    }
  }, [timeLeft])

  return (
    <audio src={arcadeGameJackpotSound} ref={alarmRef}></audio>
  )
}

export default TimerAlarm;