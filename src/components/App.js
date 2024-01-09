import "../styles.css";
import Tab from "./Tab/Tab";
import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export default function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Tab />
      </ThemeContext.Provider>
    </>
  );
}
