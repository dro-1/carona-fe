import camelcase from "camelcase";
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type CustomInputProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  error?: string;
  errorClassName?: string;
  after?: ReactNode;
};

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  function CustomInput(props, ref) {
    const {
      placeholder,
      type,
      className,
      label = "",
      labelClassName = "",
      containerClassName = "",
      error,
      errorClassName,
      ...rest
    } = props;
    const inputId = camelcase(label);
    return (
      <div className={twMerge("", containerClassName)}>
        {label ? (
          <label
            className={twMerge(
              "font-sora font-semibold text-[16px] leading-[20px] mb-2 block",
              labelClassName
            )}
            htmlFor={inputId}
          >
            {label}
          </label>
        ) : null}

        <input
          ref={ref}
          className={twMerge(
            "block text-[14px] font-sora w-full px-3 py-[16px] border border-[#424242] rounded-lg outline-none focus:border-black",
            className
          )}
          id={inputId}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        <p
          className={twMerge(
            "font-sora text-sm text-[#7A0323]",
            errorClassName
          )}
        >
          {error && error}
        </p>
      </div>
    );
  }
);
