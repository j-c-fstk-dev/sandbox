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
    "Discover practical daily actions that can make a significant environmental impact when adopted by communities worldwide.",
    date: "December 15, 2024",
    image:
    "https://res.cloudinary.com/dr0weongo/image/upload/v1753021402/387295953_38790678-c397-4fa1-ae4c-31916d952b5f_fx4jf4.jpg", // Updated image URL
    tags: ["sustainability", "carbon-footprint", "lifestyle"],
    slug: "reduce-carbon-footprint",
    author: "Nick"
  },
  {
    title: "The Power of Community Action",
    excerpt:
    "How local environmental initiatives are creating global change, one neighborhood at a time.",
    date: "December 10, 2024",
    image:
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
    tags: ["community", "action", "impact"],
    slug: "power-of-community-action",
    author: "Nick"
  },
  {
    title: "Plastic-Free Living: A Beginner's Guide",
    excerpt:
    "Start your journey towards reducing plastic waste with these easy-to-implement strategies.",
    date: "December 5, 2024",
    image:
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
    tags: ["plastic-free", "waste-reduction", "beginner"],
    slug: "plastic-free-living-guide",
    author: "Nick"
  }
  ];


  const communityPosts = [
    {
      type: "carousel" as const, // <-- MUITO IMPORTANTE: Mudar para 'carousel'
      user: {
        name: "@TrinityMorphy",
        avatar:
        "https://pbs.twimg.com/profile_images/1815756324019245056/QS6PfZWv_400x400.jpg"
      },
      content:
      `How did Earth Day go for me?
      Thanks to funding from @HighlyArtistic, I was able to coordinate and support 30 local clubs from @Rotaract_D9142 and @ploggingnigeria in carrying out cleanup initiatives in celebration of World Earth Day. Here are some action shots:
  
      Rotaract Club of Awka Gateway
      Disposable Waste Cleaned: 27 kg
      Recyclable Waste Cleaned: 9.1 kg
      Total: 35.1 kg
  
      Rotaract Club of Nnamdi Azikiwe University Teaching Hospital
      Disposable Waste Cleaned: 65 kg
      Recyclable Waste Cleaned: 37.5 kg
      Total: 102.5 kg
  
      Rotaract Club of Amakohia/Akwakuma
      Disposable Waste Cleaned: 94 kg
      Recyclable Waste Cleaned: 1.4 kg
      Total: 95.4 kg`, // <-- Conteúdo completo com quebras de linha
      images: [ // <-- MUITO IMPORTANTE: Usar 'images' (array) ao invés de 'image'
        "https://pbs.twimg.com/media/GpPzuIBXYAAIu2w?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpPzuIBWYAAnKiG?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpPzuAxXIAALneZ?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpPzuHmXcAEU4AE?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_efWUAAxVRJ?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_ejXsAAyFFi?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_e9XoAAGALN?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_ehXQAA3MQH?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP0qdCWsAEf5AL?format=medium", // Corrected format
        "https://pbs.twimg.com/media/GpP0qVvXYAApX1j?format=png&name=900x900",
        "https://pbs.twimg.com/media/GpP0qVvXkAAm_Cy?format=png&name=900x900",
        "https://pbs.twimg.com/media/GpP1jmXWoAAyGVi?format=medium", // Corrected format
        "https://pbs.twimg.com/media/GpP1jmWWgAAEuqq?format=medium", // Corrected format
        "https://pbs.twimg.com/media/GpP1jmbWcAAZK4P?format=medium", // Corrected format
        "https://pbs.twimg.com/media/GpP1jmcXgAAyz-T?format=medium", // Corrected format
        "https://pbs.twimg.com/media/GpP2lLeW0AA1tt_?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP2lSdXoAAoY8v?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP2lSZXAAAyqli?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP2lSZXoAA-U_W?format=jpg&name=4096x4096",
      ],
      likes: 47,
      comments: 12,
      date: "22.05.2025" // <-- Data no formato de string simples
    }
  ];


  const testimonials = [
    {
    text: "We try better was founded to help people recognize their power—that everyone can make a difference in our world’s challenges. Small actions add up, rewiring your mindset to not only boost happiness through purpose, but also uncover new ways to ‘try better.’ Monthly Earth Day has been core to this mission from the start. By inspiring people to act for the planet monthly—not just yearly—it normalizes sustainability, turning occasional gestures into daily habits. This is the vital step toward a better world.",
    author: "Donny Jerry",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face" // Placeholder image
  },
  {
    text: "For over a year, ReFi Tulum has proudly honored Monthly Earth Day with hands-on action—leading cleanups in the Unesco bioreserve of Sian Ka’an, in sacred cenotes and throughout our city of Tulum , proving that regeneration begins with consistency, community, and care for the Earth, month by month and day by day",
    author: "Sandra - ReFI Tulum",
    image: "https://pbs.twimg.com/profile_images/1816460170974617600/q6qwW4OB_400x400.jpg" // Placeholder image
  },
  {
    text: "Participating in #MonthlyEarthDay has transformed how I think about environmental action. It's not about perfection, it's about consistent, meaningful steps. The monthly rhythm keeps me motivated and connected to a global community of changemakers.",
    author: "Maria Rodriguez",
    image:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  }
  ];




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
