import type { Adapter, AdapterUser } from "next-auth/adapters";
import { getServerSession } from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User } from "next-auth";
import { prisma } from "./connect";
import { getWhitelistUser } from "./actions";

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: Boolean;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: Boolean;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_ID as string,
      // clientSecret: process.env.GOOGLE_SECRET as string,
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    async jwt({ token }) {
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email!,
        },
      });
      token.isAdmin = userInDb?.isAdmin!;
      return token;
    },

    /*** to enable whitelist checking for user before passing to OAuth provider */
      async signIn({ user }: {
        user: AdapterUser | User
      }) {
        try {
          const whitelistUsr = await getWhitelistUser(user?.email as string)
          const isAllowedToSignIn = whitelistUsr !== null;
          if (isAllowedToSignIn) {
            return true
          } else {
            // Return false to display a default error message
            console.log("Not allow email!!!!");
            return false
            // Or you can return a URL to redirect to:
            // return '/unauthorized'
          }
        } catch (error: any) {
          console.log("Error something went wrong");
          return false;
        }
      },
  },
  pages: {
    signOut: '/authPage/signout',
    error: '/authPage/error', // Error code passed in query string as ?error=
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getAuthSession = () => getServerSession(authOptions);