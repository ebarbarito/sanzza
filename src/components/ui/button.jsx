import React from "react";
export function Button({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) {
  const base = "rounded px-3 py-1 font-medium inline-flex items-center justify-center";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const finalClass = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button onClick={onClick} className={finalClass} {...props}>
      {children}
    </button>
  );
}
