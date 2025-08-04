"use client";

import React, { useRef, useEffect } from "react";
import AppCard from "./AppCard";
import AnimatedTitle from "./AnimatedTitle";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { appCardList } from "@/utils/appCardList";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".app-card");

      gsap.set(elements, {
        opacity: 0,
      });

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(elements, {
        opacity: 1,
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="portfolio" className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <AnimatedTitle title="My Portfolio" />
        </div>
        <div
          ref={containerRef}
          className="flex flex-wrap justify-center gap-10"
        >
          {appCardList.map((appCard) => (
            <AppCard key={appCard.id} {...appCard} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Features;
