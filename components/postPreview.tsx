import { PostProps } from "@/types";

export default function PostPreview({ post }: { post: PostProps }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 m-4 shadow-md">
      <h2 className="text-xl font-bold">{post.name}</h2>
      <p className="text-sm text-gray-600">{post.email}</p>
    </div>
  );
}
