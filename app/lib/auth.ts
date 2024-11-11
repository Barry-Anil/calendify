import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import prisma from "./db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [GitHub, google],
});