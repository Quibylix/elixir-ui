import clsx from "clsx";
import { createElement } from "react";
import styles from "./button.module.css";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    className?: BaseButtonProps["className"];
    type?: BaseButtonProps["type"];
    color?:
      | "default"
      | "primary"
      | "secondary"
      | "danger"
      | "success"
      | "warning"
      | "info";
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outlined" | "ghost" | "text";
    fullWidth?: boolean;
    overrideClassName?: string;
    as?: T;
  };

export default function Button<T extends React.ElementType = "button">({
  className,
  overrideClassName,
  type,
  color = "default",
  size = "md",
  variant = "solid",
  fullWidth,
  as = "button" as T,
  ...props
}: ButtonProps<T>) {
  const buttonClassName = clsx(
    styles.button,
    styles[`${color}Color`],
    styles[`${size}Size`],
    styles[`${variant}Variant`],
    fullWidth && styles.fullWidth,
    className,
  );

  return createElement(as, {
    className: overrideClassName ?? buttonClassName,
    type: type ?? "button",
    ...props,
  });
}
