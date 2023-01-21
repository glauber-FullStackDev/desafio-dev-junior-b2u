import React from "react";

interface IInput {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  type?: string;
}

const Input: React.FC<IInput> = ({
  label,
  onChange,
  value,
  type,
  onBlur,
  name,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-base text-gray-800 font-display">
        {label}
      </label>
      <input
        className="bg-gray-200 py-2 px-3 border-2 outline-none font-display"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        name={name}
        {...props}
      />
    </div>
  );
};

export default Input;
