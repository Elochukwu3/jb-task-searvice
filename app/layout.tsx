import type { Metadata } from "next";
import "@styles/globals.css";
import { ReactProp } from "@app-types/type";

// export const metadata: Metadata = {
//   title: "JBProMend",
//   description:
//     "JBProMend: Find Trusted Taskers Near You | Local Services Made Easy",
// };

export default function RootLayout({ children }: ReactProp) {
  return (
    <html lang="en">
      <body>
          <div>
            {children}
          </div>
      </body>
    </html>
  );
}
