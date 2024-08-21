import { buttonVariants } from "@/components/ui/button";
import EmptyList from "./empty_list";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DashboardPage = () => {
  return (
    <>
      <Link
        href="/blog/create"
        className={cn(buttonVariants(), "w-40 ml-auto")}
      >
        + Create Blog
      </Link>

      <EmptyList />
    </>
  );
};

export default DashboardPage;
