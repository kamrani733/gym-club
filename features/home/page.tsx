import { IconBell, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import InteractivePosts from "@/features/home/InteractivePosts";
import { posts, stories } from "@/mocks/data";

export default function HomePage() {
  return (
    <div className="flex flex-col h-full" dir="rtl">
      
      {/* Header — ثابت */}
      <div className="flex justify-between items-center mb-4 shrink-0">
        <h1 className="text-2xl font-bold">باشگاه ورزشی اسب آهنی</h1>
        <div className="text-[#a855f7] cursor-pointer bg-gray-900 p-2 rounded-full">
          <IconBell />
        </div>
      </div>

      {/* Stories — ثابت */}
      <div className="shrink-0 mb-4">
        <div className="text-gray-400 mb-3 text-sm">استوری</div>
        <div className="flex gap-6 overflow-x-auto pb-4">
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="text-[#a855f7] border-2 border-dashed rounded-full w-14 h-14 flex items-center justify-center bg-gray-900">
              <IconPlus size={24} />
            </div>
            <p className="text-xs">استوری من</p>
          </div>

          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center gap-2 shrink-0">
              <div className="rounded-full p-0.5 bg-gradient-to-tr from-[#a855f7] via-[#ec4899] to-[#f59e0b]">
                <div className="rounded-full w-14 h-14 bg-gray-800 overflow-hidden">
                  <Image src={story.image} alt={story.name} width={56} height={56}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <p className="text-xs text-center">{story.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <InteractivePosts initialPosts={posts} />
      </div>

    </div>
  );
}