"use client";
import React from "react";
import { motion } from "framer-motion";
const Intro = ({ data }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-light-30 dark:bg-dark-30 rounded-t border-l border-t border-r dark:border-l-white/20 dark:border-t-white/20 dark:border-r-white/20 ">
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col gap-3 px-5 py-3"
        >
          <div className="text-2xl  font-medium">{data.title}</div>
          <div className="text-lg max-md:text-base font-light">{data.p1}</div>
          <div className="text-lg max-md:text-base font-light opacity-70">
            {data.p2}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
