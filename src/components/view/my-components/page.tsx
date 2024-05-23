"use client";
import LikeButton from "@/components/button/LikeButton";
import SnsButton from "@/components/button/SnsButton";
import { SNS } from "@/consts/Sns";
import gsap from "gsap";

export default function MyComponents() {
  const handleMouseEnter = (id: string) => {
    const bg = document.getElementById(id);
    if (bg) {
      gsap.timeline().to(bg, {
        duration: 0.3,
        css: {
          transform: "rotate(30deg)",
          transformOrigin: "bottom",
        },
      });
    }
  };

  const handleMouseLeave = (id: string) => {
    const bg = document.getElementById(id);
    if (bg) {
      gsap.timeline().to(bg, {
        duration: 0.3,
        css: {
          transform: "rotate(0deg)",
          transformOrigin: "bottom",
        },
      });
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto h-full p-2">
      <div className="flex flex-col text-base md:text-lg text-black text-center">
        <p>私の可愛いコンポーネント達</p>
        <p>（今後、自学や遊びなどで増えていく予定）</p>
        <div className="border-b-2 border-slate-700" />
        <div className="grid grid-cols-3 h-full gap-3 mt-3">
          <div className="flex items-center justify-center border border-black/30 p-10 rounded-md neumorphism-inside">
            <LikeButton />
          </div>
          <div className="flex items-center justify-center text-white p-10 gap-5 rounded-md neumorphism-inside-slate">
            {SNS.map((sns, index) => {
              return (
                <SnsButton
                  key={index}
                  contentName={sns.contentName}
                  url={sns.url}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
