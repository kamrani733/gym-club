import { HiHome, HiOutlineSearch, HiOutlineUser } from "react-icons/hi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";

export const navItems = [
  { href: "/profile", label: "Profile", icon: HiOutlineUser },
  { href: "/search", label: "Search", icon: HiOutlineSearch },
  { href: "/", label: "Home", icon: HiHome, isPrimary: true },
  {
    href: "/notifications",
    label: "Notifications",
    icon: IoNotificationsOutline,
  },
  { href: "/setting", label: "Setting", icon: IoSettingsOutline },
];
