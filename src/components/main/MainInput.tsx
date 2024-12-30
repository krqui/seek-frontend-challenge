"use client";

import React, {
  //useState,
  useRef,
  //FocusEvent,
  KeyboardEvent,
  ChangeEvent,
} from "react";

interface MainInputProps {
  name: string;
  type: React.HTMLInputTypeAttribute;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  modelValue: any;
  placeholder?: string;
  disabled?: boolean;
  step?: string;
  required?: boolean;
  rounded?: "semi" | "full";
  pattern?: string;
  error?: boolean | string;
  errorHelper?: string | boolean;
  errorMarginLeft?: boolean;
  inputClass?: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUpdateModelValue?: (value: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const MainInput: React.FC<MainInputProps> = ({
  name,
  type,
  modelValue,
  placeholder,
  disabled,
  step,
  required,
  rounded,
  pattern,
  error,
  errorHelper,
  errorMarginLeft,
  inputClass,
  className,
  onUpdateModelValue,
  onFocus,
  onBlur,
  onKeyDown,
  leftComponent,
  rightComponent,
}) => {
  const inputGroupRef = useRef<HTMLDivElement | null>(null);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = type === "number" ? +e.target.value : e.target.value;
    if (onUpdateModelValue) onUpdateModelValue(value);
  };

  const handleFocus = () => {
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    if (onBlur) onBlur();
  };

  return (
    <div
      ref={inputGroupRef}
      className={`inputGroup w-full ${"relative"} ${className || ""}`}
    >
      <div className={`relative h-full w-full`}>
        {leftComponent && (
          <div className={`absolute inset-y-0 left-0 flex items-center pl-2`}>
            {leftComponent}
          </div>
        )}
        <input
          id={name}
          type={type}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          value={modelValue}
          step={step}
          required={required}
          pattern={pattern}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInput}
          onKeyDown={onKeyDown}
          className={`w-full border-2 border-gray-100 bg-black text-base text-white placeholder:text-[16px] placeholder:text-[#868686] ${
            rounded === "full" ? "rounded-full" : "rounded-lg"
          } ${leftComponent ? "pl-12" : "pl-4"} ${
            rightComponent ? "pr-12" : "pr-2"
          } ${error ? "ring-red-500" : ""} ${inputClass || ""}`}
        />
        {rightComponent && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {rightComponent}
          </div>
        )}
      </div>
      {error && errorHelper && (
        <div
          className={`text-md font-semibold text-red-500 ${
            errorMarginLeft ? "ml-2 mt-1.5" : ""
          }`}
        >
          {typeof errorHelper === "boolean" ? "Field is required" : errorHelper}
        </div>
      )}
    </div>
  );
};

export default MainInput;
