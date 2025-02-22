import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.scss";
import App from "./App.tsx";
import { TimerModeContextProvider } from "./utils/Timer/TimerMode.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<TimerModeContextProvider>
			<App />
		</TimerModeContextProvider>
	</StrictMode>
);
