// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from 'next/link';

// Sample blog post data - in a real app, this would come from a CMS or database
const blogPosts = {
  // NEW POST: Why We Should Celebrate Earth Day Every Month
  "why-celebrate-earth-day-every-month": {
    title: "Why We Should Celebrate Earth Day Every Month: A Call for Lasting Change",
    author: "Monthly Earth Day Initiative", // You can customize the author name
    date: "July 22, 2025", // Current date
    image:
      "https://pbs.twimg.com/media/Gr0B5SuWYAAxctu?format=jpg&name=medium", // Your provided image URL
    tags: ["Earth Day", "sustainability", "climate action", "community"],
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
        `
  },
  "reduce-carbon-footprint": {
    title: "10 Simple Ways to Reduce Your Carbon Footprint",
    author: "Sarah Green",
    date: "December 15, 2024",
    image:
    "https://res.cloudinary.com/dr0weongo/image/upload/v1753021402/387295953_38790678-c397-4fa1-ae4c-31916d952b5f_fx4jf4.jpg", // Updated image URL
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
  },
  "plastic-free-living-guide": {
    title: "Plastic-Free Living: A Beginner's Guide",
    author: "Your Name Here", // You can replace this with the author's name
    date: "July 21, 2024", // You can adjust the date
    image:
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop", // You can choose an image for this post
    tags: ["plastic-free", "waste-reduction", "beginner"],
    content: `
            <p>Want to reduce your plastic waste but feel overwhelmed about where to start? You're not alone! The good news is that living plastic-free doesn't mean overhauling your entire life overnight. It's about taking small, manageable steps that add up to a big impact.</p>

            <p>This guide will help you begin your journey toward a more sustainable lifestyle with simple, actionable strategies.</p>

            <h2>Why Go Plastic-Free?</h2>
            <p>Before we dive into the "how," let's quickly touch on the "why." Plastic pollution is a global crisis, harming our oceans, wildlife, and even our own health. By reducing your reliance on single-use plastics, you're helping to:</p>

            <ul>
                <li><strong>Protect marine life:</strong> Less plastic in the oceans means fewer animals getting entangled or ingesting harmful debris.</li>
                <li><strong>Reduce landfill waste:</strong> Plastics can take hundreds of years to decompose, clogging up landfills.</li>
                <li><strong>Conserve resources:</strong> Manufacturing plastic uses significant amounts of fossil fuels and water.</li>
                <li><strong>Lessen chemical exposure:</strong> Some plastics contain harmful chemicals that can leach into food and drinks.</li>
            </ul>

            <h2>Simple Steps to Start Your Plastic-Free Journey</h2>
            <p>Ready to make a difference? Here are some easy-to-implement strategies to kickstart your plastic-free living:</p>

            <h3>1. Ditch the Single-Use Plastics (The Big Four)</h3>
            <p>This is often the easiest and most impactful place to start. Focus on refusing these common culprits:</p>

            <ul>
                <li>Plastic bags: Always carry reusable shopping bags. Keep some in your car, purse, or backpack so you're never caught without one.</li>
                <li>Plastic water bottles: Invest in a reusable water bottle and refill it throughout the day. Tap water is often perfectly safe and much cheaper!</li>
                <li>Coffee cups with plastic lids: Bring your own reusable coffee cup to cafes. Many places even offer a small discount for doing so.</li>
                <li>Plastic straws: Simply say "no straw, please" when ordering drinks, or carry a reusable metal or bamboo straw if you prefer one.</li>
            </ul>

            <h3>2. Shop Smarter at the Grocery Store</h3>
            <p>The supermarket can be a plastic minefield, but with a few conscious choices, you can navigate it with less waste:</p>

            <ul>
                <li>Choose unpackaged produce: Opt for loose fruits and vegetables instead of those pre-packaged in plastic trays or bags.</li>
                <li>Bring reusable produce bags: These lightweight mesh bags are perfect for bulk items like nuts, grains, and even some produce.</li>
                <li>Buy in bulk: Many stores offer bulk bins for pasta, rice, beans, nuts, and even cleaning supplies. Bring your own containers or reusable bags.</li>
                <li>Say no to unnecessary packaging: Be mindful of items with excessive plastic wrapping. Can you find an alternative?</li>
                <li>Look for glass or paper packaging: When plastic is unavoidable, choose items packaged in glass jars or paper/cardboard boxes, which are more easily recycled.</li>
            </ul>

            <h3>3. Rethink Your Kitchen Habits</h3>
            <p>Your kitchen is a great place to make significant plastic reductions:</p>

            <ul>
                <li>Store food in reusable containers: Swap out plastic wrap and Ziploc bags for glass containers, beeswax wraps, or silicone lids.</li>
                <li>Make your own: Prepare your own meals and snacks more often to avoid individually wrapped convenience foods.</li>
                <li>Use soap bars instead of liquid soap: Dish soap and hand soap often come in plastic bottles. Switch to solid bars.</li>
                <li>Choose natural cleaning tools: Opt for wooden brushes, loofah sponges, or reusable cloths instead of plastic dish brushes and synthetic sponges.</li>
            </ul>

            <h3>4. Personal Care Swaps</h3>
            <p>Your bathroom is another area where plastic is rampant. Small changes here can make a big difference:</p>

            <ul>
                <li>Switch to solid shampoo and conditioner bars: These are widely available now and perform just as well as their liquid counterparts, without the plastic bottle.</li>
                <li>Use a bamboo toothbrush: A simple swap from plastic toothbrushes that end up in landfills.</li>
                <li>Choose bar soap: Just like in the kitchen, opt for solid bar soap for bathing.</li>
                <li>Consider reusable razors: Safety razors with replaceable blades are a great alternative to disposable plastic razors.</li>
            </ul>

            <h3>5. Be Mindful When Dining Out & On the Go</h3>
            <p>Even when you're out and about, you can make plastic-free choices:</p>

            <ul>
                <li>Carry a reusable cutlery set: Avoid plastic forks and spoons when getting takeout.</li>
                <li>Refuse plastic takeout containers when possible: Some restaurants are starting to offer more sustainable options. If not, consider if you can bring your own container for leftovers.</li>
                <li>Pack your own snacks: This reduces the need for convenience store purchases that often come in plastic.</li>
            </ul>

            <h2>The Journey, Not the Destination</h2>
            <p>Remember, this is a journey, not a race. You don't have to be perfectly plastic-free overnight. Every small step you take makes a difference. Start with one or two changes that feel easy to implement, and once they become habits, add a few more.</p>

            <p>Be patient with yourself, celebrate your progress, and inspire others by sharing your journey. Together, we can make a real impact on plastic pollution.</p>
        `
  }
};

// Define the order of the blog posts for navigation.
// IMPORTANT: Add "why-celebrate-earth-day-every-month" to your desired position.
const blogPostSlugsOrder = [
  "why-celebrate-earth-day-every-month", // New post as the first in order
  "reduce-carbon-footprint",
  "power-of-community-action",
  "plastic-free-living-guide"
];


// Interface para tipagem das props do componente de página
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  // Find the index of the current post in the ordered list
  const currentPostIndex = blogPostSlugsOrder.indexOf(params.slug);

  // Determine the previous and next post slugs for navigation
  const prevPostSlug = currentPostIndex > 0 ? blogPostSlugsOrder[currentPostIndex - 1] : null;
  const nextPostSlug = currentPostIndex < blogPostSlugsOrder.length - 1 ? blogPostSlugsOrder[currentPostIndex + 1] : null;

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


        {/* Share Buttons - You can add these if needed */}
        {/* <div className="mt-12 pt-8 border-t border-neutral-medium-gray" data-oid="3j2o6cc"></div> */}

        {/* Navigation */}
        <div className="mt-12 text-center" data-oid="bqix1so">
          {prevPostSlug && (
            <Link href={`/blog/${prevPostSlug}`} className="inline-flex items-center text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200">
              ← Previous Post
            </Link>
          )}
          {nextPostSlug && (
            <Link href={`/blog/${nextPostSlug}`} className="inline-flex items-center text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200 ml-4">
              Next Post →
            </Link>
          )}
           <div className="mt-8 text-center" data-oid="bqix1so">
               <Link
                 href="/blog"
                 className="inline-flex items-center text-primary-green hover:text-primary-green-dark font-medium transition-colors duration-200" data-oid="u2j7az:">

                 ← Back to Blog
               </Link>
           </div>
        </div>
      </article>
    </div>
  );
}