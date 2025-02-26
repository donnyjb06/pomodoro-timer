import React, { FC } from "react";
import styles from "./Timer.module.scss";

interface TimerButtonGroupProps {
  children: React.ReactNode;
}

const TimerButtonGroup: FC<TimerButtonGroupProps> = ( { children } ) => {
  return (
    <div className={styles.timer__buttonGroup}>{children}</div>
  )
}

export default TimerButtonGroup;