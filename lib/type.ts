export interface Post {
  id: number;
  author: string;
  time: string;
  content: string;
  caption: string;
  likes: number;
  isLiked: boolean;
}

export interface Story {
  id: number;
  name: string;
  image: string;
}