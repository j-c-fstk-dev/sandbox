import React from "react";

interface TestimonialCardProps {
  text: string;
  author?: string;
  image?: string;
}

export default function TestimonialCard({
  text,
  author,
  image
}: TestimonialCardProps) {
  return (
    <div className="card animate-slide-up" data-oid="7g9fmyz">
      <div className="space-y-4" data-oid="y6zdax4">
        {/* Quote Icon */}
        <div className="text-primary-green text-3xl" data-oid="gdcqb_f">"</div>

        {/* Testimonial Text */}
        <blockquote className="text-neutral-text-dark italic leading-relaxed" data-oid=".fmy7_:">
          {text}
        </blockquote>

        {/* Author Info */}
        {(author || image) &&
        <div className="flex items-center space-x-3 pt-4 border-t border-neutral-medium-gray" data-oid="tww6b4b">
            {image &&
          <img
            src={image}
            alt={author || "Testimonial author"}
            className="w-12 h-12 rounded-full object-cover" data-oid="xg2yho0" />

          }
            {author &&
          <div data-oid="0i883hz">
                <p className="font-medium text-neutral-text-dark" data-oid="um4a-e7">— {author}</p>
              </div>
          }
          </div>
        }
      </div>
    </div>);

}