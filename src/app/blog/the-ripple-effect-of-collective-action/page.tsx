// src/app/blog/the-ripple-effect-of-collective-action/page.tsx
import { notFound } from "next/navigation";
import Link from 'next/link';

const blogPost = {
  title: "The Ripple Effect of Collective Action: How Monthly Trash Cleanups Create Waves of Change",
  author: "Monthly Earth Day Initiative",
  date: "August 5, 2024",
  image: "https://res.cloudinary.com/dr0weongo/image/upload/v1756908390/693b392a813eaa4_file_000000000d3461f7846ccadaf629b6f6_wm_tretoh.png",
  tags: ["collective action", "community", "environment", "cleanups"],
  slug: "the-ripple-effect-of-collective-action",
  content: `
            <p>A single person picking up trash once a month can make a difference, but when many join in, the impact becomes a tidal wave of change. The ripple effect of collective action in monthly cleanups transforms not just our environment but entire communities and mindsets. Here’s why coming together to clean up litter creates a powerful, far-reaching impact that extends beyond the trash bag.</p>
            <h3>The Power of Numbers</h3>
            <p>Imagine you spend an hour each month picking up trash in your local park and collect 20 pieces of litter. That’s 240 pieces a year—impressive, right? Now picture 50 people in your community doing the same. That’s 12,000 pieces of trash removed annually from just one neighborhood! According to Keep America Beautiful, volunteer cleanups across the U.S. remove millions of pounds of litter each year. When individuals unite for a shared goal, the numbers stack up fast, turning small acts into massive environmental wins. Every piece of trash you pick up adds to this collective impact, keeping streets, parks, and waterways cleaner.</p>
            <h3>Inspiring Others to Act</h3>
            <p>Collective action doesn’t just clean up litter—it sparks inspiration. When you and others clean up together, passersby notice. A 2016 study in <em>Environment and Behavior</em> found that visible acts of environmental care, like litter pickups, encourage others to adopt similar behaviors. Your monthly cleanup could motivate a neighbor to join next time or prompt someone to rethink littering. Social media amplifies this effect—posting about your cleanup with a hashtag like #TrashTag can inspire people across the globe. Each group cleanup becomes a beacon, showing others that change is possible and inviting them to join the movement.</p>
            <h3>Building Stronger Communities</h3>
            <p>Monthly cleanups bring people together, fostering connections that strengthen neighborhoods. When you clean alongside others, you’re not just picking up trash—you’re building trust, camaraderie, and a shared sense of purpose. A 2018 University of Pennsylvania study showed that cleaning up public spaces reduces crime and boosts community pride. These gatherings create a sense of ownership over shared spaces, making them safer and more vibrant. Whether it’s a family, a scout troop, or a local business pitching in, collective cleanups weave tighter community bonds, proving that working together creates more than just a cleaner environment.</p>
            <h3>Amplifying Systemic Change</h3>
            <p>The ripple effect of collective cleanups extends to policy and culture. When communities consistently tackle litter, it sends a message to local governments and businesses that people care about their environment. This can lead to better waste management systems, more recycling programs, or stricter anti-littering laws. For example, grassroots cleanup movements have influenced cities like San Francisco to implement zero-waste initiatives. Your monthly effort, combined with others, can push for broader changes, addressing the root causes of litter and pollution.</p>
            <h3>How to Maximize the Ripple Effect</h3>
            <ul>
                <li><strong>Organize or Join a Group:</strong> Connect with local cleanup initiatives or start your own. Platforms like Meetup or community boards can help.</li>
                <li><strong>Spread the Word:</strong> Share your cleanup plans and results on social media to inspire others. Use hashtags like #CleanUpCrew or #LitterHeroes.</li>
                <li><strong>Engage Diverse Groups:</strong> Invite schools, businesses, or faith groups to join, broadening the impact and building community ties.</li>
                <li><strong>Track and Celebrate:</strong> Keep a tally of trash collected or areas cleaned to show the group’s progress and motivate continued action.</li>
            </ul>
            <h3>The Big Picture</h3>
            <p>The ripple effect of collective action in monthly trash cleanups is transformative. What starts as a small group effort—picking up bottles, wrappers, and bags—grows into cleaner ecosystems, inspired individuals, stronger communities, and even policy shifts. Every time you join or organize a cleanup, you’re tossing a pebble into the pond, creating waves that reach far beyond what. So grab a bag, rally your crew, and be part of the collective movement that’s cleaning up our world, one ripple at a time.</p>
            <p>Ready to make waves? Find or start a monthly cleanup group and watch the ripple effect in action!</p>
        `,
};

export default function BlogPostPage() {
  if (!blogPost) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
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
        <div className="mb-12 animate-slide-up">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-sm" />
        </div>
        <div
          className="prose animate-slide-up"
          dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200">
              ← Back to Blog
            </Link>
            <Link href="/blog/why-celebrate-earth-day-every-month" className="inline-flex items-center text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200 ml-4">
              Next Post →
            </Link>
        </div>
      </article>
    </div>
  );
}
