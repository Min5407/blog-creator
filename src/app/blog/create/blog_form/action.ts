"use server";

import { createBlogAction } from "@/actions/blog";
import { BlogSchemaType } from "@/actions/blog/schema";
import { redirect } from "next/navigation";

export const handleFormAction = async (data: BlogSchemaType) => {
  console.log("##", data);
  const { error } = await createBlogAction(data);
  console.log("##error", error);

  if (error) {
    return;
  }

  redirect("/dashboard");
};
