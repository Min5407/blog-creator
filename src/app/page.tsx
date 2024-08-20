import { buttonVariants } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  const isLogin = await isAuthenticated();
  return (
    <section className="m-auto text-center">
      <h1 className="text-5xl mb-8">
        Welcome to <b className="text-primary">&quot;Blog Starter&quot;</b>
      </h1>
      <p className="opacity-70 mb-8">
        Write, Edit and Publish your Blog Post with our Service for Free.
      </p>

      {isLogin ? (
        <Link className={buttonVariants()} href="/dashboard">
          Go to Dashboard
        </Link>
      ) : (
        <LoginLink className={buttonVariants()}>Get Started</LoginLink>
      )}
    </section>
  );
}
