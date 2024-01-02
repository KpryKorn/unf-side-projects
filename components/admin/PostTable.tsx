"use client";

import type { TPost } from "@/types/Types";
import { DeleteButton } from "../buttons";
import { useState } from "react";

interface PostTableProps {
  posts: TPost[];
}

export default function PostTable({ posts }: PostTableProps) {
  const dateFr = (date: Date) => new Date(date).toLocaleDateString("fr-FR");
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (field: string) => {
    setSortField(field);
    setSortDirection(sortDirection === "desc" ? "asc" : "desc");
  };

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortField) {
      const aValue = a[sortField as keyof TPost];
      const bValue = b[sortField as keyof TPost];
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
            Post Title
          </th>
          <th scope="col" className="px-6 py-3">
            Author
          </th>
          <th scope="col" className="px-6 py-3">
            Content
          </th>
          <th
            scope="col"
            className="px-6 py-3 cursor-pointer"
            onClick={() => handleSort("published")}
          >
            Published
          </th>
          <th
            scope="col"
            className="px-6 py-3 whitespace-nowrap cursor-pointer"
            onClick={() => handleSort("createdAt")}
          >
            {`Created At ${sortDirection === "desc" ? "▼" : "▲"}`}
          </th>
          <th scope="col" className="px-6 py-3 rounded-tr">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedPosts.map((post, index) => (
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
              {post.title}
            </th>
            <td className="px-6 py-4 whitespace-nowrap">
              {post.author?.name || "Unknown Author"}
            </td>
            <td className="px-6 py-4">{post.content}</td>
            <td className="px-6 py-4">{post.published ? "Yes" : "No"}</td>
            <td className="px-6 py-4">{dateFr(post.createdAt)}</td>
            <td className="px-6 py-4">
              <DeleteButton id={post.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
