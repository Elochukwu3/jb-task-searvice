import { linkList } from "@/db/constants/link_list";
import Link from "next/link";
import {motion} from "framer-motion";

const List = () => {
  return (
    <>
      <span className="max-sm:uppercase mx-auto block opacity-70 max-sm:text-lg text-zinc-500  pt-3 max-sm:pt-0 w-full">
        Popular Tasks{" "}
      </span>
      {linkList.map((item, i) => (
        <motion.span
        key={item}
        initial={{y:80,opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{delay: (i + 1) * 0.05}}
        className="block max-sm:text-lg"
        >
        <Link
          href={`/[slug]`}
          as={`/${item.trim().replace(/ /g, "-").toLowerCase()}`}
          className="block"
        >
          {item}
        </Link>
        </motion.span>
      ))}
    </>
  );
};

export default List;
