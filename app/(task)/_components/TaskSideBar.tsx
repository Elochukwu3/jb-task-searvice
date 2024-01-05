import { cn } from "@/lib/utils";
import SideBarItem from "./SideBarItem";
const TaskSideBar = () => {
  return (
    <div className="sticky left-0 top-[70px] pt-[48px]  h-max md:block hidden">
      <div className="w-10/12  mx-auto">
        <h3 className="text-muted-foreground  pl-6">Post a task</h3>
        <div className="space-y-1">
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

