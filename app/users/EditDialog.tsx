"use client";

import { TData } from "@/types/Types";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function EditDialog({ id, username, email }: TData) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      id: id,
      username: formData.get("username"),
      email: formData.get("email"),
    };

    const res = await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="btn btn-small">Edit profile</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-indigo-600 m-0 text-[17px] font-medium">
            Edit profile
          </Dialog.Title>
          <Dialog.Description className="text-indigo-600 mt-[10px] mb-5 text-[15px] leading-normal">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <form onSubmit={updateUser}>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="text-indigo-400 w-[90px] text-right text-[15px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-indigo-400 shadow-purple-400 focus:shadow-purple-400 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                name="email"
                defaultValue={email ?? ""}
              />
            </fieldset>
            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="text-indigo-400 w-[90px] text-right text-[15px]"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="text-indigo-400 shadow-purple-400 focus:shadow-purple-400 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                name="username"
                defaultValue={username ?? ""}
              />
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              <button type="submit" className="btn btn-success btn-large">
                Save changes
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              className="text-indigo-400 hover:bg-purple-400 focus:shadow-purple-400 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
