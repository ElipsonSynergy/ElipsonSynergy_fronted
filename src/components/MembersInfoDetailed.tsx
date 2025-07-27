import React, { useState } from "react";

type MemberProps = {
  name: string;
  image: string;
  roleDetailed: string;
  description: string;
  translations?: (key: string) => string;
};

export default function MembersInfoDetailed({
  name,
  image,
  roleDetailed,
  description,
  translations,
}: MemberProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = translations || ((key: string) => key);
  
  // Helper function to replace placeholders in translations
  const replaceTranslation = (template: string, replacements: Record<string, string>) => {
    return template.replace(/\{(\w+)\}/g, (match, key) => replacements[key] || match);
  };

  // Truncate description if it's too long
  const maxLength = 150;
  const shouldTruncate = description.length > maxLength;
  const displayDescription = shouldTruncate && !isExpanded 
    ? `${description.substring(0, maxLength)}...`
    : description;
  return (
    <div 
      className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto my-4 hover:shadow-lg transition-shadow duration-300"
      role="article"
      aria-labelledby={`member-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="w-full sm:w-1/3 flex-shrink-0">
        <img 
          src={image} 
          alt={replaceTranslation(t('member_info_detailed.member_photo_alt'), { name })}
          className="object-cover h-48 sm:h-full w-full"
          loading="lazy"
        />
      </div>
      <div className="w-full sm:w-2/3 p-4 sm:p-6 flex flex-col justify-center">
        <h2 
          id={`member-${name.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-xl sm:text-2xl font-bold text-gray-800 mb-1"
        >
          {name}
        </h2>
        <div className="mb-3">
          <span className="sr-only">{t('member_info_detailed.role_label')}</span>
          <h3 className="text-sm sm:text-md text-indigo-600 font-semibold">
            {roleDetailed}
          </h3>
        </div>
        <div className="text-gray-600">
          <span className="sr-only">{t('member_info_detailed.description_label')}</span>
          <p className="text-sm sm:text-base leading-relaxed mb-2">
            {displayDescription}
          </p>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
              aria-expanded={isExpanded}
              aria-controls={`description-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {isExpanded ? t('member_info_detailed.read_less') : t('member_info_detailed.read_more')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
