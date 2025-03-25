"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SocialLinks from "./SocialLinks";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const elRef = useRef(null);
  const elRef2 = useRef(null);
  const elRef3 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      elRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      elRef2.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      elRef3.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative h-dvh w-screen overflow-x-hidden bg-img-code2"
    >
      <div className="flex items-center text-center justify-center flex-col gap-5 text-white h-dvh">
        <p
          className="text-6xl font-semibold"
          ref={elRef}
          style={{ opacity: 0 }}
        >
          Ron Barak.
        </p>
        <p className="text-3xl font-medium" ref={elRef2} style={{ opacity: 0 }}>
          Full Stack Developer
        </p>
        <div className="mt-5" ref={elRef3} style={{ opacity: 0 }}>
          <SocialLinks
            containerClassName="text-white"
            iconsClassName="text-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
