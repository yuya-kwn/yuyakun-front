import MenuButton from "@/components/button/MenuButton";
import SnsButton from "@/components/button/SnsButton";
import { SNS } from "@/consts/Sns";
import gsap from "gsap";

export default function Header() {
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

	const handleClickButton = (url: string) => {
		window.open(url, "_blank");
	};
  return (
    <div className="flex items-center justify-between w-full h-[60px] md:h-[90px] bg-slate-800 text-4xl px-3 md:px-5 py-2">
      <p className="w-full text-xl md:text-2xl font-bold">yuyakun.io</p>
      <MenuButton handleClickButton={handleClickButton} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
      {/* <div className="flex gap-5">
        {SNS.map((sns, index) => {
          return (
            <SnsButton
              key={index}
              contentName={sns.contentName}
              contentColor={sns.contentColor}
              url={sns.url}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              handleClickButton={handleClickButton}
            />
          );
        })}
      </div> */}
    </div>
  );
}
