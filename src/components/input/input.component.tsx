"use client";

import clsx from "clsx";
import { useId } from "react";
import InputLabel, { InputLabelProps } from "./input-label.component";
import InputWrapper, { InputWrapperProps } from "./input-wrapper.component";
import styles from "./input.module.css";

type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type InputProps = Omit<BaseInputProps, "size"> & {
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info";
  size?: "sm" | "md" | "lg";
  variant?: "outlined" | "filled" | "text";
  chars?: BaseInputProps["size"];
  fullWidth?: boolean;
  label?: string;
  overrideClassName?: string;
  elementsProps?: {
    wrapper?: Omit<InputWrapperProps, "children">;
    label?: Omit<InputLabelProps, "children" | "htmlFor" | "color">;
  };
};

export default function Input({
  color = "default",
  size = "md",
  variant = "outlined",
  chars,
  fullWidth,
  label,
  overrideClassName,
  elementsProps,
  className,
  id: customId,
  ...props
}: InputProps) {
  const id = useId();

  const inputClassName = clsx(
    styles.input,
    styles[`${color}Color`],
    styles[`${size}Size`],
    styles[`${variant}Variant`],
    fullWidth && styles.fullWidth,
    className,
  );

  return (
    <InputWrapper fullWidth={fullWidth} {...(elementsProps?.wrapper ?? {})}>
      {label && (
        <InputLabel
          htmlFor={customId ?? id}
          color={color}
          {...(elementsProps?.label ?? {})}
        >
          {label}
        </InputLabel>
      )}
      <input
        id={customId ?? id}
        className={overrideClassName ?? inputClassName}
        size={chars}
        {...props}
      />
    </InputWrapper>
  );
}
