"use client";
import { BarButton } from "../style";
import useSidebarContext from "@/app/(task)/context/FormProvider";
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
  const{activeTab} = useSidebarContext (); 
  
  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
      router.push(`/post-task?origin=${href}`, {scroll: false});
  };
  return (
    <BarButton id={href} disabled={!activeTab[href]} className="cursor-pointer" $isActive={param === href} onClick={handleClick}>
      <span className="disabled:text-red-700 text-custom-greaner">{label}</span>
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
