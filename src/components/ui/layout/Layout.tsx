import { FC, PropsWithChildren } from "react";

import Header from "../header/Header";
import styles from "./Layout.module.scss";
import 'swiper/css';
import Slide from "../slide/Slide";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={`${styles.layout} bg-gray-50 dark:bg-slate-900 dark:text-white`}>
        <Header />
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </>

  )
}

export default Layout;