import React, { useState, useEffect } from "react";
import MemberCard from "./MembersCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import members from "@/data/members";
import MembersInfoDetailed from "./MembersInfoDetailed";

export default function TeamCarouselDetailed() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);
  const [gap, setGap] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setCardWidth(220);
        setGap(60);
      } else if (width < 1024) {
        setCardWidth(260);
        setGap(120);
      } else {
        setCardWidth(300);
        setGap(200);
      }
    };

    handleResize(); // Inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalWidth = cardWidth + gap;

  const prev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : members.length - 1
    );
  };

  const next = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < members.length - 1 ? prevIndex + 1 : 0
    );
  };
  const memberDetailedCard = (
    name: string,
    roleDetailed: string,
    description: string,
    image: string
  ) => {
    return (
      <MembersInfoDetailed
        name={name}
        roleDetailed={roleDetailed}
        description={description}
        image={image}
      />
    );
  };
  const activeMember = members[activeIndex];

  return (
    <div>
      <div className="w-full flex justify-center items-center relative overflow-x-hidden overflow-y-visible">
        <div className="relative w-full max-w-7xl px-4 overflow-x-hidden overflow-y-hidden">
          <div
            onClick={prev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
          >
            <ChevronLeftIcon className="w-8 h-8 text-blue-500 hover:text-blue-600 transition" />
          </div>

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(50% - ${
                activeIndex * totalWidth + cardWidth / 2
              }px))`,
            }}
          >
            {members.map((member, index) => {
              const isActive = index === activeIndex;
              const scale =
                Math.abs(index - activeIndex) > 1
                  ? 0.85
                  : isActive
                  ? 1.1
                  : 0.95;
              if (isActive) {
                memberDetailedCard: member.name,
                  member.roleDetailed,
                  member.description,
                  member.image;
              }

              return (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `${cardWidth}px`,
                    marginRight: `${gap}px`,
                    transform: `scale(${scale})`,
                    transition: "transform 0.3s ease-in-out",
                    zIndex: isActive ? 10 : 5,
                  }}
                >
                  <MemberCard
                    name={member.name}
                    role={member.roleDetailed}
                    image={member.image}
                    isActive={isActive}
                  />
                </div>
              );
            })}
          </div>
          <div
            onClick={next}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 cursor-pointer"
          >
            <ChevronRightIcon className="w-8 h-8 text-blue-500 hover:text-blue-600 transition" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        {memberDetailedCard(
          activeMember.name,
          activeMember.roleDetailed,
          activeMember.description,
          activeMember.image
        )}
      </div>
    </div>
  );
}
