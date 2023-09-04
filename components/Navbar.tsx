import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-blue-500 p-4 flex items-center justify-between border-b-2 border-b-gray-300 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/hbcd">HBCD</Link>
        <Link href="/pfas">PFAS</Link>
      </div>
      {/* LOGO */}
      <div className="gap-2 flex text-xl md:font-bold flex-1 md:text-center">
      <Link href="/" className="self-center"><Image src={"/popLogo.svg"} width={100} height={100} alt="logo" className="w-16 h-auto"/></Link>
        <Link href="/" className="self-center">Pops Recording System</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden z-20">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
        </div>
        <UserLinks />
      </div>
    </div>
  );
};

export default Navbar;
