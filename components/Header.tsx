"use client";
import React, { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  return (
    <Link href="https://egc2022.com">
      <div className="flex flex-col justify-center text-center bg-light dark:bg-dark pt-16 px-10 pb-16 rounded-b-2xl font-Celias">
        <Image
          src="/eg.png"
          width={400}
          height={400}
          alt="eastgate logo"
          className="flex justify-center ml-auto mr-auto max-lg:w-[400px] max-md:w-[200px] max-sm:w-[200px]"
        />
        <div className="font-semibold text-6xl max-lg:text-6xl max-md:text-4xl max-sm:text-[33.5px] mt-5 ">
          EAST GATE
        </div>
        <div className="text-[17.5px] max-md:text-[10.5px] max-sm:text-[10px]">
          Economic Research and Market Studies
        </div>
      </div>
    </Link>
  );
};

export default Header;
