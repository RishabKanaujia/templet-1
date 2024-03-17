"use client";
import React, { useEffect, useRef, useState } from "react";
import ServiceBox from "./serviceBox";

const ServiceHolder = ({ serviceList }) => {
  const [isLeft, setIsLeft] = useState(true);
  const scroll = useRef(null);

  useEffect(() => {
    if (isLeft) {
      // scroll.current.scrollLeft = 0;
      scroll.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      scroll.current.scrollTo({
        left: scroll.current.scrollWidth,
        behavior: "smooth",
      });
    }
  });
  const swipe = () => {
    setIsLeft(!isLeft);
  };
  return (
    <div className="relative">
      <div className="overflow-scroll scrollbar-hide w-full" ref={scroll}>
        <div className="flex justify-start mx-6 gap-5 h-[20rem]">
          {serviceList.map((item, index) => {
            return <ServiceBox key={index} props={item} />;
          })}
        </div>
      </div>

      {!isLeft ? (
        <button
          className="bg-white text-black border border-black btn-shadow w-[60px] h-[60px] rounded-full left-2 top-[40%] absolute"
          onClick={swipe}
        >
          {"<"}
        </button>
      ) : (
        <button
          className="bg-white text-black border border-black btn-shadow w-[60px] h-[60px] rounded-full right-2 top-[40%] absolute"
          onClick={swipe}
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default ServiceHolder;
