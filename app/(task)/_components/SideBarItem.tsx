"use client";
import { BarButton } from "../style";
import Link from "next/link";
import useSidebarContext from "@app/(task)/context/FormProvider";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  label: string;
  href: string;
}

const SideBarItem = ({ label, href }: SidebarItemProps) => {
  const { activeTab } = useSidebarContext();

  return (
    <BarButton $isActive={activeTab === href}>
      <Link
        className="w-full h-full relative flex"
        href={`/post-task/${href}`}
        aria-label={`/post-task/${href}`}
        scroll={false}
      >
        <span className=" text-custom-greaner">{label}</span>
        <span
          className={cn(
            "ml-auto opacity-0 block h-4 bg-red-600 border-2 w-10 border-black  transition-all",
            activeTab === href && "w-2"
          )}
        />
      </Link>
    </BarButton>
  );
};
export default SideBarItem;
