import prisma from "@/lib/prisma/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user?.id) {
    throw new Error("User not found");
  }

  const dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser?.id) {
    await prisma.user.create({
      data: {
        firstName: String(user.given_name),
        lastName: String(user.family_name),
        email: String(user.email),
        profileImage:
          user.picture || `https://avatar.vercel.sh/${user.given_name}`,
        id: user.id,
      },
    });
  }

  return NextResponse.redirect(
    `${process.env.BASE_URL}/dashboard` || "http://localhost:3000/dashboard"
  );
}
