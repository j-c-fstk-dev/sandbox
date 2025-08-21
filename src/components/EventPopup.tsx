import React, { useState, useEffect } from 'react';

interface EventPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const EventPopup: React.FC<EventPopupProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Close when clicking overlay
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative max-w-sm mx-auto"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside popup
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          X
        </button>
        <img
          src="https://res.cloudinary.com/dr0weongo/image/upload/v1755742224/earth_kcszft.jpg"
          alt="Event Promotion"
          className="w-full h-auto mb-4 rounded"
        />
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          <a
            href="https://lu.ma/odehuwob"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full text-white no-underline"
          >
            Join Event
          </a>
        </button>
      </div>
    </div>
  );
};

export default EventPopup;