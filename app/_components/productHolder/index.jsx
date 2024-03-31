"use client";
import React, { useEffect, useRef, useState } from "react";
import Product from "./product";


const ProductHolder = ({ productList, onProductClick }) => {
  const [isLeft, setIsLeft] = useState(true);
  const scroll = useRef(null);

  useEffect(() => {
    if (isLeft) {
      // scroll.current.scrollLeft = 0;
      scroll.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      scroll.current.scrollTo({
        left:scroll.current.scrollWidth,
        behavior: 'smooth'
      }); 
    }
  });
  const swipe = () => {
    setIsLeft(!isLeft);
  };
  return (
    <>
      <div className="relative">
        <div
          className="overflow-scroll scrollbar-hide w-[60rem]"
          ref={scroll}
        >
          <div
            className={`flex w-fit p-[30px] gap-5 text-black font-semibold`}
          >
            {productList.map((item, index) => {
              return (
                <Product
                  key={index}
                  index={index}
                  onProductClick={onProductClick}
                  proData={item}
                />
              );
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
    </>
  );
};

export default ProductHolder;
