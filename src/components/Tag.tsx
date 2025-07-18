interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  size?: "sm" | "md";
  className?: string;
}

export default function Tag({
  children,
  active = false,
  onClick,
  size = "md",
  className = ""
}: TagProps) {
  const baseClasses = "tag transition-colors duration-200";
  const activeClasses = active ? "tag-active" : "tag-inactive";
  const sizeClasses = size === "sm" ? "text-xs" : "text-sm";
  const interactiveClasses = onClick ? "cursor-pointer hover:opacity-80" : "";

  const combinedClasses = `${baseClasses} ${activeClasses} ${sizeClasses} ${interactiveClasses} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClasses} data-oid="areoahi">
        {children}
      </button>);

  }

  return <span className={combinedClasses} data-oid="l9abfaw">{children}</span>;
}