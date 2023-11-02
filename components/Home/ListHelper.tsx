
import { HelperButton} from "./homeStyle";

const ListHelper = ()=>{

    const jobs = ["Yard Work", "mounting","Handyman", "Electricals", "Painting", "Cleaning", "Furniture Assembly"]
    
    const listButton = jobs.map((item)=>(
        <HelperButton key={item}>{item}</HelperButton>
    ))
    return listButton
}
export default ListHelper