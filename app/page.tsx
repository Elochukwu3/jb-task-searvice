import { Metadata } from "next";
import Banner from "@components/Home/banner-section/Banner";
import MiniProjectCard from "@components/project_card/Projects";
import MainProjects from "@components/projectCard/Projects"
import MoreDone from "@components/Home/getmoredone";
import GettingDone from "@components/Home/getdone";
import HomeRating from "@components/Home/rating-home";

export const metadata: Metadata = {
  openGraph: {
    title: "JBProMend.",
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
      <MiniProjectCard />
     <MainProjects/>
      <MoreDone />
      <GettingDone />
      <HomeRating />
    </div>
  );
}
