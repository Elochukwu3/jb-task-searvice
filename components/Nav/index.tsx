"use client"
import Menu from "@components/Menu";
import { NavWrapper } from "./NavStyle";
import Logo from "@components/Logo";
import Mobile from "@components/Menu/Mobile";
import useDropDown from "@hooks/useDropDown";
import { List } from "@phosphor-icons/react";


const Nav = () => {
  const { isDropdownOpen, handleDropDown, handler } = useDropDown()
  return (
    <NavWrapper>
      <List size={24} color={"#0d7a5f"} className="sm:hidden cursor-pointer" onClick={handleDropDown}/>
        {isDropdownOpen && <Mobile  handler={handler}/>}
        <Logo/>
        <Menu/>
    </NavWrapper>
  )
}

export default Nav