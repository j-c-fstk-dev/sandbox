// src/app/blog/urban-gardening-for-environmental-impact/page.tsx
import { notFound } from "next/navigation";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPost = {
  title: "Urban Gardening for Environmental Impact",
  author: "Nick", // Added author
  date: "November 28, 2024",
  excerpt: "Transform your city space into a green oasis while contributing to local food security and biodiversity.",
  image:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop", // Use the image from page.tsx
  tags: ["gardening", "urban", "biodiversity", "food-security"],
  slug: "urban-gardening-for-environmental-impact",
  content: `
            <p>In our increasingly urbanized world, connecting with nature can feel challenging. But what if you could cultivate a thriving garden right in the heart of the city? Urban gardening is far more than just a hobby; it's a powerful movement with significant environmental benefits, transforming concrete jungles into vibrant, sustainable spaces.</p>

            <h2>Why Urban Gardening Matters for the Environment</h2>

            <p>Urban gardens, whether they're balcony containers, rooftop farms, or community plots, contribute to a healthier planet in numerous ways. They help reduce the urban heat island effect by providing shade and releasing moisture through evapotranspiration. They also improve air quality by filtering pollutants and producing oxygen.</p>

            <h2>Reducing Food Miles and Waste</h2>

            <p>One of the most direct environmental impacts of urban gardening is the reduction of food miles. Growing food locally significantly cuts down on the energy required for transportation, packaging, and refrigeration, lowering your carbon footprint. Plus, it reduces food waste by providing fresh produce right at your doorstep.</p>

            <h2>Water Conservation in Urban Gardens</h2>

            <p>Urban gardens also play a vital role in conserving water. By using techniques like rainwater harvesting and drip irrigation, urban gardeners can significantly reduce their water consumption compared to traditional agriculture. They also help manage stormwater runoff, preventing pollution from entering waterways.</p>

            <h2>Supporting Biodiversity</h2>

            <p>Furthermore, urban green spaces, including gardens, provide crucial habitats for pollinators like bees and butterflies, which are essential for biodiversity and food production. They create ecological corridors that connect fragmented natural areas within the city.</p>

            <h2>Getting Started with Urban Gardening</h2>

            <p>Getting started with urban gardening is accessible to everyone, regardless of space or experience. Container gardening on balconies or patios is a great option for small spaces. Rooftop gardening can utilize underused areas and provide insulation for buildings. Community gardens offer shared resources and knowledge for those with less private space.</p>

            <h2>Choosing the Right Plants</h2>

            <p>Choosing the right plants for your urban garden is key to its success. Native plants are often best as they are adapted to the local climate and require less water and maintenance. Consider drought-tolerant varieties and those that attract pollinators. companion planting can also help deter pests naturally.</p>

            <h2>Conclusion</h2>

            <p>Urban gardening is a rewarding and impactful way to contribute to a more sustainable future. It connects us to our food, beautifies our surroundings, and strengthens our communities. So, let's get our hands dirty and start cultivating change, one urban garden at a time.</p>
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
