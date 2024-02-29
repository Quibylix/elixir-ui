import styles from "./button.module.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: ButtonProps) {
  const buttonClassName = [styles.button, className ?? ""].join(" ").trim();

  return <button className={buttonClassName} {...props} />;
}
