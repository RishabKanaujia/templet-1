import React from "react";

const Product = ({ proData,onProductClick,index}) => {
  return (
    <div  className="w-[270px] flex flex-col gap-5">
      <img onClick={()=>{onProductClick(index)}} className="rounded-[15px] aspect-[1]" src={proData.Product_image} alt="" />
      <p>{proData.Product_Name}</p>
      <p>{proData.Product_description}</p>
      <p>₹ {proData.Price}</p>
      <button className="btn-shadow rounded-full w-[120px] hover:shadow-none h-fit p-4 border border-black text-[0.9em]">Buy Now</button>
    </div>
  );
};

export default Product;
