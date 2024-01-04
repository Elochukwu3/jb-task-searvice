"use client"
import { BarButton } from "../style";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  label: string;
  href: string;
}

const SideBarItem = ({ label, href }: SidebarItemProps) => {
  const path = usePathname();
  const router = useRouter();

  const $isActive: Boolean =
    (path === "/" && href === "/") || path === href || path.endsWith(`${href}`);
  const handleClick = () => {
    router.push(href);
  };
  return (
    <BarButton onClick={handleClick} $isActive>
        <span>{label}</span>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-black h-full transition-all",
          $isActive && "opacity-100"
        )}
      />
    </BarButton>
  );
};
export default SideBarItem;


