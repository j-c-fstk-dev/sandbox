"use client";

import Button from "@/components/Button";
import BlogPostCard from "@/components/BlogPostCard";
import CommunityPostCard from "@/components/CommunityPostCard";
import TestimonialCard from "@/components/TestimonialCard";

export default function Page() {
  // Sample data for the home page
  const featuredAction = {
    name: "Community Clean-Up Drive",
    date: "March 22, 2024",
    description:
    "Join local communities worldwide in cleaning up parks, beaches, and neighborhoods."
  };

  const blogPosts = [
  {
    title: "10 Simple Ways to Reduce Your Carbon Footprint",
    excerpt:
    "Discover practical daily actions that can make a significant impact on your environmental footprint.",
    date: "March 15, 2024",
    image:
    "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=250&fit=crop",
    tags: ["sustainability", "lifestyle", "carbon"],
    slug: "reduce-carbon-footprint"
  },
  {
    title: "The Power of Community Action",
    excerpt:
    "How collective environmental efforts are creating lasting change in communities worldwide.",
    date: "March 12, 2024",
    image:
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
    tags: ["community", "action", "impact"],
    slug: "power-of-community-action"
  },
  {
    title: "Sustainable Living: A Beginner's Guide",
    excerpt:
    "Start your journey towards sustainable living with these easy-to-implement tips and strategies.",
    date: "March 8, 2024",
    image:
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
    tags: ["beginner", "sustainable", "guide"],
    slug: "sustainable-living-guide"
  }];


  const communityPosts = [
  {
    type: "image" as const,
    user: {
      name: "Sarah Johnson",
      avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b9e0e4d4?w=40&h=40&fit=crop&crop=face"
    },
    content:
    "Amazing turnout at our local beach cleanup! We collected over 200 pounds of trash and recyclables. 🌊♻️",
    image:
    "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400&h=300&fit=crop",
    likes: 47,
    comments: 12,
    date: "2 hours ago"
  },
  {
    type: "poll" as const,
    user: {
      name: "Mike Chen",
      avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    content: "What should be our focus for next month's action?",
    poll: {
      question: "Choose our April 22nd focus:",
      options: [
      { text: "Tree Planting", votes: 34 },
      { text: "Plastic Reduction", votes: 28 },
      { text: "Energy Conservation", votes: 19 },
      { text: "Water Protection", votes: 23 }]

    },
    likes: 23,
    comments: 8,
    date: "5 hours ago"
  }];


  const testimonials = [
  {
    text: "Joining #MonthlyEarthDay has transformed how I think about environmental action. It's not overwhelming - just one meaningful day each month that creates real impact.",
    author: "Emma Rodriguez",
    image:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  },
  {
    text: "Our community has planted over 500 trees through this movement. It's incredible what we can achieve when we work together consistently.",
    author: "David Kim",
    image:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
  },
  {
    text: "The monthly rhythm makes environmental action sustainable. I never feel burned out, and I'm always excited for the 22nd of each month!",
    author: "Lisa Thompson"
  }];


  return (
    <div className="min-h-screen" data-oid="m4_nfr9">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-green-dark text-neutral-text-light py-20 px-4" data-oid="b0j_mu5">
        <div className="max-w-4xl mx-auto text-center animate-fade-in" data-oid="rxxavtk">
          <h1 className="font-serif font-bold text-4xl md:text-6xl mb-6 tracking-tight" data-oid="zrkz9xm">
            Celebrate Earth Day Every Month
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed" data-oid="r3wy448">
            A global movement for monthly action creating positive impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-oid="tk156jb">
            <Button
              variant="outline"
              size="lg"
              href="/about"
              className="border-neutral-text-light text-neutral-text-light hover:bg-neutral-text-light hover:text-primary-green" data-oid="ex0ofaj">

              Learn More
            </Button>
            <Button variant="secondary" size="lg" href="/actions" data-oid="c9j-hao">
              Get Involved!
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Action Section */}
      <section className="py-16 px-4" data-oid="me:66-o">
        <div className="max-w-6xl mx-auto" data-oid="943n.a_">
          <div className="text-center mb-12" data-oid="q5:ndmv">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-dark mb-4" data-oid="upb3fya">
              Next Scheduled Action
            </h2>
          </div>
          <div className="max-w-2xl mx-auto" data-oid="hmwnsmg">
            <div className="card text-center animate-slide-up" data-oid="jt:low6">
              <div className="text-4xl mb-4" data-oid="5d.hm:n">🌍</div>
              <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-3" data-oid="2qm_43c">
                {featuredAction.name}
              </h3>
              <p className="text-primary-green font-semibold text-lg mb-4" data-oid="..mdje9">
                {featuredAction.date}
              </p>
              <p className="text-neutral-dark-gray mb-6 leading-relaxed" data-oid="4wh.3qb">
                {featuredAction.description}
              </p>
              <Button variant="secondary" href="/calendar" data-oid="gkig3ts">
                View on Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights Section */}
      <section className="py-16 px-4 bg-white" data-oid="8-bn55w">
        <div className="max-w-6xl mx-auto" data-oid="e_6b88m">
          <div className="text-center mb-12" data-oid="a4po1dm">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-dark mb-4" data-oid="qosnltt">
              Latest from the Blog
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-oid="6f-:q5v">
            {blogPosts.map((post, index) =>
            <BlogPostCard key={index} {...post} data-oid="h:o.bs0" />
            )}
          </div>
          <div className="text-center" data-oid="saoemx3">
            <Button variant="outline" href="/blog" data-oid="a-oktc7">
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Community Highlights Section */}
      <section className="py-16 px-4" data-oid="ulj1yez">
        <div className="max-w-6xl mx-auto" data-oid="p1sc9cq">
          <div className="text-center mb-12" data-oid="j632ru5">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-dark mb-4" data-oid="jncr65i">
              Community Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" data-oid="wbm8:jy">
            {communityPosts.map((post, index) =>
            <CommunityPostCard key={index} {...post} data-oid="p-7y9d." />
            )}
          </div>
          <div className="text-center" data-oid="a-ml_z1">
            <Button variant="secondary" href="/community" data-oid="zwxek0c">
              Explore Community
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Highlights Section */}
      <section className="py-16 px-4 bg-white" data-oid=".hf4tx7">
        <div className="max-w-6xl mx-auto" data-oid="rudljkw">
          <div className="text-center mb-12" data-oid="i_8bqby">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-dark mb-4" data-oid="crxr39h">
              What Our Participants Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-oid="af-jps-">
            {testimonials.map((testimonial, index) =>
            <TestimonialCard key={index} {...testimonial} data-oid="t5v_:18" />
            )}
          </div>
          <div className="text-center" data-oid="_82azn_">
            <Button variant="outline" href="/testimonials" data-oid="a:9wmdg">
              View All Testimonials
            </Button>
          </div>
        </div>
      </section>
    </div>);

}