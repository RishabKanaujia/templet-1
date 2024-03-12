import React from "react";

const Product = ({ proData,onProductClick,index}) => {
  return (
    <div  className="w-[250px] flex flex-col gap-5">
      <img onClick={()=>{onProductClick(index)}} className="rounded-[15px] aspect-[0.8]" src={proData.src} alt="" />
      <p>{proData.title}</p>
      <p>{proData.price}</p>
      <button className="btn-shadow rounded-full w-[120px] h-fit p-4 border border-black text-[0.9em]">Buy Now</button>
    </div>
  );
};

export default Product;
