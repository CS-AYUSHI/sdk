import React from "react";
import { ButtonProps } from "../../interfaces/button/button";
import styles from "./button.module.scss";

const Button: React.FC<ButtonProps> = ({
  label,
  props
}) => {
  return (
    <button
      onClick={props?.onClick}
      disabled={props?.disabled}
      className={`${styles.button} ${props?.className}`}
    >
      {label}
    </button>
  );
};

export default Button;
