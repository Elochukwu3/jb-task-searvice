import SideBarItem from "./SideBarItem";
import {formQueryRoutes} from "./form-routes";

const TaskSideBar = () => {
  return (
    <div className="sticky left-0 top-[70px] pt-[48px]  h-max md:block hidden">
      <div className="w-10/12  mx-auto">
        <h3 className="text-muted-foreground  pl-6">Post a task</h3>
        <div className="space-y-1">
          {formQueryRoutes.map((items) => (
            <SideBarItem {...items} key={`${items.href}linkpath`}/>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TaskSideBar;

