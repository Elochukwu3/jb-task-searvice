import { LogoWrapper } from "./LogoStyle";
import {MENU_URL} from "@db/constants/link_list"


const Logo = () => {
  return (
    <LogoWrapper href={MENU_URL.index}>JBProMend</LogoWrapper>
  )
}

export default Logo