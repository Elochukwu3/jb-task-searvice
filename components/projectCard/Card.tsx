import Image from "next/image";
import { ProductCardWrapper} from "./cardStyles";
import {ProjectProp, ProjectData} from "../project_card/type";
import Star from "./Star";
import { formatNumberInput } from "@utils/varinats/numberConverter";
import Link from "next/link";

const ProductCard =  <T extends ProjectData>({data}:ProjectProp<T>) => {
  return (
    <ProductCardWrapper >
     <Link href={"/[link]"} as={`/${data.header.trim().replace(" ", "-").toLowerCase()}`} className="block relative w-full h-[53.40%]">
     <Image src={data.img} 
      className="hover:scale-110  transition-all duration-[2s] ease-out object-cover" alt="card" 
      fill
      />
     </Link>
      <div className="">
          <h5 className="font-manrope p-1 gap-1 items-center flex mb-1 text-lg sm:text-base font-normal tracking-tight text-gray-900 dark:text-white">
            {data?.header}<Star size={11} color="#ffd700" weight="bold" />
          </h5>
        <p className="text-[12px] px-1 font-saro whitespace-nowrap truncate">{data.caption}</p>
        <p className="text-[12px] mt-1 items-center gap-1 flex font-saro whitespace-nowrap overflow-x-scroll no-scrollbar tracking-wide bg-zinc-100 px-1 rounded-md">
         <span className="font-bold whitespace-no-wrap">Price range:</span> 
         <span>₦{formatNumberInput(data.price_1)}</span>
         <span className="font-boldold text-xl">-</span>
         <span>₦{formatNumberInput(data.price_2)}</span>
          </p>

    </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
