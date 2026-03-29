import Image from 'next/image';

const FloatingLogo = () => {
  return (
    <a
      href="https://bassforest.earth"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-28 right-4 z-50"
      style={{ width: '50px', height: '50px' }}
    >
      <Image
        src="https://res.cloudinary.com/dr0weongo/image/upload/v1774791755/copy_of_bflogo_qlxxz7_b7e750.jpg"
        alt="Bassforest Logo"
        width={50}
        height={50}
        className="rounded-full animate-neon-pulse"
      />
    </a>
  );
};

export default FloatingLogo;
