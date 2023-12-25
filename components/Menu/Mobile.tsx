"use client"
import { MobileStyle, MobileWrapper } from "./MenuStyle";
import { ButtonWrapper } from "@components/Button/ButtonStyle";
import { MenuItem } from "./MenuStyle";
import List from "./List";
import useDropDown from "@hooks/useDropDown";
import { XCircle, CaretLeft, CaretRight  } from "@phosphor-icons/react";

const Mobile = ({handler}: {handler: (item: Boolean) => void}) => {
  const { isDropdownOpen, handleDropDown } = useDropDown();

  return (
    <MobileWrapper>
       <div className=" bg-white h-full w-80 px-12 max-sm:px-8">
       <span className="flex justify-between text-xl py-3 opacity-70 items-center">
        {isDropdownOpen && <span onClick={handleDropDown} className="gap-2 items-center text-custom-greaner flex ">
        <CaretLeft  size={24} color={"#0d7a5f"} weight={"light"}/>Services</span>}
       <XCircle size={24} color={"#0d7a5f"} onClick={()=> handler(false)} 
       className="block ml-auto cursor-pointer"/>
       </span>
      <MobileStyle>
        {!isDropdownOpen ? (
          <>
            <MenuItem>location</MenuItem>
            <MenuItem onClick={handleDropDown}><span>services</span>
            <CaretRight  size={24} color={"#0d7a5f"} weight={"light"}/>
            </MenuItem>
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
