import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  disabled = false
}: ButtonProps) {
  const baseClasses =
  "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2";

  const variantClasses = {
    primary:
    "bg-primary-green text-neutral-text-light hover:bg-primary-green-dark shadow-sm",
    secondary:
    "bg-earth-blue text-neutral-text-light hover:bg-blue-600 shadow-sm",
    outline:
    "border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-neutral-text-light",
    ghost: "text-primary-green hover:bg-primary-green hover:bg-opacity-10"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClasses} data-oid="wl7jj-p">
        {children}
      </a>);

  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedClasses} data-oid="3nd1.ik">
      {children}
    </button>);

}