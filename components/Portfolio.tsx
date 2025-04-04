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
            imgSrc="/img/enter-catalog.png"
            title="Enter Catalog"
            description="A users catalog of the company ENTER, which provides a professional, supportive and promoting space for people with employment barriers."
            technologies={[
              "Angular",
              "Angular Material",
              "SASS",
              "Nest.js",
              "TypeScript",
              "PostgreSQL",
              "JWT & Passport",
            ]}
          />
          <AppCard
            imgSrc="/img/pitangoux.png"
            href="https://www.pitangoux.com/"
            title="PitangoUX"
            description="PitangoUX is an end-to-end UX/UI service agency that I used to work for as a Full Stack Developer."
            technologies={[
              "React",
              "Redux",
              "Zustand",
              "Next.js",
              "Vue.js",
              "Laravel",
              "Express",
              "Nest.js",
              "TypeScript",
              "JavaScript",
              "PHP",
              "MongoDB",
              "MySQL",
            ]}
          />
          <AppCard
            imgSrc="/img/yna.png"
            href="https://www.yna.co.il/"
            title="Y&A"
            description="A software company that I used to work for as a Full Stack Developer."
            technologies={[
              "React",
              "Redux",
              "Zustand",
              "Next.js",
              "Vue.js",
              "Laravel",
              "Express",
              "Nest.js",
              "TypeScript",
              "JavaScript",
              "PHP",
              "MongoDB",
              "MySQL",
            ]}
          />
          <AppCard
            imgSrc="/img/recipes-and-ingredients.png"
            href="https://recipes-and-ingredients.vercel.app/"
            title="Recipes & Ingredients"
            description="A site where you could post your own recipes using our ingredients, also supports fetching recipes from a youtube video."
            technologies={[
              "Next.js 15",
              "React",
              "TypeScript",
              "Sanity",
              "TailwindCSS",
              "Zustand",
              "Clerk",
            ]}
          />
          <AppCard
            imgSrc="/img/everx-algoplanner.png"
            href="https://www.linkedin.com/company/ever-x/"
            title="AlgoPlanner"
            description="EverX (formerly known as AlgoPlanner) is a platform for supply chain planning teams to plan, build and customize automations."
            technologies={[
              "Electron",
              "React",
              "Nest.js",
              "TypeScript",
              "DynamoDB",
              "Material UI",
              "TailwindCSS",
              "SASS",
            ]}
          />
          <AppCard
            imgSrc="/img/fastjob.png"
            href="https://fastjob.vercel.app/"
            title="Fast Job"
            description="A platform where you can post your own jobs, or apply for existing ones."
            technologies={[
              "Next.js",
              "React",
              "Nest.js",
              "TypeScript",
              "MongoDB",
              "Material UI",
              "TailwindCSS",
              "SASS",
            ]}
          />
          <AppCard
            imgSrc="/img/outerz.jpg"
            href="https://github.com/ron1232/outerz/"
            title="OuterZ"
            description="A small ecommerce site that I built back in 2021."
            technologies={["React", "Bootstrap", "Redux", "Express.js", "JWT"]}
          />
          <AppCard
            imgSrc="/img/outerx.jpg"
            href="https://github.com/ron1232/outerx"
            title="OuterX"
            description="A small ecommerce site that I built back in 2021."
            technologies={["Laravel", "PHP", "MySQL"]}
          />
        </div>
      </div>
    </div>
  );
};
export default Features;
