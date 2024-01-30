"use client"
import Menu from "@/components/Menu";
import { NavWrapper } from "./NavStyle";
import Logo from "@/components/Logo";
import Mobile from "@/components/Menu/Mobile";
import useDropDown from "@/hooks/useDropDown";
import { List } from "@phosphor-icons/react";
import {motion, AnimatePresence} from "framer-motion";


const Nav = () => {
  const { isDropdownOpen, handleDropDown, handler } = useDropDown()
  return (
    <NavWrapper>
      <span className="p-3 cursor-pointer" onClick={handleDropDown} >
      <List size={26} color={"#0d7a5f"} weight="fill" className="sm:hidden " />

      </span>
        <AnimatePresence>

        {isDropdownOpen && 
        <motion.div>
        <Mobile  handler={handler}/>
        </motion.div>}
        </AnimatePresence>
        <Logo/>
        <Menu/>
    </NavWrapper>
  )
}

export default Nav