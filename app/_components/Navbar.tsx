"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Link {
  path: string;
  pathName: string | JSX.Element;
}
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links: Link[] = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/about",
      pathName: "About",
    },
    {
      path: "/contact",
      pathName: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="white"
          className="fill-current text-white group-hover:text-red-300 transition-all duration-300 ease-in"
        >
          <path d="m480-80-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 75-24.5 144t-67 128q-42.5 59-101 107T480-80Zm80-146q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460-720q-44 0-74 24.5T344-636l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480-558q-35 30-42.5 47.5T430-448Zm30-65Z" />
        </svg>
      ),
    },
  ];
  return (
    <>
      <nav className="flex flex-col md:flex-row text-white w-full items-center bg-gradient-to-b from-orange-600 to-red-400 justify-between px-1 md:px-2 lg:px-6 py-1">
        <div className="font-bold tracking-wide">HawKart</div>
        <div className="font-semibold text-xs md:text-sm">
          Help : +028991096 | Email : hawkart@gmail.com
        </div>
      </nav>
      {/* SECOND NAV */}
      <div className="flex items-center justify-between text-black bg-red-400 ps-2 sticky top-0 left-0 right-0">
        <div className="flex items-center gap-2 ml-auto flex-row-reverse w-full lg:w-1/2">
          <div className="p-1 shadow-sm border-[1px] border-red-200 m-1 bg-red-100 w-full">
            <input
              className="outline-none bg-transparent text-sm w-full"
              type="text"
              name=""
              id=""
              title="search"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // fill="white"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
            className="transition-all duration-250 ease-in hover:scale-[0.85] fill-slate-50 opacity-90 drop-shadow-sm"
          >
            <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
          </svg>
          <Button
            variant="default"
            size="sm"
            className="bg-orange-600 hover:bg-red-600 text-sm font-semibold rounded-none my-1 text-white"
          >
            Find
          </Button>
        </div>
        <ul className="hidden md:flex items-center">
          {links.map((link) => (
            <li
              className="hover:bg-white hover:text-red-300 py-2 px-2 group transition-all duration-300 ease-in"
              key={link.path}
            >
              <Link href={link.path}>{link.pathName}</Link>
            </li>
          ))}
        </ul>
        <div
          className="hamburger flex flex-col gap-[3px] bg-slate-50 mx-1 p-1 rounded-sm text-center"
          onClick={() => setOpen(!open)}
        >
          <div
            className={`w-4 h-[3px] rounded-lg bg-orange-500 transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[1px] w-6" : ""
            } origin-top-left`}
          ></div>
          <div
            className={`w-4 h-[3px] rounded-lg bg-orange-500 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-4 h-[3px] rounded-lg bg-orange-500 transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[1px] w-6" : ""
            } origin-bottom-left`}
          ></div>
        </div>
      </div>
    </>
  );
}
