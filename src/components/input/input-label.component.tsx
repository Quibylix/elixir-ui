import clsx from "clsx";
import styles from "./input.module.css";

export type InputLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info";
  overrideClassName?: string;
};

export default function InputLabel({
  color = "default",
  className,
  overrideClassName,
  ...props
}: InputLabelProps) {
  const labelClassName = clsx(styles.label, styles[`${color}Color`], className);

  return <label className={overrideClassName ?? labelClassName} {...props} />;
}
