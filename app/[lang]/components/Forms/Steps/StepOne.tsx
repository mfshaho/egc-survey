import React from "react";
import { Qs } from "../Survey";
const StepOne = ({
  formData,
  setFormData,
  q,
}: {
  formData: Qs;
  setFormData: any;
  q: any;
}) => {
  return (
    <div>
      <div>
        {q.label} <span className="text-xs ">(Required)</span>
      </div>
      <div>
        <input
          autoComplete="true"
          required
          type="email"
          inputMode="email"
          value={formData.Q1}
          onChange={(event) => {
            setFormData({ ...formData, Q1: event.target.value });
          }}
          className="bg-light-60 dark:bg-dark-60 border dark:border-white/20 rounded w-full py-2 px-3"
          placeholder={q.placeHolder}
        />
      </div>
    </div>
  );
};

export default StepOne;
