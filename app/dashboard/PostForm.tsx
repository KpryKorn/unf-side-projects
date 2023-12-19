"use client";

interface PostFormProps {}

export default function PostForm({}: PostFormProps) {
  const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      title: formData.get("title"),
      content: formData.get("content"),
    };

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <div className="my-8 p-2 border border-gray">
      <h2 className="text-2xl font-semibold">Create a new post</h2>
      <form onSubmit={createPost} className="flex flex-col items-start gap-2">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={""}
          className="text-black border border-black"
        />
        <label htmlFor="content">Content</label>
        <input
          type="text"
          name="content"
          defaultValue={""}
          className="text-black border border-black"
        />

        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
}
