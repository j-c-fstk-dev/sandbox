"use client";

import { useState } from "react";
import BlogPostCard from "@/components/BlogPostCard";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Sample blog posts data
  const blogPosts = [
  {
    title: "10 Simple Ways to Reduce Your Carbon Footprint",
    excerpt:
    "Discover practical daily actions that can make a significant environmental impact when adopted by communities worldwide.",
    date: "December 15, 2024",
    image:
    "https://images.unsplash.com/photo-1569163139394-de44cb5894ce?w=400&h=250&fit=crop",
    tags: ["sustainability", "carbon-footprint", "lifestyle"],
    slug: "reduce-carbon-footprint"
  },
  {
    title: "The Power of Community Action",
    excerpt:
    "How local environmental initiatives are creating global change, one neighborhood at a time.",
    date: "December 10, 2024",
    image:
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
    tags: ["community", "action", "impact"],
    slug: "power-of-community-action"
  },
  {
    title: "Plastic-Free Living: A Beginner's Guide",
    excerpt:
    "Start your journey towards reducing plastic waste with these easy-to-implement strategies.",
    date: "December 5, 2024",
    image:
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
    tags: ["plastic-free", "waste-reduction", "beginner"],
    slug: "plastic-free-living-guide"
  },
  {
    title: "Urban Gardening for Environmental Impact",
    excerpt:
    "Transform your city space into a green oasis while contributing to local food security and biodiversity.",
    date: "November 28, 2024",
    image:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
    tags: ["gardening", "urban", "biodiversity", "food-security"],
    slug: "urban-gardening-impact"
  },
  {
    title: "Renewable Energy: Making the Switch at Home",
    excerpt:
    "A comprehensive guide to transitioning your household to renewable energy sources.",
    date: "November 22, 2024",
    image:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop",
    tags: ["renewable-energy", "solar", "home-improvement"],
    slug: "renewable-energy-home-switch"
  },
  {
    title: "Water Conservation Strategies That Work",
    excerpt:
    "Effective methods for reducing water consumption while maintaining quality of life.",
    date: "November 15, 2024",
    image:
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
    tags: ["water-conservation", "sustainability", "home-tips"],
    slug: "water-conservation-strategies"
  },
  {
    title: "The Science Behind Climate Action",
    excerpt:
    "Understanding the research that drives our environmental initiatives and monthly actions.",
    date: "November 8, 2024",
    image:
    "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop",
    tags: ["climate-science", "research", "education"],
    slug: "science-behind-climate-action"
  },
  {
    title: "Building Sustainable Communities",
    excerpt:
    "How neighborhoods are coming together to create lasting environmental change.",
    date: "October 30, 2024",
    image:
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop",
    tags: ["community", "sustainability", "neighborhood"],
    slug: "building-sustainable-communities"
  },
  {
    title: "Zero Waste Kitchen: Getting Started",
    excerpt:
    "Transform your kitchen into a zero-waste zone with these practical tips and strategies.",
    date: "October 22, 2024",
    image:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
    tags: ["zero-waste", "kitchen", "lifestyle", "beginner"],
    slug: "zero-waste-kitchen-guide"
  }];


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
    </div>);

}