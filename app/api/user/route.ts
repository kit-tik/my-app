import { User } from "@prisma/client";
import { prisma } from "@/utils/connect";
import { NextResponse, NextRequest } from "next/server";
// import { revalidatePath } from 'next/cache'

// FETCH ALL Users
export const GET = async () => {
  try {
    const users = await prisma.user.findMany({
      orderBy: [
        {
          name: 'asc'
        }],
    });
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// export const POST = async (req: NextRequest) => {    
//   try {
//     const body = await req.json();
//     const res = await prisma.user.createMany({ 
//       data: body,
//     });
//     // revalidatePath('/user')
//     return new NextResponse(JSON.stringify(res), { status: 201 });
// } catch (err) {
//   console.log("Error insert many users ", err);
//   return new NextResponse(
//     JSON.stringify({ message: "Something went wrong!" }),
//     { status: 500 }
//   );
// }
// }
