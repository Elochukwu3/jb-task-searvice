"use client";
import { BarButton } from "../style";
import { useEffect, useState} from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  label: string;
  href: string;
}

const SideBarItem = ({ label, href }: SidebarItemProps) => {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    const fullPath = window.location.href
    const $isActive =  fullPath.endsWith(`${href}`);
    setIsActive($isActive)
  }, [href]);

 
  return (
      <BarButton $isActive={isActive}>
    <Link className="block w-full h-full relative" href={`/post-task/${href}`} aria-label={`/post-task/${href}`} scroll={false}>
        <span>{label}</span>
        <span
          className={cn(
            "ml-auto opacity-0 block border-2 border-black h-full transition-all",
            isActive && "w-2"
          )}
        />
    </Link>
      </BarButton>
  );
};
export default SideBarItem;
