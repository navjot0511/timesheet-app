import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "active" | "inactive";
  children: React.ReactNode;
}

export function Button({
  variant = "inactive",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "w-full px-4 py-2 rounded border font-medium transition-colors focus:outline-none text-sm mt-2";

  const activeClasses = "text-[#1A56DB] bg-[#E1EFFE] border-[#1A56DB]";

  const inactiveClasses = "text-[#6B7280] bg-white border-[#D1D5DB]";

  return (
    <button
      {...props}
      className={`${baseClasses} ${variant === "active" ? activeClasses : inactiveClasses}`}
    >
      {children}
    </button>
  );
}
