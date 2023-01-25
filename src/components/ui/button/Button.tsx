import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";


interface IProps {
  onClick?: () => void;
  variant?: string;
  className?: string;
  children?: React.ReactNode;
}


const Button: FC<IProps> = (props: IProps) => {
  let classNames = "";

  if (props.variant === "filled") {
    return (
      <button className={`${styles.button__filled} ${props.className}`} onClick={props.onClick}>
        {props.children}
      </button>
    )
  }
  else if (props.variant === "light") {
    return (
      <button className={`${styles.button__light} ${props.className}`} onClick={props.onClick}>
        {props.children}
      </button>
    )
  }
  else if (props.variant === "outline") {
    return (
      <button className={`${styles.button__outline} ${props.className}`} onClick={props.onClick}>
        {props.children}
      </button>
    )
  }
  else {
    return (
      <button className={`${styles.button__filled} ${props.className}`} onClick={props.onClick}>
        {props.children}
      </button>
    )
  }
}

export default Button;