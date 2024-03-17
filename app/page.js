"use client";
import { SocialMediaHandle } from "./_components/socialMediaHandle";
import Title from "./_components/title";
import ProductHolder from "./_components/productHolder";

import {
  FaFacebook,
  FaWhatsapp,
  FaTelegramPlane,
  FaAmazon,
} from "react-icons/fa";
import ProductPop from "./_components/productHolder/productPopUp";
import { useState } from "react";
import ServiceHolder from "./_components/servcieHolder";
import BusinessHour from "./_components/businessHours";
import Gallery from "./_components/galleryHolder";
import Video from "./_components/videoHolder";
import TopBox from "./_components/topBox";


export default function Home() {
  const [popIndex, setPopIndex] = useState(null);
  const [isService, setIsService] = useState(false);
  const [isGallery, setIsGallery] = useState(false);

  
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
  const productList = [
    {
      src: "https://rishi.qviq.io/_next/static/media/image1.c8c31ee3.jpg",
      title: "Product name goes here. It can be a two line text",
      price: "₹ 299",
    },
    {
      src: "https://rishi.qviq.io/_next/static/media/image1.c8c31ee3.jpg",
      title: "Product name goes here. It can be a two line text",
      price: "₹ 299",
    },
    {
      src: "https://rishi.qviq.io/_next/static/media/image1.c8c31ee3.jpg",
      title: "Product name goes here. It can be a two line text",
      price: "₹ 299",
    },
    {
      src: "https://rishi.qviq.io/_next/static/media/image1.c8c31ee3.jpg",
      title: "Product name goes here. It can be a two line text",
      price: "₹ 299",
    },
  ];
  const serviceList = [
    {
      src: "https://rishi.qviq.io/_next/static/media/image1.c8c31ee3.jpg",
      head: "Service-1",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
    },
    {
      src: "https://rishi.qviq.io/_next/static/media/image1.c8c31ee3.jpg",
      head: "Service-1",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
    },
    {
      src: "https://rishi.qviq.io/_next/static/media/image1.c8c31ee3.jpg",
      head: "Service-1",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
    },
    {
      src: "https://rishi.qviq.io/_next/static/media/image1.c8c31ee3.jpg",
      head: "Service-1",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
    },
    {
      src: "https://rishi.qviq.io/_next/static/media/image1.c8c31ee3.jpg",
      head: "Service-1",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
    },
    {
      src: "https://rishi.qviq.io/_next/static/media/image1.c8c31ee3.jpg",
      head: "Service-1",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
    },
    {
      src: "https://rishi.qviq.io/_next/static/media/image1.c8c31ee3.jpg",
      head: "Service-1",
      para: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to",
    },
  ];

  const onProductClick = (index) => {
    setPopIndex(index);
  };

  const closePop = () => {
    setPopIndex(null);
  };

  document.body.class = "scrollbar-hide"
  return (
    <>
      <div className="flex max-w-[720px] flex-col  w-[90%] justify-center  mx-auto mt-[60px] ">
        <TopBox/>
        
        <SocialMediaHandle iconList={iconList} />
        <Title btnList={btnList} />
      </div>
      <div className="mx-auto my-[50px] bg-white max-w-[1000px] w-[100%] h-[2000px] rounded-[20px] ">
        <div className="flex justify-start p-[30px] gap-3">
          <button
            className={
              isService ? "text-black" : `text-[2em] text-black font-semibold`
            }
            onClick={() => {
              setIsService(false);
            }}
          >
            Prodcts
          </button>
          <button
            className={
              !isService ? "text-black" : `text-[2em] text-black font-semibold`
            }
            onClick={() => {
              setIsService(true);
            }}
          >
            Services
          </button>
        </div>
        {isService ? (
          <ServiceHolder serviceList={serviceList} />
        ) : (
          <ProductHolder
            onProductClick={onProductClick}
            productList={productList}
          />
        )}
        {popIndex !== null && (
          <ProductPop closePop={closePop} proData={productList[popIndex]} />
        )}

        <BusinessHour />

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
        {isGallery ? <Video />:<Gallery />}
      </div>
    </>
  );
}
