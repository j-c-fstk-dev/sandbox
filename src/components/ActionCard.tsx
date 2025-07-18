import React from "react";

interface ActionCardProps {
  name: string;
  description: string;
  icon: string;
  tags: string[];
}

export default function ActionCard({
  name,
  description,
  icon,
  tags
}: ActionCardProps) {
  return (
    <div className="card animate-slide-up group cursor-pointer hover:border-primary-green hover:border-2" data-oid="ulhwuyy">
      <div className="space-y-4" data-oid="h-1c.e8">
        {/* Icon */}
        <div className="text-4xl text-primary-green-dark group-hover:scale-110 transition-transform duration-200" data-oid="wq6g.af">
          {icon}
        </div>

        {/* Action Name */}
        <h3 className="font-serif font-bold text-xl text-neutral-text-dark group-hover:text-primary-green transition-colors duration-200" data-oid="51akexj">
          {name}
        </h3>

        {/* Description */}
        <p className="text-neutral-dark-gray leading-relaxed" data-oid="a50j4rj">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2" data-oid="tje59uc">
          {tags.map((tag, index) =>
          <span key={index} className="tag tag-inactive text-xs" data-oid="gumjqde">
              {tag}
            </span>
          )}
        </div>
      </div>
    </div>);

}