"use client";
import Image from "next/image";
import { ProductCardWrapper} from "./cardStyles";
import { ButtonWrapper } from "@components/Button/ButtonStyle";
import CardOverlay from "./CardOverlay";
import useDropDown from "@hooks/useDropDown";
import { motion, AnimatePresence } from "framer-motion";
import { btnVariant } from "@utils/store_data/variants/motionVariants";

const ProductCard =  () => {
  const { isDropdownOpen: swipe, handleDropDown } = useDropDown();
  return (
    <ProductCardWrapper>
      <Image src="/images/project-img/tv.png" 
      className="hover:scale-110 transition-all duration-[2s] ease-out" alt="card" width={500} height={600} />
      {/* <AnimatePresence initial={false}>
      {swipe && (
        <motion.div variants={btnVariant} initial="close" animate="open" onClick={handleDropDown} className="absolute top-0 left-0 right-0 z-30">
          <ButtonWrapper $bool={swipe}>See Less</ButtonWrapper>
        </motion.div>
      )}
      </AnimatePresence> */}
      <div className="p-2">
        <a href="/">
          <h5 className="font-clash mb-2 text-lg  font-normal tracking-tight text-gray-900 dark:text-white">
            Mount a TV, art or shelves
          </h5>
        </a>
        <p className="text-[12px] font-initial break-words tracking-wide">Help with accounting and tax returns</p>
        {/* {!swipe && (
          <ButtonWrapper className="after:hover:w-0 hover:text-custom-greaner" onClick={handleDropDown}>see more</ButtonWrapper>
        )}
        <CardOverlay swipe={swipe} /> */}
      </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
