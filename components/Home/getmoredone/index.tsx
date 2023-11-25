import { GetMoreWrapper, GetMoreInner } from "./style";
import TextSvg from "./Svg";
import { ButtonWrapper, } from "@components/Button/ButtonStyle";
import {usersInfoHome} from "@utils/store_data/constants/svg";
import Image from "next/image";
// clip-path: inset(0px 0px 33%);
const MoreDone = () => {
  return (
    <GetMoreWrapper>
     <GetMoreInner>
     <div className="flex-1">
        <TextSvg />
        <div>
          <p>Post any task. Pick the best person. Get it done.</p>
          <ButtonWrapper className="hover:none">Post your task for free</ButtonWrapper>
          <ButtonWrapper $bool={true}>Earn money as a Tasker</ButtonWrapper>
          <ul className="HeroStats__Wrapper-sc-2a7hty-0 kjYKut">
            <UsersInfo {...usersInfoHome[0]}/>
            <UsersInfo {...usersInfoHome[1]}/>
            <UsersInfo {...usersInfoHome[2]}/>
          </ul>
        </div>
      </div>
      <div className="h-[40vh] relative w-20 shrink-1">
        <Image style={{transform:'matrix3d(-1.5099999904632568, 0, 0, 0, 0, 1.5099999904632568, 0, 0, 0, 0, 1, 0, 1207.5, -710.1199951171875, 0, 1)'}} src={"/images/carrier-image.png"} fill alt="img"/>
      </div>
     </GetMoreInner>
    </GetMoreWrapper>
  );
};

export default MoreDone;

const UsersInfo = ({path, label}: {path: string, label:string}) => {
  return (
    <li className="HeroStats__Stat-sc-2a7hty-1 gzkrNQ">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          d={path}
          clip-rule="evenodd"
        ></path>
      </svg>
      <label className="Text__StyledTypographyComponent-sc-35e02v-0 hXQrMh">
        {label}
      </label>
    </li>
  );
};
//cd .git/refs/heads/
//rm ft-#2-J-12
//sudo rm ft-#2-J-12
//cat .git/packed-refs | grep ft-#2-J-12
//sed -i '/ft-#2-J-12/d' .git/packed-refs
