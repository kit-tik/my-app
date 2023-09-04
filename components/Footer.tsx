import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-t-gray-300 h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-blue-500 flex items-center justify-between">
      
      <div className="py-10 flex flex-col justify-between gap-1">
      <Link href="/" className="hidden md:inline-block self-center text-sm">Pop Recording System</Link>
              <Link href="/">
          <Image
            src={"/popLogo.svg"} width={50} height={24} className=""
            alt="POPs logo"
            priority
          />
        </Link>

      </div>
      <div className="text-sm md:text-base">© ALL RIGHTS RESERVED.</div>
      <Link href="/contact" className="font-bold md:text-lg">Contact</Link>
    </div>
  );
};

export default Footer;
