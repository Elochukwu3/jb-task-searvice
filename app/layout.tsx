import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import { ReactProp } from "@app-types/type";
import Nav from "@components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JBProMend",
  description:
    "JBProMend: Find Trusted Taskers Near You | Local Services Made Easy",
};

export default function RootLayout({ children }: ReactProp) {
  return (
    <html lang="en">
      <body>
        {" "}
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="relative mx-auto z-10 w-full overflow-x-hidden">
          <Nav />

          <div className="relative mx-auto z-10 max-w-8xl  px- w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
