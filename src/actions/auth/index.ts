"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const getMyInfo = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id) redirect("/api/auth/login");

  return user;
};
