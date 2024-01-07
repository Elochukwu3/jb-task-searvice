import type { Metadata } from "next";
import "./styles/globals.css";
import { ReactProp } from "@app-types/type";
import { ToasterProvider } from "@components/providers/ToasterProvider";

export const metadata: Metadata = {
  title: "JBProMend",
  description:
    "JBProMend: Find Trusted Taskers Near You | Local Services Made Easy",
};

export default function RootLayout({ children }: ReactProp) {
  return (
    <html lang="en">
      <body>
          <ToasterProvider/>
          <main className="min-h-screen">
          <div className="main">
          <div className="gradient" />
        </div>
            {children}
          </main>
      </body>
    </html>
  );
}
