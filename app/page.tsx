import { Metadata } from "next";
import Banner from "@components/Home/Banner";
import ProductCard from "@components/product-card/Card";
import MoreDone from "@components/Home/getmoredone";
import GettingDone from "@components/Home/getdone";
import HomeRating from "@components/Home/rating-home";
import ProjectOutline from "@components/Home/ProjectOutline";
import ProjectCard from "@components/project_card";

export const metadata: Metadata = {
  openGraph: {
    title: "JBProMend",
    description: "Get your local work done here",
    url: "https://jb-task-searvice.vercel.app/",
    siteName: "JBProMend",
    images: [
      {
        url: "https://jb-task-searvice.vercel.app/opengraph-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function Home() {
  return (
    <div className="items-center flex flex-col justify-center gap-10">
      <Banner />

      <div className=" overflow-hidden slider my-5 whitespace-nowrap flex">
        <div className="slide-track ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="slide-track">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      <div className="w-full  gap-3 flex max-lg:flex-col justify-center max-md:items-center my-10">
        <div className="  lg:w-1/4 md:w-10/12 mx-auto max-sm:px-4">
        <h2 className="text-2xl font-bold  mb-4 mr-4">
          Explore Our Featured Projects
        </h2>
        <ProjectOutline />
        </div>
        <div className="grid xl:ml-auto mx-auto pt-14 h-fit  w-auto  gap-x-3 gap-y-4 grid-cols-2 md:grid-cols-3 grid-flow-row-dense lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      {/* //getmoredone section// */}
      <MoreDone />
      <GettingDone />
      <HomeRating />
    </div>
  );
}
