import { routerName } from "@/consts/router";
import { usePathname } from "next/navigation";
import Div100vh from "react-div-100vh";
import {
  GoBell,
  GoBookmark,
  GoHome,
  GoHomeFill,
  GoMail,
  GoPerson,
  GoPersonFill,
  GoSearch,
} from "react-icons/go";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <Div100vh className="hidden md:block">
      <div className="relative h-screen w-60 text-white border-r border-slate-800 text-lg bg-slate-700">
        <div className="w-full h-full flex flex-col justify-between">
          <div>
            {/* product name or image */}
						<div className="w-full py-5 border-b border-slate-800">
              <p className='flex items-center justify-start ml-10'>Yuyakun.io</p>
            </div>

            {/* sidebar list */}
            <div>
              <button
                className={`w-full py-5 ${
                  pathname === routerName.HOME ? "bg-slate-800" : ""
                } `}
              >
                <div className=" flex items-center justify-start ml-10 gap-3">
                  {pathname === routerName.HOME ? <GoHomeFill /> : <GoHome size={20} />}
                  <p>ホーム</p>
                </div>
              </button>
              <button className="w-full py-5">
                <div className=" flex items-center justify-start ml-10 gap-3">
                  <GoSearch />
                  <p>検索</p>
                </div>
              </button>
              <button className="w-full py-5">
                <div className=" flex items-center justify-start ml-10 gap-3">
                  <GoMail />
                  <p>メッセージ</p>
                </div>
              </button>
              <button className="w-full py-5">
                <div className=" flex items-center justify-start ml-10 gap-3">
                  <GoBookmark />
                  <p>ブックマーク</p>
                </div>
              </button>
              <button className="w-full py-5">
                <div className=" flex items-center justify-start ml-10 gap-3">
                  <GoBell />
                  <p>通知</p>
                </div>
              </button>
            </div>
          </div>

          <button
            className={`w-full py-5 ${
              pathname === routerName.PROFILE ? "bg-slate-800" : ""
            }`}
          >
            <div className=" flex items-center justify-start ml-10 gap-3">
              {pathname === routerName.PROFILE ? (
                <GoPersonFill />
              ) : (
                <GoPerson size={20} />
              )}
              <p>プロフィール</p>
            </div>
          </button>
        </div>
      </div>
    </Div100vh>
  );
}
