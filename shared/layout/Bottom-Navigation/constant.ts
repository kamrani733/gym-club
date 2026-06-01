import {
  IconHome,
  IconBell,
  IconSearch,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";

export const navItems = [
  { href: "/profile", label: "Profile", icon: IconUser },
  { href: "/search", label: "Search", icon: IconSearch },
  { href: "/", label: "Home", icon: IconHome, isPrimary: true },
  {
    href: "/notifications",
    label: "Notifications",
    icon: IconBell,
  },
  { href: "/setting", label: "Setting", icon: IconSettings },
];
