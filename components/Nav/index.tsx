import Menu from "@components/Menu";
import { NavWrapper } from "./NavStyle";
import Logo from "@components/Logo";
import Mobile from "@components/Menu/Mobile";
const Nav = () => {
  return (
    <NavWrapper>
        <div className="block w-5 h-5 bg-black sm:hidden "/>
        <Mobile/>
        <Logo/>
        <Menu/>
    </NavWrapper>
  )
}

export default Nav