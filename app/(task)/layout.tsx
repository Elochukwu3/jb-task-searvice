import type { Metadata } from "next";
import "@styles/globals.css";
import { ReactProp } from "@app-types/type";
import Logo from "@components/Logo";
import { NavWrapper } from "@components/Nav/NavStyle";
import X from "@components/icon/Times";
import TaskSideBar from "@app/(task)/_components/TaskSideBar";

export const metadata: Metadata = {
  title: "JBProMend",
  description: "JBProMend: Add New task | We deliver your task",
};

export default function TaskLayout({ children }: ReactProp) {
  return (
    <div className="z-10 relative">
      <div className="sticky top-0 w-full left-0 z-[100] bg-white/90">
        <div className="h-[69px] w-screen max-w-5xl mx-auto px-5 flex justify-between ">
          <Logo />
          <X size={24} color="black" weight="bold" />
        </div>
      </div>
      <div className="flex justify-center w-full grow ">
        <div className="max-w-[1200px] w-full flex-1 flex flex-col">
          <div className="md:grid-cols-[1fr_50%_1fr] gap-x-6 px-6 grid grid-cols-[100%] ">
            <TaskSideBar />
            <div className="pt-[90px] font-manrope"> {children}</div>
            <div className=" sticky top-20 pt-20 min-h-screen" />
          </div>
        </div>
      </div>
    </div>
  );
}