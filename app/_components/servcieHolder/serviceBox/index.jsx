import React from "react";

const ServiceBox = ({props}) => {
  return (
    <div>
      <div className="border border-black w-[16rem] btn-shadow h-[18rem] rounded-[20px]">
        <img className=" w-[7rem] h-[7rem] rounded-[2rem] p-5" src={props.src} alt="" />
        <h4 className="text-black font-bold px-5">{props.head}</h4>
        <p className="text-black py-3 text-[.8rem] px-5">
          {props.para}
        </p>
      </div>
    </div>
  );
};

export default ServiceBox;
