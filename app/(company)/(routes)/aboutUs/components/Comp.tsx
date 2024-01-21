import React from "react";
import { AboutConnector, AboutLi } from "../style";
import Svg from "./Svg";
import { cn } from "@lib/utils";
const Comp = ({reverse}:{reverse?: boolean}) => {
  return (
    <div className={cn( "md:w-[92%] w-[95.99%] px-1 mx-auto  font-manrope")}>
      <div className={`${reverse &&"md:flex-row-reverse pt-6"} "pt-10 relative flex flex-col md:flex-row mx-auto my-6"`}>
        <div
          className="md:w-[42.999%] hover:skew-y-1 "
          style={{ transitionDelay: "0ms" }}
        >
          <div
            className="p-4 rounded mt-5 shadow-xl md:mb-6"
            style={{ background: "rgba(235, 245, 255, 0.2)" }}
          >
            <ul className="list-none">
              <li
                className="mb-4 flex items-center justify-between"
                style={{ transitionDelay: "200ms" }}
              >
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    className="octicon octicon-check-circle-fill text-success mr-2"
                  >
                    <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                  </svg>
                  <span className="text-medium">
                    “The only way to do great work is to love what you do”
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <AboutConnector 
          
          style={{ transitionDelay: "400ms" }}
        >
          <div
            className="inline-block p-1 rounded-full"
            style={{ boxShadow: "0 0 0 2px #444D56" }}
          />
          <div className="md:w-full max-md:ml-[2px] md:h-1 h-14 w-1 bg-gray-300 relative z-[-1]"/>
          <div
            className="inline-block p-1 rounded-full"
            style={{ boxShadow: "0 0 0 2px #444D56" }}
          />
        </AboutConnector>

        <div
          className="md:w-6/12"
          style={{ transitionDelay: "600ms" }}
        >
          <div
            className="pt-2 pb-1 text-white bg-custom-dark px-4 rounded-t-sm inline-block text-medium"
          >
            The JBPromend Vision {reverse ? "1.02" : "1.01"}
          </div>
          <div
            className="p-4 rounded-r-sm  shadow-xl mb-6 text-sm"
            style={{ background: "rgba(235, 245, 255, 0.2)" }}
          >
            <ul className="">
              <AboutLi>
                <div className="flex items-center flex-1">
                  <Svg />
                  <span className="text-medium">
                    JBPromend is a trusted community platform that connects
                    people who need to outsource tasks and find local services,
                    with people who are looking to earn money and ready to work
                  </span>
                </div>
                {/* <span className="f5 text-muted hidden sm:block">1m 42s</span> */}
              </AboutLi>
              <AboutLi style={{ transitionDelay: "1000ms" }}>
                <div className="flex items-center">
                  <Svg />
                  <span className="text-medium">
                    From simple to complicated tasks, JBPromend can help you
                    complete your home cleaning, handyman jobs, admin work,
                    photography, graphic design or even build a website.
                  </span>
                </div>
              </AboutLi>
              <AboutLi style={{ transitionDelay: "1200ms" }}>
                <div className="flex items-center">
                  <Svg />
                  <span className="text-medium">
                    Go online or download the app and Airtasker will take you
                    from things to do to everything&lsquo;s done
                  </span>
                </div>
              </AboutLi>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp;
