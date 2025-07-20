"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
 images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
 const [currentIndex, setCurrentIndex] = useState(0);

 const goToPrevious = () => {
   setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
 };

 const goToNext = () => {
   setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
 };

 return (
   <div className="relative w-full h-64 overflow-hidden rounded-md">
     {images.map((image, index) => (
       <div
         key={index}
         className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
           index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
         }`}
       >
         <Image src={image} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-md" />
       </div>
     ))}
     {images.length > 1 && (
       <>
         <button
           onClick={goToPrevious}
           className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-100 bg-opacity-50 text-gray-700 hover:bg-opacity-70 rounded-full p-2 focus:outline-none"
         >
           <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M15.41 16.59 10.83 12 15.41 7.41 14 6 8 12l6 6z"/></svg>
         </button>
         <button
           onClick={goToNext}
           className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-100 bg-opacity-50 text-gray-700 hover:bg-opacity-70 rounded-full p-2 focus:outline-none"
         >
           <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
         </button>
         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
           {images.map((_, index) => (
             <div
               key={index}
               className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-primary-green' : 'bg-gray-300'}`}
             />
           ))}
         </div>
       </>
     )}
   </div>
 );
};

export default ImageCarousel;