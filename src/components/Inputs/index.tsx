import React, { InputHTMLAttributes, forwardRef } from "react";
import { StyledInput } from "./style";

interface InputsFormProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label?: string;
  placeholder: string;
}

export const InputsForm = forwardRef<HTMLInputElement, InputsFormProps>(
  ({ id, type, label, placeholder, ...rest }, ref) => {
    return (
      <StyledInput>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      </StyledInput>
    );
  }
);
