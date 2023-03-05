"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import LocaleSwitcher from "../Locale-swithcer";
import { icons } from "@/utils/imagesURL";
import { motion } from "framer-motion";
import { useColorScheme } from "@/utils";
function capitalize(str: string) {
  return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
    return letter.toUpperCase();
  });
}

function Header({ data }: any) {
  const colorScheme = useColorScheme();
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -25 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="h-20 bg-light-30 dark:bg-dark-30 items-center flex border-b dark:border-b-white/20 mb-10 relative">
        <div className="w-full">
          <Container>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src={
                    colorScheme === "light" ? icons.logoLight : icons.logoDark
                  }
                  width={200}
                  height={200}
                  alt="logo"
                  className="w-20"
                />

                <div className="flex flex-col gap-0 items-start">
                  <div className="text-[26.5px] max-md:text-[18px]">
                    {capitalize(data.web.name)}
                  </div>
                  <div className="text-xs max-md:text-[8px]">
                    {capitalize(data.web.slogan)}
                  </div>
                </div>
              </div>
              {/* <div className="flex gap-10 font-normal">
                <div>{data.web.nav.home}</div>
                <div>{data.web.nav.services}</div>
                <div>{data.web.nav.blog}</div>
                <div>{data.web.nav.about}</div>
                <div>{data.web.nav.contact}</div>
              </div> */}
              <div>
                <LocaleSwitcher />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
