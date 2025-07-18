"use client";

import { useState } from "react";
import CommunityPostCard from "@/components/CommunityPostCard";

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Sample community posts data
  const communityPosts = [
  {
    type: "image" as const,
    user: {
      name: "Sarah Chen",
      avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b9e0e4d4?w=40&h=40&fit=crop&crop=face"
    },
    content:
    "Amazing turnout at our local beach cleanup! We collected over 200 pounds of trash and recyclables. The community spirit was incredible - from kids to seniors, everyone pitched in. 🌊♻️ #MonthlyEarthDay",
    image:
    "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400&h=300&fit=crop",
    likes: 47,
    comments: 12,
    date: "2 hours ago"
  },
  {
    type: "poll" as const,
    user: {
      name: "Green Action Network",
      avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    content:
    "What should be our focus for January's #MonthlyEarthDay action? Your voice matters in shaping our community's environmental impact!",
    poll: {
      question: "Vote for next month's action theme:",
      options: [
      { text: "Urban Tree Planting", votes: 156 },
      { text: "Renewable Energy Advocacy", votes: 89 },
      { text: "Water Conservation", votes: 134 },
      { text: "Sustainable Transportation", votes: 67 }]

    },
    likes: 23,
    comments: 8,
    date: "1 day ago"
  },
  {
    type: "text" as const,
    user: {
      name: "Maria Rodriguez",
      avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    },
    content:
    "Just finished setting up my first compost bin! Thanks to everyone who shared tips during last month's zero waste workshop. It's amazing how much food waste we can divert from landfills. Already seeing rich, dark compost forming. Can't wait to use it in my spring garden! 🌱",
    likes: 31,
    comments: 15,
    date: "3 hours ago"
  },
  {
    type: "video" as const,
    user: {
      name: "David Kim",
      avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    content:
    "Time-lapse of our community garden transformation over the past 6 months! From empty lot to thriving food forest. This is what happens when neighbors come together for environmental action. 🌿",
    video:
    "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    likes: 89,
    comments: 24,
    date: "5 hours ago"
  },
  {
    type: "twitter" as const,
    user: {
      name: "Emma Thompson",
      avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face"
    },
    content:
    "Sharing this inspiring thread about small actions creating big change. This is exactly what #MonthlyEarthDay is all about!",
    twitterEmbed:
    "Thread about how individual environmental actions compound into massive collective impact when coordinated globally...",
    likes: 18,
    comments: 6,
    date: "8 hours ago"
  },
  {
    type: "image" as const,
    user: {
      name: "Alex Johnson",
      avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
    },
    content:
    "Our solar panel installation is complete! Thanks to the renewable energy workshop, we learned about incentives and found a great local installer. Already generating clean energy and reducing our carbon footprint. ☀️⚡",
    image:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
    likes: 52,
    comments: 18,
    date: "12 hours ago"
  },
  {
    type: "text" as const,
    user: {
      name: "Lisa Park",
      avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face"
    },
    content:
    "Proud to announce that our workplace just implemented a comprehensive recycling program! After attending the corporate sustainability workshop, I presented the plan to management. We're now diverting 80% of our waste from landfills. Small steps, big impact! 💼♻️",
    likes: 41,
    comments: 11,
    date: "1 day ago"
  },
  {
    type: "poll" as const,
    user: {
      name: "Community Organizers",
      avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face"
    },
    content:
    "Planning our next educational workshop! What topic would be most valuable for our community?",
    poll: {
      question: "Choose our next workshop focus:",
      options: [
      { text: "Home Energy Efficiency", votes: 78 },
      { text: "Native Plant Gardening", votes: 92 },
      { text: "Sustainable Transportation", votes: 45 },
      { text: "Zero Waste Living", votes: 63 }]

    },
    likes: 15,
    comments: 9,
    date: "2 days ago"
  },
  {
    type: "image" as const,
    user: {
      name: "Green Schools Initiative",
      avatar:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=40&h=40&fit=crop&crop=face"
    },
    content:
    "Elementary students planted 50 native trees today as part of our school's #MonthlyEarthDay participation! The excitement and dedication of these young environmental stewards gives us so much hope for the future. 🌳👶",
    image:
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    likes: 127,
    comments: 32,
    date: "2 days ago"
  },
  {
    type: "text" as const,
    user: {
      name: "Michael Brown",
      avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    content:
    "One year ago, I started participating in #MonthlyEarthDay actions. Today, I can proudly say I've reduced my household waste by 70%, switched to renewable energy, and helped organize 12 community environmental events. The monthly rhythm really works - it keeps environmental action at the forefront of my mind and creates lasting habits. Thank you to this amazing community! 🌍💚",
    likes: 94,
    comments: 28,
    date: "3 days ago"
  }];


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

  // Get all unique tags
  const allTags = Array.from(
    new Set(communityPosts.flatMap(extractTags))
  ).sort();

  // Filter posts based on search term and selected tag
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
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-neutral-text-dark mb-6" data-oid="-.tq-tm">
            Community Feed
          </h1>
          <p className="text-xl text-neutral-dark-gray leading-relaxed max-w-3xl mx-auto" data-oid="m57ncmc">
            Explore the contributions and engagement of our community! See what
            fellow environmental advocates are accomplishing and get inspired to
            take action.
          </p>
        </div>

        {/* Search & Filter Bar */}
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

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2 items-center" data-oid="5ah_xnd">
              <span className="text-sm font-medium text-neutral-dark-gray whitespace-nowrap" data-oid="b6dv9xw">
                Filter by:
              </span>
              <button
                onClick={() => setSelectedTag("")}
                className={`tag ${selectedTag === "" ? "tag-active" : "tag-inactive"}`} data-oid="f997-_s">

                All Posts
              </button>
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

        {/* Community Posts Grid */}
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

        {/* Call to Action */}
        <div className="mt-16 text-center" data-oid="rs1cre.">
          <div className="bg-primary-green text-neutral-text-light rounded-lg p-8 animate-slide-up" data-oid="gkj82l8">
            <h3 className="font-serif font-bold text-2xl mb-4" data-oid="h82184f">
              Join Our Community
            </h3>
            <p className="text-lg mb-6 text-green-100" data-oid="fjrn5uh">
              Share your environmental actions, connect with like-minded
              individuals, and be part of the global movement for positive
              change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-oid="v_-.yp4">
              <a
                href="/actions"
                className="bg-neutral-text-light text-primary-green px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200" data-oid="y:l8e3v">

                View Actions
              </a>
              <a
                href="/testimonials"
                className="border-2 border-neutral-text-light text-neutral-text-light px-6 py-3 rounded-full font-medium hover:bg-neutral-text-light hover:text-primary-green transition-colors duration-200" data-oid="x4:ot3l">

                Share Your Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>);

}