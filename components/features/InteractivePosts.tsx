"use client";

import { useState } from "react";
import { Post } from "@/lib/type";
import { PostCard } from "./PostCard";

interface InteractivePostsProps {
  initialPosts: Post[];
}

export default function InteractivePosts({ initialPosts }: InteractivePostsProps) {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  return (
    <div className="my-5">
      <div className="text-gray-400 mb-3 text-sm">پست‌های باشگاه</div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} onLike={handleLike} />
      ))}
    </div>
  );
}