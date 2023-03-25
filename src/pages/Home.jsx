import React from "react";
import Shortener from "../components/Shortener";
import Statistic from "../components/Statistic";
function Home() {
  return (
    <div>
      {/* landing */}
      <div className="pt-24 relative mb-48 xl:mb-72">
        <div className="-translate-y-16 h-1/2 block w-135% ml-4 md:ml-0 lg:absolute lg:-right-0 lg:w-2/5 lg:top-0 -z-10 lg:translate-x-20 lg:translate-y-16">
          <img
            src="./illustration-working.svg"
            alt="Illustration working"
            className="m-auto"
          />
        </div>
        <div className="container">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl lg:leading-tight font-bold text-very-dark-blue m-3 mt-0 lg:m-0">
              More than just shorter links
            </h1>
            <p className="text-grayish-violet px-4 lg:px-0 lg:m-0 m-3">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn-primary px-8 mt-5">
              <p>Get Started</p>
            </button>
          </div>
        </div>
      </div>
      {/* adv statistics/shortener */}
      <div className="bg-grayish-violet pb-20">
        {/* shortening component */}
        <Shortener />
        {/* Statistics */}
        <div className="text-center mx-auto w-11/12 lg:w-1/2 mt-8">
          <h1 className="font-bold text-4xl text-very-dark-blue">
            Advanced Statistics
          </h1>
          <p className="text-grayish-violet lg:w-4/5 mx-auto mt-3">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="relative lg:flex container mt-28">
          {/* green line */}
          <div className="absolute w-2 h-full top-0 left-1/2 -translate-x-1/2 bg-cyan lg:h-2 lg:w-1/2 lg:top-1/2"></div>
          {/* cards */}
          {[
            {
              header: "Brand Recognition",
              paragraph:
                "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
              icon: "brand-recognition",
            },
            {
              header: "Detailed Records",
              paragraph:
                "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
              icon: "detailed-records",
            },
            {
              header: "Fully Customizable",
              paragraph:
                "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
              icon: "fully-customizable",
            },
          ].map((statistic) => (
            <Statistic
              key={statistic.icon}
              header={statistic.header}
              paragraph={statistic.paragraph}
              icon={statistic.icon}
            />
          ))}
        </div>
      </div>
      {/* boost */}
      <div className="flex flex-col p-10 py-16 justify-center items-center bg-dark-violet relative">
        {/* <img
          className="absolute right-0 top-0 h-full w-full"
          src="./bg-boost-desktop.svg"
          alt="hehe"
        /> */}
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="./bg-boost-desktop.svg"
            className="absolute right-0 top-0 h-full w-full"
          />
          <img
            src="./bg-boost-mobile.svg"
            alt="bg-shorten"
            className="absolute right-0 top-0 h-full w-full"
          />
        </picture>
        <h1 className="text-white text-2xl lg:text-3xl font-bold mb-6 relative z-10">
          Boost your links today
        </h1>
        <button className="btn-primary px-8 relative z-10">
          <p>Get Started</p>
        </button>
      </div>
      
    </div>
  );
}

export default Home;
