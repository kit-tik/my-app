"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from 'react-toastify';

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();
  console.log("login page: ", status)

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    toast.success('Welcome!'); //, { position: toast.POSITION.TOP_RIGHT });
    router.push("/")
  }

  return (
    <div className="p-2 min-h-fit flex items-center justify-center">
      {/* BOX */}
      <div className="shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[75%] xl:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative md:w-1/2">
          <Image src="/building.jpg" alt="" fill className="object-cover" sizes="50vw"  priority/>
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">ยินดีต้อนรับ กรุณา login</h1>
          <button
            className="flex gap-3 p-4 ring-1 ring-orange-300 rounded-md"
            onClick={() => signIn("google")}
          >
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google<span className="text-red-500">*</span></span>
          </button>
          <p className="text-sm">
            สอบถามหรือแจ้งปัญหา
            <Link className="underline" href="/contact">
              {" "}
              Contact us
            </Link>
          </p>
          <div className="text-xs font-light my-4 text-gray-500">
          <span className="text-red-500">*</span>Google Account ในบัญชีผู้ได้รับอนุญาตเท่านั้นจึงจะเข้าระบบได้
            <br />กรณีที่ท่าน<span className="underline">ไม่</span>อยู่ในกลุ่มผู้ใช้ได้รับอนุญาตและต้องการเข้าถึงระบบ กรุณาติดต่อ Admin 
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
