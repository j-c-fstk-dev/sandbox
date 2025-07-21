// src/app/blog/renewable-energy-making-the-switch-at-home/page.tsx
import { notFound } from "next/navigation";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPost = {
  title: "Renewable Energy: Making the Switch at Home",
  author: "Nick", // Added author
  date: "November 22, 2024",
  image:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop", // Use the image from page.tsx
  tags: ["renewable-energy", "solar", "home-improvement"],
  content: `
            <p>Imagine powering your home with the sun, wind, or even the earth itself. Making the switch to renewable energy might seem like a daunting task, but it's more accessible and affordable than ever before. This comprehensive guide will walk you through the exciting world of home-based renewable energy, empowering you to reduce your carbon footprint, lower your utility bills, and contribute to a more sustainable future.</p>

            <h2>Why Renewable Energy?</h2>

            <p>Our traditional energy sources, like coal and natural gas, contribute significantly to greenhouse gas emissions and climate change. Renewable energy, derived from natural processes that replenish themselves, offers a clean and sustainable alternative. Transitioning your household to renewables isn't just an environmental choice; it's a smart home improvement investment that can increase your property value and provide long-term financial savings.</p>

            <h2>Understanding Your Renewable Options</h2>

            <p>While the term "renewable energy" is broad, for most homeowners, the primary focus will be on these key technologies:</p>

            <h3>Solar Power (Photovoltaics - PV):</h3>
            <ul>
              <li><b>How it Works:</b> Solar panels convert sunlight directly into electricity. This electricity can then be used to power your home, stored in batteries, or even sold back to the grid (net metering).</li>
              <li><b>Pros:</b> Abundant sunshine, significant reduction in electricity bills, low maintenance, increasing efficiency.</li>
              <li><b>Cons:</b> Intermittent (no power at night), initial installation cost, requires adequate roof space and sun exposure.</li>
              <li><b>Things to Consider:</b> Get a professional solar assessment to determine your home's suitability, discuss battery storage options, and understand local grid tie-in policies.</li>
            </ul>

            <h3>Wind Energy (Residential Turbines):</h3>

            <ul>
              <li><b>How it Works:</b> Smaller wind turbines can capture wind energy to generate electricity.</li>
              <li><b>Pros:</b> Can be highly efficient in windy areas, good for off-grid living, complements solar in some climates.</li>
              <li><b>Cons:</b> Requires consistent wind, can be noisy, visual impact, local zoning restrictions are common.</li>
            </ul>

        `,
};

export default function BlogPostPage() {
  // This is a simplified version. In a real app, you'd fetch the post based on the slug.
  const post = blogPost; // Using the hardcoded post for now

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-neutral-text-dark mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-neutral-dark-gray mb-6">
            <span>By {post.author}</span>
            <span className="hidden sm:inline">•</span>
            <span>{post.date}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {post.tags.map((tag, index) =>
              <span key={index} className="tag tag-inactive">
                {tag}
              </span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 animate-slide-up">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-sm" />
        </div>

        {/* Content */}
        <div
          className="prose animate-slide-up"
          dangerouslySetInnerHTML={{ __html: post.content }} />


        {/* Share Buttons - You can add these if needed */}
        {/* <div className="mt-12 pt-8 border-t border-neutral-medium-gray"></div> */}

        {/* Navigation - You can add this if needed */}
        {/* <div className="mt-12 text-center"></div> */}
      </article>
    </div>
  );
}
