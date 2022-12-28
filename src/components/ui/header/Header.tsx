import { FC, PropsWithChildren } from "react";
import styles from "./Header.module.scss";
import Button from "../button/Button";
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/bs';

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_content}>
        <img src="peepoHey.webp" alt="logo" />
        <span className="pl-2">
          Портфолио zoxione
        </span>
      </div>
    </div>
  )
}

export default Header;