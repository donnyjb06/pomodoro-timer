import { MdSkipNext } from "react-icons/md";
import { FC } from "react";
import { useTheme } from "@utils/ThemeContext";
import { useTimerContext } from "@utils/Timer/TimerContext";

const ToggleCycle: FC = () => {
  const { theme } = useTheme();
  const { skipToNextMode } = useTimerContext();
  return(
    <MdSkipNext style={ { 
      color: `${theme === "dark" ? "white" : "black"}`,
      fontSize: "40px",
      cursor: "pointer"
     } }
     onClick={() => skipToNextMode()}/>
  )
}

export default ToggleCycle;