import { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs';

const Header: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(null as string | null);

  useEffect(() => {
    // Get theme from local storage
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(JSON.parse(localTheme));
    }
    else {
      // Set theme based on system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  // Save theme to local storage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  // Set theme class on html element
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  })

  // Handle theme switch
  const handleThemeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <div className={`${styles.header_wrapper} bg-gray-100 dark:bg-slate-800`}>
      <div className={`${styles.header_content}`}>
        <img src="peepoHey.webp" alt="logo" />
        <span className="pl-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          zoxione's portfolio
        </span>
      </div>

      <button
        className={styles.theme_switch}
        onClick={handleThemeSwitch}
      >
        {theme === "dark" ? '🌙' : '☀️'}
      </button>
    </div>
  )
}

export default Header;