"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "HBCD", url: "/hbcd" },
  { id: 3, title: "PFAS", url: "/pfas" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  return (
    <div>
      
      {/* SHORTCUT */}
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-blue-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          {/* SHORTCUT */}
          <>
            {status === "authenticated" ? (
              <div className="flex flex-col gap-8 items-center justify-center">
                <Link href="/authPage/userMenu" onClick={() => setOpen(false)}>User Menu</Link>
                <span className="ml-4 cursor-pointer" onClick={() => {signOut(); setOpen(false);}}>Logout</span>
              </div>
            ) : (
              <div>
              <Link href="/login" onClick={() => setOpen(false)} >Login</Link>
              </div>
            )}
          </>
        </div>
      )}
      </div>
  );
};

export default Menu;
