import {linkList} from "@db/constants/link_list";

const List = () => {
  return (
  <>
    <span className="max-sm:uppercase mx-auto block opacity-70 max-sm:text-lg text-zinc-500  pt-3 max-sm:pt-0 w-full">
    Popular Tasks{" "}
  </span>
  {linkList.map((item) => (
    <span key={item} className="block max-sm:text-lg">{item}</span>
  ))}</>
  )
}

export default List