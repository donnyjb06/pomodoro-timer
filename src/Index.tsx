import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.scss";
import App from "./App.tsx";
import { TimerModeContextProvider } from "./utils/Timer/TimerMode.tsx";
import { TimerContextProvider } from "@utils/Timer/TimerContext";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TimerModeContextProvider>
			<TimerContextProvider>
			<App />
			</TimerContextProvider>
		</TimerModeContextProvider>
	</StrictMode>
);
