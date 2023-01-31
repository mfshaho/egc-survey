'use client';
import React, { use } from 'react'
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  return (
    <Link href={ pathname === '/' ? 'https://egc2022.com/' : '/' }>
        <div className="flex flex-col justify-center text-center bg-light dark:bg-dark p-16 rounded-b-2xl">
        <Image src='/eastgate.png' width={400} height={400} alt='eastgate logo' 
        className="flex justify-center ml-auto mr-auto lg:w-[600px] md:w-[300px] sm:w-[100px]"/>
        {/* <div className="text-5xl font-Nordeco-Cyrillic">eastgate</div> */}
      </div>
    </Link>
  )
}

export default Header