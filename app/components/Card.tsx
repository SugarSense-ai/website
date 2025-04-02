"use client"

import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  buttonLabel: string;
  imageUrl: string;
  comingSoon?: boolean;
  isActive?: boolean;
  onClick: () => void;
  link?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  buttonLabel,
  imageUrl,
  comingSoon = false,
  isActive = false,
  onClick,
  link = "#",
}) => {
  return (
    <div
      className={`relative bg-[#40b3d3] dark:bg-[#40b3d3] rounded-xl shadow-lg p-4 cursor-pointer transition-transform duration-300
      w-100 h-96 flex flex-col ${isActive ? "scale-100" : "scale-95"} hover:scale-100`}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg object-cover w-full h-40 mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-200 mb-4 flex-1">
        {description}
      </p>
      <Link href={link}>
        <button
          className={`py-2 px-4 rounded w-2/4
            ${
              comingSoon
                ? "bg-white border border-white rounded-full text-gray-600 dark:text-gray-800 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-800 text-white"
            }`}
          disabled={comingSoon}
        >
          {buttonLabel}
        </button>
      </Link>
    </div>
  );
};

export default Card;
