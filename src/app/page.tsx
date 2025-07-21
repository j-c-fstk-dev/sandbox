"use client";

import { useState, useEffect } from 'react';
import Button from "@/components/Button";
import BlogPostCard from "@/components/BlogPostCard";
import CommunityPostCard from "@/components/CommunityPostCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Users, Globe, TreePine, Recycle } from 'lucide-react';


export default function Page() {
  // Sample data for the home page

  const [showScrollClue, setShowScrollClue] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust '100' to the number of pixels scrolled down after which the arrow should disappear
      if (typeof window !== 'undefined' && window.scrollY > 100) {
        setShowScrollClue(false);
      } else {
        setShowScrollClue(true);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const featuredAction = {
    name: "Community Clean-Up Drive",
    date: "July 22, 2025",
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
    <section className="bg-[#c9e6db] text-[#365b36] py-12 px-4" data-oid="b0j_mu5">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-4 animate-fade-in" data-oid="rxxavtk">
        <img
          src="https://res.cloudinary.com/dr0weongo/image/upload/v1752897191/logo_med_rucrke.png"
          alt="Monthly Earth Day Logo"
          className="mx-auto w-60 h-60 md:w-[350px] md:h-[350px] animate-subtle-pulse mb-4 transition-transform duration-300 hover:scale-105"
        />
        
        <h2 className="font-serif font-bold text-3xl md:text-5xl tracking-tight" data-oid="zrkz9xm">
          Celebrate Earth Day Every Month
        </h2>

        <p className="text-lg md:text-2xl text-[#737373] leading-relaxed max-w-xl" data-oid="r3wy448">
          A global movement for monthly action creating positive impact
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6" data-oid="tk156jb">
          <Button
            variant="outline"
            size="lg"
            href="/about"
            className="border-[#365b36] text-[#365b36] hover:bg-[#365b36] hover:text-white transition"
            data-oid="ex0ofaj"
          >
            Learn More
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="/actions"
            className="bg-[#017d8c] hover:bg-[#016a77] text-white transition"
            data-oid="c9j-hao"
          >
            Get Involved!
          </Button>
        </div>
      </div>
    </section>

{/* Scroll Clue Section - AGORA COM A LÓGICA DE DESAPARECER NO SCROLL */}
<div className={`flex justify-center mt-[-40px] md:mt-[-60px] relative z-10 ${showScrollClue ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-500`} data-oid="scroll-clue-container">
      <svg
        className="w-8 h-8 text-[#365b36] animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path>
      </svg>
</div>
    

       {/* Impact Statistics - NOVO DESIGN */}
       <section className="py-16 px-4 bg-gray-50" data-oid="impact-stats-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-center text-neutral-text-dark mb-12" data-oid="stats-title">
            Our Collective Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1: Active Participants */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up-delay-1" data-oid="stats-card-1">
              <div className="text-primary-green mb-4">
                <Users size={48} strokeWidth={1.5} /> {/* Ícone */}
              </div>
              <div className="text-4xl font-bold text-primary-green mb-2">
                1,000+
              </div>
              <div className="text-neutral-dark-gray text-center text-lg">Active Participants</div>
            </div>

            {/* Card 2: Communities Worldwide */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up-delay-2" data-oid="stats-card-2">
              <div className="text-[#017d8c] mb-4"> {/* Cor diferente para variar */}
                <Globe size={48} strokeWidth={1.5} /> {/* Ícone */}
              </div>
              <div className="text-4xl font-bold text-[#017d8c] mb-2">
                100+
              </div>
              <div className="text-neutral-dark-gray text-center text-lg">
                Communities Worldwide
              </div>
            </div>

            {/* Card 3: Trees Planted */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up-delay-3" data-oid="stats-card-3">
              <div className="text-[#365b36] mb-4"> {/* Cor diferente para variar */}
                <TreePine size={48} strokeWidth={1.5} /> {/* Ícone */}
              </div>
              <div className="text-4xl font-bold text-[#365b36] mb-2">
                47,426
              </div>
              <div className="text-neutral-dark-gray text-center text-lg">Trees Planted</div>
            </div>

            {/* Card 4: Waste Diverted */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up-delay-4" data-oid="stats-card-4">
              <div className="text-neutral-dark-gray mb-4"> {/* Cor diferente para variar */}
                <Recycle size={48} strokeWidth={1.5} /> {/* Ícone */}
              </div>
              <div className="text-4xl font-bold text-neutral-dark-gray mb-2">
                15,998 lb
              </div>
              <div className="text-neutral-dark-gray text-center text-lg">Litter Cleaned Up</div>
            </div>
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