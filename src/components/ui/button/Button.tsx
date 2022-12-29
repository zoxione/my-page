import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.scss";


interface IProps {
  onClick?: () => void;
  variant?: string;
  className?: string;
  children?: React.ReactNode;
}


const Button: FC<IProps> = (props: IProps) => {

  if (props.variant === "default") {
    return (
      <button className={styles.button_default + " " + props.className} onClick={props.onClick}>
        {props.children}
      </button>
    )
  }
  else if (props.variant === "outline") {
    return (
      <button className={styles.button_outline + " " + props.className} onClick={props.onClick}>
        {props.children}
      </button>
    )
  }
  else {
    return (
      <button className={styles.button + " " + props.className} onClick={props.onClick}>
        {props.children}
      </button>
    )
  }
}

export default Button;