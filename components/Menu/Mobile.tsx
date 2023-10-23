"use client"
import { MobileStyle, MobileWrapper, MobileMenuWrapper } from "./MenuStyle";
import { ButtonWrapper } from "@components/Button/ButtonStyle";
import { MenuItem } from "./MenuStyle";
import List from "./List";
import useDropDown from "@hooks/useDropDown"

const Mobile = ({handler}: {handler: (item: Boolean) => void}) => {
  const { isDropdownOpen, handleDropDown } = useDropDown()
  return (
    <MobileWrapper>
       <div className=" bg-white h-full w-80 px-12">
       <span className="flex justify-between text-xl py-2 px-3 items-center">
        {isDropdownOpen && <span onClick={handleDropDown} className="text-base text-custom-greaner">Services</span>}
       <span className="block ml-auto w-fit  " onClick={()=> handler(false)}> x</span>
       </span>
      <MobileStyle>
        {!isDropdownOpen ? (
          <>
            <MenuItem>location</MenuItem>
            <MenuItem onClick={handleDropDown}>service <span className="pr-2">{">"}</span></MenuItem>
            <MenuItem>sign up/sign in</MenuItem>
            <ButtonWrapper>Become Mender</ButtonWrapper>
          </>
        ) : (
          <List />
        )}
      </MobileStyle>
       </div>
    </MobileWrapper>
  );
};

export default Mobile;
