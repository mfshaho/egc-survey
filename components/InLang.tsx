'use client';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const InLang = () => {
    const pathname = usePathname();
    let unactiveLang = 'bg-light dark:bg-dark px-4 py-2 rounded-xl cursor-pointer hover:bg-opacity-40';
    let activeLang = 'bg-[#B6871C] text-dark px-4 py-2 rounded-xl cursor-pointer hover:bg-opacity-40';

  return (
    <div className='my-5'>
      <div className="flex gap-4 ju text-2xl">
        <Link href='/en'>
          <div className={ pathname === '/en' ? activeLang : unactiveLang }>English</div>
        </Link>
        <Link href='/ar'>
          <div className={ pathname === '/ar' ? activeLang + ' font-SFAr' : unactiveLang + ' font-SFAr' }>العربية</div>
        </Link>
        <Link href='/krd'>
          <div className={ pathname === '/krd' ? activeLang + ' font-SFAr' : unactiveLang + ' font-SFAr' }>كوردى</div>
        </Link>
      </div>
    </div>
  )
}

export default InLang