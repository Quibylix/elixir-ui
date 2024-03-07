import clsx from "clsx";
import styles from "./input.module.css";

export type InputWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  overrideClassName?: string;
  fullWidth?: boolean;
};

export default function InputWrapper({
  overrideClassName,
  fullWidth,
  className,
  ...props
}: InputWrapperProps) {
  const wrapperClassName = clsx(
    styles.wrapper,
    fullWidth && styles.fullWidth,
    className,
  );

  return <div className={overrideClassName ?? wrapperClassName} {...props} />;
}
