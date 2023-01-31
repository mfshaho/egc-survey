import React from 'react'
import Link from "next/link";
const Languages = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 text-3xl sm:flex-col">
        <Link href='/en'>
          <div className="bg-light dark:bg-dark px-6 py-3 rounded-xl cursor-pointer hover:bg-opacity-40">English</div>
        </Link>
        <Link href='/ar'>
          <div className="bg-light dark:bg-dark px-6 py-3 rounded-xl cursor-pointer hover:bg-opacity-40 font-SFAr">العربية</div>
        </Link>
        <Link href='/krd/1'>
          <div className="bg-light dark:bg-dark px-6 py-3 rounded-xl cursor-pointer hover:bg-opacity-40 font-SFAr">كوردى سۆڕانی</div>
        </Link>
        <Link href='/krd/2'>
        <div className="bg-light dark:bg-dark px-6 py-3 rounded-xl cursor-pointer hover:bg-opacity-40">Kurdî Kurmanjî</div>
        </Link>
      </div>
    </div>
  )
}

export default Languages