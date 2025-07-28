import React, { useState } from "react";
import { useTranslation } from "react-i18next";

type MemberProps = {
  name: string;
  image: string;
  roleDetailed: string;
  description: string;
  readMore: string;
  readLess: string;
  translations?: (key: string) => string;
};

export default function MembersInfoDetailed({
  name,
  image,
  roleDetailed,
  description,
  readMore,
  readLess,
  translations,
}: MemberProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = translations || ((key: string) => key);

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
            className="inline-block mt-1 px-4 py-1 text-sm font-semibold text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={isExpanded}
          >
            {isExpanded ? readMore : readLess}
          </button>
        )}
      </div>
    </div>
  );
}
