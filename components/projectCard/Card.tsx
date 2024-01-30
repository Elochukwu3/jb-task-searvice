import Image from "next/image";
import { ProductCardWrapper} from "./cardStyles";
import {ProjectProp, ProjectData} from "../project_card/type";
import Star from "./Star";
import { formatNumberInput } from "@/utils/numberConverter";
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
          <h5 className="p-1 truncate gap-1 items-center text-black/70 max-[380px]:text-black flex mb-1 text-lg sm:text-base max-[380px]:text-[14px] font-normal tracking-tigh">
            {data?.header}<Star size={11} color="#ffd700" weight="bold" />
          </h5>
        <p className="text-[12px] px-1 max-[380px]:text-black/80  whitespace-nowrap">{data.caption}</p>
        <p className="text-[12px] mt-1 items-end gap-1 flex font-saro whitespace-nowrap overflow-x-scroll no-scrollbar tracking-wide bg-zinc-100 px-1 py-2 rounded-md">
         <span className="font-bold whitespace-no-wrap capitalize">pricing:</span> 
         <span className="flex items-center gap-2 max-[380px]:gap-1  text-[11px] text-black/70">
         <span>₦{formatNumberInput(data.price_1)}</span>
         <span className="block w-3 max-[380px]:w-[9px] h-[2px] bg-zinc-400"/>
         <span>₦{formatNumberInput(data.price_2)}</span>
         </span>
          </p>

    </div>
    </ProductCardWrapper>
  );
};

export default ProductCard;
