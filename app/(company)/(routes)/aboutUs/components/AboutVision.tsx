import React from "react";

function AboutVision() {
  return (
    <div className="flex w-[92%] px-1 mx-auto py-20 gap-1 font-manrope">
      <div className=" inline-block">
      <div className=" bg-custom-dark text-slate-200 p-3 w-fit rounded-md">
        “The only way to do great work is to love what you do”
      </div>
      </div>
      <div className="relative after:top-0 bg-custom-dark h-2 w-[14%] mt-5 
      after:w-3 after:absolute after:-right-1 after:h-3 after:content-[''] 
      after:block after:bg-zinc-500  after:my-auto after:bottom-0 after:rounded-full
      before:w-3 before:absolute before:-left-1 before:h-3 before:content-[''] 
      before:block before:bg-zinc-500 before:top-0  before:my-auto before:bottom-0 before:rounded-full
       text-slate-200"/>
      <div className="flex-1 inline-block">
        <div className="space-y-5 divide-y divide-zinc-500 bg-custom-dark text-slate-200 p-3 w-fit rounded-md">

        <span>The Airtasker Vision</span>
        <p>
          Airtasker is a trusted community platform that connects people who
          need to outsource tasks and find local services, with people who are
          looking to earn money and ready to work
        </p>
        <p>
          AFrom simple to complicated tasks, Airtasker can help you complete
          your home cleaning, handyman jobs, admin work, photography, graphic
          design or even build a website.
        </p>
        <p>
          Go online or download the app and Airtasker will take you from things
          to do to everything&lsquo;s done
        </p>
        </div>
      </div>
    </div>
  );
}

export default AboutVision;
