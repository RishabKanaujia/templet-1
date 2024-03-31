"use client";
import { SocialMediaHandle } from "../socialMediaHandle";
import Title from "../title";
import ProductHolder from "../productHolder";
import axios from 'axios'

import {
  FaFacebook,
  FaWhatsapp,
  FaTelegramPlane,
  FaAmazon,
} from "react-icons/fa";
import ProductPop from "../productHolder/productPopUp";
import { useEffect, useState } from "react";
import ServiceHolder from "../servcieHolder";
import BusinessHour from "../businessHours";
import Gallery from "../galleryHolder";
import Video from "../videoHolder";
import TopBox from "../topBox";
import Resource from "../resources";
import Review from "../reviews";
import Footer from "../footer";

export default function Home({productList, serviceList}) {
  const [popIndex, setPopIndex] = useState(null);
  const [isService, setIsService] = useState(false);
  const [showProduct, setShowProduct] = useState(false)
  const [showService, setShowService] = useState(false)
  const [isGallery, setIsGallery] = useState(false);
  // const [isToggled, setIsToggled] = useState(false);
  const iconList = [
    FaFacebook,
    FaWhatsapp,
    FaTelegramPlane,
    FaAmazon,
    FaFacebook,
    FaWhatsapp,
    FaTelegramPlane,
    FaAmazon,
    FaTelegramPlane,
    FaAmazon,
    FaWhatsapp,
    FaTelegramPlane,
    FaAmazon,
    FaFacebook,
    FaWhatsapp,
    FaTelegramPlane,
    FaAmazon,
    FaTelegramPlane,
    FaAmazon,
  ];
  const btnList = [
    { title: "title", src: "https://source.unsplash.com/720x720/?face" },
    { title: "title", src: "https://source.unsplash.com/720x720/?face" },
    { title: "title", src: "https://source.unsplash.com/720x720/?face" },
    { title: "title", src: "https://source.unsplash.com/720x720/?face" },
  ];

  const ReviewList = [
    {
      head: "JS Jasper Sloan",
      para: "Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re. Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re",
    },
    {
      head: "JS Jasper Sloan",
      para: "Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re. Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re",
    },
    {
      head: "JS Jasper Sloan",
      para: "Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re. Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re",
    },
    {
      head: "JS Jasper Sloan",
      para: "Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re. Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re",
    },
    {
      head: "JS Jasper Sloan",
      para: "Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re. Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re",
    },
    {
      head: "JS Jasper Sloan",
      para: "Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re. Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re",
    },
  ];

  const onProductClick = (index) => {
    setPopIndex(index);
  };

  const closePop = () => {
    setPopIndex(null);
  };

  const updatePageOptions = async ()=>{
    try {
      const res = await axios.get('/api/database')
      setShowProduct(res.data.productToggle)
      setShowService(res.data.serviceToggle)
    } catch (error) {
      console.log(error)
    }
   
  }

  useEffect(()=>{
    updatePageOptions()
  })

  // document.body.class = "scrollbar-hide";
  return (
    <>
      <div className="flex max-w-[720px] flex-col  w-[90%] justify-center  mx-auto mt-[50px] ">
        <TopBox />
      </div>

      <div className="flex max-w-[720px] flex-col  w-[90%] justify-center  mx-auto  ">
        <SocialMediaHandle iconList={iconList} />
      </div>

      <div className="flex max-w-[720px] flex-col  w-[90%] justify-center  mx-auto ">
       
        <Title btnList={btnList} />
      </div>

     {showProduct && productList.length !==0 || showService? <div className="mx-auto bg-white max-w-[1000px] w-[100%] h-fit rounded-[20px] ">
        
        <div className="flex justify-start p-[30px] gap-3">
          {showProduct && <button
            className={
              !isService ? "text-[2em] text-black font-semibold" : `text-black`
            }
            onClick={() => {
              setIsService(false);
            }}
          >
            Products
          </button>}
          {showService && <button
            className={
              isService || !showProduct ? "text-[2em] text-black font-semibold" : `text-black`
            }
            onClick={() => {
              setIsService(true);
            }}
          >
            Services
          </button>}
        </div>
        {!isService && showProduct ? (
          <ProductHolder
            onProductClick={onProductClick}
            productList={productList}
          />
        ) : showService && (
          <ServiceHolder serviceList={serviceList} />
        )}

        {/* {!isToggled? />:null} */}
        {popIndex !== null && <ProductPop proData={productList[popIndex]} closePop={closePop}/>}
        {/* <ToggleButton handleToggle={handleToggle} isToggled={isToggled}/> */}
      </div>:null}

      <div className="mx-auto my-[50px] bg-white max-w-[1000px] w-[100%] h-fit rounded-[20px] ">
        <BusinessHour />
      </div>

      <div className="mx-auto my-[50px] bg-white max-w-[1000px] w-[100%] h-fit rounded-[20px] ">
        <div className="flex justify-start p-[30px] gap-3">
          <button
            className={
              isGallery ? "text-black" : `text-[2em] text-black font-semibold`
            }
            onClick={() => {
              setIsGallery(false);
            }}
          >
            Gallery
          </button>
          <button
            className={
              !isGallery ? "text-black" : `text-[2em] text-black font-semibold`
            }
            onClick={() => {
              setIsGallery(true);
            }}
          >
            Video
          </button>
        </div>
        {isGallery ? <Video /> : <Gallery />}
      </div>

      <div className="mx-auto my-[50px] bg-white max-w-[1000px] w-[100%] h-fit rounded-[20px] ">
        {" "}
        <Resource />
      </div>

      <div className="mx-auto my-[50px] bg-white max-w-[1000px] w-[100%] h-fit rounded-[20px] ">
        <div className="flex justify-start p-[30px] gap-3">
          <button className={"text-[2em] text-black font-semibold"}>
            Reviews
          </button>
        </div>
        <Review ReviewList={ReviewList} />
        <div className="flex justify-center">
          <button className="justify-center my-5 rounded-full btn-shadow hover:shadow-none text-center border text-black h-[3rem] w-[15rem] border-black">
            write a review
          </button>
        </div>
      </div>

      <div className="mx-auto my-[50px] bg-white max-w-[1000px] w-[100%] h-[10rem] rounded-[20px] ">
        <Footer />
      </div>
    </>
  );
}
