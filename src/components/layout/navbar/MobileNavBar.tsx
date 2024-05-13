import { routerName } from "@/consts/router";
import { usePathname } from "next/navigation";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { GoBell, GoBookmark, GoHome, GoHomeFill } from "react-icons/go";
import { MdMailOutline } from "react-icons/md";

export default function MobileNavBar() {
  const pathname = usePathname();
  return (
    <div>
      <div className="md:hidden">
        <div className="w-full p-5 fixed bottom-0 bg-slate-700 text-white">
          <div className='flex justify-between'>
            <div className={`opacity-50`}>
              <GoBookmark size={25} />
            </div>
            <div className={`opacity-50`}>
              <MdMailOutline size={25} />
            </div>
            <div className={`${pathname === routerName.HOME ? '' : 'opacity-50'}`}>
              {pathname === routerName.HOME ? <GoHomeFill size={25} /> : <GoHome size={25} />}
            </div>
            <div className={`opacity-50`}>
              <GoBell size={25} />
            </div>
            <div className={`opacity-50`}>
              <BsPersonCircle size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
