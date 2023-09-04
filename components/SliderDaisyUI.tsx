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
    desc: "ฐานความรู้เกี่ยวกับ HBCD"
  },
  {
    id: 2,
    title: "PFAS Knowledgebase",
    image: "/slide2.png",
    href: "/kPfas",
    desc: "ฐานความรู้เกี่ยวกับ PFAS"
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
      <div className="hero min-h-[calc(100vh-10rem)] max-h-full" style={{backgroundImage: `url(${data[currentSlide].image})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{data[currentSlide].title}</h1>
            <p className="mb-5 text-gray-800">{data[currentSlide].desc}</p>
                <Link href={data[currentSlide].href}>
                <button className={`align-middle text-xl rounded-lg border-2 text-white py-4 inline-block px-8 shadow-md shadow-blue-300${currentSlide%2==0? "bg-blue-500 hover:bg-blue-600":"bg-sky-500 hover:bg-sky-600"}`}>
                    เริ่มต้นเรียนรู้ ⏩
                  </button>
                </Link>
          </div>
        </div>
    </div>
    <div className="w-max relative z-10">
        {/* Selected Control */}
        <div className="absolute -top-10 left-[calc(50vw-3rem)] text-center  bg-violet-50/30 rounded-xl">
          {data.map((item, idx) => (
            <span key={`${idx}-${item.id}`}>
              {item.href && (
                <Link href={data[idx].href}>
                  <span
                    title={data[idx].title}
                    className="mx-2 hover:scale-110"
                  >
                    {currentSlide === idx ? "🔵" : "⚪"}
                  </span>
                </Link>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
