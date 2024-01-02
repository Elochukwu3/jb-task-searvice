import type { Metadata } from "next";import "@styles/globals.css";
import { ReactProp } from "@app-types/type";
import Logo from "@components/Logo";
import {NavWrapper } from "@components/Nav/NavStyle"

export const metadata: Metadata = {
  title: "JBProMend",
  description:
    "JBProMend: Find Trusted Taskers Near You | Local Services Made Easy",
};

export default function AuthLayout({ children }: ReactProp) {
  return (
    <html lang="en">
      <body>
        {" "}
        <div className="main">
          <div className="gradient" />
        </div>
        <NavWrapper>
        <Logo/>
        </NavWrapper>
          <div className="relative mx-auto z-10 max-w-7xl  md:pt-[110px] sm:pt-[90px] xs:pt-[72px] w-full">
            {children}
          </div>
      </body>
    </html>
  );
}
