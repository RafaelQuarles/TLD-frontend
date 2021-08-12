import React, { useState, useEffect } from "react";
import bgvid from "~/images/bgvid.mp4";
import bgpic from "~/images/bgpic.png";
import { Link } from "gatsby";

const Hero = () => {
  const [video, setVideo] = useState(true);

  const showVideo = () => {
    if (window.innerWidth <= 960) {
      setVideo(false);
    } else {
      setVideo(true);
    }
  };

  useEffect(() => {
    showVideo();
  }, []);

  return (
    <div className="styleHero flex pb-40 items-center justify-center rounded-2xl">
      {video ? (
        <video src={bgvid} autoPlay muted className="styleBG" />
      ) : (
        <img src={bgpic} alt="bg" className="styleBG" />
      )}

      <div className=" text-center textBox">
        <h1 className="text-gray-100 font-extrabold text-5xl xs:text-5xl md:text-6xl pb-1">
          Your Local
        </h1>
        <h2 className="text-gray-200 font-extrabold text-4xl xs:text-4xl md:text-5xl pb-6">
          Paper & Plastic Company
        </h2>
        <p className="text-gray-200 font-extrabold text-lg xs:text-2xl md:text-2xl leading-tight mb-20">
          What are you waiting for?
        </p>
        <Link
          className="w-40 p-4 text-center font-medium text-yellow-400 rounded-md border-2 border-yellow-400 customButton"
          to="/#contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Hero;
