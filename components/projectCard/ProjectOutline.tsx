import { ButtonWrapper } from "@components/Button/ButtonStyle";

const ProjectOutline = () => {
  const data = [
    {caption:"Describe what you need done", text:"What specific task or service do you need assistance with? Please describe it in detail."},
    { caption: "Set your budget", text:"What is your budget for the task or service you described?"}, 
     {caption:"Get quotes and choose the top-rated Tasker", text:"Ready to receive quotes?"}]
  return (
    <section className=" pt-5 pb-10 text-gray-600  w-full ">
      <div className=" mx-auto flex flex-wrap">
        {data.map((item, i)=>(
          <div key={"key"+i} className="flex relative w-full mx-auto items-start">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 
          inline-flex items-center justify-center bg-white border border-zinc-400
           relative z-10 title-font font-medium text-sm text-custom-greaner">
            {i+1}
          </div>
          <div className="flex-grow md:pl-2 pl-1 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-grow sm:pl-6 mt-2 sm:mt-0 pb-5">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                {item.caption}
              </h2>
              <p className="leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
      <ButtonWrapper className="mt-10 max-lg:w-1/2 mx-auto"> Post task</ButtonWrapper>
    </section>
  );
};

export default ProjectOutline;