import Link from 'next/link';

const BassForestBanner = () => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-8 mb-12 animate-slide-up">
      <h3 className="font-serif font-bold text-2xl mb-4 text-green-400">
        Special Event: BASS FOREST EARTH DAY 2026
      </h3>
      <p className="text-lg mb-4">
        A 12-24 hour virtual livestream festival featuring global electronic music artists to support worldwide tree planting on July 26, 2026.
      </p>
      <p className="text-lg mb-6 leading-relaxed">
        Join a global community to celebrate music and take real-world action for the planet. This is a FREE event.
      </p>
      <Link
        href="https://bassforest.earth"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-800 transition px-6 py-3 rounded-full font-medium"
      >
        Visit Bass Forest
      </Link>
    </div>
  );
};

export default BassForestBanner;
