"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imageAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      imageAnimation.to(
        "img",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div id="resume" className="w-screen mb-8">
      <div className="relative mb-8 mt-10 flex flex-col items-center gap-5">
        <AnimatedTitle
          title="My Resume"
          containerClass="mt-5 !text-black text-center"
        />
      </div>
      <div className="flex flex-col items-center">
        <div ref={containerRef} className="w-[90vw] md:w-[80vw] lg:w-[50vw]">
          <img
            src="img/resume-1.jpg"
            alt="Background"
            className="opacity-0 rotate-25"
          />
          <img
            className="mt-5 opacity-0 rotate-25"
            src="img/resume-2.jpg"
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
