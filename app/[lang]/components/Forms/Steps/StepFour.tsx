import React from "react";
import { Qs } from "../Survey";

interface Country {
  name: string;
  code: string;
}
const StepFour = ({
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

  const data = q.Countries;

  const onChangeEvent = (e: any) => {
    setFormData({ ...formData, Q4: e.target.value });
  };
  return (
    <div className="flex flex-col gap-3">
      {/* {JSON.stringify(q)} */}
      <div>
        <select
          onChange={onChangeEvent}
          defaultValue={formData.Q4}
          name="Countries"
          className="bg-light-60 dark:bg-dark-60 p-2 rounded w-full border dark:border-white/20"
        >
          <option value="" className="text-black/20">
            select a Country
          </option>
          {data &&
            data.map(({ name, code }: { name: string; code: string }) => (
              <option
                key={code}
                value={name}
                onSelect={() => {
                  setFormData({ ...formData, Q4: name });
                }}
              >
                {name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default StepFour;
