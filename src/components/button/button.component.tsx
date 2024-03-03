import clsx from "clsx";
import styles from "./button.module.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
};

export default function Button({
  className,
  overrideClassName,
  type,
  color = "default",
  size = "md",
  variant = "solid",
  fullWidth,
  ...props
}: ButtonProps) {
  const buttonClassName = clsx(
    styles.button,
    styles[`${color}Color`],
    styles[`${size}Size`],
    styles[`${variant}Variant`],
    fullWidth && styles.fullWidth,
    className,
  );

  return (
    <button
      className={overrideClassName ?? buttonClassName}
      type={type ?? "button"}
      {...props}
    />
  );
}
