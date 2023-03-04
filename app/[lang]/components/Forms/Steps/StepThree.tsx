import React from "react";
import { Qs } from "../Survey";
const StepThree = ({
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
      <div>{q.label}</div>
      <div>
        <input
          required
          type="text"
          inputMode="text"
          value={formData.Q3}
          onChange={(event) => {
            setFormData({ ...formData, Q3: event.target.value });
          }}
          className="bg-light-60 dark:bg-dark-60 border dark:border-white/20 rounded w-full py-2 px-3"
          placeholder={q.placeHolder}
        />
      </div>
    </div>
  );
};

export default StepThree;
