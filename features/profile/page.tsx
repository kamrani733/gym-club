import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/shared/ui/card";
import { SettingsIcon } from "lucide-react";
import { workouts } from "./mocks";
export default function profilePage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">پروفایل من</h2>
        <div>
          <SettingsIcon />
        </div>
      </div>
      {/* info and avatar */}
      <div className="mt-4 flex items-center gap-4 justify-between">
        <div>
          <div className="flex  items-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold"> تینا کامرانی</span>
              <span className="text-sm text-gray-500"> عضو باشگاه آهن</span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-19">
            <div className="flex items-center flex-col text-white">
              <span className="text-3xl">۴۳</span>
              <span>تمرین</span>
            </div>
            <div className="flex items-center flex-col text-white">
              <span className="text-3xl">۲ ماه</span>
              <span> عضویت</span>
            </div>
            <div className="flex items-center flex-col text-white">
              <span className="text-3xl">۸۵</span>
              <span>وزن فعلی</span>
            </div>
          </div>
          {/* stats */}
          <div className="mt-4 flex items-center gap-4">
            <div className="flex gap-3 items-center">
              <Badge>سطح عضویت: نقره ای</Badge>
              <Badge variant="success">سطح تمرین: متوسط</Badge>
              <Badge variant="secondary">رکورد شکن</Badge>
            </div>
          </div>
        </div>
        <Avatar className="h-30 w-30">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold"> تمرین های روز</h3>
        درصد پیشرفت شما در تمرین های روزانه
        <Progress value={33} />
        <div className="mt-2 text-sm text-gray-500">
          شما ۳۳ درصد از تمرین های روزانه خود را انجام داده اید
        </div>
        <div className="relative">
          <div className="absolute right-0 top-0 h-full w-12 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex w-full overflow-x-auto gap-4 mt-8">
            {workouts.map((workout) => (
              <Card
                key={workout.id}
                className="w-40 cursor-pointer shrink-0 h-40 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${workout.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative flex items-end h-full p-3">
                  <span className="text-lg font-semibold text-white">
                    {workout.title}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg  font-semibold my-6"> رکورد های شخصی</h3>
        <div className="mt-4 flex items-center gap-4">
          <Card className="flex w-full flex-col items-center">
            <span className="text-3xl font-semibold">۱۲۰</span>
            <span>kg</span>
            <span>سینه</span>
          </Card>
          <Card className="flex w-full flex-col items-center">
            <span className="text-3xl font-semibold">۱۵۰</span>
            <span>kg</span>
            <span>پشت</span>
          </Card>
          <Card className="flex w-full flex-col items-center">
            <span className="text-3xl font-semibold">۱۰۰</span>
            <span>kg</span>
            <span>پا</span>
          </Card>
        </div>
      </div>
    </>
  );
}
