import React from "react";
import { AboutLi } from "../style";
import Svg from "./Svg";

const Comp = () => {
  return (
    <div className="w-[92%] px-1 mx-auto py-20 gap-1 font-manrope">
      <div className="relative flex flex-col md:flex-row gap-x-6 col-lg-10 mx-auto my-6">
        <div
          className="md:w-6/12 js-build-in-item build-in-scale-right build-in-animate"
          style={{ transitionDelay: "0ms" }}
        >
          <div
            className="p-4 rounded mt-5 shadow-xl mb-6"
            style={{ background: "rgba(235, 245, 255, 0.2)" }}
          >
            <ul className="list-none mb-n4">
              <li
                className="mb-4 flex items-center justify-between f4-mktg js-build-in-item build-in-scale-fade build-in-animate"
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
                {/* <span className="f5 text-muted hidden sm:block">1m 21s</span> */}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="home-campaign-ghas-connect relative md:absolute z-1 flex items-center js-build-in-item build-in-scale-fade build-in-animate"
          style={{ transitionDelay: "400ms" }}
        >
          <div
            className="inline-block p-1 bg-emphasis"
            style={{ boxShadow: "0 0 0 2px #444D56" }}
          ></div>
          <div className="w-10 h-1 bg-gray-300"></div>
          <div
            className="inline-block p-1 bg-emphasis"
            style={{ boxShadow: "0 0 0 2px #444D56" }}
          ></div>
        </div>

        <div
          className="md:w-6/12  build-in-scale-right build-in-animate"
          style={{ transitionDelay: "600ms" }}
        >
          <div
            className="pt-2 pb-1 px-4 rounded-sm inline-block text-medium"
            style={{ background: "rgba(235, 245, 255, 0.2)" }}
          >
            The Airtasker Vision
          </div>
          <div
            className="p-4 rounded-bottom-2 rounded-right-2 shadow-xl mb-6"
            style={{ background: "rgba(235, 245, 255, 0.2)" }}
          >
            <ul className="list-none mb-n4">
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
