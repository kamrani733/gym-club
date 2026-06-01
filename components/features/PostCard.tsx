import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IconHeart, IconHeartFilled, IconShare } from "@tabler/icons-react";
import { Post } from "@/lib/type";

interface PostCardProps {
  post: Post;
  onLike: (id: number) => void;
}

export const PostCard = ({ post, onLike }: PostCardProps) => (
  <Card className="bg-[#141416] border-zinc-800 rounded-3xl my-4">
    <CardContent className="p-5">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-purple-900 text-purple-200">
              {post.author[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-white text-sm">{post.author}</div>
            <div className="text-zinc-500 text-xs">{post.time}</div>
          </div>
        </div>
        <Badge variant="secondary" className="text-xs">ادمین</Badge>
      </div>

      <div className="bg-[#1e1025] rounded-2xl min-h-[120px] flex items-center justify-center p-6 text-center text-white text-sm my-3">
        {post.content}
      </div>

      <p className="text-zinc-400 text-xs leading-relaxed">{post.caption}</p>

      <div className="flex items-center justify-between mt-3">
        <span className="text-zinc-500 text-xs">{post.likes} نفر پسندیدند</span>
        <div className="flex gap-3">
          <button className="text-zinc-400 hover:text-blue-400 transition-colors">
            <IconShare size={18} />
          </button>
          <button
            onClick={() => onLike(post.id)}
            className={post.isLiked ? "text-red-800" : "text-zinc-400 hover:text-red-800 transition-colors"}
          >
            {post.isLiked ? <IconHeartFilled size={18} /> : <IconHeart size={18} />}
          </button>
        </div>
      </div>
    </CardContent>
  </Card>
);