import { Metadata } from 'next'
import React from 'react';


export const metadata:Metadata = {
    title: 'About us | JBpromend NG',
    description: 'ask about our product',
}
const page = () => {
  return (
    <section className='max-w-7xl mx-auto '>
      <div className='min-h-[60vh] w-11/12 rounded-md mx-auto flex justify-between p-6 bg-[#F9F3EF] '>
      <div className='flex-1'>
        <h1 className='text-5xl'>We&apos;re making a difference to people&apos;s lives</h1>
        <p>Creating a way to connect people ready to work, with people who need work done</p>
      </div>
      <div className="min-h-[240px] min-w-80 bg-red-300 flex-1">
        <YourComponent/>

        <div className="position-relative d-flex flex-column flex-md-row gutter-spacious col-lg-10 mx-auto my-lg-6">
        <div className="col-md-6 js-build-in-item build-in-scale-right build-in-animate">
          <div className="p-4 rounded mt-5 box-shadow-mktg-xl mb-6" >
            <ul className="list-style-none mb-n4">
                <li className="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade build-in-animate">
                  <div className="d-flex flex-items-center">
                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-check-circle-fill color-fg-success mr-2">
    <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
</svg>
                    <span className="text-medium">Build</span>
                  </div>
                  <span className="f5 color-fg-muted d-none d-sm-block">1m 21s</span>
                </li>
            </ul>
          </div>
        </div>

        <div className="home-campaign-ghas-connect position-relative position-md-absolute z-1 d-flex flex-items-center js-build-in-item build-in-scale-fade build-in-animate" >
          <div className="d-inline-block circle p-1 color-bg-emphasis" style={{boxShadow: "0 0 0 2px #444D56;"}}></div>
          <div style={{width: "40px", height: "2px", background: "#D1D5DA;"}}></div>
          <div className="d-inline-block circle p-1 color-bg-emphasis" style={{boxShadow: "0 0 0 2px #444D56;"}}></div>
        </div>

        <div className="col-md-6 js-build-in-item build-in-scale-right build-in-animate" >
          <div className="pt-2 pb-1 px-4 rounded-top-2 d-inline-block text-medium" >
            Steps
          </div>
          <div className="p-4 rounded-bottom-2 rounded-right-2 box-shadow-mktg-xl mb-6">
            <ul className="list-style-none mb-n4">
                <li className="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade build-in-animate" >
                  <div className="d-flex flex-items-center">
                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-check-circle-fill color-fg-success mr-2">
    <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
</svg>
                    <span className="text-medium">Initialize CodeQL</span>
                  </div>
                  <span className="f5 color-fg-muted d-none d-sm-block">1m 42s</span>
                </li>
                <li className="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade build-in-animate" >
                  <div className="d-flex flex-items-center">
                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-check-circle-fill color-fg-success mr-2">
    <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
</svg>
                    <span className="text-medium">Autobuild</span>
                  </div>
                  <span className="f5 color-fg-muted d-none d-sm-block">1m 24s</span>
                </li>
                <li className="mb-4 f4-mktg d-flex flex-items-center flex-justify-between js-build-in-item build-in-scale-fade build-in-animate" >
                  <div className="d-flex flex-items-center">
                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-check-circle-fill color-fg-success mr-2">
    <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
</svg>
                    <span className="text-medium">Perform CodeQL Analyses</span>
                  </div>
                  <span className="f5 color-fg-muted d-none d-sm-block">1m 36s</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default page


const YourComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
        {/* Central Circle */}
        <circle cx="300" cy="300" r="50" fill="#3498db" />

        {/* Wireframes connecting to smaller circles */}
        {Array.from({ length: 8 }).map((_, index) => (
          <g key={index} transform={`rotate(${index * 45} 300 300)`}>
            {/* Wireframe Line */}
            <line x1="300" y1="300" x2="450" y2="300" stroke="#2ecc71" strokeWidth="2" />

            {/* Smaller Circular Image */}
            <circle cx="450" cy="300" r="20" fill="#e74c3c" />
          </g>
        ))}
      </svg>
    </div>
  );
};

// element.style {
//   transform: perspective(700px) rotateX(-0.03deg) rotateY(-0.03deg);