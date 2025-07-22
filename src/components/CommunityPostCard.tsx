// components/CommunityPostCard.tsx
import React from "react";
import Image from "next/image";
import ImageCarousel from './ImageCarousel';
import Link from 'next/link';

interface CommunityPostCardProps {
  type: "text" | "image" | "video" | "poll" | "twitter" | "carousel";
  user: {
    name: string;
    handle?: string;
    avatar?: string; // Continua sendo opcional
  };
  content: string;
  image?: string;
  images?: string[];
  video?: string;
  poll?: {
    question: string;
    options: { text: string; votes: number; }[];
  };
  twitterEmbed?: string;
  tweetUrl?: string;
  date: string;
  onClick: () => void;
}

export default function CommunityPostCard({
  type,
  user,
  content,
  image,
  images,
  video,
  poll,
  tweetUrl,
  date,
  onClick
}: CommunityPostCardProps) {

  const defaultAvatar = "/images/default-avatar.png"; // Certifique-se de ter esta imagem em public/images/

  // Função para verificar se a URL é de um perfil do Twitter/X
  const isTwitterProfileUrl = (url: string | undefined): boolean => {
    if (!url) return false;
    // Verifica se a URL começa com x.com/ ou twitter.com/ e não termina com uma extensão de imagem comum
    return (
      (url.startsWith("https://x.com/") || url.startsWith("https://twitter.com/")) &&
      !/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url) // Garante que não é um link direto para imagem do CDN
    );
  };

  // Determina qual URL de avatar usar
  const avatarSrc = (user.avatar && !isTwitterProfileUrl(user.avatar))
    ? user.avatar
    : defaultAvatar;


  const renderContent = () => {
    switch (type) {
      case "image":
        return (
          <div className="space-y-3 px-4">
            <p className="text-neutral-text-dark whitespace-pre-wrap">{content}</p>
            {image &&
              <div className="rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt="Community post"
                  className="w-full h-auto" />
              </div>
            }
          </div>
        );

      case "carousel":
        return (
          <div className="space-y-3 px-4">
            <p className="text-neutral-text-dark whitespace-pre-wrap">{content}</p>
            {images && images.length > 0 &&
              <ImageCarousel images={images} preview={true} />
            }
          </div>
        );

      case "video":
        return (
          <div className="space-y-3 px-4">
            <p className="text-neutral-text-dark whitespace-pre-wrap">{content}</p>
            {video &&
              <div className="rounded-lg overflow-hidden aspect-video">
                <video
                  src={video}
                  controls
                  className="w-full h-full object-cover" />
              </div>
            }
          </div>
        );

      case "poll":
        return (
          <div className="space-y-4 px-4">
            <p className="text-neutral-text-dark whitespace-pre-wrap">{content}</p>
            {poll &&
              <div className="bg-neutral-light-gray p-4 rounded-lg">
                <h4 className="font-medium text-neutral-text-dark mb-3">
                  {poll.question}
                </h4>
                <div className="space-y-2">
                  {poll.options.map((option, index) =>
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-white rounded border">
                      <span className="text-sm">{option.text}</span>
                      <span className="text-xs text-neutral-dark-gray font-medium">
                        {option.votes} votes
                      </span>
                    </div>
                  )}
                </div>
              </div>
            }
          </div>
        );

      case "twitter":
        return (
          <div className="space-y-3 px-4">
            {content && <p className="text-neutral-text-dark whitespace-pre-wrap mb-2 line-clamp-4">{content}</p>}
            {tweetUrl && (
                <Link href={tweetUrl} target="_blank" rel="noopener noreferrer" className="text-primary-green hover:underline text-sm mt-2 block">
                    View on X (Twitter)
                </Link>
            )}
          </div>
        );

      default:
        return <p className="text-neutral-text-dark whitespace-pre-wrap px-4">{content}</p>;
    }
  };

  return (
    <div
      className="card animate-slide-up cursor-pointer"
      onClick={onClick}
    >
      {/* User Header */}
      <div className="flex items-center space-x-3 mb-4 px-4 pt-4">
        <Image
          src={avatarSrc} // <-- Usando a URL de avatar determinada pela lógica
          alt={user.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
          priority={false}
        />

        <div>
          <h4 className="font-medium text-neutral-text-dark">{user.name}</h4>
          {user.handle && <span className="text-xs text-neutral-dark-gray block">{user.handle}</span>}
          <span className="text-xs text-neutral-dark-gray">{date}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">{renderContent()}</div>
    </div>
  );
}