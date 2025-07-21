"use client";

import { useState } from "react";
import CommunityPostCard from "@/components/CommunityPostCard";

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Sample community posts data - Only @TrinityMorphy's post
  const communityPosts = [
    {
      type: "carousel" as const, // <-- MUITO IMPORTANTE: Mudar para 'carousel'
      user: {
        name: "@TrinityMorphy",
        avatar:
        "https://pbs.twimg.com/profile_images/1815756324019245056/QS6PfZWv_400x400.jpg"
      },
      content:
      `How did Earth Day go for me?
      Thanks to funding from @HighlyArtistic, I was able to coordinate and support 30 local clubs from @Rotaract_D9142 and @ploggingnigeria in carrying out cleanup initiatives in celebration of World Earth Day. Here are some action shots:
  
      Rotaract Club of Awka Gateway
      Disposable Waste Cleaned: 27 kg
      Recyclable Waste Cleaned: 9.1 kg
      Total: 35.1 kg
  
      Rotaract Club of Nnamdi Azikiwe University Teaching Hospital
      Disposable Waste Cleaned: 65 kg
      Recyclable Waste Cleaned: 37.5 kg
      Total: 102.5 kg
  
      Rotaract Club of Amakohia/Akwakuma
      Disposable Waste Cleaned: 94 kg
      Recyclable Waste Cleaned: 1.4 kg
      Total: 95.4 kg`, // <-- Conteúdo completo com quebras de linha
      images: [ // <-- MUITO IMPORTANTE: Usar 'images' (array) ao invés de 'image'
        "https://pbs.twimg.com/media/GpPzuIBXYAAIu2w?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpPzuIBWYAAnKiG?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpPzuAxXIAALneZ?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpPzuHmXcAEU4AE?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_efWUAAxVRJ?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_ejXsAAyFFi?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_e9XoAAGALN?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_ehXQAA3MQH?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP0qdCWsAEf5AL?format=medium", // Corrected format
        "https://pbs.twimg.com/media/GpP0qVvXYAApX1j?format=png&name=900x900",
        "https://pbs.twimg.com/media/GpP0qVvXkAAm_Cy?format=png&name=900x900",
        "https://pbs.twimg.com/media/GpP1jmXWoAAyGVi?format=medium", // Corrected format
        "https://pbs.twimg.com/media/GpP1jmWWgAAEuqq?format=medium", // Corrected format
        "https://pbs.twimg.com/media/GpP1jmbWcAAZK4P?format=medium", // Corrected format
        "https://pbs.twimg.com/media/GpP1jmcXgAAyz-T?format=medium", // Corrected format
        "https://pbs.twimg.com/media/GpP2lLeW0AA1tt_?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP2lSdXoAAoY8v?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP2lSZXAAAyqli?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP2lSZXoAA-U_W?format=jpg&name=4096x4096",
      ],
      likes: 47,
      comments: 12,
      date: "22.05.2025" // <-- Data no formato de string simples
    }
  ];

  // Extract tags from content for filtering (simplified approach)
  const extractTags = (post: any) => {
    const tags = [];
    if (post.content.includes("cleanup") || post.content.includes("clean"))
      tags.push("cleanup");
    if (post.content.includes("tree") || post.content.includes("plant"))
      tags.push("planting");
    if (post.content.includes("solar") || post.content.includes("energy"))
      tags.push("energy");
    if (post.content.includes("waste") || post.content.includes("recycle"))
      tags.push("waste-reduction");
    if (post.content.includes("garden") || post.content.includes("compost"))
      tags.push("gardening");
    if (post.content.includes("water")) tags.push("water");
    if (post.content.includes("community") || post.content.includes("neighbor"))
      tags.push("community");
    if (post.content.includes("school") || post.content.includes("education"))
      tags.push("education");
    if (post.type === "poll") tags.push("poll");
    return tags;
  };

  // Get all unique tags from the single post
  const allTags = Array.from(
    new Set(communityPosts.flatMap(extractTags))
  ).sort();

  // Filter posts based on search term and selected tag
  // Only filter the single post if it matches the criteria
  const filteredPosts = communityPosts.filter((post) => {
    const matchesSearch =
      searchTerm === "" ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.user.name.toLowerCase().includes(searchTerm.toLowerCase());

    const postTags = extractTags(post);
    const matchesTag = selectedTag === "" || postTags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen py-16 px-4" data-oid="j4_suan">
      <div className="max-w-6xl mx-auto" data-oid="7_nyzo8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in" data-oid="mzi:0t0">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-primary-green mb-6"> {/* Changed text color to primary-green */}
            Community Feed
          </h1>
          <p className="text-xl text-neutral-dark-gray leading-relaxed max-w-3xl mx-auto" data-oid="m57ncmc">
            Explore the contributions and engagement of our community! See what
            fellow environmental advocates are accomplishing and get inspired to
            take action.
          </p>
        </div>

        {/* Search & Filter Bar - Still useful for searching within the single post */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-12 animate-slide-up" data-oid="g4fgm2z">
          <div className="flex flex-col lg:flex-row gap-4 items-center" data-oid="9:45fbj">
            {/* Search Input */}
            <div className="flex-1 w-full" data-oid="l4x2o9a">
              <input
                type="text"
                placeholder="Search posts by content or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-colors duration-200" data-oid="1ncs4b3" />
            </div>

            {/* Tag Filter - Still useful for filtering the single post */}
            <div className="flex flex-wrap gap-2 items-center" data-oid="5ah_xnd">
              <span className="text-sm font-medium text-neutral-dark-gray whitespace-nowrap" data-oid="b6dv9xw">
                Filter by:
              </span>
              <button
                onClick={() => setSelectedTag("")}
                className={`tag ${selectedTag === "" ? "tag-active" : "tag-inactive"}`} data-oid="f997-_s">
                All Posts
              </button>
              {/* Ensure allTags is generated only from the single post */}
              {allTags.map((tag) =>
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
                  className={`tag ${selectedTag === tag ? "tag-active" : "tag-inactive"}`} data-oid="f1w0:sf">
                  {tag}
                </button>
              )}
            </div>

            {/* Clear Filter Button */}
            {selectedTag &&
              <button
                onClick={() => setSelectedTag("")}
                className="text-sm text-primary-green hover:text-primary-green-dark font-medium" data-oid="kmv-t8g">
                Clear Filter
              </button>
            }
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8" data-oid="u6mj83:">
          <p className="text-neutral-dark-gray" data-oid="2ziqsj4">
            Showing {filteredPosts.length} of {communityPosts.length} posts
            {searchTerm && ` for "${searchTerm}"`}
            {selectedTag && ` tagged with "${selectedTag}"`}
          </p>
        </div>

        {/* Community Posts Grid - Displaying only the filtered post */}
        {filteredPosts.length > 0 ?
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid="xbz0lm1">
            {filteredPosts.map((post, index) =>
              <CommunityPostCard key={index} {...post} data-oid="7fqcmml" />
            )}
          </div> :
          <div className="text-center py-16" data-oid=":154ezv">
            <div className="text-6xl mb-4" data-oid="hgast:k">🔍</div>
            <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-4" data-oid="l8.-toa">
              No posts found
            </h3>
            <p className="text-neutral-dark-gray mb-6" data-oid="fyhiywo">
              Try adjusting your search terms or clearing the filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("");
              }}
              className="bg-primary-green text-neutral-text-light px-6 py-3 rounded-full font-medium hover:bg-primary-green-dark transition-colors duration-200" data-oid=":n293xh">
              Clear All Filters
            </button>
          </div>
        }

        {/* Call to Action - Adjusting styling to match Hero Section */}
        <div className="mt-16 text-center bg-[#c9e6db] text-[#365b36] py-12 px-4 rounded-lg animate-slide-up" data-oid="rs1cre."> {/* Updated background and text colors, added padding and rounded corners */}
          <div className="max-w-xl mx-auto">
            <h3 className="font-serif font-bold text-2xl mb-4 text-[#365b36]"> {/* Ensured heading text color matches section text color */}
              Join Our Community
            </h3>
            <p className="text-lg mb-6 text-[#737373] leading-relaxed"> {/* Updated paragraph text color and added leading-relaxed */}
              Share your environmental actions, connect with like-minded
              individuals, and be part of the global movement for positive
              change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6"> {/* Added top margin for spacing */}
              {/* Button 1 - Matching filled style */}
              <a
                href="/actions"
                className="bg-[#017d8c] hover:bg-[#016a77] text-white transition px-6 py-3 rounded-full font-medium"> {/* Applied filled button classes */}
                View Actions
              </a>
              {/* Button 2 - Matching outlined style */}
              <a
                href="/testimonials"
                className="border-2 border-[#365b36] text-[#365b36] hover:bg-[#365b36] hover:text-white transition px-6 py-3 rounded-full font-medium"> {/* Applied outlined button classes */}
                Share Your Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}