"use client";

import { SuccessToast, ErrorToast } from "@/components/toasts";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface PostFormProps {}

export default function PostForm({}: PostFormProps) {
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const { data: session } = useSession();

  const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      title: formData.get("title"),
      content: formData.get("content"),
      author: {
        connect: {
          id: formData.get("userId"),
        },
      },
    };

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setToast({ type: "success", message: "Post created successfully" });
      } else {
        throw new Error("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      setToast({ type: "error", message: "Post creation failed" });
    }
  };

  useEffect(() => {
    if (toast) {
      const timeoutId = setTimeout(() => {
        setToast(null);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [toast]);

  return (
    <div className="my-8 p-2 border border-gray">
      <h2 className="text-2xl font-semibold">Create a new post</h2>
      <form onSubmit={createPost} className="flex flex-col items-start gap-2">
        <input
          type="hidden"
          name="userId"
          id="userId"
          defaultValue={session?.user.id}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={""}
          className="text-black border border-black"
        />
        <label htmlFor="content">Content</label>
        <input
          type="text"
          name="content"
          id="content"
          defaultValue={""}
          className="text-black border border-black"
        />

        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
      {toast &&
        (toast.type === "success" ? (
          <SuccessToast text={toast.message} />
        ) : (
          <ErrorToast text={toast.message} />
        ))}
    </div>
  );
}
