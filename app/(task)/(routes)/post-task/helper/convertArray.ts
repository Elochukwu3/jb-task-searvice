import { formQeuryRoutes } from "@app/(task)/_components/form-routes";

export function convertToObject() {
    const routeObj:{[key:string]: string} = {};
    {formQeuryRoutes.forEach(({href})=>{
      const key = href.split("V")[1];
      routeObj[key] = href
    })}
return routeObj;  
}