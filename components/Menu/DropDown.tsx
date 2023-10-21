import { DeskTopDropDownWrapper } from "./MenuStyle"
type isDropdown ={
  isDropdownOpen?: Boolean
}
const DropDown = ({isDropdownOpen}:isDropdown) => {
  const list = [
    "Furniture Assembly",
    "TV Mounting",
    "Help Moving",
    "Handyman",
    "Yard Work",
    "Painting",
    "Mounting Services",
    "Electrical Help",
    " Plumbing",
    "Hang Pictures",
    "Lighting Installation",
  ];
  return (
    < DeskTopDropDownWrapper >
        <ul
          className=""
        >
          <li  className="mx-auto block opacity-70 text-zinc-500  pt-3 w-full">
            {" "}
            Popular Tasks
          </li>
          {list.map((item) => (
            <li
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
    </ DeskTopDropDownWrapper >
  );
};

export default DropDown;


