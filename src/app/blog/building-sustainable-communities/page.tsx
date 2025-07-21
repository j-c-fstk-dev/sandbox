// src/app/blog/building-sustainable-communities/page.tsx
import { notFound } from "next/navigation";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPost = {
  title: "Building Sustainable Communities",
  author: "Nick", // Added author
  date: "October 30, 2024",
  excerpt: "How neighborhoods are coming together to create lasting environmental change.",
  image:
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop", // Use the image from page.tsx
  tags: ["community", "sustainability", "neighborhood"],
  slug: "building-sustainable-communities",
  content: `
            <p>Building sustainable communities is a collaborative effort that goes beyond individual actions. It involves residents, local businesses, and government working together to create a healthier, more environmentally friendly, and socially equitable place to live.</p>

            <h2>Local Food Systems</h2>

            <p>One of the core aspects of building sustainable communities is promoting local food systems. Supporting local farmers markets, community gardens, and urban farms reduces transportation emissions, preserves local farmland, and provides residents with fresh, healthy food.</p>

            <h2>Community Renewable Energy</h2>

            <p>Another crucial element is investing in renewable energy at the community level. This can include community solar projects, wind farms, or even microgrids that provide clean energy to neighborhoods. These initiatives not only reduce reliance on fossil fuels but can also create local jobs and provide economic benefits.</p>

            <h2>Sustainable Transportation</h2>

            <p>Sustainable transportation is also vital. Encouraging walking, biking, and the use of public transit reduces traffic congestion, improves air quality, and promotes a healthier lifestyle. Investing in pedestrian-friendly infrastructure, bike lanes, and efficient public transportation systems are key steps.</p>

            <h2>Waste Reduction and Recycling</h2>

            <p>Waste reduction and recycling programs are fundamental to sustainable communities. Implementing comprehensive recycling and composting programs, promoting waste reduction initiatives, and supporting local reuse and repair businesses minimize the amount of waste sent to landfills.</p>

            <h2>Community Engagement</h2>

            <p>Engaging residents and fostering a sense of community ownership are essential for the success of any sustainability initiative. Educating residents about environmental issues, organizing community clean-up events, and providing platforms for residents to participate in decision-making processes empower individuals to become active participants in creating a more sustainable community.</p>

            <h2>Conclusion</h2>

            <p>Building sustainable communities isn't just about environmental protection; it's about creating resilient, vibrant, and connected places where people thrive. By working together, neighborhoods can become powerful engines for lasting environmental change and a brighter future for all.</p>
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
