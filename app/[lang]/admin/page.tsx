"use client";
import React, { useState } from "react";
import jsonexport from "jsonexport";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);
const apiKey = JSON.stringify(process.env.API_KEY);
import { survey } from "@prisma/client";

function convertToJson(jsonData: any) {
  return new Promise((resolve, reject) => {
    jsonexport(jsonData, function (err: any, csv: any) {
      if (err) {
        reject(err);
      } else {
        resolve(csv);
      }
    });
  });
}

export default function Admin() {
  const [data, setData] = useState<any>(null);
  const [auth, setAuth] = useState<string>("");
  const [csvData, setCsvData] = useState("");

  const handleExport = async () => {
    const jsonData = [data];
    const csv: any = await convertToJson(jsonData);
    setCsvData(csv);
  };

  const handleDownload = () => {
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";
    a.click();
  };

  const fetchData = async () => {
    if (auth === process.env.ADMIN_KEY) {
      const result = await fetch(`/api/surveydb`);

      const data: survey[] = await result.json();
      setData(data);
    } else {
      setData(null);
    }
  };

  const handleAuthChange = (event: any) => {
    setAuth(event.target.value);
  };
  let thead;
  if (data != null) {
    thead = (
      <thead className="text-xs text-purple-200 uppercase bg-purple-700 sticky">
        <tr>
          <th scope="col" className="px-6 py-3">
            id
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
        </tr>
      </thead>
    );
  }
  return (
    <main>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <input
            type="text"
            value={auth}
            onChange={handleAuthChange}
            className="bg-light-30 dark:bg-dark-30 px-3 py-1 rounded border dark:border-white/25"
            placeholder="enter the password"
          />
          <button
            className="bg-light-30 dark:bg-dark-30 px-3 py-1 rounded hover:bg-light-30/30 dark:hover:bg-dark-30/30 border dark:border-white/25"
            onClick={() => {
              fetchData();
            }}
          >
            FETCH
          </button>
        </div>
        <div className="flex gap-4 items-center">
          {data != null && (
            <button
              onClick={handleExport}
              className="bg-light-30 dark:bg-dark-30 px-3 py-1 rounded hover:bg-light-30/30 dark:hover:bg-dark-30/30 border dark:border-white/25"
            >
              Export to CSV
            </button>
          )}
          {csvData && (
            <button
              onClick={handleDownload}
              className="bg-light-30 dark:bg-dark-30 px-3 py-1 rounded hover:bg-light-30/30 dark:hover:bg-dark-30/30 border dark:border-white/25"
            >
              Download CSV
            </button>
          )}
        </div>
      </div>
      <br />
      <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {/* {data != null && (
            <thead className="text-xs text-purple-200 uppercase bg-purple-700 sticky">
              <tr>
                <th scope="col" className="px-6 py-3">
                  id
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
          )} */}
          {thead}
          <tbody>
            {(data != null &&
              data.map((i: survey) => (
                <tr className=" bg-sui dark:border-gray-700" key={i.id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i.id}
                  </th>
                  <td className="px-6 py-4">
                    {dayjs(i.createdAt).format("LTS | LL")}
                  </td>
                  <td className="px-6 py-4">{i.q1}</td>
                  <td className="px-6 py-4">{i.q2}</td>
                  <td className="px-6 py-4">{i.q3}</td>
                  <td className="px-6 py-4">{i.q4}</td>
                  <td className="px-6 py-4">{i.q5}</td>
                  <td className="px-6 py-4">{i.q6}</td>
                  <td className="px-6 py-4">{i.q7}</td>
                  <td className="px-6 py-4">{i.q8}</td>
                </tr>
              ))) ||
              "unauthorized"}
          </tbody>
        </table>
      </div>
    </main>
  );
}
