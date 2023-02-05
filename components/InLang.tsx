"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const InLang = () => {
  const pathname = usePathname();
  let unactiveLang =
    "bg-light dark:bg-dark px-4 py-2 rounded-xl cursor-pointer hover:bg-opacity-40 w-full";
  let activeLang =
    "bg-[#27285C] font-semiBold px-4 py-2 rounded-xl cursor-pointer hover:bg-opacity-40 w-full";

  return (
    <div className="my-5">
      <div className="flex gap-4 ju text-2xl lg:flex-row md:flex-col sm:flex-col flex-col">
        <Link href="/en">
          <div className={pathname === "/en" ? activeLang : unactiveLang}>
            English
          </div>
        </Link>
        <Link href="/ar">
          <div
            className={
              pathname === "/ar"
                ? activeLang + " font-SFAr"
                : unactiveLang + " font-SFAr"
            }
          >
            العربية
          </div>
        </Link>
        <Link href="/krd/sorani">
          <div
            className={
              pathname === "/krd/sorani"
                ? activeLang + " font-SFAr"
                : unactiveLang + " font-SFAr"
            }
          >
            {/* كوردى سۆڕانی */}
            كوردى
          </div>
        </Link>
        {/* <Link href="/krd/kurmanji">
          <div
            className={pathname === "/krd/kurmanji" ? activeLang : unactiveLang}
          >
            Kurdî Kurmanjî
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default InLang;
