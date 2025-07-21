// src/app/blog/water-conservation-strategies-that-work/page.tsx
import { notFound } from "next/navigation";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPost = {
  title: "Water Conservation Strategies That Work",
  author: "Nick", // Added author
  date: "November 15, 2024",
  excerpt: "Effective methods for reducing water consumption while maintaining quality of life.",
  image:
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop", // Use the image from page.tsx
  tags: ["water-conservation", "sustainability", "home-tips"],
  slug: "water-conservation-strategies-that-work",
  content: `
            <p>Water is a precious resource, essential for all life on Earth. However, with growing populations and changing climate patterns, water scarcity is becoming a significant concern in many parts of the world. Implementing effective water conservation strategies in our daily lives is crucial for ensuring a sustainable future.</p>

            <h2>Why Water Conservation Matters</h2>

            <ul>
              <li><b>Environmental Protection:</b> Conserving water helps protect aquatic ecosystems and the biodiversity they support. Reducing water consumption also lessens the energy required for water treatment and transportation, lowering greenhouse gas emissions.</li>
              <li><b>Resource Management:</b> Water is a finite resource. By using it efficiently, we ensure that enough water is available for future generations and for essential needs like agriculture and industry.</li>
              <li><b>Cost Savings:</b> Using less water directly translates to lower water bills. Implementing water-efficient fixtures and appliances can also lead to long-term savings.</li>
              <li><b>Drought Preparedness:</b> In regions prone to drought, water conservation is essential for building resilience and minimizing the impact of water shortages.</li>
            </ul>

            <h2>Effective Water Conservation Strategies</h2>

            <ul>
              <li><b>Fix Leaks Promptly:</b> Even small leaks can waste a significant amount of water over time. Regularly check for leaks in faucets, toilets, and pipes and repair them immediately.</li>
              <li><b>Install Water-Efficient Fixtures:</b> Replace old toilets, showerheads, and faucets with low-flow models. These fixtures use significantly less water without compromising performance.</li>
              <li><b>Use Water-Saving Appliances:</b> When purchasing new appliances like washing machines and dishwashers, look for models with a high Water Factor (WF) rating, indicating efficient water use.</li>
              <li><b>Reduce Watering Outdoor Spaces:</b> Water your lawn and garden only when necessary, preferably in the early morning or late evening to minimize evaporation. Use mulch to retain soil moisture.</li>
              <li><b>Collect Rainwater:</b> Install a rain barrel to collect rainwater for irrigating your plants. This reduces your reliance on municipal water.</li>
              <li><b>Take Shorter Showers:</b> Reduce the duration of your showers and consider using a low-flow showerhead.</li>
              <li><b>Turn Off the Tap:</b> Don't let the water run while brushing your teeth, shaving or washing dishes.</li>
              <li><b>Reuse Water:</b> Use water from rinsing vegetables or doing laundry (if using eco-friendly detergent) to water plants.</li>
              <li><b>Educate Your Household:</b> Make everyone in your home aware of the importance of water conservation and encourage them to adopt water-saving habits.</li>
              <li><b>Support Water Conservation Initiatives:</b> Learn about and support local and regional water conservation efforts.</li>
            </ul>

            <h2>Conclusion</h2>

            <p>Water conservation is a shared responsibility. By implementing these simple yet effective strategies in our daily lives, we can significantly reduce our water footprint, save money, and contribute to a more sustainable future. Every drop saved matters in ensuring this vital resource is available for generations to come.</p>
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
