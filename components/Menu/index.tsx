import { ButtonWrapper } from "@components/Button/ButtonStyle"
import {Menu as  MenuWrappper, MenuItem} from "./MenuStyle"
import Link from 'next/link';
import {MENU_URL} from "@db/constants/link_list"
import DropDown from "./DropDown";



const Menu = () => {
  return (
    <MenuWrappper>
      <MenuItem>
      <Link href={MENU_URL.location}>
      location
      </Link>
      </MenuItem>
      <MenuItem $bool={true}>
      <Link href={MENU_URL.service} className="w-full relative">
         service
      </Link>
      <DropDown/>
      </MenuItem>
      <MenuItem>
      <Link href={MENU_URL.login}>
      sign up/sign in
      </Link>
      </MenuItem>
      <ButtonWrapper>
      <Link href={MENU_URL.mender}>
        Become Mender
      </Link>
        </ButtonWrapper>
    </MenuWrappper>
  )
}

export default Menu