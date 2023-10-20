import Menu from "@components/Menu";
import { NavWrapper } from "./NavStyle";
import Logo from "@components/Logo";
const Nav = () => {
  return (
    <NavWrapper>
        <div className="block w-10 h-10 bg-red-900 sm:hidden "/>
        <Logo/>
        <Menu/>
    </NavWrapper>
  )
}

export default Nav