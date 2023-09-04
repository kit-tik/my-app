'use client'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function AccessDenied() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  if (error==="AccessDenied") {
    return (
      <div className="p-4 max-w-5xl m-auto min-h-fit items-center justify-center">
        <h1 className="text-red-500 font-bold text-3xl">Access Denied</h1>
        <div>
            กรุณาใช้บัญชีที่ได้รับอนุญาตให้ <Link href="/authPage/login" className="text-xl p-1 text-blue-500 hover:text-blue-600">login</Link> เพื่อเข้าใช้งานระบบ
            <div className="text-sm font-light text-gray-600 p-2">โปรดตรวจสอบให้มั่นใจว่า Google Account ของท่านอยู่ในบัญชีผู้ได้รับอนุญาต
            <br />กรณีที่ท่าน<span className="underline">ไม่</span>อยู่ในกลุ่มผู้ใช้ได้รับอนุญาตและต้องการเข้าถึงระบบ กรุณาติดต่อ Admin 
            </div>
        </div>
      </div>
    )
  } 
  else {
    <div>Login error: Something went wrong!</div>
  }
}