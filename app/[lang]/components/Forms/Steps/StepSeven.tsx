import React from "react";
import { Qs } from "../Survey";
const StepSeven = ({
  formData,
  setFormData,
  q,
}: {
  formData: Qs;
  setFormData: any;
  q: any;
}) => {
  const radio: string =
    "flex flex-col p-2 rounded-md border dark:border-white/20 cursor-pointer";
  return (
    <div className="flex flex-col gap-3">
      <div>
        <input
          className="hidden"
          id="r1"
          type="radio"
          name={q.title}
          checked={formData.Q7 === q.radio.r1}
          value={formData.Q7}
          onClick={() => {
            setFormData({ ...formData, Q7: q.radio.r1 });
          }}
        />
        <label className={radio} htmlFor="r1">
          {q.radio.r1}
        </label>
      </div>

      <div>
        <input
          className="hidden"
          id="r2"
          type="radio"
          name={q.title}
          checked={formData.Q7 === q.radio.r2}
          value={formData.Q7}
          onClick={() => {
            setFormData({ ...formData, Q7: q.radio.r2 });
          }}
        />
        <label className={radio} htmlFor="r2">
          {q.radio.r2}
        </label>
      </div>

      <div>
        <input
          className="hidden"
          id="r3"
          type="radio"
          name={q.title}
          checked={formData.Q7 === q.radio.r3}
          value={formData.Q7}
          onClick={() => {
            setFormData({ ...formData, Q7: q.radio.r3 });
          }}
        />
        <label className={radio} htmlFor="r3">
          {q.radio.r3}
        </label>
      </div>

      <div>
        <input
          className="hidden"
          id="r4"
          type="radio"
          name={q.title}
          checked={formData.Q7 === q.radio.r4}
          value={formData.Q7}
          onClick={() => {
            setFormData({ ...formData, Q7: q.radio.r4 });
          }}
        />
        <label className={radio} htmlFor="r4">
          {q.radio.r4}
        </label>
      </div>

      <div>
        <input
          className="hidden"
          id="r5"
          type="radio"
          name={q.title}
          checked={formData.Q7 === q.radio.r5}
          value={formData.Q7}
          onClick={() => {
            setFormData({ ...formData, Q7: q.radio.r5 });
          }}
        />
        <label className={radio} htmlFor="r5">
          {q.radio.r5}
        </label>
      </div>

      <div>
        <input
          className="hidden"
          id="r6"
          type="radio"
          name={q.title}
          checked={formData.Q7 === q.radio.r6}
          value={formData.Q7}
          onClick={() => {
            setFormData({ ...formData, Q7: q.radio.r6 });
          }}
        />
        <label className={radio} htmlFor="r6">
          {q.radio.r6}
        </label>
      </div>

      <div>
        <input
          className="hidden"
          id="r7"
          type="radio"
          name={q.title}
          checked={formData.Q7 === q.radio.r7}
          value={formData.Q7}
          onClick={() => {
            setFormData({ ...formData, Q7: q.radio.r7 });
          }}
        />
        <label className={radio} htmlFor="r7">
          {q.radio.r7}
        </label>
      </div>
      <div className="flex items-center gap-3 w-full">
        <div>{q.radio.other}</div>
        <div>
          <input
            required
            type="text"
            inputMode="text"
            value={formData.Q7}
            onChange={(event) => {
              setFormData({ ...formData, Q7: event.target.value });
            }}
            className="bg-light-60 dark:bg-dark-60 border dark:border-white/20 rounded py-2 px-3 w-full"
            placeholder={q.placeHolder}
          />
        </div>
      </div>
    </div>
  );
};

export default StepSeven;
