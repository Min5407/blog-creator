import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const isLoginIn = await isAuthenticated();
  const user = await getUser();
  return (
    <div>
      <h1>Hello blog</h1>
      {JSON.stringify(user)}
      <Button asChild>
        <LoginLink>Sign in</LoginLink>
      </Button>
      <Button asChild variant="destructive">
        <RegisterLink>Sign up</RegisterLink>
      </Button>
    </div>
  );
}
