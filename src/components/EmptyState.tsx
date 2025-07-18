import Button from "./Button";

interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
  actionHref?: string;
}

export default function EmptyState({
  icon = "🔍",
  title,
  description,
  actionText,
  onAction,
  actionHref
}: EmptyStateProps) {
  return (
    <div className="text-center py-16" data-oid="6efh8qt">
      <div className="text-6xl mb-4" data-oid="_ovs1dq">{icon}</div>
      <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-4" data-oid="0k-xzj-">
        {title}
      </h3>
      <p className="text-neutral-dark-gray mb-6 max-w-md mx-auto" data-oid="u611.7p">
        {description}
      </p>
      {actionText && (onAction || actionHref) &&
      <Button variant="primary" onClick={onAction} href={actionHref} data-oid="v0gkx..">
          {actionText}
        </Button>
      }
    </div>);

}