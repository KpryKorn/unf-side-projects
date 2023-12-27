import type { TPost } from "@/types/Types";

interface PostTableProps {
  posts: TPost[];
}

export default async function PostTable({ posts }: PostTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Post Title</th>
          <th>Post Author</th>
          <th>Content</th>
          <th>Published</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={index}>
            <td>{post.title}</td>
            <td>{post.author?.name || "Unknown Author"}</td>
            <td>{post.content}</td>
            <td>{post.published ? "Yes" : "No"}</td>
            <td>{post.createdAt.toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
