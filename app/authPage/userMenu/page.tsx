import { getAuthSession } from "@/utils/auth";
import Link from "next/link";
import ProfilePage from "@/components/ProfilePage";
import Table from "@/components/table";
import { User } from "@prisma/client";

// later---> usermenu update may use: https://next-auth.js.org/getting-started/client

export const revalidate = 0;
const getUsers = async () => {
  const serverUrl = `${process.env.NEXT_PUBLIC_API_URL}/user`;
  const res = await fetch(serverUrl,
    { next: { revalidate: 0 } }
  //  {
  //   cache: "no-store",
  // }
  );

  if (!res.ok) {
    return undefined;
      // throw new Error("Failed!");
  }

  return res.json();
};

const Page  = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    return ( 
      <div className="p-4 max-w-5xl m-auto h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] items-center justify-center">
          กรุณา <Link href="/authPage/login" className="text-xl px-1 text-blue-500 hover:text-blue-600">login</Link> เพื่อเข้าใช้งานระบบ
      </div>)
  }
  else {
    const users:User[] = await getUsers()
    return (<>
      <ProfilePage user={session.user} />
      {session.user.isAdmin && <Table users={users} />}
      </>
    )
  }
}
export default Page;