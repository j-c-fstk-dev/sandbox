// src/app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Button from "@/components/Button";
import BlogPostCard from "@/components/BlogPostCard";
import CommunityPostCard from "@/components/CommunityPostCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Users, Globe, TreePine, Recycle } from 'lucide-react';
import Script from 'next/script';


export default function Page() {
  const [showScrollClue, setShowScrollClue] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
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
      title: "Why We Should Celebrate Earth Day Every Month: A Call for Lasting Change",
      excerpt:
        "Earth Day, celebrated annually on April 22, is a powerful reminder to honor and protect our planet. But one day a year isn’t enough to address the urgent environmental challenges we face...",
      date: "July 22, 2025",
      image: "https://res.cloudinary.com/dr0weongo/image/upload/v1752847674/20250718_105015_j7pzxn.jpg",
      tags: ["Earth Day", "sustainability", "climate action", "community"],
      slug: "why-celebrate-earth-day-every-month",
      author: "Monthly Earth Day Initiative"
    },
    {
      title: "10 Simple Ways to Reduce Your Carbon Footprint",
      excerpt:
        "Discover practical daily actions that can make a significant environmental impact when adopted by communities worldwide.",
      date: "December 15, 2024",
      image:
        "https://res.cloudinary.com/dr0weongo/image/upload/v1753021402/387295953_38790678-c397-4fa1-ae4c-31916d952b5f_fx4jf4.jpg",
      tags: ["sustainability", "carbon-footprint", "lifestyle"],
      slug: "reduce-carbon-footprint",
      author: "Sarah Green"
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
      author: "David Kim"
    }
  ];

  // Dados dos posts da comunidade, agora com os links de avatar atualizados
  const communityPosts = [
    {
      type: "carousel" as const,
      user: {
        name: "Trinity Morphy",
        handle: "@TrinityMorphy", // Adicionado o handle
        avatar: "https://pbs.twimg.com/profile_images/1815756324019245056/QS6PfZWv_400x400.jpg"
      },
      content:
        `How did Earth Day go for me? 🌍💚 Thanks to funding from @HighlyArtistic, I was able to coordinate and support 30 local clubs from @Rotaract_D9142 and @ploggingnigeria in carrying out cleanup initiatives in celebration of World Earth Day. Here are some action shots: 👇👇

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
      Total: 95.4 kg`,
      images: [
        "https://pbs.twimg.com/media/GpPzuIBXYAAIu2w?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpPzuIBWYAAnKiG?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpPzuAxXIAALneZ?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpPzuHmXcAEU4AE?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_efWUAAxVRJ?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_ejXsAAyFFi?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_e9XoAAGALN?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/Gpnp_ehXQAA3MQH?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP0qdCWsAEf5AL?format=medium",
        "https://pbs.twimg.com/media/GpP0qVvXYAApX1j?format=png&name=900x900",
        "https://pbs.twimg.com/media/GpP0qVvXkAAm_Cy?format=png&name=900x900",
        "https://pbs.twimg.com/media/GpP1jmXWoAAyGVi?format=medium",
        "https://pbs.twimg.com/media/GpP1jmWWgAAEuqq?format=medium",
        "https://pbs.twimg.com/media/GpP1jmbWcAAZK4P?format=medium",
        "https://pbs.twimg.com/media/GpP1jmcXgAAyz-T?format=medium",
        "https://pbs.twimg.com/media/GpP2lLeW0AA1tt_?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP2lSdXoAAoY8v?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP2lSZXAAAyqli?format=jpg&name=4096x4096",
        "https://pbs.twimg.com/media/GpP2lSZXoAA-U_W?format=jpg&name=4096x4096",
      ],
      likes: 47,
      comments: 12,
      date: "May 22, 2025", // Ajustado para o formato da página de comunidade
      tweetUrl: "https://twitter.com/TrinityMorphy/status/1915145993302982915" // URL do tweet original
    },
    {
      type: "text" as const, // Mantido como 'text' para este exemplo
      user: {
        name: "Hasan Yılmaz",
        handle: "@gugukkusu67",
        avatar: "https://pbs.twimg.com/profile_images/1935720096267149312/qFt2IWfA_400x400.jpg"
      },
      content: "Thank you, young people. @cleanify_vet @4ocean #VeBetterDAO #VeWorld #VeFam #vechain #B3TR #Sustainability #TakeActionForThePlanet #MonthlyEarthDay #EarthCleanup #LitterPicking #SaveOurPlanet",
      likes: 85,
      comments: 20,
      date: "April 27, 2025", // Ajustado para o formato da página de comunidade
      tweetUrl: "https://twitter.com/gugukkusu67/status/1916474174022857052" // URL do tweet original
    },
    {
      type: "image" as const, // Mantido como 'image' para este exemplo
      user: {
        name: "ilovetrees",
        handle: "@runetrees",
        avatar: "https://pbs.twimg.com/profile_images/1776116435187908608/-KzZ0GCd_400x400.jpg"
      },
      content: "Our urban garden is flourishing thanks to our #MonthlyEarthDay planting efforts! Look at these beautiful veggies ready for harvest. 🌱 #UrbanGardening #Sustainability",
      image: "https://images.unsplash.com/photo-1606857508003-7b3b7e7e7a5b?w=800&h=400&fit=crop",
      likes: 120,
      comments: 35,
      date: "May 22, 2023", // Ajustado para o formato da página de comunidade
      tweetUrl: "https://twitter.com/runetrees/status/1660673130480943110" // URL do tweet original
    }
  ];

  const testimonials = [
    {
      text: "We try better was founded to help people recognize their power—that everyone can make a difference in our world’s challenges. Small actions add up, rewiring your mindset to not only boost happiness through purpose, but also uncover new ways to ‘try better.’ Monthly Earth Day has been core to this mission from the start. By inspiring people to act for the planet monthly—not just yearly—it normalizes sustainability, turning occasional gestures into daily habits. This is the vital step toward a better world.",
      author: "Donny Jerri",
      image: "https://res.cloudinary.com/dr0weongo/image/upload/v1753195050/IMG-20250722-WA0011_gtb3ck.jpg"
    },
    {
      text: "For over a year, ReFi Tulum has proudly honored Monthly Earth Day with hands-on action—leading cleanups in the Unesco bioreserve of Sian Ka’an, in sacred cenotes and throughout our city of Tulum , proving that regeneration begins with consistency, community, and care for the Earth, month by month and day by day",
      author: "Sandra - ReFI Tulum",
      image: "https://res.cloudinary.com/dr0weongo/image/upload/v1753196769/q6qwW4OB_400x400_hng0cg.jpg"
    },
    {
      text: "Participating in #MonthlyEarthDay has transformed how I think about environmental action. It's not about perfection, it's about consistent, meaningful steps. The monthly rhythm keeps me motivated and connected to a global community of changemakers.",
      author: "Maria Rodriguez",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Script para o Twitter, necessário para o embed */}
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-[#c9e6db] text-[#365b36] py-12 px-4">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-4 animate-fade-in">
          <img
            src="https://res.cloudinary.com/dr0weongo/image/upload/v1752897191/logo_med_rucrke.png"
            alt="Monthly Earth Day Logo"
            className="mx-auto w-60 h-60 md:w-[350px] md:h-[350px] animate-subtle-pulse mb-4 transition-transform duration-300 hover:scale-105"
          />

          <h2 className="font-serif font-bold text-3xl md:text-5xl tracking-tight">
            Celebrate Earth Day Every Month
          </h2>

          <p className="text-lg md:text-2xl text-[#737373] leading-relaxed max-w-xl">
            A global movement for monthly action creating positive impact
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button
              variant="outline"
              size="lg"
              href="/about"
              className="border-[#365b36] text-[#365b36] hover:bg-[#365b36] hover:text-white transition"
            >
              Learn More
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="/actions"
              className="bg-[#017d8c] hover:bg-[#016a77] text-white transition"
            >
              Get Involved!
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll Clue Section */}
      <div className={`flex justify-center mt-[-40px] md:mt-[-60px] relative z-10 ${showScrollClue ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-500`}>
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


      {/* Impact Statistics */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-center text-neutral-text-dark mb-12">
            Our Collective Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1: Active Participants */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up-delay-1">
              <div className="text-primary-green mb-4">
                <Users size={48} strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-bold text-primary-green mb-2">
                1,000+
              </div>
              <div className="text-neutral-dark-gray text-center text-lg">Active Participants</div>
            </div>

            {/* Card 2: Communities Worldwide */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up-delay-2">
              <div className="text-[#017d8c] mb-4">
                <Globe size={48} strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-bold text-[#017d8c] mb-2">
                100+
              </div>
              <div className="text-neutral-dark-gray text-center text-lg">
                Communities Worldwide
              </div>
            </div>

            {/* Card 3: Trees Planted */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up-delay-3">
              <div className="text-[#365b36] mb-4">
                <TreePine size={48} strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-bold text-[#365b36] mb-2">
                47,426
              </div>
              <div className="text-neutral-dark-gray text-center text-lg">Trees Planted</div>
            </div>

            {/* Card 4: Waste Diverted */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up-delay-4">
              <div className="text-neutral-dark-gray mb-4">
                <Recycle size={48} strokeWidth={1.5} />
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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-dark mb-4">
              Next Scheduled Action
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="card text-center animate-slide-up">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-3">
                {featuredAction.name}
              </h3>
              <p className="text-primary-green font-semibold text-lg mb-4">
                {featuredAction.date}
              </p>
              <p className="text-neutral-dark-gray mb-6 leading-relaxed">
                {featuredAction.description}
              </p>
              <Button variant="secondary" href="/calendar">
                View on Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-dark mb-4">
              Latest from the Blog
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) =>
              <BlogPostCard key={index} {...post} />
            )}
          </div>
          <div className="text-center">
            <Button variant="outline" href="/blog">
              View All Posts
            </Button>
          </div>
        </div>
      </section>
{/* Community Highlights Section - LAYOUT OTIMIZADO PARA MAIS DENSIDADE */}
<section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-dark mb-4">
              Community Highlights
            </h2>
          </div>
          {/* Grid principal para os cards da comunidade */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Renderiza o primeiro post (carrossel) que pode ocupar mais espaço se necessário ou se adaptar */}
            {communityPosts[0] && (
              <div className="md:col-span-2 lg:col-span-1"> {/* Em telas médias ocupa 2 colunas, em telas grandes 1 coluna */}
                <CommunityPostCard
                  {...communityPosts[0]}
                  onClick={() => { console.log('Community post clicked on homepage (main card):', communityPosts[0].user.name); }}
                />
              </div>
            )}

            {/* Renderiza os outros dois posts que são mais simples e podem ser compactos */}
            {communityPosts.slice(1, 3).map((post, index) => (
              <div key={index + 1} className="lg:col-span-1"> {/* Ocupa 1 coluna em telas grandes */}
                <CommunityPostCard
                  {...post}
                  onClick={() => { console.log('Community post clicked on homepage:', post.user.name); }}
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="secondary" href="/community">
              Explore Community
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Highlights Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-dark mb-4">
              What Our Participants Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) =>
              <TestimonialCard key={index} {...testimonial} />
            )}
          </div>
          <div className="text-center">
            <Button variant="outline" href="/testimonials">
              View All Testimonials
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}