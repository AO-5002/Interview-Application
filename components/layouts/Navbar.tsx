"use client";
import React from "react";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import { Bell } from "lucide-react";
import { Folder } from "lucide-react";
import { ToggleMode } from "../ToggleMode";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DropDownProfile({ user, logout }: { user: any; logout: any }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img
          src={user?.picture}
          alt={user?.name}
          className="w-4 h-4 contain object-cover rounded"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Swap</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ElementWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 p-3 border text-white rounded-lg">
      {children}
    </div>
  );
}

function Navbar() {
  const { logout, user, isAuthenticated } = useAuth0();

  return (
    <header className="w-full h-16 text-white bg-zinc-900 shadow-md px-8 md:px-16">
      <nav className="w-full h-full flex flex-row items-center justify-between">
        <Link href="/">
          <span className="font-bold text-base p-2 rounded">Home</span>
        </Link>

        {isAuthenticated && (
          <div className="flex flex-row gap-4 items-center">
            <ElementWrapper>
              <Bell height={16} width={16} />
              <span className="hidden md:block text-xs font-bold">
                Notifications
              </span>
            </ElementWrapper>

            <ElementWrapper>
              <Folder width={16} height={16} />
              <span className="hidden md:block text-xs font-bold">
                Interviews
              </span>
            </ElementWrapper>
            <ElementWrapper>
              <ToggleMode />
            </ElementWrapper>
            <ElementWrapper>
              <DropDownProfile user={user} logout={logout} />
            </ElementWrapper>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
