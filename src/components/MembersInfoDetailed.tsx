import React, { useState } from "react";
import { useTranslation } from "react-i18next";

type MemberProps = {
  name: string;
  image: string;
  roleDetailed: string;
  description: string;
};

export default function MembersInfoDetailed({
  name,
  image,
  roleDetailed,
  description,
}: MemberProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation(); // <--- aquí cargas el namespace

  const replaceTranslation = (
    template: string,
    replacements: Record<string, string>
  ) => {
    return template.replace(
      /\{(\w+)\}/g,
      (match, key) => replacements[key] || match
    );
  };

  const maxLength = 150;
  const shouldTruncate = description.length > maxLength;
  const displayDescription =
    shouldTruncate && !isExpanded
      ? `${description.slice(0, maxLength)}...`
      : description;

  return (
    <div className="flex flex-col sm:flex-row bg-white shadow-none max-w-screen-lg mx-auto my-6 px-4">
      <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
        <img
          src={image}
          alt={replaceTranslation(t("member_photo_alt"), { name })}
          className="w-full h-auto sm:h-full object-cover rounded-xl"
          loading="lazy"
        />
      </div>
      <div className="w-full sm:w-2/3 sm:pl-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
        <h3 className="text-lg text-indigo-600 font-semibold mb-3">
          {roleDetailed}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          {displayDescription}
        </p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center justify-center mt-3 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 active:scale-95"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Mostrar menos" : "Mostrar más"}
          >
            <span className="mr-2 text-xs font-semibold">
              {isExpanded ? "" : ""}
            </span>
            {isExpanded ? (
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 15l7-7 7 7" 
                />
              </svg>
            ) : (
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            )}
          </button>
        )}
      </div>  
    </div>
  );
}
