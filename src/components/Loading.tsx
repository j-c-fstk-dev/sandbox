interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export default function Loading({
  size = "md",
  text = "Loading..."
}: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className="flex flex-col items-center justify-center py-8" data-oid="e4y6sqe">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-neutral-medium-gray border-t-primary-green mb-4`} data-oid="w.nylse">
      </div>
      <p className="text-neutral-dark-gray" data-oid="xr0av5x">{text}</p>
    </div>);

}