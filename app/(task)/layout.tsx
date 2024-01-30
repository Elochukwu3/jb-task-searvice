import type { Metadata } from "next";
import { ReactProp } from "@/app-types/type";
import Logo from "@/components/Logo";
import X from "@/components/icon/Times";
import TaskSideBar from "@/app/(task)/_components/TaskSideBar";
import { FormProvider } from "./context/FormProvider";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JBProMend",
  description: "JBProMend: Add New task | We deliver your task",
};

export default function TaskLayout({ children }: ReactProp) {
  return (
    <div className="z-10 relative bg-white">
      <div className="sticky top-0 w-full left-0 z-[100] bg-white/90">
        <div className="h-[69px] w-11/12 max-w-4xl mx-auto px-5 flex justify-between items-center overflow-x-hidden">
          <Logo />
          <Link href="/">
            <X size={24} color="black" weight="bold" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full grow ">
        <div className="max-w-[1200px] w-full flex-1 flex flex-col">
          <div className="md:grid-cols-[1fr_50%_1fr] gap-x-6 px-6 grid grid-cols-[100%] ">
            <FormProvider>
              <TaskSideBar />
              <div className="overflow-x-hidden pt-[10px] md:pt-2 font-manrope md:border-l md:border-zinc-200">
                {children}
              </div>
              <div className=" sticky top-20 pt-20 md:block hidden min-h-screen" />
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
