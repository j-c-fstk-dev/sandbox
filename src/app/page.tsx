"use client";

import { useState, useEffect } from 'react';
import Button from "@/components/Button";
import BlogPostCard from "@/components/BlogPostCard";
import CommunityPostCard from "@/components/CommunityPostCard";
import TestimonialCard from "@/components/TestimonialCard";


export default function Page() {
  // Sample data for the home page
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

//codigo experimetal


return (
  <div className="min-h-screen" data-oid="m4_nfr9">
    {/* Hero Section */}
    <section className="bg-[#c9e6db] text-[#365b36] py-20 px-4" data-oid="b0j_mu5">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6 animate-fade-in" data-oid="rxxavtk">
        <img
          src="https://res.cloudinary.com/dr0weongo/image/upload/v1752897191/logo_med_rucrke.png"
          alt="Monthly Earth Day Logo"
          className="mx-auto w-60 h-60 md:w-[350px] md:h-[350px] mb-4"
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

{/* Scroll Clue Section */}
<div className="flex justify-center mt-[-40px] md:mt-[-60px] relative z-10 animate-fade-in-up" data-oid="scroll-clue-container">
      <div className="bg-white rounded-full p-3 shadow-md border border-gray-200">
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
    </div>
    

      {/* Impact Statistics */}
      <div className="bg-white rounded-lg p-8 shadow-sm mb-16 animate-slide-up" data-oid="55u5754">
          <h2 className="font-serif font-bold text-3xl text-center text-neutral-text-dark mb-8" data-oid="8j07ez1">
            Our Collective Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="khaak-y">
            <div className="text-center" data-oid="296p6s8">
              <div className="text-4xl font-bold text-primary-green mb-2" data-oid="22o5c7.">
                12,000+
              </div>
              <div className="text-neutral-dark-gray" data-oid="00-xkb5">Active Participants</div>
            </div>
            <div className="text-center" data-oid="s.-0wv_">
              <div className="text-4xl font-bold text-primary-green mb-2" data-oid="vb5ksb_">
                500+
              </div>
              <div className="text-neutral-dark-gray" data-oid="9o:m96t">
                Communities Worldwide
              </div>
            </div>
            <div className="text-center" data-oid="g:9eax_">
              <div className="text-4xl font-bold text-primary-green mb-2" data-oid="13oyy56">
                50,000
              </div>
              <div className="text-neutral-dark-gray" data-oid="c_bd:ne">Trees Planted</div>
            </div>
            <div className="text-center" data-oid="er42.ei">
              <div className="text-4xl font-bold text-primary-green mb-2" data-oid="ue.s51w">
                2M lbs
              </div>
              <div className="text-neutral-dark-gray" data-oid="omu8_wd">Waste Diverted</div>
            </div>
          </div>
        </div>

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