"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
const UserLinks = () => {
  const { data: session, status } = useSession();
  let usrImg = session?.user?.image;
  if (!usrImg) usrImg = "/userAvatar.png";

  return (
    <div>
      {status === "authenticated" ? (
        <div className="dropdown  dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-circle btn-ghost">
            <Image
              src={usrImg}
              width={40}
              height={40}
              className="rounded-full"
              alt="user image"
            />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <Link href="/authPage/userMenu">Users</Link>
              </a>
            </li>
            <li>
              <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
                Logout
              </span>
            </li>
          </ul>
        </div>
      ) : (
        <Link href="/authPage/login">Login</Link>
      )}
    </div>
  );
};

export default UserLinks;
