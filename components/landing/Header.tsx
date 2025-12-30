import { Flame } from "lucide-react";
import Link from "next/link";
import React from "react";

import {Link as ViewTransitionsLink} from "next-view-transitions"
import { Badge } from "../ui/badge";

const Header = () => {
  return (
    <>
      {/* Desktop Nav */}
      <div className="sticky top-0 left-0 right-0 z-50">
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
                border-x border-b
                border-[rgba(0,0,0,0.05)] dark:border-[rgba(70,70,70,0.7)]
                w-full sm:min-w-[800px] sm:max-w-[1200px]
                rounded-b-[28px]
                px-4 py-2.5
                relative
                transition-all duration-300 ease-in-out
              "
            >
              <div className="relative z-10 flex items-center justify-between w-full gap-2">
                {/* logo section */}
                <div className="flex items-center gap-6">
                  <Link href={"/"} className="flex items-center gap-2">
                    <Flame className="w-6 h-6 text-green-500 dark:text-green-400" />

                    <span className="hidden sm:block font-semibold">
                      StackUI
                    </span>
                  </Link>
                  <span className='text-zinc-300 dark:text-zinc-700'>|</span>

                  {/* Navigation */}
                  <div className='hidden sm:flex items-center gap-4'>
                      <ViewTransitionsLink
                      href={"/docs/components/background-paths"}
                      className='text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400
                      dark:hover:text-zinc-100 transition-colors'
                      >

                      Components 
                      </ViewTransitionsLink>
                      <ViewTransitionsLink
                      href={"/pricing"}
                      className='text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400
                      dark:hover:text-zinc-100 transition-colors'
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
