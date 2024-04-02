"use client";

import React, { useEffect, useState } from "react";
import { Nav } from "./ui/nav";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

export default function Sidebar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const windowWidth = useWindowWidth();
  const mobileWidth: boolean = windowWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  useEffect(() => {
    if (mobileWidth) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [mobileWidth]);

  return (
    <div className="min-w-[80px] border-r px-3 pb-10 pt-24 relative">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            className="rounded-full p-2"
            variant="secondary"
            onClick={toggleSidebar}
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            variant: "default",
            href: "/",
          },
          {
            title: "Users",
            icon: UsersRound,
            variant: "ghost",
            href: "/users",
          },
          {
            title: "Orders",
            icon: ShoppingCart,
            variant: "ghost",
            href: "/orders",
          },
          {
            title: "Settings",
            icon: Settings,
            variant: "ghost",
            href: "/settings",
          },
        ]}
      />
    </div>
  );
}
