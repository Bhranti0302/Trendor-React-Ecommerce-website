import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Banner({ title, subtitle, fadedText, fromColor, toColor, image }) {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const fadedTextRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      bannerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        fadedTextRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 0.2, scale: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 1 },
        "-=1"
      );
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative rounded-2xl m-4 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${fromColor}, ${toColor})`,
      }}
    >
      {/* Faded Background Text */}
      {fadedText && (
        <h1
          ref={fadedTextRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     uppercase text-white/20 text-5xl sm:text-[80px] md:text-[100px] xl:text-[150px] 
                     font-bold pointer-events-none select-none z-0"
        >
          {fadedText}
        </h1>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 items-center p-16 md:p-8 h-auto md:h-[60vh] lg:h-[80vh] relative z-10">
        {/* Left Section (Text) */}
        <div className="flex flex-col justify-center gap-4 text-center sm:text-left order-2 sm:order-1 lg:px-28">
          {/* Title */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white"
          >
            {title}
          </h1>

          {/* Subtitle */}
          <h2
            ref={subtitleRef}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-stone-200"
          >
            {subtitle}
          </h2>

          {/* Button */}
          <div className="flex items-center mt-4">
            <button className="bg-white text-gray-900 cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full">
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div ref={imageRef} className="order-1 sm:order-2 flex justify-center">
          <img
            src={image}
            alt="banner"
            className="w-[350px] sm:w-[500px] lg:w-[600px] h-auto object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
