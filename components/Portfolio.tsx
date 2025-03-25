"use client";

import React, { useRef, useEffect } from "react";
import AppCard from "./AppCard";
import AnimatedTitle from "./AnimatedTitle";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          <AppCard
            imgSrc="/img/recipes-and-ingredients.png"
            href="https://recipes-and-ingredients.vercel.app/"
          />
          <AppCard
            imgSrc="/img/everx-algoplanner.png"
            href="https://www.linkedin.com/company/ever-x/"
          />
          <AppCard
            imgSrc="/img/fastjob.png"
            href="https://fastjob.vercel.app/"
          />
          <AppCard
            imgSrc="/img/outerz.jpg"
            href="https://github.com/ron1232/outerz/"
          />
          <AppCard
            imgSrc="/img/outerx.jpg"
            href="https://github.com/ron1232/outerx"
          />
          <AppCard
            imgSrc="/img/pitangoux.png"
            href="https://www.pitangoux.com/"
          />
          <AppCard imgSrc="/img/yna.png" href="https://www.yna.co.il/" />
          <AppCard imgSrc="/img/enter-catalog.png" />
        </div>
      </div>
    </div>
  );
};
export default Features;
