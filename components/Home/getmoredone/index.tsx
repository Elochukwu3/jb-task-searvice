"use client"
import { GetMoreWrapper, GetMoreInner, PTag, Imagewrap, ImageCont} from "./style";
import useTimeOut from "@hooks/useTimeOut";
import TextSvg from "./Svg";
import { ButtonWrapper, } from "@components/Button/ButtonStyle";
import {usersInfoHome} from "@db/constants/svg";
import Image from "next/image";
import {slideVariants,  slideVariantstwo} from "./variant";
import { GETMOREDONE } from "@db/constants/getmore";
import {motion, AnimatePresence} from "framer-motion";
import UsersInfo from "./UserInfo"
const MoreDone = () => {
  const slider = useTimeOut(0, GETMOREDONE, 60*1000)

  return (
    <GetMoreWrapper>
     <GetMoreInner>
    
      <ImageCont >
        <div className="inset-y-0 w-11/12 right-0 rounded-lg  absolute -z-10 bg-black"/>
         {GETMOREDONE.map(({id, state, alt}, index)=>(
           <motion.div 
           variants={slideVariantstwo}
            initial="hidden"
            animate={index === slider ? "visible" : "hidden"}
            exit="exit"
            className="p-2 rounded-md z-10 bg-green-100 text-custom-dark absolute -right-10 -top-10"
            key={`sliding${id}`}
           >
           <div className="font-bold text-sm border-b border-custom-dark pb-1">help {alt}</div>
           <div className="text-[11px] pt-3 flex gap-3">
             <span>{state}, Nigeria</span>
             <span className="bg-white rounded-full px-1">#{(index+1)*3},000</span>
           </div>
           </motion.div>
         ))}
      <Imagewrap>

          <AnimatePresence>
             
     {GETMOREDONE.map(({id, img}, index)=>(
       <motion.div key={id}
       className="absolute rounded-lg overflow-hidden h-full w-full max-md:aspect-square"
       variants={slideVariants}
            initial="hidden"
            animate={index === slider ? "visible" : "hidden"}
            exit="exit"
       >
             <Image  src={img} 
             className="object-cover"
             fill
             alt="img-carrier"/>
             </motion.div>
             ))}
          </AnimatePresence>
     
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


//cd .git/refs/heads/
//rm ft-#2-J-12
//sudo rm ft-#2-J-12
//cat .git/packed-refs | grep ft-#2-J-12
//sed -i '/ft-#2-J-12/d' .git/packed-refs
