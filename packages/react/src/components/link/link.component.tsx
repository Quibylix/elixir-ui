import clsx from "clsx";
import { createElement } from "react";
import styles from "./link.module.css";

type InternalLinkProps<T extends React.ElementType> = {
  className?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info";
  size?: "sm" | "md" | "lg";
  variant?: "text" | "outlined";
  fullWidth?: boolean;
  external?: boolean;
  overrideClassName?: string;
  as?: T;
};

export type LinkProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  keyof InternalLinkProps<T>
> &
  InternalLinkProps<T>;

export default function Link<T extends React.ElementType = "a">({
  className,
  overrideClassName,
  color = "default",
  size = "md",
  variant = "text",
  external,
  fullWidth,
  as = "a" as T,
  ...props
}: LinkProps<T>) {
  const buttonClassName = clsx(
    overrideClassName ?? styles.link,
    styles[`${color}Color`],
    styles[`${size}Size`],
    styles[`${variant}Variant`],
    fullWidth && styles.fullWidth,
    className,
  );

  return createElement(as, {
    className: overrideClassName ?? buttonClassName,
    target: external ? "_blank" : undefined,
    rel: external ? "noopener noreferrer" : undefined,
    ...props,
  });
}
