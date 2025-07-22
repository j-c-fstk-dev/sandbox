// app/community/page.tsx
"use client";

import { useState, useEffect } from "react";
import CommunityPostCard from "@/components/CommunityPostCard";
import PostDetailModal from "@/components/PostDetailModal";
import Script from 'next/script';
import Button from "@/components/Button";

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  const communityPosts = [
    {
      type: "twitter" as const,
      user: {
        name: "Monthly Earth Day",
        handle: "@MonthlyEarthDay",
        avatar: "https://pbs.twimg.com/profile_images/1884171653699006464/yt_zseGA_400x400.jpg" // Link atualizado
      },
      content: "Celebrating Earth Day Every Month: Why It Matters 🌎\n\nImagine if we dedicated one day every month to our planet—here’s why a monthly Earth Day could make a real difference: 🧵",
      tweetUrl: "https://twitter.com/MonthlyEarthDay/status/1926698303023952167",
      twitterEmbed: `<blockquote class="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">Celebrating Earth Day Every Month: Why It Matters 🌎<br><br>Imagine if we dedicated one day every month to our planet—here’s why a monthly Earth Day could make a real difference: 🧵 <a href="https://t.co/o6QkwRXOpV">pic.twitter.com/o6QkwRXOpV</a></p>&mdash; Monthly Earth Day (@MonthlyEarthDay) <a href="https://twitter.com/MonthlyEarthDay/status/1926698303023952167?ref_src=twsrc%5Etfw">May 25, 2025</a></blockquote>`,
      likes: 0,
      comments: 0,
      date: "May 25, 2025"
    },
    {
      type: "twitter" as const,
      user: {
        name: "Trinity Morphy",
        handle: "@TrinityMorphy",
        avatar: "https://pbs.twimg.com/profile_images/1815756324019245056/QS6PfZWv_400x400.jpg" // Link atualizado
      },
      content: "How did Earth Day go for me? 🌍💚 Thanks to funding from @HighlyArtistic, I was able to coordinate and support 30 local clubs from @Rotaract_D9142 and @ploggingnigeria in carrying out cleanup initiatives in celebration of World Earth Day. Here are some action shots: 👇👇",
      tweetUrl: "https://twitter.com/TrinityMorphy/status/1915145993302982915",
      twitterEmbed: `<blockquote class="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">How did Earth Day go for me? 🌍<br>💚<br>Thanks to funding from <a href="https://twitter.com/HighlyArtistic?ref_src=twsrc%5Etfw">@HighlyArtistic</a>, I was able to coordinate and support 30 local clubs from <a href="https://twitter.com/Rotaract_D9142?ref_src=twsrc%5Etfw">@Rotaract_D9142</a> and <a href="https://twitter.com/ploggingnigeria?ref_src=twsrc%5Etfw">@ploggingnigeria</a> in carrying out cleanup initiatives in celebration of World Earth Day.<br><br>Here are some action shots: 👇👇</p>&mdash; Trinity Morphy (@TrinityMorphy) <a href="https://twitter.com/TrinityMorphy/status/1915145993302982915?ref_src=twsrc%5Etfw">April 23, 2025</a></blockquote>`,
      likes: 0,
      comments: 0,
      date: "April 23, 2025"
    },
    {
      type: "twitter" as const,
      user: {
        name: "Hasan Yılmaz",
        handle: "@gugukkusu67",
        avatar: "https://pbs.twimg.com/profile_images/1935720096267149312/qFt2IWfA_400x400.jpg" // Link atualizado
      },
      content: "Thank you, young people. @cleanify_vet @4ocean #VeBetterDAO #VeWorld #VeFam #vechain #B3TR #Sustainability #TakeActionForThePlanet #MonthlyEarthDay #EarthCleanup #LitterPicking #SaveOurPlanet",
      tweetUrl: "https://twitter.com/gugukkusu67/status/1916474174022857052",
      twitterEmbed: `<blockquote class="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">Thank you, young people.<a href="https://twitter.com/cleanify_vet?ref_src=twsrc%5Etfw">@cleanify_vet</a> <a href="https://twitter.com/4ocean?ref_src=twsrc%5Etfw">@4ocean</a> <a href="https://twitter.com/hashtag/VeBetterDAO?src=hash&amp;ref_src=twsrc%5Etfw">#VeBetterDAO</a> <a href="https://twitter.com/hashtag/VeWorld?src=hash&amp;ref_src=twsrc%5Etfw">#VeWorld</a> <a href="https://twitter.com/hashtag/VeFam?src=hash&amp;ref_src=twsrc%5Etfw">#VeFam</a> <a href="https://twitter.com/hashtag/vechain?src=hash&amp;ref_src=twsrc%5Etfw">#vechain</a> <a href="https://twitter.com/hashtag/B3TR?src=hash&amp;ref_src=twsrc%5Etfw">#B3TR</a> <a href="https://twitter.com/hashtag/Sustainability?src=hash&amp;ref_src=twsrc%5Etfw">#Sustainability</a> <a href="https://twitter.com/hashtag/TakeActionForThePlanet?src=hash&amp;ref_src=twsrc%5Etfw">#TakeActionForThePlanet</a> <a href="https://twitter.com/hashtag/MonthlyEarthDay?src=hash&amp;ref_src=twsrc%5Etfw">#MonthlyEarthDay</a> <a href="https://twitter.com/hashtag/EarthCleanup?src=hash&amp;ref_src=twsrc%5Etfw">#EarthCleanup</a> <a href="https://twitter.com/hashtag/LitterPicking?src=hash&amp;ref_src=twsrc%5Etfw">#LitterPicking</a> <a href="https://twitter.com/hashtag/SaveOurPlanet?src=hash&amp;ref_src=twsrc%5Etfw">#SaveOurPlanet</a> <a href="https://t.co/izP2CgYBXl">pic.twitter.com/izP2CgYBXl</a></p>&mdash; Hasan Yılmaz (@gugukkusu67) <a href="https://twitter.com/gugukkusu67/status/1916474174022857052?ref_src=twsrc%5Etfw">April 27, 2025</a></blockquote>`,
      likes: 0,
      comments: 0,
      date: "April 27, 2025"
    },
    {
      type: "twitter" as const,
      user: {
        name: "ilovetrees",
        handle: "@runetrees",
        avatar: "https://pbs.twimg.com/profile_images/1776116435187908608/-KzZ0GCd_400x400.jpg" // Link atualizado
      },
      content: "Workshop on benefits of planting trees 🌳 and picking the right tree for the right place. Tips on planting. Giving out 🌳's for people attending. #monthlyearthday #treeAmbassador @onetreeplanted #BiodiversityDay 🌱",
      tweetUrl: "https://twitter.com/runetrees/status/1660673130480943110",
      twitterEmbed: `<blockquote class="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">Workshop on benefits of planting trees 🌳 and picking the right tree for the right place. Tips on planting. Giving out 🌳&#39;s for people attending. <a href="https://twitter.com/hashtag/monthlyearthday?src=hash&amp;ref_src=twsrc%5Etfw">#monthlyearthday</a> <a href="https://twitter.com/hashtag/treeAmbassador?src=hash&amp;ref_src=twsrc%5Etfw">#treeAmbassador</a> <a href="https://twitter.com/onetreeplanted?ref_src=twsrc%5Etfw">@onetreeplanted</a> <a href="https://twitter.com/hashtag/BiodiversityDay?src=hash&amp;ref_src=twsrc%5Etfw">#BiodiversityDay</a> 🌱 <a href="https://t.co/PNKanIGcRo">pic.twitter.com/PNKanIGcRo</a></p>&mdash; ilovetrees (@runetrees) <a href="https://twitter.com/runetrees/status/1660673130480943110?ref_src=twsrc%5Etfw">May 22, 2023</a></blockquote>`,
      likes: 0,
      comments: 0,
      date: "May 22, 2023"
    },
    {
      type: "twitter" as const,
      user: {
        name: "Jerri 🌱DeFi to ReFi to Regen 🌎🍄🧠",
        handle: "@jerri_nft",
        avatar: "https://pbs.twimg.com/profile_images/1902882582154395649/6p4va-Ps_400x400.jpg" // Link atualizado
      },
      content: "#MonthlyEarthDay we have had a lot of rain. It’s a good chance to show that the paper from the butts wash off and leave behind the plastic fiber filaments. Was told today cleaning the park that I was pointless. So is what I was doing. 😢 every help in any way is not pointless",
      tweetUrl: "https://twitter.com/jerri_nft/status/1804608759228219743",
      twitterEmbed: `<blockquote class="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/MonthlyEarthDay?src=hash&amp;ref_src=twsrc%5Etfw">#MonthlyEarthDay</a> we have had a lot of rain. It’s a good chance to show that the paper from the butts wash off and leave behind the plastic fiber filaments. Was told today cleaning the park that I was pointless. So is what I was doing. 😢 every help in any way is not pointless <a href="https://t.co/DyBNL67Gd8">pic.twitter.com/DyBNL67Gd8</a></p>&mdash; Jerri 🌱DeFi to ReFi to Regen 🌎🍄🧠 (@jerri_nft) <a href="https://twitter.com/jerri_nft/status/1804608759228219743?ref_src=twsrc%5Etfw">June 22, 2024</a></div>`,
      likes: 0,
      comments: 0,
      date: "June 22, 2024"
    },
    {
      type: "twitter" as const,
      user: {
        name: "Monthly Earth Day",
        handle: "@MonthlyEarthDay",
        avatar: "https://pbs.twimg.com/profile_images/1884171653699006464/yt_zseGA_400x400.jpg" // Link atualizado (duplicado intencionalmente, pois é o mesmo Monthly Earth Day)
      },
      content: "Did you know.... Since January 2023, #MonthlyEarthDay has been on a mission to make our planet a better place, planting over 47,000 trees collectively. Each tree is a step toward cleaner air, thriving ecosystems, and a brighter future. Join us in celebrating this milestone and…",
      tweetUrl: "https://twitter.com/MonthlyEarthDay/status/1917977185161220472",
      twitterEmbed: `<blockquote class="twitter-tweet" data-dnt="true" data-theme="light"><p lang="en" dir="ltr">Did you know....<br><br>Since January 2023, <a href="https://twitter.com/hashtag/MonthlyEarthDay?src=hash&amp;ref_src=twsrc%5Etfw">#MonthlyEarthDay</a> has been on a mission to make our planet a better place, planting over 47,000 trees collectively. Each tree is a step toward cleaner air, thriving ecosystems, and a brighter future. Join us in celebrating this milestone and… <a href="https://t.co/vSQmce9BlI">pic.twitter.com/vSQmce9BlI</a></p>&mdash; Monthly Earth Day (@MonthlyEarthDay) <a href="https://twitter.com/MonthlyEarthDay/status/1917977185161220472?ref_src=twsrc%5Etfw">May 1, 2025</a></blockquote>`,
      likes: 0,
      comments: 0,
      date: "May 1, 2025"
    }
  ];

  useEffect(() => {
    const loadTwitterWidgets = () => {
      if (typeof window !== 'undefined' && window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    };

    const timer = setTimeout(loadTwitterWidgets, 300);
    return () => clearTimeout(timer);
  }, []);

  const handlePostClick = (post: any) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const extractTags = (post: any) => {
    const tags = [];
    if (post.type === "twitter") {
        tags.push("twitter");
        const hashtagRegex = /#(\w+)/g;
        let match;
        while ((match = hashtagRegex.exec(post.content)) !== null) {
            tags.push(match[1].toLowerCase());
        }
    }
    if (post.content) {
      if (post.content.toLowerCase().includes("cleanup") || post.content.toLowerCase().includes("clean"))
        tags.push("cleanup");
      if (post.content.toLowerCase().includes("tree") || post.content.toLowerCase().includes("plant") || post.content.toLowerCase().includes("reforestation"))
        tags.push("planting");
      if (post.content.toLowerCase().includes("solar") || post.content.toLowerCase().includes("energy"))
        tags.push("energy");
      if (post.content.toLowerCase().includes("waste") || post.content.toLowerCase().includes("recycle"))
        tags.push("waste-reduction");
      if (post.content.toLowerCase().includes("garden") || post.content.toLowerCase().includes("compost"))
        tags.push("gardening");
      if (post.content.toLowerCase().includes("water")) tags.push("water");
      if (post.content.toLowerCase().includes("community") || post.content.toLowerCase().includes("neighbor"))
        tags.push("community");
      if (post.content.toLowerCase().includes("school") || post.content.toLowerCase().includes("education"))
        tags.push("education");
    }
    return Array.from(new Set(tags));
  };

  const allTags = Array.from(
    new Set(communityPosts.flatMap(extractTags))
  ).sort();

  const filteredPosts = communityPosts.filter((post) => {
    const contentToSearch = post.content || '';

    const matchesSearch =
      searchTerm === "" ||
      (contentToSearch.toLowerCase().includes(searchTerm.toLowerCase())) ||
      post.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.user.handle && post.user.handle.toLowerCase().includes(searchTerm.toLowerCase()));

    const postTags = extractTags(post);
    const matchesTag = selectedTag === "" || postTags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gray-50" data-oid="community-page">
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
      />

      <section className="py-12 px-4 bg-[#c9e6db] text-[#365b36]" data-oid="community-hero">
        <div className="max-w-5xl mx-auto text-center" data-oid="community-hero-content">
          <h1 className="font-serif font-bold text-4xl md:text-5xl tracking-tight mb-4">
            Our Global Community
          </h1>
          <p className="text-lg md:text-xl text-[#737373] leading-relaxed max-w-xl mx-auto">
            Connect with change-makers around the world. See actions, share your stories, and get inspired!
          </p>
          <div className="mt-8">
            <Button
              variant="secondary"
              href="/share-your-story"
              className="bg-[#017d8c] hover:bg-[#016a77] text-white transition"
            >
              Share Your Story!
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4" data-oid="community-feed">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-neutral-text-dark text-center mb-8">
            Activity Feed
          </h2>

          <div className="flex flex-col gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <CommunityPostCard
                  key={index}
                  {...post}
                  onClick={() => handlePostClick(post)}
                  data-oid={`post-card-${index}`}
                />
              ))
            ) : (
              <div className="text-center py-16" data-oid="no-posts-found">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-serif font-bold text-2xl text-neutral-text-dark mb-4">
                  No posts found
                </h3>
                <p className="text-neutral-dark-gray mb-6">
                  Try adjusting your search terms or clearing the filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTag("");
                  }}
                  className="bg-primary-green text-neutral-text-light px-6 py-3 rounded-full font-medium hover:bg-primary-green-dark transition-colors duration-200"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedPost && (
        <PostDetailModal post={selectedPost} onClose={handleCloseModal} />
      )}
    </div>
  );
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}