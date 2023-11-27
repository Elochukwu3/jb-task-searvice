import { GetMoreWrapper, GetMoreInner, PTag, Imagewrap, ImageCont, HelpMove } from "./style";
import TextSvg from "./Svg";
import { ButtonWrapper, } from "@components/Button/ButtonStyle";
import {usersInfoHome} from "@utils/store_data/constants/svg";
import Image from "next/image";
// clip-path: inset(0px 0px 33%);
const MoreDone = () => {
  return (
    <GetMoreWrapper>
     <GetMoreInner>
    
       {/* style={{transform:'matrix3d(-1.5099999904632568, 0, 0, 0, 0, 1.5099999904632568, 0, 0, 0, 0, 1, 0, 1207.5, -710.1199951171875, 0, 1)'}} */}
      <ImageCont >
        <div className="inset-y-0 w-11/12 right-0 rounded-lg  absolute -z-10 bg-black"/>
        <HelpMove>
          <div className="font-bold text-sm border-b border-custom-dark pb-1">help move</div>
          <div className="text-[11px] pt-3 flex gap-3">
            <span >Enugu, Nigeria</span>
            <span className="bg-white rounded-full px-1">#2,000</span>
          </div>
        </HelpMove>
      <Imagewrap>
        <Image src={"/images/carrier-image.png"} 
        className="object-cover"
        fill
        alt="img-carrier"/>
      </Imagewrap>
      </ImageCont>
      <div className=" w-10/12 max-md:w-full flex-1">
        <TextSvg />
        <div>
          <PTag>Post any task. Pick the best person. Get it done.</PTag>
          <div className="flex gap-8 max-sm:flex-col max-sm:w-10/12 mx-auto max-sm:gap-4">
          <ButtonWrapper className="after:hover:bg-white hover:text-custom-greaner">Post your task for free</ButtonWrapper>
          <ButtonWrapper $bool={true}>Earn money as a Tasker</ButtonWrapper>
          </div>
          <ul className="flex gap-2 flex-wrap pt-5 max-md:justify-center">
            <UsersInfo {...usersInfoHome[0]}/>
            <UsersInfo {...usersInfoHome[1]}/>
            <UsersInfo {...usersInfoHome[2]}/>
          </ul>
        </div>
      </div>
     </GetMoreInner>
    </GetMoreWrapper>
  );
};

export default MoreDone;

const UsersInfo = ({path, label}: {path: string, label:string}) => {
  return (
    <li className="flex flex-col items-center m-3 text-white/70 justify-center  ">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path
          fillRule="evenodd"
          d={path}
          clipRule="evenodd"
        ></path>
      </svg>
      <label className="block">
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
