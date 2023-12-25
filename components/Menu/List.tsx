import {linkList} from "@db/constants/link_list";
import Link from "next/link";
import {motion} from "framer-motion";
import {perspective} from "./variants"

const List = () => {
  return (
  <motion.div >
    <span className="max-sm:uppercase mx-auto block opacity-70 max-sm:text-lg text-zinc-500  pt-3 max-sm:pt-0 w-full">
    Popular Tasks{" "}
  </span>
  {linkList.map((item, i) => (
    <motion.div  key={item} custom={i} whileInView={"enter"} variants={perspective} initial="inital" animate="enter">
    <Link href={`/[slug]`} as={`/${item.trim().replace(/ /g, "-")}`} className="block py-2 max-sm:text-lg">
    {item.split("").map((data, index)=>(<motion.strong 
    key={`items${index}`}>{data}</motion.strong>))}
    </Link>
    </motion.div>
  ))}
  </motion.div>
  )
}

export default List

// variants={
//   initial: {
//     x: 0
//   },
//   whileHover:{
//   x: 16,
//   transition:{ type:"spring"}
// }
// }