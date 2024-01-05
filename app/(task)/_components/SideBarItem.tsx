"use client";
import { BarButton } from "../style";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  label: string;
  href: string;
}

const SideBarItem = ({ label, href }: SidebarItemProps) => {
  const path = usePathname();
  const router = useRouter();

  const $isActive: Boolean =  window.location.href.endsWith(`${href}`);
  // console.log(router.asPath)
  // const isActive = router.pathname === `/post-task/${href}`;
    // const handleClick = () => {
    //   const fullPath = window.location.href
    //   console.log(fullPath)
    //   router.push(href);
    // };
  return (
      <BarButton $isActive>
    <Link className="block w-full h-full relative" href={`/post-task/${href}`} aria-label={`/post-task/${href}`} scroll={false}>
        <span>{label}</span>
        <span
          className={cn(
            "ml-auto opacity-0 border-2 border-black h-full transition-all",
            $isActive && "opacit-10"
          )}
        />
    </Link>
      </BarButton>
  );
};
export default SideBarItem;
