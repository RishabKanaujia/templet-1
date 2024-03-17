import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import PopContact from "./popContact";

const TopBox = () => {
const [isPopContact, setIsPopContact] = useState(false)

  const openContact = () => {
    setIsPopContact(true)
  };

   document.body.style.overflow = isPopContact?"hidden":"auto"

  return (
    <>
      <div className="backdrop-blur-[20px] my-[50px] w-full flex justify-center rounded-t-full rounded-b-[400px]">
        <div className="flex w-[80%] flex-col items-center h-[500px] my-[-60px] z-0">
          <img
            src="https://rishi.qviq.io/_next/static/media/image11.b13b6574.jpg"
            className="h-[120px] w-[120px] rounded-full "
            alt=""
          />
          <h1 className="text-[1.4em] my-5 font-semibold">Ester Howard</h1>
          <p>Digital Product Designer</p>
          <p>Qviq</p>
          <p className="text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, to
          </p>
          <button
            className="flex justify-center items-center gap-3 my-[60px] w-[40%] font-bold p-[20px] btn-shadow shadow hover:shadow-none rounded-full hover:cursor-pointer text-black border-black bg-white"
            onClick={openContact}
          >
            <BsTelephone />
            Get in touch
          </button>
        </div>
        
      </div>{isPopContact && <PopContact  setIsPop={setIsPopContact}/>}
      
    </>
  );
};

export default TopBox;
