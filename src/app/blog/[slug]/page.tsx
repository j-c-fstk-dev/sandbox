import { notFound } from "next/navigation";

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  "reduce-carbon-footprint": {
    title: "10 Simple Ways to Reduce Your Carbon Footprint",
    author: "Sarah Green",
    date: "December 15, 2024",
    image:
    "https://images.unsplash.com/photo-1569163139394-de44cb5894ce?w=800&h=400&fit=crop",
    tags: ["sustainability", "carbon-footprint", "lifestyle"],
    content: `
            <p>Climate change is one of the most pressing challenges of our time, but the good news is that each of us can make a meaningful difference through simple, everyday actions. Reducing your carbon footprint doesn't require dramatic lifestyle changes—it's about making conscious choices that, when adopted by millions of people, create significant environmental impact.</p>

            <h2>Understanding Your Carbon Footprint</h2>
            <p>Your carbon footprint is the total amount of greenhouse gases produced directly and indirectly by your activities. This includes everything from the energy you use at home to the food you eat and the transportation you choose. The average American produces about 16 tons of CO2 per year, compared to a global average of 4 tons.</p>

            <h2>10 Practical Ways to Reduce Your Impact</h2>

            <h3>1. Optimize Your Home Energy Use</h3>
            <p>Switch to LED light bulbs, which use 75% less energy than incandescent bulbs. Adjust your thermostat by just 2 degrees—lower in winter, higher in summer—to reduce energy consumption by up to 2,000 pounds of CO2 per year.</p>

            <h3>2. Choose Sustainable Transportation</h3>
            <p>Walk, bike, or use public transportation when possible. If you must drive, combine errands into one trip and maintain your vehicle properly. Consider carpooling or working from home when feasible.</p>

            <h3>3. Reduce, Reuse, Recycle</h3>
            <p>Before buying something new, ask if you really need it. Repair items when possible, buy secondhand, and properly recycle materials. Composting organic waste can reduce methane emissions from landfills.</p>

            <h3>4. Make Conscious Food Choices</h3>
            <p>Eat more plant-based meals, buy local and seasonal produce, and reduce food waste. Agriculture accounts for about 24% of global greenhouse gas emissions, so our food choices matter significantly.</p>

            <h3>5. Conserve Water</h3>
            <p>Take shorter showers, fix leaks promptly, and use water-efficient appliances. Water treatment and distribution require energy, so conserving water also reduces your carbon footprint.</p>

            <h3>6. Support Renewable Energy</h3>
            <p>If available in your area, switch to a renewable energy provider. Consider installing solar panels if feasible, or participate in community solar programs.</p>

            <h3>7. Buy Less, Choose Better</h3>
            <p>When you do need to purchase items, choose quality products that will last longer. Support companies with strong environmental commitments and sustainable practices.</p>

            <h3>8. Use Technology Wisely</h3>
            <p>Unplug electronics when not in use, enable power-saving modes on devices, and consider the environmental impact of your digital habits, including cloud storage and streaming.</p>

            <h3>9. Plant Trees and Support Green Spaces</h3>
            <p>Trees absorb CO2 from the atmosphere. Plant native species in your yard, support reforestation projects, or participate in community tree-planting events.</p>

            <h3>10. Advocate for Change</h3>
            <p>Use your voice to support environmental policies, vote for leaders who prioritize climate action, and encourage friends and family to adopt sustainable practices.</p>

            <h2>The Ripple Effect</h2>
            <p>Remember, individual actions create collective impact. When you reduce your carbon footprint, you're not just helping the environment—you're modeling sustainable behavior for others and contributing to a cultural shift toward environmental responsibility.</p>

            <p>Start with one or two changes that feel manageable, then gradually incorporate more sustainable practices into your routine. Every action matters, and together, we can create the change our planet needs.</p>

            <blockquote>
                "The best time to plant a tree was 20 years ago. The second best time is now." - Chinese Proverb
            </blockquote>

            <p>Join us for our monthly environmental actions and connect with others who are committed to making a difference. Together, we can build a more sustainable future, one action at a time.</p>
        `
  },
  "power-of-community-action": {
    title: "The Power of Community Action",
    author: "David Kim",
    date: "December 10, 2024",
    image:
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    tags: ["community", "action", "impact"],
    content: `
            <p>Environmental change doesn't happen in isolation—it thrives in communities where people come together with shared purpose and collective action. The most successful environmental initiatives are those that harness the power of community engagement, creating lasting change that extends far beyond individual efforts.</p>

            <h2>Why Community Action Works</h2>
            <p>When individuals work together toward environmental goals, they create a multiplier effect that amplifies impact in several key ways:</p>

            <ul>
                <li><strong>Shared Resources:</strong> Communities can pool resources, knowledge, and skills to tackle larger projects than any individual could manage alone.</li>
                <li><strong>Sustained Motivation:</strong> Group accountability and mutual support help maintain momentum over time.</li>
                <li><strong>Local Expertise:</strong> Community members understand local environmental challenges and opportunities better than outside organizations.</li>
                <li><strong>Cultural Change:</strong> When environmental action becomes a community norm, it influences behavior across all aspects of local life.</li>
            </ul>

            <h2>Success Stories from Around the World</h2>

            <h3>The Transition Towns Movement</h3>
            <p>Starting in Totnes, England, the Transition Towns movement has spread to over 1,000 communities worldwide. These communities work together to reduce carbon emissions and build resilience through local food systems, renewable energy projects, and sustainable transportation initiatives.</p>

            <h3>Community Gardens Revolution</h3>
            <p>Urban communities across the globe are transforming vacant lots into thriving community gardens. These spaces not only provide fresh, local food but also create gathering places that strengthen social bonds and environmental awareness.</p>

            <h3>Neighborhood Solar Cooperatives</h3>
            <p>Communities are banding together to negotiate better rates for solar installations, making renewable energy accessible to more households while reducing overall carbon emissions in their neighborhoods.</p>

            <h2>Building Environmental Community</h2>

            <h3>Start Where You Are</h3>
            <p>Look for existing community groups, neighborhood associations, or environmental organizations in your area. If none exist, consider starting a small group with neighbors who share your environmental concerns.</p>

            <h3>Focus on Local Issues</h3>
            <p>Identify environmental challenges specific to your community—whether it's air quality, water conservation, waste reduction, or green space preservation. Local issues create immediate, visible impact that motivates continued engagement.</p>

            <h3>Make it Accessible</h3>
            <p>Ensure that community environmental actions are inclusive and accessible to people of all ages, abilities, and economic backgrounds. The most successful initiatives are those that welcome everyone.</p>

            <h3>Celebrate Successes</h3>
            <p>Acknowledge and celebrate both small wins and major achievements. Recognition helps maintain motivation and attracts new participants to your community efforts.</p>

            <h2>The #MonthlyEarthDay Community Model</h2>
            <p>Our monthly action model is specifically designed to harness community power. By providing a regular rhythm of environmental engagement, we create opportunities for:</p>

            <ul>
                <li>Regular face-to-face interaction among community members</li>
                <li>Skill sharing and knowledge transfer</li>
                <li>Collaborative problem-solving for local environmental challenges</li>
                <li>Building relationships that extend beyond environmental action</li>
                <li>Creating a sense of shared purpose and accomplishment</li>
            </ul>

            <h2>Overcoming Common Challenges</h2>

            <h3>Maintaining Momentum</h3>
            <p>Regular, scheduled actions help maintain engagement. The monthly rhythm of #MonthlyEarthDay provides structure while allowing flexibility for local adaptation.</p>

            <h3>Avoiding Burnout</h3>
            <p>Distribute leadership responsibilities and rotate organizing duties. Make sure actions are enjoyable and social, not just work-focused.</p>

            <h3>Measuring Impact</h3>
            <p>Track both environmental outcomes (trees planted, waste diverted, energy saved) and social outcomes (new participants, skills learned, relationships formed).</p>

            <h2>The Future of Community Environmental Action</h2>
            <p>As we face increasingly complex environmental challenges, the need for strong, engaged communities becomes even more critical. Communities that work together on environmental issues are better prepared for climate adaptation, more resilient in the face of environmental changes, and more effective at advocating for policy changes.</p>

            <p>The power of community action lies not just in what we can accomplish together, but in how working together transforms us as individuals and as a society. When we engage in environmental action as a community, we're not just changing our environment—we're building the social infrastructure needed for a sustainable future.</p>

            <blockquote>
                "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has." - Margaret Mead
            </blockquote>

            <p>Ready to harness the power of community action in your neighborhood? Join our next #MonthlyEarthDay action and discover how collective effort can create extraordinary environmental impact.</p>
        `
  }
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4" data-oid="vbdy16f">
      <article className="max-w-4xl mx-auto" data-oid="rq1idz7">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in" data-oid="97cv2p9">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-neutral-text-dark mb-6 leading-tight" data-oid="92e.e89">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-neutral-dark-gray mb-6" data-oid="37cek7q">
            <span data-oid="qrw1jxn">By {post.author}</span>
            <span className="hidden sm:inline" data-oid="hgh_otl">•</span>
            <span data-oid="2jwgnng">{post.date}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8" data-oid="pw23p_r">
            {post.tags.map((tag, index) =>
            <span key={index} className="tag tag-inactive" data-oid="3z6bop5">
                {tag}
              </span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 animate-slide-up" data-oid="7does73">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-sm" data-oid="1w1f:15" />

        </div>

        {/* Content */}
        <div
          className="prose animate-slide-up"
          dangerouslySetInnerHTML={{ __html: post.content }} data-oid="t4ex4xy" />


        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-neutral-medium-gray" data-oid="3j2o6cc">
          <div className="flex items-center justify-center gap-4" data-oid="vvl5902">
            <span className="text-neutral-dark-gray font-medium" data-oid="gk1ulri">
              Share this post:
            </span>
            <div className="flex gap-3" data-oid="rwuq-2_">
              <button className="bg-earth-blue text-neutral-text-light p-2 rounded-full hover:bg-blue-600 transition-colors duration-200" data-oid="nqqufyt">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24" data-oid="s3le4wm">

                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-oid="qrfpm-c" />
                </svg>
              </button>
              <button className="bg-primary-green text-neutral-text-light p-2 rounded-full hover:bg-primary-green-dark transition-colors duration-200" data-oid="mvexv8t">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20" data-oid="nfll7p-">

                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" data-oid="beoksz7" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" data-oid="p2:xx2l" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center" data-oid="bqix1so">
          <a
            href="/blog"
            className="inline-flex items-center text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200" data-oid="u2j7az:">

            ← Back to Blog
          </a>
        </div>
      </article>
    </div>);

}