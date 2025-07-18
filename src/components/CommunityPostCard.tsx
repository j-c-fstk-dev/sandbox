import React from "react";

interface CommunityPostCardProps {
  type: "text" | "image" | "video" | "poll" | "twitter";
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  image?: string;
  video?: string;
  poll?: {
    question: string;
    options: {text: string;votes: number;}[];
  };
  twitterEmbed?: string;
  likes: number;
  comments: number;
  date: string;
}

export default function CommunityPostCard({
  type,
  user,
  content,
  image,
  video,
  poll,
  twitterEmbed,
  likes,
  comments,
  date
}: CommunityPostCardProps) {
  const renderContent = () => {
    switch (type) {
      case "image":
        return (
          <div className="space-y-3" data-oid="bhiyd3g">
            <p className="text-neutral-text-dark" data-oid="kvj_lho">{content}</p>
            {image &&
            <div className="rounded-lg overflow-hidden" data-oid="ye1o_ed">
                <img
                src={image}
                alt="Community post"
                className="w-full h-auto" data-oid="79.6ffa" />

              </div>
            }
          </div>);


      case "video":
        return (
          <div className="space-y-3" data-oid="v64wv1:">
            <p className="text-neutral-text-dark" data-oid="fbt6pav">{content}</p>
            {video &&
            <div className="rounded-lg overflow-hidden aspect-video" data-oid="opk9pri">
                <video
                src={video}
                controls
                className="w-full h-full object-cover" data-oid="2wx459p" />

              </div>
            }
          </div>);


      case "poll":
        return (
          <div className="space-y-4" data-oid="xo61le-">
            <p className="text-neutral-text-dark" data-oid="t:_c_99">{content}</p>
            {poll &&
            <div className="bg-neutral-light-gray p-4 rounded-lg" data-oid="612q8dl">
                <h4 className="font-medium text-neutral-text-dark mb-3" data-oid="nmp7rq-">
                  {poll.question}
                </h4>
                <div className="space-y-2" data-oid="298vo7p">
                  {poll.options.map((option, index) =>
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-white rounded border" data-oid="qugon02">

                      <span className="text-sm" data-oid="ividme.">{option.text}</span>
                      <span className="text-xs text-neutral-dark-gray font-medium" data-oid=".10f4g5">
                        {option.votes} votes
                      </span>
                    </div>
                )}
                </div>
              </div>
            }
          </div>);


      case "twitter":
        return (
          <div className="space-y-3" data-oid="78-37s1">
            <p className="text-neutral-text-dark" data-oid="2sl28la">{content}</p>
            {twitterEmbed &&
            <div className="bg-neutral-light-gray p-4 rounded-lg border-l-4 border-earth-blue" data-oid="id3rfcp">
                <div className="text-sm text-neutral-dark-gray" data-oid="22gkyzm">
                  🐦 Twitter/X Post: {twitterEmbed}
                </div>
              </div>
            }
          </div>);


      default:
        return <p className="text-neutral-text-dark" data-oid="7a_k694">{content}</p>;
    }
  };

  return (
    <div className="card animate-slide-up" data-oid="qze8xno">
      {/* User Header */}
      <div className="flex items-center space-x-3 mb-4" data-oid="0nhri:m">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover" data-oid="_x4nttw" />

        <div data-oid="hz58whe">
          <h4 className="font-medium text-neutral-text-dark" data-oid="f:jy8vy">{user.name}</h4>
          <span className="text-xs text-neutral-dark-gray" data-oid="48fs:.6">{date}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4" data-oid="1uuszf_">{renderContent()}</div>

      {/* Engagement Stats */}
      <div className="flex items-center space-x-6 pt-3 border-t border-neutral-medium-gray" data-oid="l06qpc.">
        <div className="flex items-center space-x-1 text-neutral-dark-gray" data-oid="rsqrxw-">
          <span className="text-lg" data-oid="cd0k8vf">❤️</span>
          <span className="text-sm" data-oid="4knma8u">{likes}</span>
        </div>
        <div className="flex items-center space-x-1 text-neutral-dark-gray" data-oid="41s8bam">
          <span className="text-lg" data-oid="z42uog2">💬</span>
          <span className="text-sm" data-oid="cvp9n72">{comments}</span>
        </div>
      </div>
    </div>);

}