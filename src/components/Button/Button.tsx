import styles from "./Button.module.scss"
import { FC } from "react";
import clsx from "clsx";
import { ModeType } from "@utils/Timer/TimerMode";
import { useTimerContext } from "@utils/Timer/TimerContext";

interface ButtonProps {
  children: React.ReactNode
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "small-faded" | "big-solid";
  mode?: ModeType;
}

const Button: FC<ButtonProps> = ( { children, handleClick, mode, variant } ) => {
  const { timerManager } = useTimerContext();
  const clsxName = clsx(styles.button, {[styles.active]: timerManager._currentMode._modeType === mode}, 
    {[styles["small-faded"]]: variant === "small-faded" },
    {[styles["big-solid"]]: variant === "big-solid" }
  )
  
  return (
    <button className={clsxName} onClick={handleClick} data-mode={mode}>{children}</button>
  )
}

export default Button;