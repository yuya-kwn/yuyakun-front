import Image from "next/image";
import Parameter from "./Parameter";
import { CgGenderMale } from "react-icons/cg";

export default function ProfileContent() {
  return (
    <div className="w-full px-3">
      <div className="flex items-center justify-center w-full gap-5 pt-3">
        <Image
          alt="profile-image"
          src="/profile-image.png"
          width={180}
          height={180}
          className="rounded-full w-24 h-24 md:w-36 md:h-36 neumorphism-outside border border-black/50"
        />
        <div className="w-full p-2 text-black font-bold text-base md:text-xl rounded-md neumorphism-inside">
          <p>名前：ゆうやくん</p>
          <p className="flex items-center">性別：<CgGenderMale className="text-blue-500" /></p>
          <p>生年月日：2003年04月13日</p>
          <p>MBTI：ENFJ</p>
        </div>
      </div>
      <div className="grid w-full md:flex gap-3 md:px-3 mt-4">
        <div className="grid w-full md:w-1/2 text-base md:text-lg text-black rounded-md p-5 neumorphism-outside">
          <p>高校を卒業した後、</p>
          <p>独学を経てWebアプリの開発に携わりエンジニアに。</p>
          <p>褒めると喜ぶ。甘いものが好き。</p>
          <p>バドミントンが大好き。</p>
        </div>
        <div className="grid w-full md:w-1/2 text-lg md:text-xl text-black font-semibold rounded-md gap-3 p-5 neumorphism-outside">
          <div className="flex items-center w-full">
            <p className="w-[100px]">HP</p>
            <Parameter numOfFull={14} />
          </div>
          <div className="flex items-center w-full">
            <p className="w-[100px]">こうげき</p>
            <Parameter numOfFull={13} />
          </div>
          <div className="flex items-center w-full">
						<p className="w-[100px]">ぼうぎょ</p>
						<Parameter numOfFull={12}/>
          </div>
          <div className="flex items-center w-full">
					<p className="w-[100px]">とくこう</p>
						<Parameter numOfFull={9} />
          </div>
          <div className="flex items-center w-full">
					<p className="w-[100px]">とくぼう</p>
						<Parameter numOfFull={11} />
					</div>
					<div className="flex items-center w-full">
					<p className="w-[100px]">すばやさ</p>
						<Parameter numOfFull={15} />
					</div>
        </div>
      </div>
    </div>
  );
}
