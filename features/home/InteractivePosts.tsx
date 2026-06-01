"use client";

import { useState } from "react";
import { IconHeart, IconShare, IconHeartFilled, IconBell } from "@tabler/icons-react";

interface Post {
  id: number;
  author: string;
  role: string;
  time: string;
  content: string;
  caption: string;
  likes: number;
  isLiked: boolean;
}

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
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={handleLike} />
      ))}
    </div>
  );
}

const PostCard = ({ post, onLike }: { post: Post; onLike: (id: number) => void }) => (
  <div className="h-auto w-full bg-[#141416] rounded-3xl my-5 p-5 transition-transform hover:scale-[1.01] duration-200">
    {/* Post content similar to before */}
    <div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="font-semibold text-white">{post.author}</div>
          <div className="text-gray-400 text-xs flex items-center gap-2">
            <span>{post.role}</span>
            <span>•</span>
            <span>{post.time}</span>
          </div>
        </div>
        <div className="text-gray-400 cursor-pointer hover:text-[#a855f7]">
          <IconBell size={18} />
        </div>
      </div>
      <div className="flex items-center justify-center my-4 bg-[#1e1025] rounded-2xl min-h-[150px] p-8 text-center text-white">
        {post.content}
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-gray-400 text-xs leading-relaxed">{post.caption}</div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-gray-400 text-xs">
            <span>{post.likes}</span>
            <span>نفر این پست را پسندیده‌اند</span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button className="text-gray-400 hover:text-blue-400 transition-colors">
              <IconShare size={20} />
            </button>
            <button 
              onClick={() => onLike(post.id)}
              className={`transition-colors ${post.isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
            >
              {post.isLiked ? <IconHeartFilled size={20} /> : <IconHeart size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);