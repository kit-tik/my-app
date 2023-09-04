"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
const UserLinks = () => {
  const { status } = useSession()

  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/authPage/userMenu">User Menu</Link> 
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>Logout</span>
        </div>
      ) : (
        <Link href="/authPage/login">Login</Link>
      )}
    </div>
  );
};

export default UserLinks;
