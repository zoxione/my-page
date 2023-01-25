import { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs';
import Button from "../button/Button";

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
    <div className={`${styles.header_wrapper} bg-surface-light dark:bg-surface-dark`}>
      <div className={`${styles.header_content} text-on-surface-light dark:text-on-surface-dark`}>
        <img src="peepoHey.webp" alt="logo" />
        <a className="pl-2 font-bold" href={'/'}>
          zoxione's portfolio
        </a>
      </div>

      <Button
        variant="light"
        onClick={handleThemeSwitch}
      >
        {theme === "dark" ? '🌙' : '☀️'}
      </Button>
    </div>
  )
}

export default Header;