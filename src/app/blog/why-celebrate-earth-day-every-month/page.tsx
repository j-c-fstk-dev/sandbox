// src/app/blog/why-celebrate-earth-day-every-month/page.tsx
import { notFound } from "next/navigation";
import Link from 'next/link'; // Import Link for navigation

// Sample blog post data for this specific page
const blogPost = {
  title: "Why We Should Celebrate Earth Day Every Month: A Call for Lasting Change",
  author: "Monthly Earth Day Initiative", // You can customize the author name
  date: "July 22, 2025", // Current date
  image:
    "https://res.cloudinary.com/dr0weongo/image/upload/v1752847674/20250718_105015_j7pzxn.jpg", // Your provided image URL
  tags: ["Earth Day", "sustainability", "climate action", "community"],
  slug: "why-celebrate-earth-day-every-month", // Match the slug from blogPosts in [slug]/page.tsx
  content: `
            <p>Earth Day, celebrated annually on April 22, is a powerful reminder to honor and protect our planet. But one day a year isn’t enough to address the urgent environmental challenges we face—climate change, deforestation, plastic pollution, and more demand consistent action. Imagine the impact if we dedicated one day every month to Earth Day, fostering a global movement of care and commitment. Here’s why a monthly Earth Day could transform our relationship with the planet and drive meaningful change, explored through four key benefits: consistent action, community momentum, education and awareness, and personal growth.</p>
            <h3>1. Consistent Action: Building Habits for a Healthier Planet</h3>
            <p>Tackling environmental issues requires more than a single day of enthusiasm. A monthly Earth Day would encourage regular, actionable steps that add up to significant impact. Imagine millions of people worldwide committing to one eco-friendly action each month—whether it’s reducing single-use plastics, composting food waste, or supporting local conservation efforts. These small, repeated efforts build habits that become second nature, creating a ripple effect of positive change.</p>
            <p>For example, if every household pledged to go car-free for one day each month, the reduction in carbon emissions could be substantial over time. According to the EPA, a typical passenger vehicle emits about 4.6 metric tons of CO₂ annually. Monthly car-free days could cut this significantly, especially if paired with public transit or biking. By making sustainability a regular practice, monthly Earth Days ensure we’re not just celebrating our planet but actively protecting it year-round.</p>
            <h3>2. Community Momentum: Uniting for Collective Impact</h3>
            <p>A monthly Earth Day would supercharge community engagement, turning local efforts into a sustained movement. Picture neighborhoods coming together each month for cleanups, tree-planting drives, or workshops on sustainable living. These events would foster a sense of shared purpose, strengthen community bonds, and inspire ongoing projects like urban gardens, renewable energy initiatives, or plastic-free campaigns.</p>
            <p>Communities that act together amplify their impact. For instance, a single cleanup can remove tons of litter—Keep America Beautiful reports that their volunteers collected over 20 million pounds of trash in 2023 alone. Monthly efforts could multiply this, while also encouraging local governments and businesses to prioritize green policies. By rallying regularly, communities would build unstoppable momentum, transforming cities and towns into hubs of environmental innovation.</p>
            <h3>3. Education and Awareness: Learning for a Greener Future</h3>
            <p>Knowledge is power, and monthly Earth Days would provide ongoing opportunities to learn about pressing environmental issues. Each month could focus on a specific theme—ocean conservation, renewable energy, biodiversity, or air quality—through workshops, webinars, school programs, or public campaigns. This consistent education would deepen our understanding and inspire creative solutions.</p>
            <p>For example, a month dedicated to ocean health could highlight the impact of plastic pollution (8 million metric tons of plastic enter the oceans annually, per the Ocean Conservancy) and teach practical steps like reducing microplastics. By keeping environmental topics in the spotlight, monthly Earth Days would empower individuals, schools, and organizations to stay informed and act with purpose, fostering a culture of curiosity and accountability.</p>
            <h3>4. Personal Growth: Embracing a Sustainable Lifestyle</h3>
            <p>Monthly Earth Days would also nurture personal growth, helping individuals build eco-friendly habits that feel achievable and rewarding. Each month could introduce a new challenge—going meatless for a day, switching to reusable bags, or planting a native garden. These small steps encourage self-reflection and growth, making sustainability a meaningful part of daily life.</p>
            <p>Research shows that habit formation takes repetition—on average, 66 days to solidify a new behavior, according to a 2009 study in the European Journal of Social Psychology. Monthly challenges provide the perfect rhythm to try, learn, and improve, turning eco-conscious choices into second nature. Whether it’s mastering zero-waste cooking or advocating for local green policies, these efforts foster a sense of empowerment and connection to the planet, enriching our lives while protecting the Earth.</p>
            <h3>A Call to Action: Make Every Month Earth Month</h3>
            <p>A monthly Earth Day isn’t just a concept—it’s a pathway to lasting change. By committing to consistent action, we build habits that reduce our environmental footprint. Through community momentum, we create networks of passionate changemakers. With ongoing education and awareness, we equip ourselves with the knowledge to innovate. And through personal growth, we transform our lives into models of sustainability.</p>
            <p>Let’s make this vision a reality. Start in your own community—organize a monthly cleanup, host a workshop, or challenge yourself to one new green habit. Share your ideas and progress with #MonthlyEarthDay to inspire others. Together, we can turn one day of celebration into a year-round movement for a healthier, thriving planet. What’s your first step for the next Earth Day? Let’s make every month count!</p>
        `,
};

export default function BlogPostPage() {
  if (!blogPost) { // Simple check, though not strictly needed here as it's hardcoded
    notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-neutral-text-dark mb-6 leading-tight">
            {blogPost.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-neutral-dark-gray mb-6">
            <span>By {blogPost.author}</span>
            <span className="hidden sm:inline">•</span>
            <span>{blogPost.date}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {blogPost.tags.map((tag, index) =>
              <span key={index} className="tag tag-inactive">
                {tag}
              </span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 animate-slide-up">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-sm" />
        </div>

        {/* Content */}
        <div
          className="prose animate-slide-up"
          dangerouslySetInnerHTML={{ __html: blogPost.content }} />

        {/* Navigation (optional for specific page, but [slug]/page handles overall nav) */}
        <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200">
              ← Back to Blog
            </Link>
        </div>
      </article>
    </div>
  );
}