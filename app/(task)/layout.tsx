import type { Metadata } from "next";
import "@styles/globals.css";
import { ReactProp } from "@app-types/type";
import Logo from "@components/Logo";
import { NavWrapper } from "@components/Nav/NavStyle";

export const metadata: Metadata = {
  title: "JBProMend",
  description:
    "JBProMend: Add New task | We deliver your task",
};

export default function TaskLayout({ children }: ReactProp) {
  return (
    <div>
      <div className="main">
        <div className="gradient" />
      </div>
      <NavWrapper>
        <Logo />
        <span>x</span>
      </NavWrapper>
      <div className="relative mx-auto z-10 max-w-7xl  md:pt-[110px] sm:pt-[90px] xs:pt-[72px] w-full">
        {children}
      </div>
    </div>
  );
}
