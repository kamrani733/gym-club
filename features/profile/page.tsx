import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/shared/ui/card";
import { Settings } from "lucide-react";
import { gymRecords, personalRecords, workouts } from "./mocks";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-8 pb-6">

      {/* هدر */}
      <div className="flex items-center justify-between pt-1">
        <h2 className="text-xl font-bold tracking-tight">پروفایل من</h2>
        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
          <Settings size={18} className="text-muted-foreground" />
        </button>
      </div>

      {/* اطلاعات کاربر */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-bold">تینا کامرانی</h3>
            <p className="text-sm text-muted-foreground">عضو باشگاه آهن</p>
          </div>

          {/* آمار */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold text-primary">۴۳</span>
              <span className="text-xs text-muted-foreground">تمرین</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold">۲ ماه</span>
              <span className="text-xs text-muted-foreground">عضویت</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold text-amber-400">۸۵</span>
              <span className="text-xs text-muted-foreground">کیلوگرم</span>
            </div>
          </div>

          {/* بج ها */}
          <div className="flex flex-wrap gap-2">
            <Badge>نقره‌ای</Badge>
            <Badge variant="success">متوسط</Badge>
            <Badge variant="secondary">رکوردشکن</Badge>
          </div>
        </div>

        <Avatar className="h-24 w-24 ring-2 ring-primary/30 ring-offset-2 ring-offset-background shrink-0">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>TK</AvatarFallback>
        </Avatar>
      </div>

      {/* تمرین‌های روز */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold">تمرین‌های امروز</h3>
          <span className="text-xs text-muted-foreground">مشاهده همه</span>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex overflow-x-auto gap-3 pb-1">
            {workouts.map((workout) => (
              <Card
                key={workout.id}
                className="w-36 shrink-0 h-36 relative overflow-hidden cursor-pointer border-0"
                style={{
                  backgroundImage: `url(${workout.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 right-0 p-3">
                  <span className="text-sm font-semibold text-white leading-tight">
                    {workout.title}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* رکوردهای شخصی */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-base font-bold">رکوردهای شخصی</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-4">براساس یک ماه گذشته</p>
        <div className="flex gap-3 overflow-x-auto pb-1">
          {personalRecords.map((record) => (
            <Card
              key={record.id}
              className="shrink-0 w-28 p-4 flex flex-col items-center gap-1 border border-white/5 bg-white/3"
            >
              <span className="text-2xl font-bold text-primary">{record.weight}</span>
              <span className="text-xs text-muted-foreground">کیلوگرم</span>
              <div className="w-full h-px bg-border my-1" />
              <span className="text-sm font-medium">{record.exercise}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* رکوردهای باشگاهی */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-base font-bold">رکوردهای باشگاهی</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-4">براساس یک ماه گذشته</p>
        <div className="flex gap-3 overflow-x-auto pb-1">
          {gymRecords.map((record, index) => (
            <Card
              key={record.id}
              className="shrink-0 w-44 p-4 flex flex-col gap-3 border border-white/5 bg-white/3"
            >
              {/* رتبه و وزن */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  index === 0 ? "bg-amber-400/20 text-amber-400" :
                  index === 1 ? "bg-zinc-400/20 text-zinc-400" :
                  "bg-orange-800/20 text-orange-700"
                }`}>
                  #{index + 1}
                </span>
                <span className="text-lg font-bold">{record.weight} <span className="text-xs text-muted-foreground font-normal">kg</span></span>
              </div>

              {/* پیشرفت */}
              <Progress value={(record.weight / 200) * 100} className="h-1" />

              {/* اطلاعات نفر */}
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarImage src={record.avatar} />
                  <AvatarFallback>{record.holder[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold truncate">{record.holder}</span>
                  <span className="text-xs text-muted-foreground">{record.exercise}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}