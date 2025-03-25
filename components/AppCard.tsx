"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AppCardProps {
  imgSrc: string;
  href?: string;
}

const AppCard: React.FC<AppCardProps> = ({ imgSrc, href }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<null | HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  const handleImageClick = () => {
    if (!href) return;
    window.open(href, "_blank")?.focus();
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".animated-sub-word");

      gsap.set(elements, {
        opacity: 0,
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
      className="app-card"
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      <Image
        width={540}
        height={270}
        src={imgSrc}
        alt=""
        className="cursor-pointer rounded-xl"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default AppCard;
