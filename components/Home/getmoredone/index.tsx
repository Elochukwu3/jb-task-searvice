import { GetMoreWrapper } from "./style";
import TextSvg from "./Svg";
import { ButtonWrapper } from "@components/Button/ButtonStyle";
import {usersInfoHome} from "@utils/store_data/constants/svg";

const MoreDone = () => {
  return (
    <GetMoreWrapper>
      <div>
        <TextSvg />
        <div>
          <p>Post any task. Pick the best person. Get it done.</p>
          <ButtonWrapper>Post your task for free</ButtonWrapper>
          <ButtonWrapper $bool={true}>Earn money as a Tasker</ButtonWrapper>
          <ul className="HeroStats__Wrapper-sc-2a7hty-0 kjYKut">
            <UsersInfo {...usersInfoHome[0]}/>
            <UsersInfo {...usersInfoHome[1]}/>
            <UsersInfo {...usersInfoHome[2]}/>
          </ul>
        </div>
      </div>
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
