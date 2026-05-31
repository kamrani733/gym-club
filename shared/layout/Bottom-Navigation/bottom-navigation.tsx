"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./constant";

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <div className="sticky bottom-0 w-full">
      <div className="max-w-3xl mx-auto w-full bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800">
        <div className="flex h-16 items-center justify-around text-white">
          {navItems.map(({ href, label, icon: Icon, isPrimary }) => {
            const isActive = pathname === href;

            if (isPrimary) {
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex flex-col items-center bg-[linear-gradient(135deg,_#a855f7,_#6366f1)] p-2 rounded-xl gap-1 text-xs transition-all hover:scale-105 active:scale-95"
                >
                  <Icon className="text-white" size={24} />
                </Link>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-1 text-xs transition-colors group"
              >
                <Icon
                  className={`transition-colors group-hover:text-[#a855f7] ${
                    isActive
                      ? "text-[#a855f7]"
                      : "text-[#52525b]"
                  }`}
                  size={24}
                />
                <span
                  className={`w-1 h-1 rounded-full transition-all ${
                    isActive
                      ? "bg-[#a855f7] scale-100"
                      : "bg-transparent scale-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
