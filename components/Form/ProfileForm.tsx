"use client";

interface ProfileFormProps {}

export default function ProfileForm({}: ProfileFormProps) {
  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      username: formData.get("username"),
      email: formData.get("email"),
    };

    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <div className="mb-8">
      <h2>Create a new user</h2>
      <form onSubmit={createUser} className="flex flex-col items-start gap-2">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          defaultValue={""}
          className="text-black"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          defaultValue={""}
          className="text-black"
        />

        <button type="submit" className="p-4 bg-green-600">
          Save
        </button>
      </form>
    </div>
  );
}
