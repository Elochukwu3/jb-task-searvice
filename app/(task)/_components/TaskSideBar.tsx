import { cn } from "@/lib/utils";
import SideBarItem from "./SideBarItem";
const TaskSideBar = () => {
  return (
    <div className="sticky top-[58px] bg-red-900 place-items-start">
      <div>
        <h3>Post a task</h3>
        <div>
          {routes.map((items) => (
            <SideBarItem {...items} key={`${items.href}linkpath`}/>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TaskSideBar;

const routes = [
    {href: "#Title-date", label:"Title & Date"},
    {href: "#Location", label:"Location"},
    {href: "#Details", label:"Details"},
    {href: "#Budget", label:"Budget"},
] as const;
