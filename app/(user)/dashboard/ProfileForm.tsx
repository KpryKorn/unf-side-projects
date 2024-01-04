"use client";

import { TUser } from "@/types/Types";

interface ProfileFormProps {
  user: TUser;
}

export default function ProfileForm({ user }: ProfileFormProps) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      id: user.id,
      age: Number(formData.get("age")),
      bio: formData.get("bio"),
    };

    const res = await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <div className="my-8">
      <form onSubmit={updateUser} className="flex flex-col items-start gap-2">
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          defaultValue={user.age ?? ""}
          className="text-black border border-black"
        />
        <label htmlFor="bio">Biography</label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user.bio ?? ""}
          className="text-black border border-black"
        ></textarea>

        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
}
