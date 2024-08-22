"use server";

import { createBlogAction } from "@/actions/blog";
import { BlogSchemaType } from "@/actions/blog/schema";
import { redirect } from "next/navigation";

export const handleFormAction = async (data: BlogSchemaType) => {
  const { error } = await createBlogAction(data);

  if (error) {
    return;
  }

  redirect("/dashboard");
};
