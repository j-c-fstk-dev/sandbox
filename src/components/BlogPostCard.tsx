import React from "react";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  slug: string;
}

export default function BlogPostCard({
  title,
  excerpt,
  date,
  image,
  tags,
  slug
}: BlogPostCardProps) {
  return (
    <div
      className="card animate-slide-up group cursor-pointer"
      onClick={() => window.location.href = `/blog/${slug}`} data-oid="mu61vxl">

      <div className="aspect-video mb-4 overflow-hidden rounded-lg" data-oid="7mirs.o">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-oid="cuqlfzl" />

      </div>

      <div className="space-y-3" data-oid="_m85y.s">
        <div className="flex flex-wrap gap-2" data-oid="-l:f0se">
          {tags.map((tag, index) =>
          <span key={index} className="tag tag-inactive text-xs" data-oid="u-mdt7d">
              {tag}
            </span>
          )}
        </div>

        <h3 className="font-serif font-bold text-xl text-neutral-text-dark group-hover:text-primary-green transition-colors duration-200" data-oid="93sgkm4">
          {title}
        </h3>

        <p className="text-neutral-dark-gray text-sm leading-relaxed" data-oid="-2fvjag">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-2" data-oid="w3jtwkk">
          <span className="text-xs text-neutral-dark-gray" data-oid="-ozi:hu">{date}</span>
          <span className="text-primary-green text-sm font-medium group-hover:underline" data-oid="w22wb0g">
            Read more →
          </span>
        </div>
      </div>
    </div>);

}