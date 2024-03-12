import React from "react";

const TitleBtn = ({ btnData }) => {
  return (
    <div>
      <button className="flex gap-[5px] items-center w-full h-fit p-[5px] shadow  rounded-full hover:cursor-pointer text-black border border-black  bg-white">
        <img className="h-[40px] rounded-full " src={btnData.src} alt="" />{btnData.title}
      </button>
    </div>
  );
};

export default TitleBtn;
