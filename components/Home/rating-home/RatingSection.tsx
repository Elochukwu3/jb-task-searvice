import Image from "next/image";

const RatingSection = () => (
  <div className="h-full  my-5 w-full relative flex items-center justify-center">
   
    <div className="mx-auto h-5/6 max-md:h-[95%] xl:w-8/12 lg:w-10/12 md:10/12 w-11/12  relative ">
    <div className="mx-5 flex z-10 absolute -top-16 -left-14 items-center gap-3 p-4 max-md:p-2 w-fit bg-white border border-blue-100 rounded-xl">
      <span className="block object-contain w-20 h-20 rounded-full relative ">
        <Image src="/images/rounded-profile.png" alt="rate" fill />
      </span>
      <div>
        <p className="flex items-center">
          <span className="inline text-3xl mx-2 font-bold">5.0</span>
          <svg
            fill="#ff7f00"
            className="inline"
            height="20"
            width="20"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M7.45 14.975 5.825 22 12 18.275 18.175 22l-1.625-7.025L22 10.25l-7.2-.625L12 3 9.2 9.625 2 10.25l5.45 4.725Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </p>
        <span className="capitalize font-bold text-base font-montserrat text-black/70">
          overall rating
        </span>
      </div>
    </div>
      <Image
      className="rounded-xl"
        src="/images/rating-img.png"
        alt="rating"
        fill
      />
      <div className="absolute z-10 right-0 top-[40%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#FFFF"
          viewBox="0 0 256 256"
        >
          <path d="M144,204a16,16,0,1,1-16-16A16,16,0,0,1,144,204ZM239.61,83.91a176,176,0,0,0-223.22,0,12,12,0,1,0,15.23,18.55,152,152,0,0,1,192.76,0,12,12,0,1,0,15.23-18.55Zm-32.16,35.73a128,128,0,0,0-158.9,0,12,12,0,0,0,14.9,18.81,104,104,0,0,1,129.1,0,12,12,0,0,0,14.9-18.81ZM175.07,155.3a80.05,80.05,0,0,0-94.14,0,12,12,0,0,0,14.14,19.4,56,56,0,0,1,65.86,0,12,12,0,1,0,14.14-19.4Z"></path>
        </svg>
      </div>
    </div>
    <div className="right-0 items-center w-fit gap-3 text-custom-greaner flex font-bold bg-[#e3e3e3] absolute z-10 sm:bottom-4 -bottom-3 md:bottom-5 rounded-full py-2 max-sm:py-1 px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#004000"
        viewBox="0 0 256 256"
      >
        <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
      </svg>

      <span className="">Payment released</span>
      <span className="opacity-50 text-sm">2m ago</span>
    </div>
    <div className="items-center w-fit gap-3 text-custom-greaner flex font-bold bg-[#e3e3e3] absolute z-10 sm:bottom-10 bottom-9 md:bottom-20 -right-3 rounded-full py-2 max-sm:py-1 px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#004000"
        viewBox="0 0 256 256"
      >
        <path d="M237,77.47A28,28,0,0,0,216,68H164V56a44.05,44.05,0,0,0-44-44,12,12,0,0,0-10.73,6.63L72.58,92H32a20,20,0,0,0-20,20v88a20,20,0,0,0,20,20H204a28,28,0,0,0,27.78-24.53l12-96A28,28,0,0,0,237,77.47ZM36,116H68v80H36ZM220,96.5l-12,96a4,4,0,0,1-4,3.5H92V106.83L126.82,37.2A20,20,0,0,1,140,56V80a12,12,0,0,0,12,12h64a4,4,0,0,1,4,4.5Z"></path>
      </svg>
      <span>Job completed</span>
      <span className="opacity-50 text-sm">2m ago</span>
    </div>
  </div>
);
export default RatingSection;
