"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants";

type SidebarProps = {
  fullName: string;
  avatar: string;
  email: string;
};

export default function Sidebar({ fullName, avatar, email }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href={"/"}>
        <Image
          src={"/assets/icons/logo-full-brand.png"}
          alt="ZirconL"
          width={185}
          height={55}
          className="hidden h-auto lg:block"
        />
        <Image
          src={"/favicon.png"}
          alt="ZirconM"
          width={55}
          height={55}
          className="lg:hidden"
        />
      </Link>
      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.url} className="lg:w-full">
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === item.url && "shad-active",
                )}
              >
                <item.icon
                  className={cn(
                    "nav-icon size-[24px]",
                    pathname === item.url && "nav-icon-active",
                  )}
                />
                <p className="hidden lg:block">{item.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Image
        src={"/assets/images/files-2.png"}
        alt="Illust"
        width={506}
        height={418}
        className="w-full"
      />
      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="Avatar"
          width={44}
          height={44}
          className="sizebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>
    </aside>
  );
}
