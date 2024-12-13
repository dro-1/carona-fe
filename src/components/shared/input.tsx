import camelcase from "camelcase";
import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  MouseEventHandler,
  ReactNode,
  forwardRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { FaEye } from "react-icons/fa";
import clsx from "clsx";

export type CustomInputProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  error?: string;
  errorClassName?: string;
  after?: ReactNode;
};

type PasswordInputProps = Omit<CustomInputProps, "label"> & {
  inputClassname?: string;
  error?: string;
  label?: string;
};

type RadioInputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  containerClassName?: string;
  name: string;
  checked?: boolean;
};

export const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  function RadioInput(props, ref) {
    const {
      label,
      checked,
      name,
      onClick,
      onChange,
      containerClassName,
      ...rest
    } = props;

    return (
      <div
        className={twMerge(
          "flex font-inter items-center h-8",
          containerClassName
        )}
      >
        <div className="mr-2 flex justify-center items-center">
          <input
            id={camelcase(label)}
            type="radio"
            name={name}
            className={clsx("w-5 h-5", checked && "hidden")}
            onChange={onChange}
            checked={checked}
            ref={ref}
            {...rest}
          />
          <div
            className={twMerge(
              "bg-white border border-[#319A64] rounded-full hidden justify-center items-center w-5 h-5",
              checked && "flex"
            )}
            onClick={onClick}
          >
            <div className="w-[12px] h-[12px] bg-[#319A64] rounded-full" />
          </div>
        </div>
        <label htmlFor={camelcase(label)}>{label}</label>
      </div>
    );
  }
);

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
              "font-inter font-semibold text-[16px] leading-[20px] mb-2 block",
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
            "block font-inter text-[14px] w-full px-3 py-[16px] border border-[#424242] rounded-lg outline-none focus:border-black",
            className
          )}
          id={inputId}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        <p
          className={twMerge(
            "font-inter text-sm text-[#7A0323]",
            errorClassName
          )}
        >
          {error && error}
        </p>
      </div>
    );
  }
);

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(props, ref) {
    const {
      className,
      inputClassname = "",
      label = "Password",
      onChange,
      value,
      error,
      ...rest
    } = props;
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const togglePasswordShown: MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();
      setIsPasswordShown((oldIsPasswordShown) => !oldIsPasswordShown);
    };

    const inputId = camelcase(label);

    return (
      <div className="">
        <label
          className="font-inter font-semibold text-[16px] leading-[20px] mb-2 block"
          htmlFor={inputId}
        >
          {label}
        </label>

        <div
          className={twMerge(
            "flex relative items-center bg-white w-[100%] border border-[#424242] rounded-lg  transition duration-300 focus-within:border-black",
            className
          )}
        >
          <CustomInput
            type={isPasswordShown ? "text" : "password"}
            placeholder="********"
            className={twMerge(
              "mb-0 border-0 w-[90%] focus:border-transparent focus:border-b-0",
              inputClassname
            )}
            containerClassName="w-full"
            onChange={onChange}
            value={value}
            id={inputId}
            ref={ref}
            {...rest}
          />

          <button
            onClick={togglePasswordShown}
            className={clsx(
              "absolute top-[50%] -translate-y-[50%] right-3",
              isPasswordShown &&
                "after:content-[''] after:absolute after:left-2 after:top-0 after:h-full after:w-[2px] after:bg-[#595959] after:rotate-45"
            )}
          >
            <FaEye width={20} height={20} />
          </button>
        </div>
        <p className="font-inter text-sm text-[#7A0323]">{error && error}</p>
      </div>
    );
  }
);
