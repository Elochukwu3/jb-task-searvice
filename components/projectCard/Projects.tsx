"use client"
import ProjectOutline from "./ProjectOutline";
import { MAIN_PROJECT } from "@/db/constants/project";
import {ProjectsWrapper} from "./cardStyles"
import ProductCard from "./Card";
import {motion} from "framer-motion"

export default function Projects() {
  return (
    <div className="w-full  gap-3 flex max-lg:flex-col justify-center max-lg:w-[98.1%] mx-auto max-md:items-center max-sm:my-6 my-9">
      <div className="  lg:w-1/4 md:w-10/12 mx-auto max-sm:px-4">
        <h2 className="text-2xl font-bold  mb-4 mr-4">
          Explore Our Featured Projects
        </h2>
        <motion.div
          initial={{ opacity: 0, x:40 }}
          whileInView={{ opacity: 1 , x:0}}
          transition={{duration: .45}}
         viewport={{once: true}}
        >

        <ProjectOutline />
        </motion.div>
      </div>
      <ProjectsWrapper> 
        {MAIN_PROJECT.map((data) => (
          <ProductCard
            data={data}
            key={`${data.header.split("").join()}key-projects`}
          />
        ))}
      </ProjectsWrapper>
    </div>
  );
}
