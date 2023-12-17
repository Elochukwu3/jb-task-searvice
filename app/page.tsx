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

      <div className="w-full flex-wrap gap-3 flex max-md:flex-col justify-enter max-md:items-center my-10">
        <div className=" max-md:w-full lg:w-1/4 md:10/12 mx-auto">
        <h2 className="text-2xl font-bold  mb-4 mr-4">
          Explore Our Featured Projects
        </h2>
        <ProjectOutline />
        </div>
        <div className="grid pt-14 h-fit flex-grow  w-auto  gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-3">
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
