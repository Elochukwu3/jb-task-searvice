import ProjectCard from "./index"
import { MINI_PROJECT} from "@db/constants/project"
const Projects = ()=>{
    return(
        <div className=" overflow-hidden slider my-5 whitespace-nowrap flex">
        <div className="slide-track ">
          { MINI_PROJECT.map((item)=>(<ProjectCard {...item} key={`${item.header}`}/>))}
        </div>
        <div className="slide-track ">
          { MINI_PROJECT.map((item)=>(<ProjectCard {...item} key={`${item.header}`}/>))}
        </div>
  
      </div>
    )
}
export default Projects;