"use client";
import React from "react";
import Product from "./product";

const ProductHolder = ({ productList,onProductClick }) => {
  return (
    <>
      <div className="flex justify-start p-[30px] gap-3">
        <h1 className="text-[2em] text-black font-semibold">Prodcts</h1>
        <h1 className="text-[2em] text-black font-semibold">Services</h1>
      </div>
      <div className="overflow-hidden w-full">
        {" "}
        <div className="flex w-fit overflow-hidden p-[30px] gap-5 text-black font-semibold">
          {productList.map((item,index) => {
            return <Product index={index} onProductClick={onProductClick} proData={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductHolder;
