"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  containerClass?: string;
}

const AnimatedSubtitle: React.FC<Props> = ({ title, containerClass }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".animated-sub-word");

      gsap.set(elements, {
        opacity: 0,
        transform: "translate3d(0, 20px, 0) rotateY(15deg) rotateX(10deg)",
      });

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
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
    <div
      ref={containerRef}
      className={clsx("animated-subtitle", containerClass)}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              className="animated-sub-word"
              key={idx}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedSubtitle;
