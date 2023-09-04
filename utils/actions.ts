import { prisma } from "./connect";
export const getWhitelistUser = async (email: string) => {
  console.log("get whitelist user", email);
    try {
        const user = await prisma.whitelistUser.findUnique({
          where: {
            email: email,
          },
        });
    
        return user
      } catch (err) {
        console.log(err);
        return null;
      }
  };
  