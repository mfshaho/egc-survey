import React from "react";
import Link from "next/link";
const LanguagesKrd = () => {
  return (
    <div>
      <div className="mt-10 ">Select a Language:</div>
      <div className="flex flex-col gap-4 text-3xl sm:flex-col">
        <Link href="/en">
          <div className="bg-light dark:bg-dark px-6 py-3 rounded-xl cursor-pointer hover:bg-opacity-40">
            English
          </div>
        </Link>
        <Link href="/ar">
          <div className="bg-light dark:bg-dark px-6 py-3 rounded-xl cursor-pointer hover:bg-opacity-40 font-SFAr">
            العربية
          </div>
        </Link>
        <Link href="/krd">
          <div className="bg-light dark:bg-dark px-6 py-3 rounded-xl cursor-pointer hover:bg-opacity-40 font-SFAr">
            كوردى
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LanguagesKrd;
