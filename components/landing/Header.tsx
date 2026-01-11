import { Flame, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { PartyPopper } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { Link as ViewTransitionsLink } from "next-view-transitions"
import { Badge } from "../ui/badge";
import { ThemeToggle } from "../ui/theme-toggle";

export function Header() {
  return (
    <>
      {/* Mobile Pro Banner Completely seprated from sticky header */}
      <div className="sm:hidden w-full p-2.5 bg-white dark:bg-black/5">
        <Link href={"#"} target="_blank" className="flex items-center justify-center gap-2">

          {/*<span className="flex items-center gap-2">
            <PartyPopper className="w-3.5 h-3.5" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-500 via-purple-500 to-pink-500">
              Explore New Components
            </span>
          </span> */}

          {/* <div className="group relative inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-zinc-900 dark:bg-zinc-100 transition-colors">
            <div className="absolute inset-0 rounded-lg bg-linear-to-r from-fuchsia-600 via-purple-500 to-pink-400 group-hover: opacity-80 blur-sm transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-white dark:text-zinc-900">
                Stack UI Pro
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
            </div>
          </div> */}
        </Link>

      </div>


      {/* Desktop Nav */}
      <div className="sticky top-5 left-0 right-0 z-50">
        <div className="bg-white dark:bg-background/5 w-full">
          <div className="flex items-center justify-center w-full flex-col">
            {/* header content here */}
            <div
              className="
                flex items-center justify-between
                bg-linear-to-b from-white/90 via-gray-50/90 to-white/90
                dark:from-zinc-900/90 dark:via-zinc-950/90 dark:to-zinc-900/90
                shadow-[0_2px_10px_rgba(0,0,0,0.1)]
                backdrop-blur-md
                border-x border-b border-y
                border-[rgba(0.5,0.5,0.5,0.05)] dark:border-[rgba(70,70,70,70)]
                w-full sm:min-w-[800px] sm:max-w-[1200px]
                rounded-[30px]
                px-2 sm:px-4 py-2 sm:py-2.5
                relative
                transition-all duration-300 ease-in-out"
            >
              <div className="relative z-10 flex items-center justify-between w-full gap-1 sm:gap-2">
                {/* logo section */}
                <div className="flex items-center gap-2 sm:gap-6">
                  <Link href={"/"} className="flex items-center gap-1 sm:gap-2">
                    <Flame className="w-4 h-4 sm:w-6 sm:h-6 text-green-500 dark:text-green-400" />

                    <span className="text-xs sm:text-base font-semibold">
                      StackUI
                    </span>
                  </Link>
                  <span className='text-zinc-300 dark:text-zinc-700 hidden sm:inline'>|</span>

                  {/* Navigation */}
                  <div className='flex items-center gap-1.5 sm:gap-4'>
                    <ViewTransitionsLink
                      href={"/docs/components/background-paths"}
                      className='text-[10px] sm:text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400
                      dark:hover:text-zinc-100 transition-colors whitespace-nowrap'
                    >
                      Components
                    </ViewTransitionsLink>
                    <ViewTransitionsLink
                      href={"/pricing"}
                      className='text-[10px] sm:text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400
                      dark:hover:text-zinc-100 transition-colors whitespace-nowrap'
                    >

                      Pricing
                    </ViewTransitionsLink>

                    <Link
                      href={"#"}
                      target="_blank"
                      className='text-sm text-zinc-600 hover:text-zinc-900
                      dark:text-zinc-400dark:hover:text-zinc-100 transition-colors flex items-center gap-2'
                    >

                      Templates
                      <Badge variant={"brand"}>
                        new
                      </Badge>
                    </Link>
                  </div>
                </div>

                {/* Right side items */}
                <div className="flex items-center gap-1.5 sm:gap-3">
                  <span className="text-zin-300 dark:text-zinc-700 hidden sm:inline">
                    |
                  </span>
                  <ThemeToggle />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
