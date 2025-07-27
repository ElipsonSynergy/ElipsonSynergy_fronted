import React from "react";

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
  return (
    <div className="flex flex-col sm:flex-row bg-white shadow-none max-w-screen-lg mx-auto my-6 px-4">
      <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
        <img
          src={image}
          alt={name}
          className="w-full h-auto sm:h-full object-cover rounded-xl"
        />
      </div>
      <div className="w-full sm:w-2/3 sm:pl-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
        <h3 className="text-lg text-indigo-600 font-semibold mb-3">
          {roleDetailed}
        </h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
