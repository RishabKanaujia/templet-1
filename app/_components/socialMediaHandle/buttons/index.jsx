import React from "react";
import { FaFacebook } from "react-icons/fa";

const MediaBtn = ({ Icon }) => {
  return (
    <div className="flex h-fit bg-black md:p-7 w-fit p-4 hover:bg-white hover:text-black  btn-shadow-white rounded-full">
      <Icon size={30} />
    </div>
  );
};

export default MediaBtn;
