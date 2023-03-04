"use client";
import React, { useState } from "react";
import { EastGate } from "@/types/EastGate";
import { motion } from "framer-motion";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  StepFive,
  StepSix,
  StepSeven,
  StepEight,
} from "./Steps";
export interface Qs {
  Q1: string;
  Q2: string;
  Q3: string;
  Q4: string;
  Q5: string;
  Q6: string;
  Q7: string;
  Q8: string;
}
const Survey = (dictionary: EastGate) => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6: "",
    Q7: "",
    Q8: "",
  });
  const [Data, setData] = useState<any>();
  const [Css, setCss] = useState<any>();
  const FormTitles = [
    dictionary.dictionary.questions.q1.title,
    dictionary.dictionary.questions.q2.title,
    dictionary.dictionary.questions.q3.title,
    dictionary.dictionary.questions.q4.title,
    dictionary.dictionary.questions.q5.title,
    dictionary.dictionary.questions.q6.title,
    dictionary.dictionary.questions.q7.title,
    dictionary.dictionary.questions.q8.title,
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          q={dictionary.dictionary.questions.q1}
        />
      );
    } else if (page === 1) {
      return (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          q={dictionary.dictionary.questions.q2}
        />
      );
    } else if (page === 2) {
      return (
        <StepThree
          formData={formData}
          setFormData={setFormData}
          q={dictionary.dictionary.questions.q3}
        />
      );
    } else if (page === 3) {
      return (
        <StepFour
          formData={formData}
          setFormData={setFormData}
          q={dictionary.dictionary.questions.q4}
        />
      );
    } else if (page === 4) {
      return (
        <StepFive
          formData={formData}
          setFormData={setFormData}
          q={dictionary.dictionary.questions.q5}
        />
      );
    } else if (page === 5) {
      return (
        <StepSix
          formData={formData}
          setFormData={setFormData}
          q={dictionary.dictionary.questions.q6}
        />
      );
    } else if (page === 6) {
      return (
        <StepSeven
          formData={formData}
          setFormData={setFormData}
          q={dictionary.dictionary.questions.q7}
        />
      );
    } else if (page === 7) {
      return (
        <StepEight
          formData={formData}
          setFormData={setFormData}
          q={dictionary.dictionary.questions.q8}
        />
      );
    }
  };

  let BtnAlign: string = "";
  if (page > 0) {
    BtnAlign = "justify-between";
  } else {
    BtnAlign = "justify-end";
  }

  const NextButton = () => {
    if (page === 0 && formData.Q1.length > 0) {
      return (
        <button
          className={btn}
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          {dictionary.dictionary.buttons.next}
        </button>
      );
    } else if (page === 1 && formData.Q2.length > 0) {
      return (
        <button
          className={btn}
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          {dictionary.dictionary.buttons.next}
        </button>
      );
    } else if (page === 2 && formData.Q3.length > 0) {
      return (
        <button
          className={btn}
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          {dictionary.dictionary.buttons.next}
        </button>
      );
    } else if (page === 3 && formData.Q4.length > 0) {
      return (
        <button
          className={btn}
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          {dictionary.dictionary.buttons.next}
        </button>
      );
    } else if (page === 4 && formData.Q5.length > 0) {
      return (
        <button
          className={btn}
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          {dictionary.dictionary.buttons.next}
        </button>
      );
    } else if (page === 5 && formData.Q6.length > 0) {
      return (
        <button
          className={btn}
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          {dictionary.dictionary.buttons.next}
        </button>
      );
    } else if (page === 6 && formData.Q7.length > 0) {
      return (
        <button
          className={btn}
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          {dictionary.dictionary.buttons.next}
        </button>
      );
    } else if (page === 7) {
      return (
        // <Submit
        //   dictionary={dictionary.dictionary.buttons.submit}
        //   formData={formData}
        // />
        <input
          type="submit"
          value={dictionary.dictionary.buttons.submit}
          className={btn}
        />
      );
    }
  };

  const PrevButton = () => {
    if (page === 0) {
      return null;
    } else if (page === 1) {
      return (
        <button
          type="button"
          className={btn}
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          {dictionary.dictionary.buttons.prev}
        </button>
      );
    } else if (page === 1) {
      <button
        type="button"
        className={btn}
        onClick={() => {
          setPage((page) => page - 1);
        }}
      >
        {dictionary.dictionary.buttons.prev}
      </button>;
    } else if (page === 2) {
      return (
        <button
          type="button"
          className={btn}
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          {dictionary.dictionary.buttons.prev}
        </button>
      );
    } else if (page === 3) {
      return (
        <button
          type="button"
          className={btn}
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          {dictionary.dictionary.buttons.prev}
        </button>
      );
    } else if (page === 4) {
      return (
        <button
          type="button"
          className={btn}
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          {dictionary.dictionary.buttons.prev}
        </button>
      );
    } else if (page === 5) {
      return (
        <button
          type="button"
          className={btn}
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          {dictionary.dictionary.buttons.prev}
        </button>
      );
    } else if (page === 6) {
      return (
        <button
          type="button"
          className={btn}
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          {dictionary.dictionary.buttons.prev}
        </button>
      );
    } else if (page === 7) {
      return (
        <button
          type="button"
          className={btn}
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          {dictionary.dictionary.buttons.prev}
        </button>
      );
    } else if (page === 8) {
      return (
        <button
          type="button"
          className={btn}
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          {dictionary.dictionary.buttons.prev}
        </button>
      );
    }
  };

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = {
        q1: formData.Q1,
        q2: formData.Q2,
        q3: formData.Q3,
        q4: formData.Q4,
        q5: formData.Q5,
        q6: formData.Q6,
        q7: formData.Q7,
        q8: formData.Q8,
      };
      await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
      const data = dictionary.dictionary.status.error;
      setCss("text-red-400 px-5 py-2 bg-light-60 dark:bg-dark-60 rounded");
      setData(data);
    }
    const data = dictionary.dictionary.status.success;
    setCss("text-green-400 px-5 py-2 bg-light-60 dark:bg-dark-60 rounded");
    setData(data);
  };

  const btn: string = "bg-10/75 py-1 px-8 rounded hover:bg-10 font-bold";
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
    >
      <div className="bg-light-30 dark:bg-dark-30 rounded-b border dark:border-white/20">
        <div className="border-spacing-2 border-b dark:border-b-white/20">
          <div className="flex justify-between items-center px-5 py-3 text-2xl font-medium">
            <div>{FormTitles[page]}</div>

            <div className="text-2xl">
              {page + 1}/{FormTitles.length}
            </div>
          </div>
        </div>
        <form onSubmit={submitData} method="POST">
          <motion.div
            key={page}
            initial={{ opacity: 0, translateX: 20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="my-5 mx-5 font-normal">{pageDisplay()}</div>
          </motion.div>
          <div className="border-t dark:border-t-white/20">
            <div className={`flex text-white px-5 py-3 w-full ${BtnAlign}`}>
              <div>
                <motion.div
                  key={page}
                  initial={{ opacity: 0, translateY: -5 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div>{PrevButton()}</div>
                </motion.div>
              </div>
              <div>
                <motion.div
                  key={page}
                  initial={{ opacity: 0, translateY: -5 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                >
                  <div>{NextButton()}</div>
                </motion.div>
              </div>
            </div>
          </div>
        </form>
        <div className={`${Css}`}>{Data}</div>
      </div>
    </motion.div>
  );
};

export default Survey;
