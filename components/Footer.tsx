const Footer = () => {
  
    return (
      <div className="bg-custom-greaner/60 font-montserrat text-custom-dark mt-14 bg-footer py-10 mb-0 relative">
           <span className="text-xl left-14 max-sm:left-4 max-sm:inline max-sm:text-sm text-custom-dark top-1/4 max-sm:top-20 max-md:hidden block  absolute z-20">
                &#x2726;
              </span>
        <div className=" w-10/12 max-sm:w-full max-sm:pl-10 mx-auto grid grid-cols-5 mb-5 max-md:grid-cols-1 max-sm:space-y-12">
          <div className="col-span-2 max-sm:col-span-1 pr-12 max-md:pr-0">
            <div className="font-clash text-3xl font-bold my-6 ">
            JBProMend
            </div>
            <p className="flex flex-col gap-10 max-sm:text-sm pr-3">
              <span>
              JBProMend is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
              </span>
              <span>
                <span>Terms of Use </span>
                <span> Privacy Policy</span>
              </span>
            </p>
          </div>
          <div className="space-y-5 relative">
               <span className="text-xl right-10 max-sm:text-sm text-zinc-600 bottom-3/4 max-md:bottom-1/2  absolute z-20">
                &#x2726;
              </span>
            <p className="text-custom-highlight">Useful Links</p>
            <p className="block cursor-pointer" >Overview</p>
            <p  className="block cursor-pointer">Timeline</p>
            <p  className="block cursor-pointer" >FAQs</p>
            <p  className="block cursor-pointer">Register</p>
            <div className="flex gap-4 items-center">
              <p className="text-custom-highlight">Follow us</p>
              {/* <div className="flex items-center gap-3 object-contain">
                <LinkRoute to={"https://getlinked.ai"}>
                  <img src={ICON.insta} alt="" />
                </LinkRoute>
                <LinkRoute to={"https://getlinked.ai"}>
                  <img src={ICON.x} alt="" />
                </LinkRoute>
                <LinkRoute to={"https://romauld.vercel.app/"}>
                  <img src={ICON.facebook} alt="" />
                </LinkRoute>
                <LinkRoute to={"https://getlinked.ai"}>
                  <img src={ICON.linked} alt="" />
                </LinkRoute>
              </div> */}
            </div>
          </div>
          <div className="space-y-5 relative">
               <span className="text-xl right-10 max-sm:text-sm text-zinc-600 bottom-3/4 max-md:bottom-1/2  absolute z-20">
                &#x2726;
              </span>
            <p className="text-custom-highlight">Popular Locations</p>
            <p className="block cursor-pointer" >Enugu</p>
            <p  className="block cursor-pointer">Lagos</p>
            <p  className="block cursor-pointer" >Anambra</p>
            <p  className="block cursor-pointer">Abia</p>
            <p  className="block cursor-pointer">Ebonyi</p>
            <div className="flex gap-4 items-center">
              <p className="text-custom-highlight">Follow us</p>
            </div>
          </div>
          <div className="space-y-5 relative">
               <span className="text-xl right-0 m ax-sm:text-sm text-white bottom-0 max-md:bottom-1/2  absolute z-20">
                &#x2726;
              </span>
            <p className="text-custom-highlight">Contact Us</p>
            <p className="flex gap-4 items-center">
              {/* <img src={ICON.call} alt="" className="object-contain"/> */}
              <span>+234 679 81819</span>
            </p>
  
            <div className="flex gap-4 ">
              {/* <img src={ICON.gp} alt="" className="object-contain -mt-10"/> */}
              <div>
                <p>27,Alara Street</p>
                <p>Yaba 100012</p>
                <p>Lagos State</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 pb-5 relative">
        <span className="text-xl max-sm:text-sm text-custom-highlight textt-center block pb-4">
                &#x2726;
              </span>
              <span>
              All rights reserved. © getlinked Ltd.
              </span>
          </div>
      </div>
    );
  };
  export default Footer