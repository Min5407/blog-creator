import Link from "next/link";
import { Gaegu } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "../ui/button";
import { ThemeBtn } from "./theme_btn";
import { ProfileBtn } from "./profile_btn";

const font = Gaegu({ weight: "700" });

const NavBar = async () => {
  const { isAuthenticated } = getKindeServerSession();

  const isLoginIn = await isAuthenticated();

  return (
    <header className="p-4 flex justify-between">
      <Link href="/dashboard" className={cn(font.className, "text-4xl")}>
        Blog starter
      </Link>

      <nav>
        <ul className="flex gap-4">
          <li>
            <ThemeBtn />
          </li>
          {!isLoginIn ? (
            <>
              <li>
                <RegisterLink className={buttonVariants({ variant: "ghost" })}>
                  Sign up
                </RegisterLink>
              </li>
              <li>
                <LoginLink className={buttonVariants()}>Sign in</LoginLink>
              </li>
            </>
          ) : (
            <ProfileBtn />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
