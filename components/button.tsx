"use client";

import { createUser } from "@/lib/actions";

export default function Button() {
  return (
    <button
      onClick={() => {
        createUser({
          username: "sacha",
          email: "sacha@gmail.com",
        });
      }}
    >
      Add
    </button>
  );
}
