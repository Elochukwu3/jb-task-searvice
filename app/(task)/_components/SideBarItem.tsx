"use client";
import { BarButton } from "../style";
import useSidebarContext from "@app/(task)/context/FormProvider";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter } from 'next/navigation';



interface SidebarItemProps {
  label: string;
  href: string;
}

const SideBarItem = ({ label, href }: SidebarItemProps) => {
  const searchParams = useSearchParams();
  const param = searchParams.get('origin');
  const router = useRouter()
  const handleClick = () => {
    router.push(`/post-task?origin=${href}`);
  };

  return (
    <BarButton $isActive={param === href} onClick={handleClick}>
      <span className=" text-custom-greaner">{label}</span>
      <span
        className={cn(
          "absolute inset-y-0 left-0 opacity-0 border-2 block border-custom-greaner h-full transition-all",
          param === href && "opacity-100"
        )}
      />
    </BarButton>
  );
};
export default SideBarItem;
