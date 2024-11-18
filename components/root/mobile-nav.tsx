"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signOutUser } from "@/lib/actions/user.actions";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants";
import FileUploader from "@/components/root/file-uploader";
import { LogOutIcon, MenuIcon } from "lucide-react";

type MobileNavigationProps = {
  $id: string;
  accountId: string;
  fullName: string;
  avatar: string;
  email: string;
};

export default function MobileNavigation({
  $id: ownerId,
  accountId,
  fullName,
  avatar,
  email,
}: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="mobile-header">
      <div className="mb-2 mt-3 flex h-auto flex-row items-center gap-2">
        <Image
          src={"/favicon.png"}
          alt="ZirconL"
          width={52}
          height={52}
          className="h-auto"
        />
        <h2 className="text-xl font-bold text-brand">Zircon Blue</h2>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <MenuIcon className="size-[30px]" />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetTitle>
            <div className="header-user">
              <Image
                src={avatar}
                alt="AvatarUser"
                width={44}
                height={44}
                className="header-user-avatar"
              />
              <div className="sm:hidden lg:block">
                <p className="subtitle-2 capitalize">{fullName}</p>
                <p className="caption">{email}</p>
              </div>
            </div>
            <Separator className="mb-4 bg-light-200/20" />
          </SheetTitle>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <Link key={item.name} href={item.url}>
                  <li
                    className={cn(
                      "mobile-nav-item",
                      pathname === item.url && "shad-active",
                    )}
                  >
                    <item.icon
                      className={cn(
                        "nav-icon size-[24px]",
                        pathname === item.url && "nav-icon-active",
                      )}
                    />
                    <p>{item.name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <Separator className="my-5 bg-light-200/20" />
          <div className="flex flex-col justify-between gap-5 pb-5">
            <FileUploader ownerId={ownerId} accountId={accountId} />
            <Button
              type={"submit"}
              className="mobile-sign-out-button"
              onClick={async () => await signOutUser()}
            >
              <LogOutIcon className="size-[24px]" />
              <p>Đăng xuất</p>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
