"use client";
import gsap from "gsap";
import { useState } from "react";
import { IoIosHeart } from "react-icons/io";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeButtonClick = () => {
    const like = document.getElementById("like");
    const circle = document.querySelector(".circle");
    const particles = document.querySelectorAll(".particle");
    const subParticles = document.querySelectorAll(".sub-particle");
    if (like && circle && particles && !isLiked) {
      handleIsLikeHeartAnim(like);
      expandCircleAnim(circle);
      expandParticleAnim(particles, subParticles);
    } else {
      gsap.from(like, { scale: 1.25, duration: 0.3 });
      gsap.to(like, { scale: 1, duration: 0.3 });
    }
    setIsLiked(!isLiked);
  };

  const handleIsLikeHeartAnim = (target: gsap.TweenTarget) => {
    gsap
      .timeline()
      .to(target, { scale: 0, duration: 0.1 })
      .to(target, { scale: 1, duration: 0.1 })
      .to(target, { scale: 0.8, duration: 0.2 })
      .to(target, { scale: 1, duration: 0.2 })
      .to(target, { scale: 0.9, duration: 0.15 })
      .to(target, { scale: 1, duration: 0.15 });
  };

  const expandCircleAnim = (target: gsap.TweenTarget) => {
    gsap
      .timeline()
      .to(target, { scale: 0, opacity: 0, duration: 0.15 })
      .to(target, { scale: 3, opacity: 1, duration: 0.15 })
      .to(target, { scale: 6, opacity: 0, duration: 0.15 });
  };

  const expandParticleAnim = (
    particles: NodeListOf<Element>,
    subParticles: NodeListOf<Element>
  ) => {
    particles.forEach((el, index) => {
      gsap
        .timeline()
        .to(el, {
          duration: 0.2,
          css: {
            transform: `rotate(${
              index * (360 / particles.length)
            }deg) translateX(0px)`,
            background:
              index % 3 === 1 ? "green" : index % 3 === 2 ? "red" : "blue",
            opacity: 0,
          },
        })
        .to(el, {
          duration: 0.4,
          css: {
            transform: `rotate(${
              index * (360 / particles.length)
            }deg) translateX(15px)`,
            opacity: 1,
          },
        })
        .to(el, {
          duration: 0.2,
          css: {
            opacity: 0,
          },
        })
        .to(el, {
          duration: 0.2,
          css: {
            transform: `rotate(${
              index * (360 / particles.length)
            }deg) translateX(0px)`,
          },
        });
    });
    subParticles.forEach((el, index) => {
      gsap
        .timeline()
        .to(el, {
          duration: 0.2,
          css: {
            transform: `rotate(${
              index * (360 / subParticles.length)
            }deg) translateX(0px)`,
            background:
              index % 3 === 1 ? "red" : index % 3 === 2 ? "blue" : "green",
            opacity: 0,
          },
        })
        .to(el, {
          duration: 0.4,
          css: {
            transform: `rotate(${
              index * (360 / subParticles.length)
            }deg) translateX(10px)`,
            opacity: 1,
          },
        })
        .to(el, {
          duration: 0.2,
          css: {
            opacity: 0,
          },
        })
        .to(el, {
          duration: 0.2,
          css: {
            transform: `rotate(${
              index * (360 / subParticles.length)
            }deg) translateX(0px)`,
          },
        });
    });
  };

  return (
    <button
      className={`flex items-center justify-center w-[30px] h-[60px] rounded-full ${
        !isLiked ? "neumorphism-outside" : "neumorphism-inside"
      }`}
      onClick={handleLikeButtonClick}
    >
      <IoIosHeart
        id="like"
        className={`${isLiked ? "text-red-600" : "text-black"}`}
      />
      <span className="circle"></span>
      <span className="particle"></span>
      <span className="particle"></span>
      <span className="particle"></span>
      <span className="particle"></span>
      <span className="particle"></span>
      <span className="particle"></span>
      <span className="sub-particle"></span>
      <span className="sub-particle"></span>
      <span className="sub-particle"></span>
      <span className="sub-particle"></span>
      <span className="sub-particle"></span>
      <span className="sub-particle"></span>
    </button>
  );
}
