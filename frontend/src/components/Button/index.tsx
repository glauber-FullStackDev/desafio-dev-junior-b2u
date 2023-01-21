import React from "react";

interface IButton {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<IButton> = ({ children, onClick, type }) => {
  return (
    <button
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold font-display py-2 px-4 rounded"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
