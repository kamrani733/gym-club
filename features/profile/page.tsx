import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/shared/ui/card";
import { SettingsIcon } from "lucide-react";
import { gymRecords, personalRecords, workouts } from "./mocks";
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
      <div className="my-6">
        <h3 className="text-lg  font-semibold "> رکورد های شخصی</h3>
        <p className="text-stone-500">رکورد های شخصی شما براساس یک ماه گذشته</p>

        <div className="mt-4 flex items-center gap-4">
          {personalRecords.map((record) => {
            return (
              <Card
                key={record.id}
                className="flex relative w-40 h-20  shrink-0 items-center justify-between  p-4 mt-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-lg text-gray-500">
                      {record.exercise}
                    </span>
                  </div>
                </div>
                {record.weight} kg
              </Card>
            );
          })}
        </div>
      </div>
      <div className="my-6">
        <h3 className="text-lg  font-semibold"> رکورد های باشگاهی</h3>
        <p className="text-stone-500">رکورد های باشگاهی براساس یک ماه گذشته</p>
        <div className="mt-4 overflow-x-auto flex gap-4">
          {gymRecords.map((record) => {
            return (
              <Card
                key={record.id}
                className="flex relative w-40 h-40  shrink-0 items-center justify-between p-4 mt-4"
              >
                <div className="flex items-center gap-4">
                  <Badge className="absolute top-0 -right-1">{record.id}</Badge>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={record.avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold">{record.holder}</span>
                    <span className="text-sm text-gray-500">
                      {record.exercise}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-semibold">
                    {record.weight} kg
                  </span>
                  <Progress
                    value={(record.weight / 200) * 100}
                    className="w-24 mt-1"
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
