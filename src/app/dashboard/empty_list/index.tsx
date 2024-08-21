import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NotebookPen } from "lucide-react";
import Link from "next/link";

const EmptyList = () => {
  return (
    <section className="m-auto text-center">
      <NotebookPen size={90} className="mx-auto mb-10 inline-block" />
      <h2 className="text-3xl mb-3">No Blog Created</h2>
      <p className="text-lg opacity-70 mb-10">Please create your first blog</p>
      <Link
        href="/blog/create"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "border-primary text-primary hover:bg-primary hover:text-white"
        )}
      >
        + Create Blog
      </Link>
    </section>
  );
};

export default EmptyList;
