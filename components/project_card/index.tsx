import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <section className="mx-3 w-[main(288px)] items-center  flex justify-center bg-white  gap-3 overflow-hidden p-2">
      <div className="relative">
        <Link className="w-[73px] h-[46px]  rounded-md overflow-hidden block relative" href="/">
          <Image
            src="/images/project-img/gardener.png"
            className="object-contain"
            alt=""
            fill
          />
        </Link>
      </div>
      <div className="">
        <h4 className="bg-bold text-custom-dark uppercase">
          <Link href="">Gardener</Link>
        </h4>
        <span>Say goodbye to fuzzy screens and pixelated problems</span>
      </div>
    </section>
  );
};

export default index;
