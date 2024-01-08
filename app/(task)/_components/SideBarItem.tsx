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
      <span className=" text-custom-greaner">{label}</span>
      <span
        className={cn(
          "absolute inset-y-0 left-0 opacity-0 border-2 block border-custom-greaner h-full transition-all",
          activeTab === href && "opacity-100"
        )}
      />
    </BarButton>
  );
};
export default SideBarItem;
