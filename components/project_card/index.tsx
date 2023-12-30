import Image from "next/image";
import Link from "next/link";
import {DataProp} from"./type"

const index = ({img, header, caption}:DataProp) => {
  return (
    <section className="mx-3 font-manrope w-[main(288px)] items-center  flex justify-center bg-white  gap-3 overflow-hidden p-2">
      <div className="relative">
        <Link className="w-[73px] h-[46px]  rounded-md overflow-hidden block relative" href="/">
          <Image
            src={img}
            className="object-contain"
            alt=""
            fill
          />
        </Link>
      </div>
      <Link href={`/[link]`} as={`/${header.trim().replace(" ", "-").toLowerCase()}`}>
        <h4 className="bg-bold text-custom-dark text-[18px] leadingss-[24px] ">
          {header}
        </h4>
        <span className="text-[12px] text-custom-dark/80">{caption}</span>
      </Link>
    </section>
  );
};

export default index;
