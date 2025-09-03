// src/app/blog/page.tsx
"use client";

import { useState } from "react";
import BlogPostCard from "@/components/BlogPostCard";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const blogPosts = [
    {
      title: "The Ripple Effect of Collective Action: How Monthly Trash Cleanups Create Waves of Change",
      excerpt: "A single person picking up trash once a month can make a difference, but when many join in, the impact becomes a tidal wave of change.",
      date: "August 5, 2024",
      image: "https://res.cloudinary.com/dr0weongo/image/upload/v1756908390/693b392a813eaa4_file_000000000d3461f7846ccadaf629b6f6_wm_tretoh.png",
      tags: ["collective action", "community", "environment", "cleanups"],
      slug: "the-ripple-effect-of-collective-action",
      author: "Monthly Earth Day Initiative"
    },
    {
      title: "Why We Should Celebrate Earth Day Every Month: A Call for Lasting Change",
      excerpt: "Earth Day, celebrated annually on April 22, is a powerful reminder to honor and protect our planet. But one day a year isn’t enough to address the urgent environmental challenges we face...",
      date: "July 22, 2025",
      image: "https://res.cloudinary.com/dr0weongo/image/upload/v1752847674/20250718_105015_j7pzxn.jpg",
      tags: ["Earth Day", "sustainability", "climate action", "community"],
      slug: "why-celebrate-earth-day-every-month",
      author: "Monthly Earth Day Initiative"
    },
    {
      title: "10 Simple Ways to Reduce Your Carbon Footprint",
      excerpt:
        "Discover practical daily actions that can make a significant environmental impact when adopted by communities worldwide.",
      date: "December 15, 2024",
      image:
        "https://res.cloudinary.com/dr0weongo/image/upload/v1753021402/387295953_38790678-c397-4fa1-ae4c-31916d952b5f_fx4jf4.jpg",
      tags: ["sustainability", "carbon-footprint", "lifestyle"],
      slug: "reduce-carbon-footprint",
      author: "Sarah Green"
    },
    {
      title: "The Power of Community Action",
      excerpt:
        "How local environmental initiatives are creating global change, one neighborhood at a time.",
      date: "December 10, 2024",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
      tags: ["community", "action", "impact"],
      slug: "power-of-community-action",
      author: "David Kim"
    },
    {
      title: "Plastic-Free Living: A Beginner's Guide",
      excerpt:
        "Start your journey towards reducing plastic waste with these easy-to-implement strategies.",
      date: "July 21, 2024",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
      tags: ["plastic-free", "waste-reduction", "beginner"],
      slug: "plastic-free-living-guide",
      author: "Your Name Here"
    }
  ];

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag === "" || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-neutral-text-dark mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-neutral-dark-gray leading-relaxed">
            Insights, tips, and stories from our environmental community
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-12 animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search by title or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-colors duration-200" />
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-neutral-dark-gray whitespace-nowrap">
                Filter by:
              </span>
              <button
                onClick={() => setSelectedTag("")}
                className={`tag ${selectedTag === "" ? "tag-active" : "tag-inactive"}`}>
                All
              </button>
              {allTags.map((tag) =>
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
                  className={`tag ${selectedTag === tag ? "tag-active" : "tag-inactive"}`}>
                  {tag}
                </button>
              )}
            </div>

            {selectedTag &&
              <button
                onClick={() => setSelectedTag("")}
                className="text-sm text-primary-green hover:text-primary-green-dark font-medium">
                Clear Filter
              </button>
            }
          </div>
        </div>

        <div className="mb-8">
          <p className="text-neutral-dark-gray">
            Showing {filteredPosts.length} of {blogPosts.length} posts
            {searchTerm && ` for "${searchTerm}"`}
            {selectedTag && ` tagged with "${selectedTag}"`}
          </p>
        </div>

        {filteredPosts.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) =>
              <BlogPostCard key={post.slug} {...post} />
            )}
          </div> :
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-4">
              No posts found
            </h3>
            <p className="text-neutral-dark-gray mb-6">
              Try adjusting your search terms or clearing the filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("");
              }}
              className="bg-primary-green text-neutral-text-light px-6 py-3 rounded-full font-medium hover:bg-primary-green-dark transition-colors duration-200">
              Clear All Filters
            </button>
          </div>
        }
      </div>
    </div>
  );
}
