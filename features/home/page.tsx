import { IconBell, IconHeart, IconPlus, IconShare } from "@tabler/icons-react";
import Image from "next/image";
import { stories } from "./constant";

export default function HomePage() {

  return (
    <div className="rtl" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-[#a855f7] cursor-pointer bg-gray-900 p-2 rounded-full">
          <IconBell />
        </div>
        <h1 className="text-2xl font-bold">باشگاه ورزشی اسب آهنی</h1>
      </div>

      <div>
        <div className="text-gray-400 mb-3">استوری</div>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {/* My Story */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <div className="text-[#a855f7] border-2 border-dashed rounded-full w-14 h-14 flex items-center justify-center bg-gray-900">
              <IconPlus size={24} />
            </div>
            <p className="text-xs">استوری من</p>
          </div>

          {/* Other Stories */}
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col items-center gap-2 shrink-0"
            >
              <div className="relative rounded-full p-0.5 bg-linear-to-tr from-[#a855f7] via-[#ec4899] to-[#f59e0b]">
                <div className="rounded-full w-14 h-14 bg-gray-800 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <p className="text-xs text-center">{story.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-5 overflow-y-scroll h-[80vh] mb-4">
        <div className="text-gray-400 mb-3">پست های باشگاه</div>
        <div className="h-80 w-full bg-[#141416] rounded-3xl my-5 p-5">
          <div>
            <div>مدیر باشگاه</div>
            <div className="text-gray-400 mb-3"> ادمین ۲ ساعت پیش </div>
            {/* post */}
            <div className="flex items-center justify-center my-auto bg-[#1e1025] p-20">
              باشگاه تا اطلاع ثانوی تعطیل میباشد
            </div>
            {/* caption */}
            <div className="flex  items-center  justify-between ">
              <div className="text-gray-400 text-xs mt-5">
                دوستانی که شهریه پرداخت کرده اند میتوانند با مراجعه به تمام شعب
                ما مبلغ مورد نظر خود را دریافت کنند
              </div>
              <div className="flex justify-center items-center gap-4 cursor-pointer">
                <IconShare />
                <IconHeart />
              </div>
            </div>
          </div>
        </div>
        <div className="h-80 w-full bg-[#141416] rounded-3xl my-5 p-5">
          <div>
            <div>مدیر باشگاه</div>
            <div className="text-gray-400 mb-3"> ادمین ۲ ساعت پیش </div>
            {/* post */}
            <div className="flex items-center justify-center my-auto bg-[#1e1025] p-20">
              باشگاه تا اطلاع ثانوی تعطیل میباشد
            </div>
            {/* caption */}
            <div className="flex  items-center  justify-between ">
              <div className="text-gray-400 text-xs mt-5">
                دوستانی که شهریه پرداخت کرده اند میتوانند با مراجعه به تمام شعب
                ما مبلغ مورد نظر خود را دریافت کنند
              </div>
              <div className="flex justify-center items-center gap-4 cursor-pointer">
                <IconShare />
                <IconHeart />
              </div>
            </div>
          </div>
        </div>
        <div className="h-80 w-full bg-[#141416] rounded-3xl my-5 p-5">
          <div>
            <div>مدیر باشگاه</div>
            <div className="text-gray-400 mb-3"> ادمین ۲ ساعت پیش </div>
            {/* post */}
            <div className="flex items-center justify-center my-auto bg-[#1e1025] p-20">
              باشگاه تا اطلاع ثانوی تعطیل میباشد
            </div>
            {/* caption */}
            <div className="flex  items-center  justify-between ">
              <div className="text-gray-400 text-xs mt-5">
                دوستانی که شهریه پرداخت کرده اند میتوانند با مراجعه به تمام شعب
                ما مبلغ مورد نظر خود را دریافت کنند
              </div>
              <div className="flex justify-center items-center gap-4 cursor-pointer">
                <IconShare />
                <IconHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
