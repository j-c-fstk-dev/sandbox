"use client";

import { useState } from "react";
import ActionCard from "@/components/ActionCard";

export default function ActionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Sample actions data
  const actions = [
  {
    name: "Community Clean-Up Drive",
    description:
    "Organize or join local clean-up efforts in parks, beaches, neighborhoods, and public spaces. Bring gloves, bags, and enthusiasm to make your community cleaner and more beautiful.",
    icon: "🧹",
    tags: ["community", "cleanup", "waste-reduction", "outdoor"]
  },
  {
    name: "Tree Planting Initiative",
    description:
    "Plant native trees in your community to improve air quality, provide habitat for wildlife, and combat climate change. Partner with local organizations for maximum impact.",
    icon: "🌳",
    tags: ["planting", "trees", "carbon-offset", "biodiversity"]
  },
  {
    name: "Plastic-Free Challenge",
    description:
    "Commit to reducing single-use plastics for the entire month. Share tips, alternatives, and progress with your community to inspire others.",
    icon: "🚫",
    tags: ["plastic-free", "waste-reduction", "lifestyle", "challenge"]
  },
  {
    name: "Energy Audit & Efficiency",
    description:
    "Conduct home energy audits, switch to LED bulbs, improve insulation, and implement energy-saving practices. Share your results and tips with neighbors.",
    icon: "⚡",
    tags: ["energy", "efficiency", "home-improvement", "savings"]
  },
  {
    name: "Sustainable Transportation Week",
    description:
    "Use public transport, bike, walk, or carpool instead of driving alone. Track your carbon savings and encourage others to join the movement.",
    icon: "🚲",
    tags: ["transportation", "carbon-reduction", "health", "community"]
  },
  {
    name: "Community Garden Project",
    description:
    "Start or contribute to community gardens that provide fresh, local food while building neighborhood connections and green spaces.",
    icon: "🌱",
    tags: ["gardening", "food-security", "community", "urban"]
  },
  {
    name: "Water Conservation Campaign",
    description:
    "Implement water-saving techniques at home and advocate for water conservation in your community. Monitor usage and share conservation tips.",
    icon: "💧",
    tags: ["water-conservation", "home-tips", "sustainability", "resources"]
  },
  {
    name: "Renewable Energy Advocacy",
    description:
    "Research and promote renewable energy options in your area. Organize information sessions about solar, wind, and other clean energy solutions.",
    icon: "☀️",
    tags: ["renewable-energy", "advocacy", "solar", "education"]
  },
  {
    name: "Zero Waste Workshop",
    description:
    "Host or attend workshops on reducing waste, composting, and living more sustainably. Share practical tips and DIY solutions.",
    icon: "♻️",
    tags: ["zero-waste", "education", "workshop", "lifestyle"]
  },
  {
    name: "Wildlife Habitat Restoration",
    description:
    "Create or restore habitats for local wildlife by planting native species, building bird houses, or removing invasive plants.",
    icon: "🦋",
    tags: ["wildlife", "habitat", "biodiversity", "restoration"]
  },
  {
    name: "Green Business Initiative",
    description:
    "Encourage local businesses to adopt sustainable practices. Organize meetings, provide resources, and recognize eco-friendly businesses.",
    icon: "🏢",
    tags: ["business", "sustainability", "advocacy", "local"]
  },
  {
    name: "Climate Education Outreach",
    description:
    "Organize educational events about climate change, environmental science, and sustainable living for schools and community groups.",
    icon: "📚",
    tags: ["education", "climate-science", "outreach", "awareness"]
  },
  {
    name: "Sustainable Food Systems",
    description:
    "Promote local food systems, farmers markets, and sustainable agriculture. Organize community-supported agriculture programs.",
    icon: "🥬",
    tags: ["food-systems", "local", "agriculture", "nutrition"]
  },
  {
    name: "Green Transportation Hub",
    description:
    "Advocate for better public transportation, bike lanes, and pedestrian infrastructure in your community.",
    icon: "🚌",
    tags: ["transportation", "infrastructure", "advocacy", "urban-planning"]
  },
  {
    name: "Environmental Policy Advocacy",
    description:
    "Engage with local government on environmental policies. Attend town halls, write letters, and organize community voices for change.",
    icon: "🏛️",
    tags: ["policy", "advocacy", "government", "civic-engagement"]
  }];


  // Get all unique tags
  const allTags = Array.from(
    new Set(actions.flatMap((action) => action.tags))
  ).sort();

  // Filter actions based on search term and selected tag
  const filteredActions = actions.filter((action) => {
    const matchesSearch =
    searchTerm === "" ||
    action.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    action.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag === "" || action.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen py-16 px-4" data-oid="zdtskho">
      <div className="max-w-6xl mx-auto" data-oid="_jgqoue">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in" data-oid="1vxsa01">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-primary-green mb-6" data-oid="9.i2aaj"> {/* Changed text color to primary-green */}
            List of #MonthlyEarthDay Actions
          </h1>
          <p className="text-xl text-neutral-dark-gray leading-relaxed max-w-3xl mx-auto" data-oid="y0v9mt8">
            Discover meaningful environmental actions you can take in your
            community. Each action is designed to create positive impact while
            building connections with others.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-12 animate-slide-up" data-oid="wvp9bj6">
          <div className="flex flex-col lg:flex-row gap-4 items-center" data-oid="w1s._jx">
            {/* Search Input */}
            <div className="flex-1 w-full" data-oid="7.47u_a">
              <input
                type="text"
                placeholder="Search actions by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-colors duration-200" data-oid="oaq-s9h" />

            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2 items-center" data-oid="hucg-kj">
              <span className="text-sm font-medium text-neutral-dark-gray whitespace-nowrap" data-oid="f_67ehl">
                Filter by:
              </span>
              <button
                onClick={() => setSelectedTag("")}
                className={`tag ${selectedTag === "" ? "tag-active" : "tag-inactive"}`} data-oid="l5q68bo">

                All
              </button>
              {allTags.map((tag) =>
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
                className={`tag ${selectedTag === tag ? "tag-active" : "tag-inactive"}`} data-oid="g3hhm.6">

                  {tag}
                </button>
              )}
            </div>

            {/* Clear Filter Button */}
            {selectedTag &&
            <button
              onClick={() => setSelectedTag("")}
              className="text-sm text-primary-green hover:text-primary-green-dark font-medium" data-oid="o-rcwt_">

                Clear Filter
              </button>
            }
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8" data-oid="64yvxxi">
          <p className="text-neutral-dark-gray" data-oid="enxeoql">
            Showing {filteredActions.length} of {actions.length} actions
            {searchTerm && ` for "${searchTerm}"`}
            {selectedTag && ` tagged with "${selectedTag}"`}
          </p>
        </div>

        {/* Actions Grid */}
        {filteredActions.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="tcwy6uo">
            {filteredActions.map((action, index) =>
          <ActionCard key={index} {...action} data-oid="n-k4qz." />
          )}
          </div> :

        <div className="text-center py-16" data-oid="1nf2osd">
            <div className="text-6xl mb-4" data-oid="_bk-bg4">🔍</div>
            <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-4" data-oid="fa4c6fh">
              No actions found
            </h3>
            <p className="text-neutral-dark-gray mb-6" data-oid="4fad8e0">
              Try adjusting your search terms or clearing the filters.
            </p>
            <button
            onClick={() => {
              setSearchTerm("");
              setSelectedTag("");
            }}
            className="bg-primary-green text-neutral-text-light px-6 py-3 rounded-full font-medium hover:bg-primary-green-dark transition-colors duration-200" data-oid="_urhzu9">

              Clear All Filters
            </button>
          </div>
        }

        {/* Call to Action - Adjusting styling to match Hero Section */}
        <div className="mt-16 text-center bg-[#c9e6db] text-[#365b36] py-12 px-4 rounded-lg animate-slide-up" data-oid="-mtxw6r"> {/* Updated background and text colors, added padding and rounded corners */}
          <div className="max-w-xl mx-auto">
            <h3 className="font-serif font-bold text-2xl mb-4 text-[#365b36]" data-oid="fbbbcj5"> {/* Ensured heading text color matches section text color */}
              Ready to Take Action?
            </h3>
            <p className="text-lg mb-6 text-[#737373] leading-relaxed" data-oid="06i3heo"> {/* Updated paragraph text color and added leading-relaxed */}
              Join our community and participate in monthly environmental
              actions that create real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6" data-oid="jqdxjap"> {/* Added top margin for spacing */}

              {/* Button 1 - Matching outlined style */}
              <a
                href="/calendar"
                className="border-2 border-[#365b36] text-[#365b36] hover:bg-[#365b36] hover:text-white transition px-6 py-3 rounded-full font-medium" data-oid="v02rhgh"> {/* Applied outlined button classes */}
                View Calendar
              </a>

              {/* Button 2 - Matching filled style */}
              <a
                href="/community"
                className="bg-[#017d8c] hover:bg-[#016a77] text-white transition px-6 py-3 rounded-full font-medium" data-oid="ep:zty_"> {/* Applied filled button classes */}
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>);
}