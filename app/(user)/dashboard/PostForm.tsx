"use client";

import { SuccessToast, ErrorToast } from "@/components/toasts";
import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";

export default function PostForm() {
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const { data: session } = useSession();

  const formRef = useRef<HTMLFormElement>(null);

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

        if (formRef.current) {
          formRef.current.reset();
        }
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
    <div className="my-8 p-2">
      <h2 className="font-serif text-2xl font-semibold">
        Add a new project to your profile
      </h2>
      <form
        ref={formRef}
        onSubmit={createPost}
        className="mt-2 flex flex-col items-start gap-4"
      >
        <input
          type="hidden"
          name="userId"
          id="userId"
          defaultValue={session?.user.id}
        />
        <div className="w-full">
          <label htmlFor="title" className="font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={""}
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          />
        </div>
        <div className="w-full">
          <label htmlFor="content" className="font-medium">
            Content
          </label>
          <textarea
            rows={3}
            placeholder="Describe your side project here"
            name="content"
            id="content"
            defaultValue={""}
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Add project
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
