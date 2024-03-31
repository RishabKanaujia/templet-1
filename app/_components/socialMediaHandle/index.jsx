"use client";
import React, { useState } from "react";
import MediaBtn from "./buttons";
import { IoIosArrowUp, IoIosArrowDown} from "react-icons/io";

export const SocialMediaHandle = ({ iconList }) => {
  const [isDrop, setIsDrop] = useState(false);
  const currentIconList = isDrop
    ? iconList
    : iconList.filter((_, index) => index < 9);
  const dropDown = () => {
    setIsDrop(!isDrop);
  };
  return (
    <>
    <div className="flex h-fit py-7 px-7 justify-center flex-wrap gap-5 backdrop-blur-[20px] w-full rounded-[20px] ">
      {currentIconList.map((icon,index) => {
        return <MediaBtn key={index} Icon={icon} />;
      })}
     
    </div>
    <button className="flex items-center justify-center bg-black rounded-full mx-auto my-[-15px] z-20 w-[30px] h-[30px]" onClick={dropDown}>
    {isDrop?<IoIosArrowUp />:<IoIosArrowDown/>}
      </button>
      
    </>
  );
};
