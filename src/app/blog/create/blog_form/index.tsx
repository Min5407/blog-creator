"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogSchema, BlogSchemaType } from "@/actions/blog/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { handleFormAction } from "./action";
import { Loader, LoaderCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const BlogForm = () => {
  const form = useForm<BlogSchemaType>({
    resolver: zodResolver(BlogSchema),

    defaultValues: {
      content: "",
      description: "",
      slug: "",
      title: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  return (
    <section className="my-10 p-6 mx-auto min-w-[1200px] flex-1">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormAction)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Write Your Title" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>Slug </FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Write Your Slug for your blog"
                      {...field}
                    />
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      className="border-primary/70 text-primary/70 hover:bg-primary/70"
                    >
                      auto generate
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>Description </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write Your Description for your blog"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>Content </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading}>
            {isLoading ? (
              <LoaderCircle size={20} className="animate-spin" />
            ) : (
              "submit"
            )}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default BlogForm;
