// App.tsx
import React, { createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";

export const themeContext = createContext<((switchTheme: DefaultTheme) => void) | null>(null);

/**
 * simulateTerminalCommand
 * 
 * This function finds the terminal's input element (assumed to have id="terminal-input"),
 * forces its value to update (for controlled components, using the native setter),
 * dispatches an input event so that React registers the change, and then simulates a keydown/up sequence for the Enter key.
 */
const simulateTerminalCommand = (command: string) => {
  const input = document.getElementById("terminal-input") as HTMLInputElement | null;
  if (!input) {
    console.warn("Terminal input not found");
    return;
  }

  // Force-set the value using the native setter (for controlled components)
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
  if (nativeInputValueSetter) {
    nativeInputValueSetter.call(input, command);
  } else {
    input.value = command;
  }

  // Dispatch input event so that React's onChange picks up the new value
  const inputEvent = new Event("input", { bubbles: true });
  input.dispatchEvent(inputEvent);

  // Simulate Enter key press: keydown then keyup
  const keydownEvent = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    key: "Enter",
    code: "Enter",
    keyCode: 13,
    which: 13,
  });
  input.dispatchEvent(keydownEvent);

  const keyupEvent = new KeyboardEvent("keyup", {
    bubbles: true,
    cancelable: true,
    key: "Enter",
    code: "Enter",
    keyCode: 13,
    which: 13,
  });
  input.dispatchEvent(keyupEvent);
};

/**
 * Footer component:
 * Contains two groups of links.
 * The left group represents terminal commands for internal pages (About, Projects, etc.),
 * and the right group represents social links (which we simulate as terminal commands).
 */
const Footer: React.FC = () => {
  // When a link is clicked, prevent default navigation and simulate the command.
  const handleClick = (command: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    simulateTerminalCommand(command);
  };

  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
        backgroundColor: "#fff",
        color: "#268bd2",
        fontSize: "1rem",
        zIndex: 999, // ensures footer stays above other content if needed
      }}
    >
      {/* Left Links: these will be interpreted by Terminal as commands */}
      <div>
        <a href="/about" onClick={handleClick("about")} style={{ marginRight: "1rem" }}>
          About
        </a>
        <a href="/projects" onClick={handleClick("projects")} style={{ marginRight: "1rem" }}>
          Projects
        </a>
        <a href="/ballers" onClick={handleClick("ballers")} style={{ marginRight: "1rem" }}>
          Ballers
        </a>
        <a href="/malaga" onClick={handleClick("malaga")} style={{ marginRight: "1rem" }}>
          Málaga
        </a>
        <a href="/talent" onClick={handleClick("talent")}>
          Talent
        </a>
      </div>

      {/* Right Links (Socials) */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href="https://twitter.com/YourTwitter"
          onClick={handleClick("socials go 1")}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Replace text with an icon if you wish */}
          Twitter
        </a>
        <a
          href="https://telegram.org"
          onClick={handleClick("socials go 2")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
        <a
          href="https://github.com/YourGitHub"
          onClick={handleClick("socials go 3")}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://coinbase.com"
          onClick={handleClick("socials go 4")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Coinbase
        </a>
      </div>
    </footer>
  );
};

function App() {
  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  // Disable default scroll behavior for ArrowUp and ArrowDown
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown"].includes(e.code)) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler, false);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // Update meta tag colors when switching themes
  useEffect(() => {
    const themeColor = theme.colors?.body;
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    const maskIcon = document.querySelector("link[rel='mask-icon']");
    const metaMsTileColor = document.querySelector("meta[name='msapplication-TileColor']");
    metaThemeColor && metaThemeColor.setAttribute("content", themeColor);
    metaMsTileColor && metaMsTileColor.setAttribute("content", themeColor);
    maskIcon && maskIcon.setAttribute("color", themeColor);
  }, [selectedTheme]);

  const themeSwitcher = (switchTheme: DefaultTheme) => {
    setSelectedTheme(switchTheme);
    setMode(switchTheme);
  };

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          <themeContext.Provider value={themeSwitcher}>
            <Terminal />
            <Footer />
          </themeContext.Provider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
