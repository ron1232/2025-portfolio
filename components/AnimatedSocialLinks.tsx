"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialLinks from "./SocialLinks";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSocialLinks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-center gap-4 mt-10"
      style={{ opacity: 0 }}
    >
      <SocialLinks iconsClassName="text-4xl" />
    </div>
  );
};

export default AnimatedSocialLinks;
