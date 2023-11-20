"use client";

import { BsGithub, BsTwitter } from "react-icons/bs";
import { GiCoffeeCup } from "react-icons/gi";

import { usePathname } from "next/navigation";

export default () => {
  const pathname = usePathname();
  return (
    <header className= "mx-auto w-full max-w-7xl px-4 md:px-10 mt-8 md:mt-12">
      <div className= "flex items-center">
        <h1 className= "text-lg md:text-3xl font-medium ">
          <a
            className= "bg-cover bg-center px-3 py-3 md:px-4 md:py-4 m text-red cursor-pointer"
            href="#"
            // style={{
            //   backgroundImage: "url('/brand.svg')",
            // }}
          >
            Best GPTs
          </a>
        </h1>

        <div className= "flex-1">
          <ul className= "hidden md:flex float-right text-lg text-slate-700 mr-4 items-center">
            <li className= "mx-4">
              <a
                href="#"
                target="_self"
                className={
                  pathname === "/extension"
                    ? "text-[#2752f4]"
                    : "hover:text-[#2752f4]"
                }
              >
                About
              </a>
            </li>
            <li className= "mx-4">
              <a
                href="#"
                target="_blank"
                className= "hover:text-[#2752f4]"
              >
                GPTs
              </a>
            </li>
            <li className="mx-4">
              <a
                href="/"
                target="_blank"
                className= "hover:text-[#2752f4]"
              >
                <BsGithub className= "text-xl" />
              </a>
            </li>
            <li className= "mx-4">
              <a
                href="#"
                target="_blank"
                className= "hover:text-[#2752f4]"
              >
                <BsTwitter className= "text-xl" />
              </a>
            </li>
            <li>
              <a href="https://www.buymeacoffee.com/justinxie5d" 
                target="_blank"
              >
                <GiCoffeeCup className= "text-xl bg-yellow-400" />
              </a>
            </li>
          </ul>
        </div>
       
      </div>
    </header>
  );
};
