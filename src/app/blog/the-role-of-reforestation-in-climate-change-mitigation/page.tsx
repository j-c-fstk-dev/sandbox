// src/app/blog/the-role-of-reforestation-in-climate-change-mitigation/page.tsx
import { notFound } from "next/navigation";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPost = {
  title: "The Role of Reforestation in Climate Change Mitigation",
  author: "Nick", // Added author
  date: "November 10, 2023",
  excerpt: "Explore how planting trees and restoring forests can significantly help in combating climate change.",
  image:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop", // Use a relevant image URL from page.tsx or a placeholder
  tags: ["reforestation", "climate-action", "environment"],
  slug: "the-role-of-reforestation-in-climate-change-mitigation",
  content: `
            <p>Forests are vital ecosystems that play a crucial role in maintaining the health of our planet. They are home to incredible biodiversity, regulate water cycles, and provide livelihoods for millions of people. Importantly, they are also powerful allies in the fight against climate change.</p>

            <h2>The Role of Reforestation</h2>

            <p>Reforestation, the process of replanting forests on land that has been cleared or degraded, is a key strategy for mitigating climate change. Trees absorb carbon dioxide (CO2) from the atmosphere through photosynthesis, storing the carbon in their biomass (wood, leaves, and roots) and in the soil. This process, known as carbon sequestration, helps to reduce the concentration of greenhouse gases in the atmosphere.</p>

            <h2>Why Reforestation Matters</h2>

            <ul>
              <li><b>Carbon Sequestration:</b> As mentioned, forests are excellent carbon sinks. Reforestation efforts can help offset a significant portion of human-caused CO2 emissions.</li>
              <li><b>Biodiversity:</b> Forests provide habitats for a vast array of plant and animal species. Reforestation helps to restore these habitats and protect biodiversity.</li>
              <li><b>Soil Health and Erosion Control:</b> Forest cover protects soil from erosion and helps to maintain soil health.</li>
              <li><b>Water Regulation:</b> Forests play a critical role in regulating water cycles, helping to prevent floods and droughts.</li>
              <li><b>Economic Benefits:</b> Reforestation can create jobs in planting, maintenance, and forest management. Sustainable forestry can also provide valuable timber and non-timber forest products.</li>
            </ul>

            <h2>Challenges and Solutions</h2>

            <p>Despite its importance, reforestation faces challenges, including land availability, funding, and ensuring the long-term survival of planted trees. Solutions involve:</p>

            <ul>
              <li><b>Community Involvement:</b> Engaging local communities in reforestation efforts is crucial for their success and sustainability.</li>
              <li><b>Selecting Appropriate Species:</b> Planting native tree species that are well-suited to the local climate and ecosystem increases the chances of survival.</li>
              <li><b>Addressing Deforestation:</b> Reforestation efforts must be coupled with efforts to halt deforestation.</li>
              <li><b>Policy and Funding:</b> Supportive government policies and adequate funding are essential for large-scale reforestation initiatives.</li>
            </ul>

            <h2>The Way Forward</h2>

            <p>Reforestation is a powerful natural solution to climate change, but it is not a silver bullet. It must be part of a broader strategy that includes reducing greenhouse gas emissions from all sectors, transitioning to renewable energy, and adopting sustainable land-use practices.</p>

            <h2>Conclusion</h2>

            <p>Supporting reforestation initiatives, whether through donating to reputable organizations or participating in local tree-planting events, is a tangible way to contribute to a healthier planet. By working together to bring back our forests, we can create a more sustainable future for all.</p>
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
