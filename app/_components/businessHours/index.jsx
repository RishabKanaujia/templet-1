"use client";
import React, { useState } from "react";

const BusinessHour = () => {
  const [hourBox, setHourBox] = useState(false);

  const OpenHourBox = () => {
    
    const inverted = !hourBox
    setHourBox(inverted);

  };
  return (
    <div className="p-[30px]">
      <button
        className="text-[2em]  text-black font-semibold"
        onClick={OpenHourBox}
      >
        Business Hour
      </button>
      {hourBox && <div className="border my-5 p-5 border-black text-black btn-shadow rounded-[20px] h-[15rem] w-full">
        <ul>
          <li>Mon: | 12:00 AM - 5:00 AM</li>
          <li>Mon: | 12:00 AM - 5:00 AM</li>
          <li>Mon: | 12:00 AM - 5:00 AM</li>
          <li>Mon: | 12:00 AM - 5:00 AM</li>
          <li>Mon: | 12:00 AM - 5:00 AM</li>
          <li>Mon: | 12:00 AM - 5:00 AM</li>
          <li>Mon: | 12:00 AM - 5:00 AM</li>
          <li>Mon: | 12:00 AM - 5:00 AM</li>
        </ul>
      </div>}
      
    </div>
  );
};

export default BusinessHour;
