// src/app/blog/the-importance-of-reducing-your-carbon-footprint/page.tsx
import { notFound } from "next/navigation";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPost = {
  title: 'The Importance of Reducing Your Carbon Footprint',
  author: "Nick", // Added author
  date: 'October 26, 2024', // Placeholder date
  excerpt: 'Discover practical steps to reduce your carbon footprint and contribute to a sustainable future.', // Added excerpt
  image:
    "https://res.cloudinary.com/dr0weongo/image/upload/v1753021402/387295953_38790678-c397-4fa1-ae4c-31916d952b5f_fx4jf4.jpg", // Use the image from page.tsx
  tags: ['carbon-footprint', 'sustainability', 'lifestyle'], // Added placeholder tags
  slug: 'the-importance-of-reducing-your-carbon-footprint',
  content: `
            <p>In the global effort to combat climate change, individual actions hold significant power. Understanding and reducing your carbon footprint is one of the most effective ways you can contribute to a sustainable future. This post will explain what a carbon footprint is, why reducing it is crucial, and provide practical, easy-to-implement tips for lowering your own impact on the planet.</p>

            <h2>What is a Carbon Footprint?</h2>

            <p>A carbon footprint is the total amount of greenhouse gas emissions caused by an individual, event, organization, or product, expressed as carbon dioxide equivalent. It includes emissions from sources like transportation, energy consumption, food production, and the goods and services we consume.</p>

            <h2>Why Reducing Your Carbon Footprint is Crucial</h2>

            <ul>
                <li><b>Climate Change Mitigation:</b> The most significant reason to reduce your carbon footprint is to mitigate climate change. Greenhouse gas emissions trap heat in the atmosphere, leading to rising global temperatures, more frequent extreme weather events, and disruption of ecosystems.</li>
                <li><b>Environmental Protection:</b> A lower carbon footprint often means reduced reliance on fossil fuels, which helps protect natural habitats and reduces pollution.</li>
                <li><b>Economic Benefits:</b> Implementing energy-efficient practices and using less energy can lead to significant savings on utility bills. Investing in renewable energy sources can also provide long-term financial benefits.</li>
                <li><b>Improved Health:</b> Reducing emissions from sources like transportation and power plants can lead to cleaner air and improved public health.</li>
            </ul>

            <h2>Simple Steps to Reduce Your Carbon Footprint</h2>

            <ul>
                <li><b>Energy Efficiency:</b> Improve your home's insulation, switch to energy-efficient appliances and LED lighting, and unplug electronics when not in use.</li>
                <li><b>Renewable Energy:</b> Consider switching to a renewable energy provider or installing solar panels on your home.</li>
                <li><b>Sustainable Transportation:</b> Walk, bike, use public transportation, carpool, or consider purchasing an electric vehicle.</li>
                <li><b>Reduce, Reuse, Recycle:</b> Minimize waste generation, reuse items whenever possible, and recycle properly.</li>
                <li><b>Support Sustainable Businesses:</b> Choose products and services from companies committed to sustainable practices.</li>
                <li><b>Eat a Plant-Based Diet:</b> Producing meat generally has a higher carbon footprint than producing plant-based foods.</li>
                <li><b>Conserve Water:</b> Use water efficiently in your home and garden.</li>
                <li><b>Travel Responsibly:</b> Consider the environmental impact of your travel choices and explore options for carbon offsetting.</li>
                <li><b>Educate Yourself and Others:</b> Learn more about climate change and share your knowledge with friends and family.</li>
            </ul>

            <h2>Conclusion</h2>

            <p>Reducing your carbon footprint is a powerful way to make a positive impact on the planet. By adopting sustainable habits and making conscious choices in our daily lives, we can collectively work towards a more sustainable future for ourselves and generations to come. Every small step counts in the fight against climate change.</p>
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
