import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import BlogForm from "./blog_form";

const BlogCreatePage = () => {
  return (
    <>
      <section className="p-4 flex items-center">
        <Link
          href="/dashboard"
          className={cn(buttonVariants({ size: "icon", variant: "secondary" }))}
        >
          <ArrowLeft />
        </Link>
        <h1 className="text-4xl mx-auto">Create Blog</h1>
      </section>

      <BlogForm />
    </>
  );
};

export default BlogCreatePage;
