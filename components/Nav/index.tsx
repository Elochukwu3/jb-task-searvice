"use client"
import Menu from "@components/Menu";
import { NavWrapper } from "./NavStyle";
import Logo from "@components/Logo";
import Mobile from "@components/Menu/Mobile";
import useDropDown from "@hooks/useDropDown"
const Nav = () => {
  const { isDropdownOpen, handleDropDown, handler } = useDropDown()
  return (
    <NavWrapper>
        <div className="block w-5 h-5 bg-black sm:hidden " onClick={handleDropDown}/>
        {isDropdownOpen && <Mobile  handler={handler}/>}
        <Logo/>
        <Menu/>
    </NavWrapper>
  )
}

export default Nav