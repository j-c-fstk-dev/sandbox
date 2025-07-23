// components/PostDetailModal.tsx
import React, { useEffect } from 'react';
import Image from 'next/image';
import ImageCarousel from './ImageCarousel';
import Link from 'next/link';

interface PostDetailModalProps {
  post: any;
  onClose: () => void;
}

const PostDetailModal: React.FC<PostDetailModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const loadTwitterWidget = () => {
      if (post.type === "twitter" && typeof window !== 'undefined' && window.twttr?.widgets) {
        const embedContainer = document.getElementById('twitter-embed-container');
        if (embedContainer) {
          window.twttr.widgets.load(embedContainer);
          // Adicionalmente, você pode tentar forçar um ajuste de altura após o carregamento inicial.
          // Isso é uma tentativa e pode não ser sempre necessário ou eficaz, dependendo da rede.
          setTimeout(() => {
            const iframe = embedContainer.querySelector('iframe');
            if (iframe) {
              iframe.style.height = 'auto'; // Re-ajusta para auto
            }
          }, 500); // Pequeno atraso após o load para permitir renderização inicial
        }
      }
    };

    // Atraso inicial maior para garantir que o DOM do modal esteja completamente montado e visível
    const timer = setTimeout(loadTwitterWidget, 500); // Aumentado para 500ms

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [post]);

  const renderModalContent = () => {
    switch (post.type) {
      case "text":
        return <p className="text-neutral-text-dark whitespace-pre-wrap">{post.content}</p>;
      case "image":
        return (
          <div className="space-y-4">
            <p className="text-neutral-text-dark whitespace-pre-wrap">{post.content}</p>
            {post.image && (
              <img src={post.image} alt="Community post" className="w-full h-auto rounded-lg max-h-[70vh] object-contain" />
            )}
          </div>
        );
      case "carousel":
        return (
          <div className="space-y-4">
            <p className="text-neutral-text-dark whitespace-pre-wrap">{post.content}</p>
            {post.images && post.images.length > 0 && (
              <ImageCarousel images={post.images} preview={false} />
            )}
          </div>
        );
      case "video":
        return (
          <div className="space-y-4">
            <p className="text-neutral-text-dark whitespace-pre-wrap">{post.content}</p>
            {post.video && (
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <video src={post.video} controls className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        );
      case "poll":
        return (
          <div className="space-y-4">
            <p className="text-neutral-text-dark whitespace-pre-wrap">{post.content}</p>
            {post.poll && (
              <div className="bg-neutral-light-gray p-4 rounded-lg">
                <h4 className="font-medium text-neutral-text-dark mb-3">{post.poll.question}</h4>
                <div className="space-y-2">
                  {post.poll.options.map((option: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-white rounded border">
                      <span className="text-sm">{option.text}</span>
                      <span className="text-xs text-neutral-dark-gray font-medium">{option.votes} votes</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      case "twitter":
        return (
          <div className="space-y-4">
            {post.content && <p className="text-neutral-text-dark whitespace-pre-wrap">{post.content}</p>}
            {post.twitterEmbed && (
              <div
                id="twitter-embed-container"
                className="bg-neutral-light-gray p-4 rounded-lg border-l-4 border-earth-blue twitter-embed-wrapper w-full"
                // Removed inline minHeight and centering styles here to let CSS classes manage it
                // Instead, rely on globals.css and the iframe's natural loading
                dangerouslySetInnerHTML={{ __html: post.twitterEmbed }}
              />
            )}
            {post.tweetUrl && (
              <Link href={post.tweetUrl} target="_blank" rel="noopener noreferrer" className="text-primary-green hover:underline text-sm mt-2 block">
                  View full Tweet on X (Twitter)
              </Link>
            )}
          </div>
        );
      default:
        return <p className="text-neutral-text-dark whitespace-pre-wrap">{post.content}</p>;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform scale-95 transition-transform duration-200 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-neutral-dark-gray hover:text-neutral-text-dark text-2xl font-bold"
          >
            &times;
          </button>
        </div> {/* Corrected: This was missing a closing tag and had an extra brace. */}
        <div className="px-6 pb-6 pt-4">
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src={post.user.avatar}
              alt={post.user.name}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <h4 className="font-medium text-neutral-text-dark">{post.user.name}</h4>
              {post.user.handle && <span className="text-xs text-neutral-dark-gray block">{post.user.handle}</span>}
              <span className="text-xs text-neutral-dark-gray">{post.date}</span>
            </div>
          </div>

          {renderModalContent()}

          {/*<div className="flex items-center space-x-6 pt-3 border-t border-neutral-medium-gray mt-6">
            <div className="flex items-center space-x-1 text-neutral-dark-gray">
              <span className="text-lg">❤️</span>
              <span className="text-sm">{post.likes || 0}</span>
            </div>
            <div className="flex items-center space-x-1 text-neutral-dark-gray">
              <span className="text-lg">💬</span>
              <span className="text-sm">{post.comments || 0}</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PostDetailModal;