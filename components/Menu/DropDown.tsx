import { DeskTopDropDownWrapper, UlWrapper } from "./MenuStyle";
import {linkList} from "@utils/store_data/link_list";

type isDropdown = {
  isDropdownOpen?: Boolean;
};
const DropDown = ({ isDropdownOpen }: isDropdown) => {
  return (
    <DeskTopDropDownWrapper>
      <UlWrapper>
        <li className="mx-auto block opacity-70 text-zinc-500  pt-3 w-full">
          Popular Tasks{" "}
        </li>
        {linkList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </UlWrapper>
    </DeskTopDropDownWrapper>
  );
};

export default DropDown;
