import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import SnsButton from "./SnsButton";
import { SNS } from "@/consts/Sns";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

type Props = {
  handleMouseEnter: (id: string) => void;
  handleMouseLeave: (id: string) => void;
  handleClickButton: (url: string) => void;
};

export default function MenuButton(props: Props) {
  const { handleMouseEnter, handleMouseLeave, handleClickButton } = props;
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();

  const handleMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="w-[100px] h-full border border-black/50 rounded-md menuButton text-base p-2 gap-2"
        onClick={handleMenuButtonClick}
      >
        {isOpen ? <RxCross2 size={15} /> : <RxHamburgerMenu size={15} />}
        <p>Menu</p>
      </button>
      {isOpen && (
        <div className="absolute bg-slate-800 rounded-b-md border-r border-l border-b border-black/50 w-[100px] h-[200px] top-[45px] right-0 p-1">
          <div
            id="menu"
            className="p-1 flex flex-col items-center justify-center gap-2"
          >
            {SNS.map((sns, index) => {
              return (
                <SnsButton
                  key={index}
                  contentName={sns.contentName}
                  url={sns.url}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  handleClickButton={handleClickButton}
                />
              );
            })}
            <Link
              href={`${path.match("/my-components") ? "/" : "/my-components"}`}
              className="hover:text-blue-200"
            >
              <p className="text-sm underline">
                {path.match("/my-components") ? "Home" : "Components"}
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
