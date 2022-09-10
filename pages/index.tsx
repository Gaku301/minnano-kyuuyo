import React, { useState } from "react";
import type { NextPage } from "next";
import Chart from "../components/Chart";
import CheckBox from "../components/CheckBox";

const Home: NextPage = () => {
  const [select_val, setSelectVal] = useState<String>('2022');
  const years = [];
  for (let index = 2022; index > 2000; index--) {
    years.push(index);
  }

  const selectHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectVal(e.target.value);
    console.log(select_val);
  }

  return (
    <>
      <div className="mt-10">
        <h1 className="text-6xl font-bold">
          みんなの <b className="text-orange-400">給与</b>
        </h1>
        <p className="mt-3 text-2xl">
          How much ?
        </p>
      </div>

      <div className="mt-6 flex max-w-5xl flex-wrap items-center justify-around sm:w-full">
        {/* Search Box */}
        <div className="mt-6 w-3/5 rounded-xl border p-6 text-left shadow-lg">
          {/* <h2 className="text-2xl font-bold">条件</h2> */}
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="mt-3">
              <label htmlFor="year_select" className="block mb-1 font-medium">【 西暦 】</label>
              <select 
                id="year_select"
                className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-orange-400 bg-gray-100"
                onChange={(e) => selectHandle(e)}
              >
                {years.map((year, index) => <option value={year} key={index}>{`${year}年`}</option>)}
              </select>
            </div>
            <div className="mt-3">
              <label className="block mb-1 font-medium">【 性別 】</label>
              <div className="grid gap-6 mt-3">
              <div className="flex items-center mr-4">
                <input 
                  id="all-checkbox" 
                  type="checkbox" 
                  value="" 
                  className="bg-gray-50 border border-gray-300 rounded text-orange-400 focus:ring-orange-400 focus:border-orange-400 w-6 h-6 cursor-pointer" 
                />
                <label htmlFor="all-checkbox" className="ml-2 mb-1 font-medium cursor-pointer">男性・女性で分ける</label>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Box */}
        <div className="mt-6 w-full rounded-xl border p-6 text-left my-10 shadow-lg">
          <h2 className="text-2xl font-bold">検索</h2>
          <Chart />
        </div>
      </div>
    </>
  )
}

export default Home
