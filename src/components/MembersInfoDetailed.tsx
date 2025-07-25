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
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto my-4">
      <div className="w-1/3">
        <img src={image} alt={name} className="object-cover h-full w-full" />
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-center">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <h3 className="text-md text-indigo-600 font-semibold mb-2">
          {roleDetailed}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
