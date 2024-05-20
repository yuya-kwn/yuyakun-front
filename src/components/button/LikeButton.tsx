import gsap from "gsap";
import { useState } from "react";
import { IoIosHeart } from "react-icons/io";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeButtonClick = () => {
    const like = document.getElementById("like");
    const circle = document.querySelector(".circle");
    if (like && circle && !isLiked) {
      gsap.from(like, { scale: 1, duration: 0.2 });
      gsap.to(like, { scale: 1.25, duration: 0.2, repeat: 1, yoyo: true });
      expandCircleAnim(circle);
    }
    setIsLiked(!isLiked);
  };
  const expandCircleAnim = (target: gsap.TweenTarget) => {
    gsap
      .timeline()
      .to(target, { scale: 1, opacity: 0, duration: 0.1 })
      .to(target, { scale: 3.5, opacity: 1, duration: 0.1 })
      .to(target, { scale: 7, opacity: 0, duration: 0.1 });
  };
  
  return (
    <div>
      <button
        className={`flex items-center justify-center w-[30px] h-[60px] rounded-full ${
          !isLiked ? "neumorphism-outside" : "neumorphism-inside"
        }`}
        onClick={handleLikeButtonClick}
      >
        <IoIosHeart
          id="like"
          className={`${isLiked ? "text-red-400" : "text-black"}`}
        />
        <span className="circle"></span>
      </button>
    </div>
  );
}
