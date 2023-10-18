import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import { ReactProp } from "@app-types/type";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JBProMend",
  description: "JBProMend: Find Trusted Taskers Near You | Local Services Made Easy",
};

export default function RootLayout({ children }: ReactProp) {
  return (
    <html lang="en">
      <body>
        {" "}
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
