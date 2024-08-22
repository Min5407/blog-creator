"use server";

import prisma from "@/lib/prisma/db";
import { ParamsType } from "@/utils/types";
import { getMyInfo } from "../auth";

type PrismaBlogFindManyType = ParamsType<typeof prisma.blog.findMany>[0];
export const getBlogsAction = async (options?: PrismaBlogFindManyType) => {
  const blogs = prisma.blog.findMany({
    ...options,
  });

  return blogs;
};

export const getMyBlogsAction = async (options?: PrismaBlogFindManyType) => {
  const user = await getMyInfo();
  const blogs = prisma.blog.findMany({
    ...options,
    where: {
      ...options?.where,
      id: user.id,
    },
  });

  return blogs;
};

type PrismaBlogFindUniqueType = ParamsType<typeof prisma.blog.findUnique>[0];
export const getBlogByIdAction = async (
  id: string,
  options?: PrismaBlogFindUniqueType
) => {
  const blogs = prisma.blog.findUnique({
    ...options,
    where: {
      ...options?.where,
      id,
    },
  });

  return blogs;
};
