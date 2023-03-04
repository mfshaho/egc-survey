"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n-config";
import Image from "next/image";
import { useColorScheme } from "@/utils";
export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const worldSvg: string = "/lang.png";
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const colorScheme = useColorScheme();
  let langDir: string = "";
  if (pathName == "/en") {
    langDir = "right-0";
  } else {
    langDir = "left-0";
  }
  return (
    <div>
      <div className="flex gap-1 items-center uppercase font-medium relative">
        <div
          onClick={() => setdropdownOpen(!dropdownOpen)}
          className="rounded-full flex justify-center items-center
                            hover:cursor-pointer
                            "
        >
          <svg
            className="w-8 fill-light-60/75 hover:fill-light-60 dark:fill-dark-60/75 dark:hover:fill-dark-60"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
          </svg>
        </div>

        <div
          className={`${
            dropdownOpen
              ? `top-full opacity-100 visible`
              : "top-[110%] invisible opacity-0"
          } bg-light-30 dark:bg-dark-30 w-max px-2 py-1 absolute ${langDir} rounded border dark:border-white/25 flex flex-col gap-2`}
        >
          {i18n.locales.map((locale) => {
            return (
              <div
                key={locale}
                className={
                  pathName.slice(1).toLowerCase() === locale
                    ? "bg-light-60 dark:bg-dark-60  px-2 py-1 rounded hover:bg-light-60 dark:hover:bg-dark-60 text-center"
                    : "px-2 py-1 rounded hover:bg-light-60 dark:hover:bg-dark-60 text-center"
                }
              >
                <Link href={redirectedPathName(locale)}>
                  {locale === "ku" && "کوردی"}
                  {locale === "ar" && "العربية"}
                  {locale === "en" && "english"}
                </Link>
              </div>
            );
          })}
        </div>
        {/* <div
          onClick={() => setdropdownOpen(!dropdownOpen)}
          className="cursor-pointer"
        >
          {pathName.slice(1).toLowerCase()}
        </div> */}
      </div>
    </div>
  );
}
