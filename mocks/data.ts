import { Post, Story } from "@/types";

export const stories: Story[] = [
  { id: 1, name: "تینا", image: "/images/temp.jpeg" },
  { id: 2, name: "فرهاد", image: "/images/01.jpeg" },
  { id: 3, name: "فردی", image: "/images/02.jpeg" },
  { id: 4, name: "همایون", image: "/images/03.jpeg" },
];

export const posts: Post[] = [
  {
    id: 1,
    author: "مدیر باشگاه",
    time: "۲ ساعت پیش",
    content: "باشگاه تا اطلاع ثانوی تعطیل می‌باشد",
    caption:
      "دوستانی که شهریه پرداخت کرده‌اند می‌توانند با مراجعه به تمام شعب ما مبلغ مورد نظر خود را دریافت کنند",
    likes: 12,
    isLiked: false,
  },
  {
    id: 2,
    author: "مدیر باشگاه",
    time: "۵ ساعت پیش",
    content: "کلاس یوگا فردا برقرار است",
    caption: "لطفاً با لباس مناسب تشریف بیاورید",
    likes: 8,
    isLiked: false,
  },
];
