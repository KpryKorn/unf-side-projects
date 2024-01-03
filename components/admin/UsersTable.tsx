"use client";

import type { TUser } from "@/types/Types";
import { useState } from "react";
import defaultPfp from "@/assets/default-profile-picture.jpeg";
import Image from "next/image";
import { DeleteModal } from "../modals";

interface UsersTableProps {
  users: TUser[];
}

export default function UsersTable({ users }: UsersTableProps) {
  const dateFr = (date: Date) => new Date(date).toLocaleDateString("fr-FR");
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (field: string) => {
    setSortField(field);
    setSortDirection(sortDirection === "desc" ? "asc" : "desc");
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortField) {
      const aValue = a[sortField as keyof TUser];
      const bValue = b[sortField as keyof TUser];
      return sortDirection === "desc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    }
    return 0;
  });

  return (
    <table className="w-full min-w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4 rounded-tl">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </div>
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Image
          </th>
          <th
            scope="col"
            className="px-6 py-3 cursor-pointer"
            onClick={() => handleSort("role")}
          >
            {`Role ${sortDirection === "desc" ? "▼" : "▲"}`}
          </th>
          <th scope="col" className="px-6 py-3 whitespace-nowrap">
            Biography
          </th>
          <th scope="col" className="px-6 py-3">
            Posts
          </th>
          <th scope="col" className="px-6 py-3 rounded-tr">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user, index) => (
          <tr
            key={index}
            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {user.name}
            </th>
            <td className="px-6 py-4">
              <Image
                src={user.image ?? defaultPfp}
                alt={`${user.name}'s profile picture`}
                width={40}
                height={40}
                className="rounded-full"
              />
            </td>
            <td className="px-6 py-4">{user.role}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {user.bio || "Incomplete"}
            </td>
            <td className="px-6 py-4">{user.posts.length}</td>
            <td className="px-6 py-4">
              <DeleteModal id={user.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
