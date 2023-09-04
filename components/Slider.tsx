"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "HBCD Knowledgebase",
    image: "/slide1.png",
    href: "/kHbcd",
  },
  {
    id: 2,
    title: "PFAS Knowledgebase",
    image: "/slide2.png",
    href: "/kPfas",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-12rem)] lg:flex-row bg-violet-50">
      {/* TEXT CONTAINER */}
      <div className={`flex-1 flex items-center justify-center flex-col gap-8 ${currentSlide%2==0? "text-blue-500":"text-sky-500"} font-bold`}>
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <p className="mt-10 mb-4 text-lg leading-6 hover:transition-all ease-in-out duration-300 hover:translate-x-2 ">
          <Link href={data[currentSlide].href}>
          <button className={`rounded-lg border-2 text-white py-4 inline-block px-8 shadow-md shadow-blue-300 hover:font-bold hover:italic ${currentSlide%2==0? "bg-blue-500 hover:bg-blue-600":"bg-sky-500 hover:bg-sky-600"}`}>
              เริ่มต้นเรียนรู้ &gt; &gt;
            </button>
          </Link>
        </p>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full relative">
        <Image
          src={data[currentSlide].image}
          alt="a slider image"
          fill
          sizes="(max-width: 768px) 100vw,50vw" 
          className="object-cover"
          priority
        />
      </div>
    </div>
      <div className="w-max relative z-10">
        {/* Selected Control */}
        <div className="absolute -top-10 left-[calc(50vw-3rem)] text-center  bg-violet-50/30 rounded-xl">
        {data.map((item, idx) => (<span key={`${idx}-${item.id}`}>
          {item.href && <Link  href={data[idx].href} ><span title={data[idx].title} className="mx-2 hover:scale-110">{currentSlide===idx?"🔵":"⚪"}</span></Link>}
          </span>
        ))}
        </div>
      </div>

    </div>
  );
};

export default Slider;
