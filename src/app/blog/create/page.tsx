import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const BlogCreatePage = () => {
  return (
    <Card className="m-auto min-w-96">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="grid gap-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="grid gap-4">
              <Label htmlFor="framework">Framework</Label>
              <Textarea />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BlogCreatePage;
