// src/app/blog/the-science-behind-climate-action/page.tsx
import { notFound } from "next/navigation";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPost = {
  title: "The Science Behind Climate Action",
  author: "Nick", // Added author
  date: "November 8, 2024",
  excerpt: "Understanding the research that drives our environmental initiatives and monthly actions.",
  image:
    "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=250&fit=crop", // Use the image from page.tsx
  tags: ["climate-science", "research", "education"],
  slug: "the-science-behind-climate-action",
  content: `
            <p>Climate change is one of the most pressing challenges facing humanity, and the call for action is louder than ever. But what is the science behind this urgency? Understanding the data and the research is crucial for informed decision-making and effective climate action.</p>

            <h2>The Consensus</h2>

            <p>The vast majority of climate scientists agree that the Earth's climate is warming at an unprecedented rate, and that human activities, primarily the emission of greenhouse gases from burning fossil fuels, are the dominant cause. This consensus is based on decades of research, data collection, and independent analysis from institutions worldwide.</p>

            <h2>The Evidence</h2>

            <p>The evidence for climate change is overwhelming and multifaceted:</p>

            <ul>
              <li><b>Rising Global Temperatures:</b> Global average temperatures have increased significantly since the pre-industrial era, with the most recent decade being the warmest on record.</li>
              <li><b>Meltings Glaciers and Ice Sheets:</b> Polar ice caps and glaciers are melting at an accelerating rate, contributing to sea-level rise.</li>
              <li><b>Sea-Level Rise:</b> Global sea levels are rising due to thermal expansion of water and the melting of land ice.</li>
              <li><b>Ocean Acidification:</b> The absorption of excess CO2 by the oceans is causing them to become more acidic, threatening marine life.</li>
              <li><b>Extreme Weather Events:</b> The frequency and intensity of extreme weather events, such as heatwaves, droughts, floods, and storms, are increasing in many regions.</li>
              <li><b>Changes in Ecosystems:</b> Plant and animal species are shifting their ranges, and some are facing extinction due to changing climate conditions.</li>
            </ul>

            <h2>The Role of Greenhouse Gases</h2>

            <p>Greenhouse gases, such as carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O), trap heat in the atmosphere, creating a greenhouse effect that warms the planet. Human activities have dramatically increased the concentration of these gases in the atmosphere.</p>

            <h2>Climate Modeling</h2>

            <p>Climate scientists use complex computer models to simulate the Earth's climate system and project future climate change scenarios. These models, based on fundamental physical principles and validated with historical data, provide valuable insights into the potential impacts of continued emissions.</p>

            <h2>The Importance of Data</h2>

            <p>Continuous monitoring and data collection are essential for tracking climate change and understanding its impacts. This includes data from weather stations, satellites, ocean buoys, and ice cores, which provide a long-term record of climate trends.</p>

            <h2>Translating Science into Action</h2>

            <p>The scientific understanding of climate change provides the foundation for developing effective mitigation and adaptation strategies. This includes:</p>

            <ul>
              <li><b>Reducing Greenhouse Gas Emissions:</b> Transitioning to renewable energy sources, improving energy efficiency, and implementing sustainable transportation and land-use practices.</li>
              <li><b>Adapting to Impacts:</b> Developing strategies to cope with the unavoidable impacts of climate change, such as sea-level rise, extreme weather events, and changes in water availability.</li>
              <li><b>Public Education:</b> Disseminating accurate climate science is crucial for fostering public awareness and encouraging individual and collective action.</li>
              <li><b>Conservation Efforts:</b> Understanding the impact on ecosystems informs strategies for protecting biodiversity and natural habitats.</li>
            </ul>

            <h2>Conclusion</h2>

            <p>Understanding the science behind climate change isn't about fear; it's about empowerment. It gives us the knowledge to demand accountability, support innovative solutions, and take meaningful steps in our own lives. Join us as we continue to explore this vital research and translate it into impactful monthly actions for a sustainable future.</p>
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
