"use client";

import {
  Form,
  FormControl,
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
import { LoaderCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";
import { generateSlug } from "@/utils/generate";

const Editor = dynamic(() => import("../../../../components/block_editor"), {
  ssr: false,
});

const BlogForm = () => {
  const form = useForm<BlogSchemaType>({
    resolver: zodResolver(BlogSchema),

    defaultValues: {
      content: "",
      description: "",
      slug: "",
      title: "",
      image: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleFormSubmit = async (data: BlogSchemaType) => {
    await handleFormAction(data);
  };

  return (
    <section className="my-10 p-6 mx-auto min-w-[1200px] flex-1">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
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
                      onClick={() =>
                        field.onChange(generateSlug(form.getValues("title")))
                      }
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
                  <Editor
                    value={field.value ? JSON.parse(field.value) : undefined}
                    onBlockChange={(value) =>
                      field.onChange(JSON.stringify(value))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading} className="ml-auto block">
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
