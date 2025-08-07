import React from "react";

type MemberProps = {
  name: string;
  role: string;
  image: string;
  isActive: boolean;
  translations?: (key: string) => string;
  whatsAppLink: string;
  instagramLink: string;
  facebookLink: string;
  linkedinLink: string;
};

export default function MemberCard({
  name,
  role,
  isActive,
  image,
  translations,
  whatsAppLink,
  instagramLink,
  facebookLink,
  linkedinLink,
}: MemberProps) {
  const t = translations || ((key: string) => key);

  // Helper function to replace placeholders in translations
  const replaceTranslation = (
    template: string,
    replacements: Record<string, string>
  ) => {
    return template.replace(
      /\{(\w+)\}/g,
      (match, key) => replacements[key] || match
    );
  };
  return (
    <div
      className={`transition-transform duration-300 ease-in-out flex-shrink-0 rounded-xl bg-white shadow-md text-center p-4 ${
        isActive ? "scale-90 z-20" : "scale-90 opacity-60 z-10"
      }`}
      style={{ width: "290px" }}
    >
      <div className="w-full h-80 bg-gray-200 rounded-t-xl overflow-hidden">
        <img
          src={image}
          alt={replaceTranslation(t("member_card.photo_alt"), { name })}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-bold mt-2">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>

      <div className="flex justify-center gap-4 mt-3">
        <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/Whatsapp.png"
            className="w-8 h-8 rounded-20px flex items-center justify-center text-white text-sm hover:opacity-80 cursor-pointer transition-opacity"
            alt={replaceTranslation(t("member_card.social_icons.whatsapp"), {
              name,
            })}
            title={t("member_card.social_tooltips.whatsapp")}
          />
        </a>
        <a href={facebookLink} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/Facebook.png"
            className="w-8 h-8 rounded-20px flex items-center justify-center text-white text-sm hover:opacity-80 cursor-pointer transition-opacity"
            alt={replaceTranslation(t("member_card.social_icons.facebook"), {
              name,
            })}
            title={t("member_card.social_tooltips.facebook")}
          />
        </a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/Instagram.png"
            className="w-8 h-8 rounded-20px flex items-center justify-center text-white text-sm hover:opacity-80 cursor-pointer transition-opacity"
            alt={replaceTranslation(t("member_card.social_icons.instagram"), {
              name,
            })}
            title={t("member_card.social_tooltips.instagram")}
          />
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img
            src="/images/Linkedin.png"
            className="w-8 h-8 rounded-20px  flex items-center justify-center text-white text-sm hover:opacity-80"
            alt=""
            title={"Linkedin"}
          />
        </a>
      </div>
    </div>
  );
}
