import React from "react";
import styles from "@components/ToggleButton/ToggleButton.module.scss";
import { useTheme } from "@utils/ThemeContext";

interface ToggleButtonProps {
	label: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={styles.toggleButton}>
			<label htmlFor="toggleButton" className={styles.toggleButton__label}>
				{label}
			</label>
			<input
				className={styles.toggleButton__input}
				type="checkbox"
				checked={theme === "dark"}
				onChange={toggleTheme}
			/>
		</div>
	);
};

export default ToggleButton;
