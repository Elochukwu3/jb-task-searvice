import type { Metadata } from "next";
import { ReactProp } from "@/app-types/type";
import Nav from "@/components/Nav";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "JBProMend",
  description:
    "JBProMend: Find Trusted Taskers Near You | Local Services Made Easy",
};

export default function CompanyLayout({ children }: ReactProp) {
  return (
    
      <div>
        {" "}
        <div className="relative z-10 w-full mx-auto overflow-x-hidden">
          <Nav />

          <div className="relative mx-auto z-10 max-w-7xl  md:pt-[110px] sm:pt-[90px] xs:pt-[72px] w-full">
            {children}
          </div>
          <Footer/>
        </div>
      </div>
  );
}
