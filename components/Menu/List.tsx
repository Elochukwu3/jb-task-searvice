import {linkList} from "@utils/store_data/link_list";

const List = () => {
  return (
  <>
    <span className="mx-auto block opacity-70 text-zinc-500  pt-3 w-full">
    Popular Tasks{" "}
  </span>
  {linkList.map((item) => (
    <span key={item} className="block">{item}</span>
  ))}</>
  )
}

export default List