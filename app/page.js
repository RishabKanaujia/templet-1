"use client";
import { SocialMediaHandle } from "./_components/socialMediaHandle";
import Title from "./_components/title";
import ProductHolder from "./_components/productHolder";
import { BsTelephone } from "react-icons/bs";
import {
  FaFacebook,
  FaWhatsapp,
  FaTelegramPlane,
  FaAmazon,
} from "react-icons/fa";
import ProductPop from "./_components/productHolder/productPopUp";
import { useState } from "react";

export default function Home() {
  const [popIndex, setPopIndex] = useState(null)
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

  const onProductClick = (index) => {
    setPopIndex(index)
  };

  const closePop = ()=>{
    setPopIndex(null)
  }
  return (
    <>
      <div className="flex max-w-[720px] flex-col  w-[90%] justify-center  mx-auto mt-[60px] ">
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
            <button className="flex justify-center items-center gap-3 my-[60px] w-[40%] font-bold p-[20px] btn-shadow shadow hover:shadow-none rounded-full hover:cursor-pointer text-black border-black bg-white">
              <BsTelephone />
              Get in touch
            </button>
          </div>
        </div>
        <SocialMediaHandle iconList={iconList} />
        <Title btnList={btnList} />
      </div>
      <div className="mx-auto my-[50px] bg-white max-w-[1000px] w-[100%] h-[2000px] rounded-[20px] ">
        <ProductHolder onProductClick={onProductClick} productList={productList} />
      {popIndex!==null && <ProductPop closePop={closePop} proData={productList[popIndex]} />}
      </div>
    </>
  );
}
