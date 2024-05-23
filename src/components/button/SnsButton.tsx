import { FiFacebook, FiGithub } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

type Props = {
  contentName: string;
  url: string;
  handleMouseEnter: (id: string) => void;
  handleMouseLeave: (id: string) => void;
  handleClickButton?: (url: string) => void;
};

export default function SnsButton(props: Props) {
  const {
    contentName,
    url,
    handleMouseEnter,
    handleMouseLeave,
    handleClickButton,
  } = props;

  const ICONS: { [key: string]: JSX.Element } = {
    Twitter: <RiTwitterXFill size={20} />,
    Facebook: <FiFacebook size={20} />,
    GitHub: <FiGithub size={20} />,
  };

  const bgColors: { [key: string]: string } = {
    Twitter: "bg-black",
    Facebook: "bg-blue-700",
    GitHub: "bg-black",
  };

  const renderIcon = () => {
    return ICONS[contentName] || null;
  };

  return (
    <button
      className="flex items-center justify-center w-[40px] h-[40px] border border-white/30 rounded-md bg-white/5 relative claymorphism z-10"
      onMouseEnter={() => handleMouseEnter(`${contentName}-bg`)}
      onMouseLeave={() => handleMouseLeave(`${contentName}-bg`)}
      onClick={handleClickButton ? () => handleClickButton(url) : () => {}}
    >
      {renderIcon()}
      <span
        id={`${contentName}-bg`}
        className={`absolute w-[40px] h-[40px] rounded-md ${bgColors[contentName]} -z-1`}
      ></span>
    </button>
  );
}
