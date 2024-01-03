import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import { ReactProp } from "@app-types/type";
import Nav from "@components/Nav";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JBProMend|location",
  description:
    "JBProMend: Find Trusted Taskers Near You | Local Services Made Easy",
};

export default function LocationLayout({ children }: ReactProp) {
  return (
    <section> {children}</section>
  );
}