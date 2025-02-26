<div align="left" style="position: relative;">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>POMODORO-TIMER</h1>
<p align="left">
	<em><code>A minimalist Pomodoro timer built with React and TypeScript</code></em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/donnyjb06/pomodoro-timer?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff&label=license" alt="MIT License">
	<img src="https://img.shields.io/github/last-commit/donnyjb06/pomodoro-timer?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/donnyjb06/pomodoro-timer?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/donnyjb06/pomodoro-timer?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="left"><!-- default option, no dependency badges. -->
</p>
<p align="left">
	<!-- default option, no dependency badges. -->
</p>
</div>
<br clear="right">

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#-usage)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

A modern Pomodoro timer application built with React and TypeScript. Features a clean, minimalist interface with customizable work/break intervals, dark/light theme toggle, and session tracking capabilities.

---

## 👾 Features

- Customizable work/break intervals
- Visual and audio notifications
- Dark/light theme toggle
- Responsive design
- Session tracking
- Pause/resume functionality
- Auto-cycle between work and break periods
- Clean, minimalist interface

---

## 📁 Project Structure

```sh
└── pomodoro-timer/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── project-setup.sh
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.tsx
    │   ├── Index.tsx
    │   ├── assets
    │   ├── components
    │   ├── styles
    │   ├── utils
    │   └── vite-env.d.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

### 📂 Project Index

<details open>
	<summary><b><code>POMODORO-TIMER/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/tsconfig.node.json'>tsconfig.node.json</a></b></td>
				<td><code>❯ TypeScript configuration for Node.js environment</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ Locked versions of npm dependencies</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/project-setup.sh'>project-setup.sh</a></b></td>
				<td><code>❯ Shell script for initial project setup</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>❯ Main TypeScript configuration file</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/tsconfig.app.json'>tsconfig.app.json</a></b></td>
				<td><code>❯ TypeScript configuration for application code</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/package.json'>package.json</a></b></td>
				<td><code>❯ Project metadata and dependencies</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/vite.config.ts'>vite.config.ts</a></b></td>
				<td><code>❯ Vite bundler configuration</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/index.html'>index.html</a></b></td>
				<td><code>❯ Main HTML entry point</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/eslint.config.js'>eslint.config.js</a></b></td>
				<td><code>❯ ESLint code linting configuration</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/App.tsx'>App.tsx</a></b></td>
				<td><code>❯ Root React component</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/Index.tsx'>Index.tsx</a></b></td>
				<td><code>❯ Application entry point</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/vite-env.d.ts'>vite-env.d.ts</a></b></td>
				<td><code>❯ Vite environment type definitions</code></td>
			</tr>
			</table>
			<details>
				<summary><b>styles</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/styles/App.scss'>App.scss</a></b></td>
						<td><code>❯ Main application styles</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/styles/index.scss'>index.scss</a></b></td>
						<td><code>❯ Global styles entry point</code></td>
					</tr>
					</table>
					<details>
						<summary><b>helper</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/styles/helper/_reset.scss'>_reset.scss</a></b></td>
								<td><code>❯ CSS reset styles</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/styles/helper/_functions.scss'>_functions.scss</a></b></td>
								<td><code>❯ SCSS functions</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/styles/helper/_mixins.scss'>_mixins.scss</a></b></td>
								<td><code>❯ SCSS mixins</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/styles/helper/_variables.scss'>_variables.scss</a></b></td>
								<td><code>❯ SCSS variables</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<details>
						<summary><b>Main</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Main/Main.module.scss'>Main.module.scss</a></b></td>
								<td><code>❯ Main component styles</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Main/Main.tsx'>Main.tsx</a></b></td>
								<td><code>❯ Main content component</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Header</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Header/Header.module.scss'>Header.module.scss</a></b></td>
								<td><code>❯ Header component styles</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Header/Header.tsx'>Header.tsx</a></b></td>
								<td><code>❯ Header component</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ToggleButton</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/ToggleButton/ToggleButton.tsx'>ToggleButton.tsx</a></b></td>
								<td><code>❯ Theme toggle button component</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/ToggleButton/ToggleButton.module.scss'>ToggleButton.module.scss</a></b></td>
								<td><code>❯ Toggle button styles</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Timer</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Timer/TimerCountdown.tsx'>TimerCountdown.tsx</a></b></td>
								<td><code>❯ Timer countdown display</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Timer/TimerWrapper.tsx'>TimerWrapper.tsx</a></b></td>
								<td><code>❯ Timer container component</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Timer/TimerToggle.tsx'>TimerToggle.tsx</a></b></td>
								<td><code>❯ Start/pause button component</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Timer/TimerCycleBtn.tsx'>TimerCycleBtn.tsx</a></b></td>
								<td><code>❯ Timer mode cycle button</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Timer/index.ts'>index.ts</a></b></td>
								<td><code>❯ Timer components barrel file</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Timer/TimerAlarm.tsx'>TimerAlarm.tsx</a></b></td>
								<td><code>❯ Timer alarm notification</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Timer/TimerButtonGroup.tsx'>TimerButtonGroup.tsx</a></b></td>
								<td><code>❯ Timer control buttons group</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Timer/Timer.module.scss'>Timer.module.scss</a></b></td>
								<td><code>❯ Timer component styles</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Button</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Button/Button.tsx'>Button.tsx</a></b></td>
								<td><code>❯ Reusable button component</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/components/Button/Button.module.scss'>Button.module.scss</a></b></td>
								<td><code>❯ Button component styles</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/utils/useMediaQuery.tsx'>useMediaQuery.tsx</a></b></td>
						<td><code>❯ Media query hook</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/utils/ThemeContext.tsx'>ThemeContext.tsx</a></b></td>
						<td><code>❯ Theme context provider</code></td>
					</tr>
					</table>
					<details>
						<summary><b>Timer</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/utils/Timer/TimerMode.tsx'>TimerMode.tsx</a></b></td>
								<td><code>❯ Timer mode management</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/donnyjb06/pomodoro-timer/blob/master/src/utils/Timer/TimerContext.tsx'>TimerContext.tsx</a></b></td>
								<td><code>❯ Timer context provider</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with pomodoro-timer, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

- **Node.js:** v18.0.0 or higher
- **Web Browser:** Modern web browser with JavaScript enabled

### ⚙️ Installation

Install pomodoro-timer using one of the following methods:

**Build from source:**

1. Clone the pomodoro-timer repository:

```sh
❯ git clone https://github.com/donnyjb06/pomodoro-timer
```

2. Navigate to the project directory:

```sh
❯ cd pomodoro-timer
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

### 🤖 Usage

Run pomodoro-timer using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/donnyjb06/pomodoro-timer/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/donnyjb06/pomodoro-timer/issues)**: Submit bugs found or log feature requests for the `pomodoro-timer` project.
- **💡 [Submit Pull Requests](https://github.com/donnyjb06/pomodoro-timer/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/donnyjb06/pomodoro-timer
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/donnyjb06/pomodoro-timer/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=donnyjb06/pomodoro-timer">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the MIT License

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---

## Preview

<img src="./public/webpage-preview.png" alt="preview image">
