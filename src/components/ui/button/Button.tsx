import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";


interface IProps {
  onClick?: () => void;
  children?: React.ReactNode;
}


const Button: FC<IProps> = (props: IProps) => {
  return (
    <button className={styles.button_wrapper} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button;