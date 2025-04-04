import React from "react";

const BusinessCard = ({ image, icon, title, description, address, instagram, twitter, tag }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full mr-3">
            <i className={`ri-${icon}`}></i>
          </div>
          <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="w-5 h-5 flex items-center justify-center mr-1">
            <i className="ri-map-pin-line"></i>
          </div>
          <span>{address}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {instagram && (
              <a href={instagram} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary">
                <i className="ri-instagram-line"></i>
              </a>
            )}
            {twitter && (
              <a href={twitter} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary">
                <i className="ri-twitter-x-line"></i>
              </a>
            )}
          </div>
          {tag && (
            <span className="text-xs font-medium px-3 py-1 bg-green-100 text-green-800 rounded-full">
              {tag}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
