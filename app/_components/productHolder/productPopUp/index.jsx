import React from "react";

const ProductPop = ({ proData,closePop }) => {
  return (
    <div className="w-[100%] max-w-[1000px] flex fixed justify-center z-30 items-center top-0 h-[100vh] bg-[#05050577]">
      <div className="flex gap-7 justify-center items-center flex-col bg-white max-w-[720px] py-6 w-full h-fit rounded-[30px]">
        <div className="flex justify-between px-8 w-full">
          <h1 className="text-black text-[1.5em]">Product Details</h1>
        <button onClick={closePop} className="text-black">x</button>
        </div>

        <hr className="border w-[90%]" />
        <img className="w-[300px] rounded-[30px]" src={proData.src} alt="" />
        <p className="text-black">{proData.title}</p>
        <p className="text-black">{proData.price}</p>
        <button className="btn-shadow text-black rounded-full w-[120px] h-fit p-4 border border-black text-[0.9em]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductPop;
