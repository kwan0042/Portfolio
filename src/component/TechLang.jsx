import { RiReactjsLine } from "react-icons/ri";
import aspIcon from "../assets/logo/aspnetcore-logo.png";
import { BiLogoPhp } from "react-icons/bi";
import { FaWordpress } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

function TechLang() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={aspIcon} className=" h-[72px]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPhp className="text-7xl text-[#787CB5]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaWordpress className="text-7xl text-[#52ACCC]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAdobe className="text-7xl text-[#FF0000]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaFigma className="text-7xl " />
        </div>
      </div>
    </div>
  );
}

export default TechLang;
