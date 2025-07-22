// src/app/blog/page.tsx
"use client";

import { useState } from "react";
import BlogPostCard from "@/components/BlogPostCard"; // Certifique-se de que este componente existe e está correto

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Sample blog posts data - AGORA COM TODOS OS POSTS INCLUÍDOS
  const blogPosts = [
    {
      title: "Why We Should Celebrate Earth Day Every Month: A Call for Lasting Change",
      excerpt: "Earth Day, celebrated annually on April 22, is a powerful reminder to honor and protect our planet. But one day a year isn’t enough to address the urgent environmental challenges we face...",
      date: "July 22, 2025",
      image: "https://res.cloudinary.com/dr0weongo/image/upload/v1752847674/20250718_105015_j7pzxn.jpg",
      tags: ["Earth Day", "sustainability", "climate action", "community"],
      slug: "why-celebrate-earth-day-every-month",
      author: "Monthly Earth Day Initiative" // Autor do novo post
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
      author: "Sarah Green" // Ajustado o autor para consistência
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
      author: "David Kim" // Ajustado o autor para consistência
    },
    {
      title: "Plastic-Free Living: A Beginner's Guide",
      excerpt:
        "Start your journey towards reducing plastic waste with these easy-to-implement strategies.",
      date: "July 21, 2024", // Data ajustada para consistência
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
      tags: ["plastic-free", "waste-reduction", "beginner"],
      slug: "plastic-free-living-guide",
      author: "Your Name Here" // Ajustado o autor para consistência
    }
  ];

  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag === "" || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen py-16 px-4" data-oid="_b80:00">
      <div className="max-w-6xl mx-auto" data-oid="niq6wf9">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in" data-oid="nm71oxi">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-neutral-text-dark mb-6" data-oid="btw2tnx">
            Our Blog
          </h1>
          <p className="text-xl text-neutral-dark-gray leading-relaxed" data-oid="9g5rolt">
            Insights, tips, and stories from our environmental community
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-12 animate-slide-up" data-oid="3z4hf2w">
          <div className="flex flex-col lg:flex-row gap-4 items-center" data-oid="xm7u95e">
            {/* Search Input */}
            <div className="flex-1 w-full" data-oid="w-g-ldq">
              <input
                type="text"
                placeholder="Search by title or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-colors duration-200" data-oid="k2642ju" />

            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2 items-center" data-oid="la5zb68">
              <span className="text-sm font-medium text-neutral-dark-gray whitespace-nowrap" data-oid=".bnxm5-">
                Filter by:
              </span>
              <button
                onClick={() => setSelectedTag("")}
                className={`tag ${selectedTag === "" ? "tag-active" : "tag-inactive"}`} data-oid="ioy3j1j">
                All
              </button>
              {allTags.map((tag) =>
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
                  className={`tag ${selectedTag === tag ? "tag-active" : "tag-inactive"}`} data-oid="acbh.8k">
                  {tag}
                </button>
              )}
            </div>

            {/* Clear Filter Button */}
            {selectedTag &&
              <button
                onClick={() => setSelectedTag("")}
                className="text-sm text-primary-green hover:text-primary-green-dark font-medium" data-oid="-mt7:x.">
                Clear Filter
              </button>
            }
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8" data-oid=":8cfz90">
          <p className="text-neutral-dark-gray" data-oid="hf5xnby">
            Showing {filteredPosts.length} of {blogPosts.length} posts
            {searchTerm && ` for "${searchTerm}"`}
            {selectedTag && ` tagged with "${selectedTag}"`}
          </p>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="7v-vh24">
            {filteredPosts.map((post, index) =>
              <BlogPostCard key={post.slug} {...post} data-oid="rc1n6a4" />
            )}
          </div> :

          <div className="text-center py-16" data-oid="8sn3uo2">
            <div className="text-6xl mb-4" data-oid="htunv:u">🔍</div>
            <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-4" data-oid="s7zrm00">
              No posts found
            </h3>
            <p className="text-neutral-dark-gray mb-6" data-oid="8arri31">
              Try adjusting your search terms or clearing the filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("");
              }}
              className="bg-primary-green text-neutral-text-light px-6 py-3 rounded-full font-medium hover:bg-primary-green-dark transition-colors duration-200" data-oid=".ao1sa1">
              Clear All Filters
            </button>
          </div>
        }
      </div>
    </div>
  );
}