"use client";
import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
let arLang = (
  <Link href="https://egc2022.com/" target="_blank">
    <div className="bg-lighter dark:bg-darker hover:bg-[#4E75BA] font-semiBold px-4 py-2 rounded-xl cursor-pointer hover:bg-opacity-40 font-SFAr w-fit ml-auto mr-auto">
      زيارة الموقع الرسمي{" "}
    </div>
  </Link>
);
let enLang = (
  <Link href="https://egc2022.com/" target="_blank">
    <div className="bg-lighter dark:bg-darker hover:bg-[#4E75BA] font-semiBold px-4 py-2 rounded-xl cursor-pointer hover:bg-opacity-40 font-Celias w-fit ml-auto mr-auto">
      Visit Website
    </div>
  </Link>
);
let soLang = (
  <Link href="https://egc2022.com/" target="_blank">
    <div className="bg-lighter dark:bg-darker hover:bg-[#4E75BA] font-semiBold px-4 py-2 rounded-xl cursor-pointer hover:bg-opacity-40 w-fit ml-auto mr-auto font-SFAr">
      سەردانی ماڵپەڕەکە بکەن
    </div>
  </Link>
);
let kuLang = (
  <Link href="https://egc2022.com/" target="_blank">
    <div className="bg-lighter dark:bg-darker hover:bg-[#4E75BA] font-semiBold px-4 py-2 rounded-xl cursor-pointer hover:bg-opacity-40 font-Celias w-fit ml-auto mr-auto">
      Serdana malperê bikin
    </div>
  </Link>
);
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col justify-center text-center bg-light dark:bg-dark pt-16 px-10 pb-5 rounded-b-2xl">
      <Image
        src="/eastgate.png"
        width={400}
        height={400}
        alt="eastgate logo"
        className="flex justify-center ml-auto mr-auto lg:w-[600px] md:w-[300px] sm:w-[100px]"
      />
      {pathname === "/ar" ? arLang : ""}
      {pathname === "/en" ? enLang : ""}
      {pathname === "/krd/sorani" ? soLang : ""}
      {/* {pathname === "/krd/kurmanji" ? kuLang : ""} */}
    </div>
  );
};

export default Header;
