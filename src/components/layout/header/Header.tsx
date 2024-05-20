import { IoIosMenu } from "react-icons/io";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full h-[60px] md:h-[90px] bg-slate-800 text-4xl px-3 md:px-5 py-2">
      <p className="w-full text-xl md:text-2xl font-bold">
        yuyakun.io
      </p>
      <button className="md:hidden hover:rounded-full hover:bg-white/30 p-1 md:p-2">
        <IoIosMenu className='text-2xl md:text-3xl'/>
      </button>
    </div>
  );
}
