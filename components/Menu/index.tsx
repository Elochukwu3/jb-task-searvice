import { ButtonWrapper } from "@components/Button/ButtonStyle"
import {Menu as  MenuWrappper, MenuItem} from "./MenuStyle"
import Link from 'next/link';
import {MENU_URL} from "@db/constants/link_list"
import DropDown from "./DropDown";



const Menu = () => {
  return (
    <MenuWrappper>
      <MenuItem $as="a" href={MENU_URL.location}>
      location
      </MenuItem>
      <MenuItem $bool={true} >
         service
      <DropDown/>
      </MenuItem>
      <MenuItem $as="a" href={MENU_URL.login}>
      </MenuItem>
      <ButtonWrapper $as="a" href={MENU_URL.mender}>
        Become Mender
        </ButtonWrapper>
    </MenuWrappper>
  )
}

export default Menu